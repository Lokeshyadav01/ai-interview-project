from google import genai

client = genai.Client(
    api_key="AQ.Ab8RN6Klksdk1smEXIWCKSn8BS0hp3N92IyVAG6PlcZKIgTxZA"
)

for model in client.models.list():
    print(model.name)