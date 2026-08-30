import os
import json
from google import genai
from dotenv import load_dotenv

load_dotenv()

client = genai.Client()

def extract_bill_data(raw_ocr_text: list[str]) -> dict:
    combined_text = "\n".join(raw_ocr_text)
    
    prompt = f"""You are an extraction engine for Pakistani MEPCO electricity bills.
Extract the relevant fields from the raw OCR text below and return ONLY a valid JSON object matching this schema:
{{
  "consumer_name": "",
  "reference_number": "",
  "billing_month": "",
  "units_consumed": 0,
  "tariff_category": "",
  "protected_status": "",
  "phase": "",
  "energy_charges": 0.0,
  "fpa": 0.0,
  "qta": 0.0,
  "gst": 0.0,
  "electricity_duty": 0.0,
  "tv_fee": 0.0,
  "total_amount_due": 0.0,
  "due_date": ""
}}
If a field is missing, use "" for strings or 0 for numeric fields.

RAW OCR TEXT:
{combined_text}"""

    try:
        # Updated to gemini-3.6-flash as requested by the API
        response = client.models.generate_content(
            model="gemini-3.6-flash",
            contents=prompt,
        )

        cleaned_output = response.text.strip()
        if cleaned_output.startswith("```"):
            cleaned_output = cleaned_output.split("\n", 1)[-1]
        if cleaned_output.endswith("```"):
            cleaned_output = cleaned_output.rsplit("\n", 1)[0]
        
        return json.loads(cleaned_output.strip())

    except Exception as err:
        print("\n--- EXTRACTION FAILURE ---")
        print(err)
        print("--------------------------\n")
        return {"error": str(err)}