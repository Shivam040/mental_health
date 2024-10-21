from flask import Flask, request, jsonify
import torch
from transformers import BertForSequenceClassification, BertTokenizerFast, pipeline
from flask_cors import CORS
from dotenv import load_dotenv
load_dotenv() # loading all environment variable
import os
import google.generativeai as genai

app = Flask(__name__)
CORS(app)

# Set up model and pipeline
# gpu = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
# torch.cuda.set_per_process_memory_fraction(0.9)

model_path = "model/8.model"
model = BertForSequenceClassification.from_pretrained(model_path)
tokenizer = BertTokenizerFast.from_pretrained(model_path)
nlp = pipeline("feature-extraction", model=model, tokenizer=tokenizer)   #, device=gpu


id2labels = {0: 'Anxiety', 1: 'Normal', 2: 'Depression', 3: 'Depression' , 4: 'Stress', 5: 'Bipolar', 6: 'Personality disorder'}


genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
llm_model=genai.GenerativeModel("gemini-pro")

def get_gemini_response(question):
        response = llm_model.generate_content(question)
        return response.text

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get input data from the frontend
        data = request.json
        user_input = data.get('input')
        if not user_input:
            return jsonify({'error': 'Input text is required'}), 400
        
        # Process input with the model pipeline
        values = nlp(user_input, truncation=True, padding=True)
        values_tensor = torch.tensor(values)
        values_tensor = torch.clamp(values_tensor, min = 0)

        
        # tensor_min = torch.min(values_tensor)
        # tensor_max = torch.max(values_tensor)
        # values_tensor =  (values_tensor - tensor_min) / (tensor_max - tensor_min)
        max_index = values_tensor[0].argmax().item()

        print(type(values_tensor))
        print(values_tensor)
        # Get prediction label
        mental_health = id2labels[max_index]
        # Return prediction
        return jsonify({'prediction': mental_health, 
                        'tensor': values_tensor[0].tolist(),
})

    except Exception as e:
        return jsonify({'error': str(e)})


@app.route('/ask', methods=['POST'])
def ask():
    try:

        data = request.json
        user_input = data.get('input')

        print(user_input)
        if not user_input:
            return jsonify({'error': 'Input text is required'}), 400
        
    
        response=get_gemini_response(user_input)
        print(response)

        return jsonify({'gemini_response': response})
    

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
