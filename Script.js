// Animate Moving Car
//diego
const car = document.getElementById('car');
let carPosition = -50;

function moveCar() {
    carPosition += 1; // Adjust speed as needed
    if (carPosition > 1200) {
        carPosition = -50;
    }
    car.setAttribute('x', carPosition);
    requestAnimationFrame(moveCar);
}

moveCar();

// Generate Suspender Cables
const suspendersGroup = document.getElementById('suspenders');
for (let i = 0; i <= 1200; i += 20) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', i);
    line.setAttribute('y1', 300);
    const controlY = 150 + (150 * Math.sin((i / 1200) * Math.PI));
    line.setAttribute('x2', i);
    line.setAttribute('y2', controlY);
    line.setAttribute('stroke', '#999');
    line.setAttribute('stroke-width', '1');
    suspendersGroup.appendChild(line);
}

// Animate Swaying Cables
const mainCable = document.querySelector('#bridge-svg path');
let swayAngle = 0;

function swayCables() {
    swayAngle += 0.01;
    const sway = Math.sin(swayAngle) * 5;
    mainCable.setAttribute('d', `M0,300 C200,${150 + sway} 1000,${150 - sway} 1200,300`);
    requestAnimationFrame(swayCables);
}

swayCables();

// Scroll-triggered Animations
const sections = document.querySelectorAll('section');

function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
