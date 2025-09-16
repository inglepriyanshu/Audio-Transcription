const uploadBtn = document.getElementById('uploadBtn');
const fileInput = document.getElementById('audioFile');
const output = document.getElementById('transcriptOutput');
const status = document.getElementById('status');

uploadBtn.addEventListener('click', async () => {
  const file = fileInput.files[0];
  if (!file) {
    status.textContent = "⚠ Please select an audio file!";
    status.style.color = "red";
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  output.textContent = "";
  status.innerHTML = 'Transcribing<span class="loading"></span>';
  status.style.color = "#4f46e5";

  try {
    const res = await fetch("http://localhost:8000/transcribe", {
      method: "POST",
      body: formData
    });

    if (!res.ok) throw new Error("Transcription failed");

    const data = await res.json();
    output.textContent = data.transcript;
    status.textContent = "✅ Transcription complete!";
    status.style.color = "green";
  } catch (err) {
    output.textContent = "";
    status.textContent = "❌ Error: " + err.message;
    status.style.color = "red";
  }
});
