// HTML एलिमेंट्स को सेलेक्ट करना
const video = document.getElementById('webcam');
const statusText = document.getElementById('camera-status');
const scanBtn = document.getElementById('btn-scan');

// 1. सुरक्षित तरीके से कैमरा चालू करने का फंक्शन
async function startCamera() {
    try {
        statusText.innerText = "कैमरा परमिशन मांगी जा रही है...";
        
        // फ्रंट कैमरा एक्सेस करने की कोशिश
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: "user" } 
        });
        
        video.srcObject = stream;
        statusText.innerText = "कैमरा एक्टिव है। चेहरा स्कैन करने के लिए तैयार।";
        statusText.className = "text-success small mt-2";
    } catch (error) {
        console.error("कैमरा चालू नहीं हो सका:", error);
        statusText.innerText = "कैमरा चालू नहीं हो सका। कृपया परमिशन जांचें या सामान्य लॉगिन का उपयोग करें।";
        statusText.className = "text-danger small mt-2";
    }
}

// 2. चेहरा स्कैन बटन पर क्लिक का इवेंट
scanBtn.addEventListener('click', () => {
    alert("फेस रिकग्निशन मॉडल्स लोड होने के बाद यह काम करेगा। पहले कैमरा चेक करें।");
});

// पेज लोड होते ही सबसे पहले कैमरा शुरू करें
window.addEventListener('DOMContentLoaded', startCamera);
