from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import easyocr
import shutil
import os
from extract import extract_bill_data

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Any origin allowed to fix CORS delays
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load EasyOCR once into GPU/CPU memory
reader = easyocr.Reader(['en'], gpu=False)

@app.get("/")
def read_root():
    return {"message": "Bijli Audit backend is running"}

@app.post("/extract-bill")
async def extract_bill(file: UploadFile = File(...)):
    temp_path = f"temp_{file.filename}"
    try:
        with open(temp_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # EasyOCR Text Extraction
        raw_text = reader.readtext(temp_path, detail=0)
        
        # Gemini / Rule-based extraction
        structured_data = extract_bill_data(raw_text)
        return structured_data

    finally:
        # Cleanup temp file immediately to avoid disk memory overhead
        if os.path.exists(temp_path):
            os.remove(temp_path)