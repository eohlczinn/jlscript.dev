from ai.engine import JLAIEngine


def engine():
    return JLAIEngine()


def assistant_history(question: str, answer: dict) -> list[dict]:
    return [
        {"role": "user", "content": question},
        {
            "role": "assistant",
            "content": answer["text"],
            "intent": answer.get("intent"),
            "topic": answer.get("topic"),
            "context_id": answer.get("context_id"),
        },
    ]


def test_greeting_is_short_and_conversational():
    result = engine().answer("oi")
    assert result["intent"] == "saudacao"
    assert "Tô aqui" in result["text"]
    assert len(result["text"]) < 500


def test_small_talk_stays_inside_scope():
    result = engine().answer("vc ta ai?")
    assert result["intent"] == "presenca"
    assert "JLScript" in result["text"]


def test_capabilities():
    result = engine().answer("oq vc sabe fazer?")
    assert result["intent"] == "capacidades"
    assert "sintaxe" in result["text"].lower()


def test_installation_routes_to_installation_not_overview():
    result = engine().answer("Como instalo a JLScript?")
    assert result["intent"] == "instalacao-oficial"
    assert "VS Code" in result["text"]
    assert "jls run" in result["text"]


def test_verify_installation_is_recognized():
    result = engine().answer("Como verifico a instalação?")
    assert result["intent"] == "instalacao-cli"
    assert "jls --version" in result["text"]


def test_bilingual_question_is_recognized():
    result = engine().answer("Por que a linguagem é bilíngue?")
    assert result["intent"] == "bilingue"


def test_update_question_is_recognized():
    result = engine().answer("Como atualizo?")
    assert result["intent"] == "cli-build-bytecode"


def test_api_library_question_is_recognized():
    result = engine().answer("Como usar #api?")
    assert result["intent"] == "api-http"


def test_function_help():
    result = engine().answer("como criar uma funcao no jlscript?")
    assert result["topic"] == "funcoes"
    assert "```jls" in result["text"]


def test_contact():
    result = engine().answer("quero entrar em contato com o criador")
    assert result["intent"] == "contato"


def test_off_topic():
    result = engine().answer("qual a capital da franca?")
    assert result["intent"] == "off_topic"


def test_open_docs_is_direct_action():
    result = engine().answer("Abrir documentação oficial")
    assert result["intent"] == "site:documentacao"
    assert result["sources"]
    assert result["sources"][0]["url"].endswith("#/docs")


def test_context_followup_example():
    first = engine().answer("como funciona funcao no jlscript?")
    result = engine().answer("Mostre um exemplo simples", assistant_history("como funciona funcao no jlscript?", first))
    assert result["intent"] == "followup:example"
    assert result["context_id"] == "funcoes"
    assert "```jls" in result["text"]


def test_context_followup_simplify():
    first = engine().answer("como funciona import no jlscript?")
    result = engine().answer("Explica melhor", assistant_history("como funciona import no jlscript?", first))
    assert result["intent"] == "followup:simplify"
    assert result["context_id"] == "imports-modulos"


def test_context_source_uses_previous_topic_not_site_help():
    first = engine().answer("o que e jlscript?")
    result = engine().answer("Onde isso aparece na documentação?", assistant_history("o que e jlscript?", first))
    assert result["intent"] == "followup:source"
    assert result["context_id"] == "visao-geral"
    assert result["topic"] == "visao-geral"
    assert "O que é JLScript?" in result["text"]
    assert result["sources"][0]["label"].endswith("O que é JLScript?")
    assert "Onde isso aparece na documentação?" not in result["suggestions"]


def test_context_execute_returns_run_instruction():
    first = engine().answer("como criar uma funcao no jlscript?")
    result = engine().answer("Como executo isso?", assistant_history("como criar uma funcao no jlscript?", first))
    assert result["intent"] == "followup:execute"
    assert result["context_id"] == "funcoes"
    assert "jls run app.jls" in result["text"]


def test_context_is_kept_after_another_followup():
    e = engine()
    first = e.answer("como criar uma funcao no jlscript?")
    h = assistant_history("como criar uma funcao no jlscript?", first)
    second = e.answer("Mostre um exemplo simples", h)
    h.extend([
        {"role": "user", "content": "Mostre um exemplo simples"},
        {"role": "assistant", "content": second["text"], "intent": second["intent"], "topic": second["topic"], "context_id": second["context_id"]},
    ])
    third = e.answer("Onde isso aparece na documentação?", h)
    assert third["context_id"] == "funcoes"
    assert third["intent"] == "followup:source"


def test_every_dynamic_suggestion_is_actionable_with_context():
    e = engine()
    seeds = [
        "o que e jlscript?",
        "como instalar jlscript?",
        "como criar uma funcao?",
        "como criar uma api?",
        "como usar #json?",
        "qual a historia do jlscript?",
    ]
    for seed in seeds:
        first = e.answer(seed)
        h = assistant_history(seed, first)
        for suggestion in first.get("suggestions", []):
            result = e.answer(suggestion, h)
            assert result["intent"] != "off_topic", (seed, suggestion, result)
            assert result["intent"] != "fallback_domain", (seed, suggestion, result)


def test_initial_greeting_suggestions_are_actionable():
    e = engine()
    greeting = e.answer("oi")
    for suggestion in greeting["suggestions"]:
        result = e.answer(suggestion)
        assert result["intent"] not in {"off_topic", "fallback_domain"}, (suggestion, result)
