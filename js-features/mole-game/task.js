        let dead = 0;
        let lost = 0;
        
        function getHole(index) {
            return document.getElementById(`hole${index}`);
        }
        
        for (let i = 1; i <= 9; i++) {
            getHole(i).onclick = function() {
                if (this.classList.contains('hole_has-mole')) {
                    dead++;
                    document.getElementById('dead').textContent = dead;
                    this.classList.remove('hole_has-mole');
                    
                    if (dead === 10) {
                        alert('Победа! Вы убили 10 кротов!');
                        resetGame();
                    }
                } else {
                    lost++;
                    document.getElementById('lost').textContent = lost;
                    
                    if (lost === 5) {
                        alert('Игра окончена! Слишком много промахов!');
                        resetGame();
                    }
                }
            };
        }
        
        function resetGame() {
            dead = 0;
            lost = 0;
            document.getElementById('dead').textContent = dead;
            document.getElementById('lost').textContent = lost;
            
            for (let i = 1; i <= 9; i++) {
                getHole(i).classList.remove('hole_has-mole');
            }
        }
        
        function showMole() {
            for (let i = 1; i <= 9; i++) {
                getHole(i).classList.remove('hole_has-mole');
            }
            
            const randomHoleIndex = Math.floor(Math.random() * 9) + 1;
            getHole(randomHoleIndex).classList.add('hole_has-mole');
            
            setTimeout(showMole, 1000);
        }
        
        showMole();