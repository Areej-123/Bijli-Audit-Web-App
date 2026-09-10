#!/bin/bash
python3 -m venv antenv
source antenv/bin/activate
pip install --upgrade pip
pip install uvicorn gunicorn fastapi
if [ -f "requirements.txt" ]; then
  pip install -r requirements.txt
fi
exec python3 -m uvicorn main:app --host 0.0.0.0 --port 8000