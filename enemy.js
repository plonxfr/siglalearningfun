// Enemy spawning code
function spawnEnemy() {
    const enemy = document.createElement('div');
    enemy.classList.add('enemy');
    enemy.style.top = Math.random() * window.innerHeight + 'px';
    enemy.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(enemy);
}

// Call the spawnEnemy function every few seconds
setInterval(spawnEnemy, 2000);