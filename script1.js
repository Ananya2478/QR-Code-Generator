function generateQRCode() {
    const inputText = document.getElementById('input-text').value.trim();
    const qrCodeImage = document.getElementById('qrcode');
    const toast = document.getElementById('toast');

    if (!inputText) {
        alert("Please enter some text to generate a QR code.");
        return;
    }

    // Use a more secure and modern approach to generate QR codes
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(inputText)}&size=200x200`;
    
    qrCodeImage.src = qrCodeUrl;
    qrCodeImage.style.display = 'block';

    // Show a styled toast notification
    toast.textContent = "QR Code Generated Successfully!";
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
    }, 3000);
}