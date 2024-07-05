const canvasElement = document.getElementById('spaceCanvas');
const canvasContext = canvasElement.getContext('2d');

canvasElement.width = window.innerWidth;
canvasElement.height = window.innerHeight;

let starsArray = [];
const numberOfStars = 2000; // 星の数を増やす
const zoomSpeed = 3; // 高速でズームするための速度を設定

const starColors = ['white', 'yellow', 'blue', 'red'];

function Star() {
    this.x = Math.random() * canvasElement.width;
    this.y = Math.random() * canvasElement.height;
    this.z = Math.random() * canvasElement.width;
    this.color = starColors[Math.floor(Math.random() * starColors.length)];

    this.move = function() {
        this.z -= zoomSpeed;
        if (this.z <= 0) {
            this.z = canvasElement.width;
            this.x = Math.random() * canvasElement.width;
            this.y = Math.random() * canvasElement.height;
            this.color = starColors[Math.floor(Math.random() * starColors.length)];
        }
    };

    this.show = function() {
        let x, y, rad;
        x = (this.x - canvasElement.width / 2) * (canvasElement.width / this.z);
        x = x + canvasElement.width / 2;

        y = (this.y - canvasElement.height / 2) * (canvasElement.width / this.z);
        y = y + canvasElement.height / 2;

        rad = canvasElement.width / (1.5 * this.z); // 星のサイズをさらに大きく

        // グラデーションの作成
        const gradient = canvasContext.createRadialGradient(x, y, 0, x, y, rad);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(0.7, 'rgba(255, 255, 255, 1)'); // より明るく
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.3)'); // 透明度を調整

        canvasContext.beginPath();
        canvasContext.arc(x, y, rad, 0, Math.PI * 2);
        canvasContext.fillStyle = gradient;
        canvasContext.fill();
    };
}

for (let i = 0; i < numberOfStars; i++) {
    starsArray.push(new Star());
}

function animateCanvas() {
    canvasContext.fillStyle = 'rgba(0, 0, 0, 0.7)'; // 背景を少し透明に
    canvasContext.fillRect(0, 0, canvasElement.width, canvasElement.height);
    for (let i = 0; i < starsArray.length; i++) {
        starsArray[i].show();
        starsArray[i].move();
    }
    requestAnimationFrame(animateCanvas);
}

animateCanvas();
