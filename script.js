const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

const urlInput = document.getElementById('urlInput');
const textInput = document.getElementById('textInput');
const ssidInput = document.getElementById('ssidInput');
const passInput = document.getElementById('passInput');

const generateBtn = document.getElementById('generateBtn');
const qrPlaceholder = document.getElementById('qrPlaceholder');
const qrContainer = document.getElementById('qrcode');
const downloadBtn = document.getElementById('downloadBtn');

let qrCodeInstance = null; 
let activeTab = 'url';     


tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

       
        btn.classList.add('active');

        
        const index = Array.from(tabBtns).indexOf(btn);
        
        if (index === 0) {
            activeTab = 'url';
            document.getElementById('url-content').classList.add('active');
        } else if (index === 1) {
            activeTab = 'text';
            document.getElementById('text-content').classList.add('active');
        } else if (index === 2) {
            activeTab = 'wifi';
            document.getElementById('wifi-content').classList.add('active');
        }
    });
});


generateBtn.addEventListener('click', (e) => {
    e.preventDefault(); 

    let qrValue = '';

    
    if (activeTab === 'url') {
        qrValue = urlInput.value.trim();
    } else if (activeTab === 'text') {
        qrValue = textInput.value.trim();
    } else if (activeTab === 'wifi') {
        const ssid = ssidInput.value.trim();
        const pass = passInput.value.trim();
        if (!ssid) {
            alert('Please enter the network name (SSID)!');
            return;
        }
       
        qrValue = `WIFI:S:${ssid};T:WPA;P:${pass};;`;
    }

   
    if (!qrValue) {
        alert('Please fill in the required fields!');
        return;
    }

   
    qrPlaceholder.style.display = 'none';

    
    qrContainer.innerHTML = '';

    
    qrCodeInstance = new QRCode(qrContainer, {
        text: qrValue,
        width: 160,
        height: 160,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    downloadBtn.removeAttribute('disabled');
});


downloadBtn.addEventListener('click', () => {
    
    const qrImg = qrContainer.querySelector('img') || qrContainer.querySelector('canvas');

    if (!qrImg) {
        alert('No QR code found to download!');
        return;
    }

    let imageSrc = '';

   
    if (qrImg.tagName === 'CANVAS') {
        imageSrc = qrImg.toDataURL('image/png');
    } else {
        imageSrc = qrImg.src;
    }

    
    const downloadLink = document.createElement('a');
    downloadLink.href = imageSrc;
    downloadLink.download = `qr-code-${Date.now()}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
});
