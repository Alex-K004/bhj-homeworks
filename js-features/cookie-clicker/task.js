const img = document.getElementById('cookie');
const clicker = document.getElementById('clicker__counter');
clicker.textContent = '0';
let shouldIncrease = true;
let clickCount = 0;
const originalWidth = img.width;
const originalHeight = img.height;

img.onclick = () => {
    clickCount++;
    clicker.textContent = clickCount;
    if (shouldIncrease) {
        img.width = Math.min(img.width + 30);
        img.height = Math.min(img.height + 30);
    } else {
        img.width = Math.max(img.width - 30);
        img.height = Math.max(img.height - 30,);
    }
    
    shouldIncrease = !shouldIncrease;
};



