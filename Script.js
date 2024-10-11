// Generate Vertical Cables
const verticalCablesGroup = document.getElementById('vertical-cables');

// Function to generate cables between two points
function generateCables(startX, endX, controlX, controlY, numCables) {
    const cableSpacing = (endX - startX) / numCables;
    for (let i = 0; i <= numCables; i++) {
        const x = startX + (i * cableSpacing);
        const t = i / numCables;
        const bezierY = (1 - t) * 300 + t * controlY;
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x);
        line.setAttribute('y1', 300);
        line.setAttribute('x2', x);
        line.setAttribute('y2', bezierY);
        line.setAttribute('stroke', '#A9A9A9');
        line.setAttribute('stroke-width', '1');
        verticalCablesGroup.appendChild(line);
    }
}

// Left side cables
generateCables(0, 600, 300, 100, 30);
// Right side cables
generateCables(600, 1200, 900, 100, 30);

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
