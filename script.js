function openGift() {
  const overlay = document.getElementById('fadeOverlay');
  overlay.style.opacity = '1';

  setTimeout(() => {
    overlay.style.display = 'none'; 
    document.querySelector('.main-content').style.display = 'none';  
    document.getElementById('postGiftContent').style.display = 'flex';  
    
    launchConfetti();
    launchBalloons();
    spawnFloatingImages();

    const boom = document.getElementById('boomFlash');
    boom.style.opacity = '1';
    setTimeout(() => {
      boom.style.opacity = '0'; 
    }, 150);

    document.getElementById("messageBox").style.display = "block";  
    
    const birthdayMessage = `Happiest Birthday, Love, I hope that I can give you all the love and affection that you deserve today. Through all the ups and downs, I learned that with you all the pain and hardships were worth it, because with you I feel like I can be myself and I can finally let myself be at peace. When I'm with you, I feel at home. I sincerely thank God that I got to have a wonderful person like you by my side, and whatever more hardship we face in the future, as long as we have each other, we can always make it. Happy Birthday Again Baby, I Love You So Much.`;

    typeWriterEffect("typewriterText", birthdayMessage, 35);
  }, 1600); 
}

function typeWriterEffect(elementId, text, speed = 40) {
  const element = document.getElementById(elementId);
  let i = 0;

  function type() {
    if (i < text.length) {
      const currentText = element.innerText.replace('|', '') + text.charAt(i);
      element.innerHTML = currentText + '<span id="cursor">|</span>';
      i++;
      setTimeout(type, speed);
    } else {
      const cursor = document.getElementById("cursor");
      if (cursor) cursor.remove(); 
    }
  }

  type();
}



function revealNextImageWithDelay(clickedElement) {
  const index = parseInt(clickedElement.dataset.index, 10);
  const gallery = document.getElementById('gallery');
  const nextElement = gallery.querySelector(`[data-index="${index + 1}"]`);

  const title = clickedElement.alt;

  const messages = [
    "The moment that our stars aligned and laid a memorable experience I’ll never forget.",
    "When she said yes, time held its breath, and the stars rewrote their story with us at the center.",
    "Under the glow of stage lights and sound, we didn’t just hear music, we felt each other’s rhythm and comfort.",
    "Among warm faces and shared stories, I found a memory of joy, a celebration that felt like being welcomed home by another family.",
    "The first time I celebrated your birthday became one of my favorite memories because nothing compares to seeing you at your brightest, surrounded by love.",
    "With my new motorcycle and you by my side, we chased the wind to San Pablo, savored food that tasted better in your smile, and let the lake hold the silence that said everything.",
    "What made that meal unforgettable wasn’t just the flavor, but the way your love and warmth filled the space between every bite.",
    "I was genuinely surprised when you brought out the cake, I hadn’t expected one at all. In that moment, all I wanted was to pull you close, kiss you, and hold on tight to the love you gave me so effortlessly.",
    "We celebrated our anniversary late, in a place that wasn’t perfect, with barely enough time or resources but somehow, love still found its way between the chaos, and we made it ours.",
    "Being with you and your friends that night felt like escaping gravity, I let go of everything weighing me down and just enjoyed the moment.",
    "The night we missed each other’s warmth, I realized something deeper even in distance, our stars stayed aligned, never drifting, just waiting for us to find our way back.",
    "I just included this here because we looked cute. hehe.",
    "Because today our moment is still not finished, so i can't include it yet. hehe."
  ];

  const message = messages[index] || "This is a special moment I want to cherish forever.";

  showText(title, message);

  setTimeout(() => {
    if (nextElement) {
      nextElement.style.display = 'inline-block';
    }
  }, 1000); // 1-second delay
}

      

function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({ length: 150 }).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    r: Math.random() * 6 + 4,
    c: `hsl(${Math.random() * 360}, 100%, 60%)`,
    vx: Math.random() * 1 - 0.5,
    vy: Math.random() * 2 + 1,
    alpha: 1
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c;
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.005;
    });
    ctx.globalAlpha = 1;

    if (pieces.some(p => p.alpha > 0)) {
      requestAnimationFrame(draw);
    }
  }

  draw();
}

function launchBalloons() {
  for (let i = 0; i < 10; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';

    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 65%)`;

    balloon.style.left = `${Math.random() * 90}%`;

    balloon.style.setProperty('--delay', `${Math.random() * 1.5}s`);

    document.body.appendChild(balloon);

    setTimeout(() => {
      balloon.remove();
    }, 7000);
  }
}

function spawnFloatingImages() {
  const imageSources = [
    'imagebg1.png',
    'imagebg2.png',
    'imagebg3.png'
  ];

  for (let i = 0; i < 15; i++) {
    const img = document.createElement('img');
    img.src = imageSources[Math.floor(Math.random() * imageSources.length)];
    img.className = 'floating-image';
    img.style.width = `${Math.random() * 100 + 80}px`;
    img.style.left = `${Math.random() * 100}vw`;
    img.style.top = `${Math.random() * 100}vh`;
    img.style.animationDuration = `${Math.random() * 10 + 10}s`;
    document.body.appendChild(img);
  }
}

    function showText(title, content) {
      document.getElementById('textTitle').innerText = title;
      document.getElementById('textContent').innerText = content;
      document.getElementById('textPanel').classList.add('active');
    }

    function closeTextPanel() {
      document.getElementById('textPanel').classList.remove('active');
    }

    function toggleNote(element) {
        element.classList.toggle('flipped');
      }

      class Heart {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 20 + 10;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.opacity = 1;
            this.element = document.createElement('div');
            this.element.className = 'floating-heart';
            this.element.innerHTML = '❤️';
            this.element.style.left = `${x}px`;
            this.element.style.top = `${y}px`;
            this.element.style.fontSize = `${this.size}px`;
            document.body.appendChild(this.element);
        }
    
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.opacity -= 0.01;
            this.element.style.left = `${this.x}px`;
            this.element.style.top = `${this.y}px`;
            this.element.style.opacity = this.opacity;
    
            if (this.opacity <= 0) {
                this.element.remove();
                return false;
            }
            return true;
        }
    }
    
    let hearts = [];
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (Math.random() < 0.1) {
            hearts.push(new Heart(mouseX, mouseY));
        }
    });
    
    function animate() {
        hearts = hearts.filter(heart => heart.update());
        requestAnimationFrame(animate);
    }
    
    animate(); 