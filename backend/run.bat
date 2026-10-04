@echo off
if not exist .venv python -m venv .venv
call .venv\Scripts\activate.bat
python -m pip install -r requirements.txt
python -m uvicorn app:app --host 127.0.0.1 --port 8765 --reload
