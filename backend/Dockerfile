FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
ENV JLAI_ENV=production
ENV JLAI_HOST=0.0.0.0
ENV JLAI_PORT=8765
EXPOSE 8765
CMD ["sh", "-c", "uvicorn app:app --host 0.0.0.0 --port ${JLAI_PORT:-8765}"]
