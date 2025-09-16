# 🎙️ Audio-Transcription

A simple **speech-to-text transcription tool** that lets you upload an audio file (`.wav`, `.mp3`, `.m4a`) and converts it into text using a Python backend powered by FastAPI and Whisper.  
The frontend is built with **HTML, CSS, and JavaScript** to provide a clean and responsive interface.

---

## ✨ Features
- Upload audio files and get accurate transcripts.
- Supports common audio formats: `.wav`, `.mp3`, `.m4a`.
- Modern UI with drag-and-drop style upload.
- Transcription results displayed in a styled transcript panel.
- Works entirely on your local machine.

---

## ⚙️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/speech-to-text.git
cd speech-to-text
```

### 2. Create a virtual environment
```bash
python -m venv venv
source venv/bin/activate   # On Mac/Linux
venv\Scripts\activate      # On Windows
```

### 3. Install dependencies
```bash
pip install -r requirements.txt
```

### 4. Run the backend server
```bash
uvicorn app:app --reload --port 8000
```

### 5. Open the frontend

Simply open index.html in your browser.
Upload an audio file, and watch the transcription appear!

## 🖥️ Requirements

- Python 3.9+

- FastAPI

- Uvicorn

- Faster-Whisper

- A modern web browser (Chrome, Edge, Firefox, Safari)

## 📜 License

This project is open-source and free to use under the MIT License.
