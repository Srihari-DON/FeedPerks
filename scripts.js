// Register Business Page Scripts
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('quickRegisterForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const businessName = document.getElementById('businessName').value;
            const location = document.getElementById('location').value;
            
            // Generate a simple business ID
            const businessId = 'BIZ' + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
            
            // Display the business ID
            document.querySelector('.business-id').textContent = businessId;
            
            // Generate QR code
            document.getElementById('qrcode').innerHTML = '';
            new QRCode(document.getElementById('qrcode'), {
                text: businessId,
                width: 200,
                height: 200
            });
            
            // Show the result container
            document.getElementById('resultContainer').style.display = 'block';
            
            // Smooth scroll to results
            document.getElementById('resultContainer').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // QR Code download functionality
    const downloadBtn = document.getElementById('downloadQR');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            const qrImage = document.getElementById('qrcode').querySelector('img');
            const link = document.createElement('a');
            link.download = 'business-qr.png';
            link.href = qrImage.src;
            link.click();
        });
    }
});

// Feedback Page Scripts
let selectedEmoji = '';

function verifyBusinessId() {
    const businessId = document.getElementById('businessIdInput').value;
    if (businessId.match(/BIZ\d{4}/)) {
        document.getElementById('feedbackForm').style.display = 'block';
        document.getElementById('feedbackForm').scrollIntoView({ behavior: 'smooth' });
    } else {
        alert('Please enter a valid Business ID (Format: BIZxxxx)');
    }
}

function selectEmoji(type) {
    selectedEmoji = type;
    document.querySelectorAll('.emoji-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelector(`.emoji-option[onclick*="${type}"]`).classList.add('selected');
}

// Register Business Page Scripts
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('quickRegisterForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const businessName = document.getElementById('businessName').value;
            const location = document.getElementById('location').value;
            
            // Generate a simple business ID
            const businessId = 'BIZ' + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
            
            // Display the business ID
            document.querySelector('.business-id').textContent = businessId;
            
            // Generate QR code
            document.getElementById('qrcode').innerHTML = '';
            new QRCode(document.getElementById('qrcode'), {
                text: businessId,
                width: 200,
                height: 200
            });
            
            // Show the result container
            document.getElementById('resultContainer').style.display = 'block';
            
            // Smooth scroll to results
            document.getElementById('resultContainer').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // QR Code download functionality
    const downloadBtn = document.getElementById('downloadQR');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            const qrImage = document.getElementById('qrcode').querySelector('img');
            const link = document.createElement('a');
            link.download = 'business-qr.png';
            link.href = qrImage.src;
            link.click();
        });
    }
});

// Feedback Page Scripts
let selectedEmoji = '';

function verifyBusinessId() {
    const businessId = document.getElementById('businessIdInput').value;
    if (businessId.match(/BIZ\d{4}/)) {
        document.getElementById('feedbackForm').style.display = 'block';
        document.getElementById('feedbackForm').scrollIntoView({ behavior: 'smooth' });
    } else {
        alert('Please enter a valid Business ID (Format: BIZxxxx)');
    }
}

function selectEmoji(type) {
    selectedEmoji = type;
    document.querySelectorAll('.emoji-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelector(`.emoji-option[onclick*="${type}"]`).classList.add('selected');
}

function submitFeedback() {
    if (!selectedEmoji) {
        alert('Please select an emoji rating');
        return;
    }
    
    // Show success message
    alert('Thank you for your feedback!');
    
    // Reset form
    selectedEmoji = '';
    document.querySelector('textarea').value = '';
    document.querySelectorAll('.emoji-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.getElementById('businessIdInput').value = '';
    document.getElementById('feedbackForm').style.display = 'none';
}

// Add smooth scrolling to all navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});