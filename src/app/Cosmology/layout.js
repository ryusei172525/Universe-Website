"use client";

// app/layout.js
import '@/styles/comology_layout.css'
import React, { useEffect } from 'react';

const Layout = ({ children }) => {
  useEffect(() => {
    const canvas = document.getElementById('star-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 2;
      const color = `hsl(${Math.random() * 360}, 100%, 80%)`;
      stars.push({ x, y, size, color });
    }

    function drawStars() {
      // 背景を黒に設定
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        ctx.globalAlpha = 1; // 点滅を無くすために不透明度を固定
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.shadowBlur = 10; // ぼやけ効果を追加
        ctx.shadowColor = star.color;
        ctx.fill();
      });
    }

    drawStars();

    return () => {
      // Cleanup
    };
  }, []);

  return (
    <div>
      <canvas id="star-canvas"></canvas>
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default Layout;
