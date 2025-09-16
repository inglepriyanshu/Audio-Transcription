const uploadBtn = document.getElementById('uploadBtn');
const fileInput = document.getElementById('audioFile');
const dropArea = document.getElementById('dropArea');
const dropText = document.getElementById('dropText');
const fileInfo = document.getElementById('fileInfo');
const fileName = document.getElementById('fileName');
const output = document.getElementById('transcriptOutput');
const status = document.getElementById('status');
const uploadContainer = document.getElementById('uploadContainer');
const transcriptSection = document.getElementById('transcriptSection');

// Click on drop area opens file picker
dropArea.addEventListener('click', () => fileInput.click());

// Show selected file
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file) {
    fileName.textContent = file.name;
    fileInfo.classList.remove('hidden');
    uploadBtn.disabled = false;
  }
});

// Upload & transcribe
uploadBtn.addEventListener('click', async () => {
  const file = fileInput.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);

  output.textContent = "";
  status.innerHTML = 'Transcribing <span class="loading"></span>';
  status.style.color = "#4f46e5";

  try {
    const res = await fetch("http://localhost:8000/transcribe", {
      method: "POST",
      body: formData
    });

    if (!res.ok) throw new Error("Transcription failed");

    const data = await res.json();
    output.textContent = data.transcript;

    // Animate upload box shrink after transcription
    uploadContainer.classList.remove("large");
    uploadContainer.classList.add("small");

    transcriptSection.classList.remove("hidden");

    status.textContent = "✅ Transcription complete!";
    status.style.color = "green";
  } catch (err) {
    output.textContent = "";
    status.textContent = "❌ Error: " + err.message;
    status.style.color = "red";
  }
});
