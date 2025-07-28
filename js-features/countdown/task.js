    const time = document.getElementById('timer')

    const intervalTime = setInterval(() => {
        const currentValue = Number(time.textContent) - 1;
        time.textContent = currentValue;
        
        if (currentValue == 0) {
            clearInterval(intervalTime); 
            setTimeout(() => alert("Вы победили в конкурсе!"), 0);
        }
    }, 10);
