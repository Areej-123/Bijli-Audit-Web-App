import easyocr

# Initialize the EasyOCR reader for English
reader = easyocr.Reader(['en'])

# Path to one of your actual sample bill images
# (Update "image 1.webp" if you want to test a different file)
image_path = "sample_bills/bill1.webp"

# Extract text lines from the image
result = reader.readtext(image_path, detail=0)

# Print each detected line of text
for line in result:
    print(line)