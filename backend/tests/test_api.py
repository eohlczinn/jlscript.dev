from fastapi.testclient import TestClient
from app import app

client = TestClient(app)


def test_health():
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json()["external_ai_api"] is False


def test_chat():
    response = client.post("/api/chat", json={"question": "oi", "history": []})
    assert response.status_code == 200
    assert response.json()["intent"] == "saudacao"


def test_stream():
    with client.stream("POST", "/api/chat/stream", json={"question": "como instalar?", "history": []}) as response:
        assert response.status_code == 200
        body = "".join(response.iter_text())
        assert '"type": "delta"' in body
        assert '"type": "done"' in body
