from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from faster_whisper import WhisperModel
import tempfile

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)


model_size = "medium"
compute_type = "int8"
device = "cpu"  

model = WhisperModel(model_size, device=device, compute_type=compute_type)

@app.post("/transcribe")
async def transcribe_file(file: UploadFile = File(...)):

    with tempfile.NamedTemporaryFile(suffix=file.filename, delete=False) as f:
        f.write(await file.read())
        filename = f.name

    segments, info = model.transcribe(filename)


    transcript = " ".join([seg.text for seg in segments])

    return {"transcript": transcript}
