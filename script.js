const fileInput = document.getElementById('fileInput');
const fileNameDisplay = document.getElementById('fileName');
const fileSizeDisplay = document.getElementById('fileSize'); // Adicionado
const sendButton = document.getElementById('sendButton');
const qrCodeContainer = document.querySelector('.qr-code-container');
const qrCodeImage = document.getElementById('qrCode');
const downloadLinkDisplay = document.getElementById('downloadLink');
const downloadButton = document.getElementById('downloadButton');
const copyButton = document.getElementById('copyButton');

fileInput.addEventListener('change', displayFileName);
sendButton.addEventListener('click', generateQRCode);
downloadButton.addEventListener('click', downloadFile);
copyButton.addEventListener('click', copyDownloadLink);

function displayFileName() {
    const file = fileInput.files[0];
    if (file) {
        fileNameDisplay.innerHTML = `Arquivo selecionado: <strong>${file.name}</strong>`;
        const fileSize = formatFileSize(file.size);
        document.getElementById("fileSize").textContent = `Tamanho do arquivo: ${fileSize}`;
    }
}

function formatFileSize(size) {
    if (size < 1024) {
        return size + ' bytes';
    } else if (size < 1024 * 1024) {
        return (size / 1024).toFixed(2) + ' KB';
    } else if (size < 1024 * 1024 * 1024) {
        return (size / (1024 * 1024)).toFixed(2) + ' MB';
    } else {
        return (size / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
    }
}

function generateQRCode() {
    const file = fileInput.files[0];
    if (file) {
        const fileReader = new FileReader();
        fileReader.onload = function(event) {
            const fileData = event.target.result;
            const qrCodeData = 'data:' + file.type + ';base64,' + fileData.split(',')[1];

            // Calcular o tamanho do arquivo
            const fileSize = file.size;

            // Armazenar os dados do arquivo e o tamanho em localStorage
            window.localStorage.setItem('fileData', qrCodeData);
            window.localStorage.setItem('fileSize', fileSize);

            // URL da página de informações do arquivo
            const infoPageUrl = `qr-share-theta.vercel.app/informacoes-do-arquivo.html?name=${encodeURIComponent(file.name)}&size=${fileSize}&data=${encodeURIComponent(qrCodeData)}`;

            // Criar um link que inclui a URL da página de informações
            const qrCodeLink = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(infoPageUrl)}`;

            qrCodeImage.src = qrCodeLink;
            qrCodeContainer.style.display = 'block';

            const downloadLink = qrCodeData;
            downloadButton.href = downloadLink;
            downloadButton.download = file.name;
            downloadButton.style.display = 'block';
            copyButton.style.display = 'block';

            // Passar os dados do arquivo para a página de informações
            const infoPageLink = `qr-share-theta.vercel.app/informacoes-do-arquivo.html?name=${encodeURIComponent(file.name)}&size=${fileSize}`;
            window.localStorage.setItem('infoPageLink', infoPageLink);
        }
        fileReader.readAsDataURL(file);
    }
}


function copyDownloadLink() {
    const downloadLink = document.getElementById("downloadButton").getAttribute("href");
    const fileName = document.getElementById("fileName").textContent;

    // Gerar um link para a página de informações do arquivo
    const infoPageLink = `qr-share-theta.vercel.app/informacoes-do-arquivo.html?name=${encodeURIComponent(fileName)}&size=${fileSize}&link=${encodeURIComponent(downloadLink)}`;

    // Copiar o link para a área de transferência
    const tempInput = document.createElement("input");
    tempInput.value = infoPageLink;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Exibir mensagem de sucesso
    const copyMessage = document.createElement("p");
    copyMessage.textContent = "Link copiado com sucesso!";
    copyMessage.classList.add("copy-message");
    document.body.appendChild(copyMessage);

    // Remover mensagem após alguns segundos
    setTimeout(() => {
        document.body.removeChild(copyMessage);
    }, 3000);
}

function downloadFile() {
    const file = fileInput.files[0];
    if (file) {
        const blob = new Blob([file], { type: file.type });
        const url = URL.createObjectURL(blob);
        downloadButton.href = url;
        downloadButton.download = file.name;
    }
}
