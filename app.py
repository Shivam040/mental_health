from flask import Flask, request, jsonify
import pandas as pd
import torch
from transformers import BertForSequenceClassification, BertTokenizerFast, pipeline

app = Flask(__name__)

# Set up model and pipeline
gpu = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
torch.cuda.set_per_process_memory_fraction(0.9)

model_path = "model/8model"
model = BertForSequenceClassification.from_pretrained(model_path)
tokenizer = BertTokenizerFast.from_pretrained(model_path)
nlp = pipeline("feature-extraction", model=model, tokenizer=tokenizer, device=gpu)

id2labels = {0: 'Anxiety', 1: 'Normal', 2: 'Depression', 3: 'Depression', 4: 'Stress', 5: 'Bipolar', 6: 'Personality disorder'}

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get input data from the frontend
        data = request.json
        user_input = data.get('input')

        # Process input with the model pipeline
        values = nlp(user_input, truncation=True, padding=True)
        values_tensor = torch.tensor(values)
        max_index = values_tensor[0].argmax().item()

        # Get prediction label
        mental_health = id2labels[max_index]

        # Return prediction
        return jsonify({'prediction': mental_health})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)