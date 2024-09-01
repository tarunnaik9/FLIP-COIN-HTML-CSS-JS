let headsCount = 0;
let tailsCount = 0;

document.getElementById('flip-button').addEventListener('click', flipCoin);
document.getElementById('reset-button').addEventListener('click', resetGame);

function flipCoin() {
    const coin = document.getElementById('coin');
    const result = Math.random() < 0.5 ? 'heads' : 'tails';

    coin.style.animation = 'none';
    
    // Trigger reflow to reset animation
    coin.offsetHeight;

    if (result === 'heads') {
        coin.style.animation = 'spin-heads 3s forwards';
        headsCount++;
        document.getElementById('heads-count').textContent = `Heads: ${headsCount}`;
    } else {
        coin.style.animation = 'spin-tails 3s forwards';
        tailsCount++;
        document.getElementById('tails-count').textContent = `Tails: ${tailsCount}`;
    }

    // Disable the flip button while the animation is running
    document.getElementById('flip-button').disabled = true;
    
    // Re-enable the flip button after the animation ends
    setTimeout(() => {
        document.getElementById('flip-button').disabled = false;
    }, 3000);
}

function resetGame() {
    headsCount = 0;
    tailsCount = 0;
    document.getElementById('heads-count').textContent = 'Heads: 0';
    document.getElementById('tails-count').textContent = 'Tails: 0';
    document.getElementById('coin').style.animation = 'none';
}