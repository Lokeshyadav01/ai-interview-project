from google import genai

client = genai.Client(
    api_key="AQ.Ab8RN6Klksdk1smEXIWCKSn8BS0hp3N92IyVAG6PlcZKIgTxZA"
)

response = client.models.generate_content(
    model="gemini-3.5-flash",
    contents="Say Hello!"
)

print(response.text)