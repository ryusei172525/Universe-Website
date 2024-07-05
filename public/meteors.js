document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.zIndex = -1;
  
    const numberOfMeteors = 10;
    const meteors = [];
  
    function random(min, max) {
      return Math.random() * (max - min) + min;
    }
  
    function Meteor() {
      this.x = random(0, canvas.width);
      this.y = random(0, canvas.height);
      this.length = random(50, 100);
      this.speed = random(2, 10);
      this.angle = random(Math.PI / 4, Math.PI / 3);
      this.opacity = random(0.3, 1);
  
      this.update = function() {
        this.x -= this.speed * Math.cos(this.angle);
        this.y -= this.speed * Math.sin(this.angle);
  
        if (this.x < 0 || this.y > canvas.height) {
          this.x = random(0, canvas.width);
          this.y = random(0, canvas.height / 2);
        }
      };
  
      this.draw = function() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.length * Math.cos(this.angle), this.y - this.length * Math.sin(this.angle));
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      };
    }
  
    for (let i = 0; i < numberOfMeteors; i++) {
      meteors.push(new Meteor());
    }
  
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < meteors.length; i++) {
        meteors[i].update();
        meteors[i].draw();
      }
      requestAnimationFrame(animate);
    }
  
    animate();
  });
  