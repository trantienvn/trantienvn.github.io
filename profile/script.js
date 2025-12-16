
// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Three.js Enhanced Background
const canvas = document.getElementById('bg-canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
camera.position.z = 5;

// Create multiple particle systems with different properties
const particleSystems = [];

// Main particle system
function createParticleSystem(count, size, color, speed) {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 20;
        positions[i + 1] = (Math.random() - 0.5) * 20;
        positions[i + 2] = (Math.random() - 0.5) * 20;

        velocities[i] = (Math.random() - 0.5) * speed;
        velocities[i + 1] = (Math.random() - 0.5) * speed;
        velocities[i + 2] = (Math.random() - 0.5) * speed;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));

    const material = new THREE.PointsMaterial({
        size: size,
        color: color,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    return particles;
}

// Create multiple layers
particleSystems.push(createParticleSystem(2000, 0.025, 0x81c784, 0.002));
particleSystems.push(createParticleSystem(1500, 0.015, 0x4caf50, 0.003));
particleSystems.push(createParticleSystem(1000, 0.035, 0x66bb6a, 0.001));

// Create connecting lines between nearby particles
const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x81c784,
    transparent: true,
    opacity: 0.15,
    blending: THREE.AdditiveBlending
});

let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;

document.addEventListener('mousemove', (e) => {
    targetX = (e.clientX / window.innerWidth) * 2 - 1;
    targetY = -(e.clientY / window.innerHeight) * 2 + 1;
});

// Create nebula effect
const nebulaGeometry = new THREE.SphereGeometry(8, 32, 32);
const nebulaMaterial = new THREE.MeshBasicMaterial({
    color: 0x81c784,
    transparent: true,
    opacity: 0.03,
    wireframe: true,
    blending: THREE.AdditiveBlending
});
const nebula = new THREE.Mesh(nebulaGeometry, nebulaMaterial);
scene.add(nebula);

// Animation
let frame = 0;
function animate() {
    requestAnimationFrame(animate);
    frame += 0.001;

    // Smooth mouse follow
    mouseX += (targetX - mouseX) * 0.05;
    mouseY += (targetY - mouseY) * 0.05;

    // Animate each particle system
    particleSystems.forEach((system, idx) => {
        const positions = system.geometry.attributes.position.array;
        const velocities = system.geometry.attributes.velocity.array;

        for (let i = 0; i < positions.length; i += 3) {
            // Update positions
            positions[i] += velocities[i];
            positions[i + 1] += velocities[i + 1];
            positions[i + 2] += velocities[i + 2];

            // Boundary check and reset
            if (Math.abs(positions[i]) > 10) velocities[i] *= -1;
            if (Math.abs(positions[i + 1]) > 10) velocities[i + 1] *= -1;
            if (Math.abs(positions[i + 2]) > 10) velocities[i + 2] *= -1;

            // Add wave motion
            positions[i + 1] += Math.sin(frame * 2 + positions[i] * 0.5) * 0.003;
        }

        system.geometry.attributes.position.needsUpdate = true;

        // Rotate based on mouse and index
        system.rotation.y = frame * (0.3 + idx * 0.1) + mouseX * 0.3;
        system.rotation.x = mouseY * 0.2;
    });

    // Animate nebula
    nebula.rotation.y = frame * 0.1;
    nebula.rotation.x = frame * 0.05;
    nebula.scale.setScalar(1 + Math.sin(frame * 2) * 0.1);

    renderer.render(scene, camera);
}

animate();

// Handle resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Parallax effect on scroll
let scrollY = 0;
window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
    particleSystems.forEach((system, idx) => {
        system.position.y = scrollY * 0.0003 * (idx + 1);
    });
});

// Apps Slider Logic
// Apps Slider Logic
const slider = document.querySelector('.apps-slider');
const originalSlides = document.querySelectorAll('.app-slide');
const prevBtn = document.querySelector('.slider-btn-prev');
const nextBtn = document.querySelector('.slider-btn-next');
const dotsContainer = document.querySelector('.slider-dots');

let slidesPerView = 3;
let currentSlide = 0;
const totalOriginalSlides = originalSlides.length;
let isTransitioning = false;

// Clone slides for infinite effect (3 at start, 3 at end)
const cloneCount = 3;

// Clone for end (copies of start)
for (let i = 0; i < cloneCount; i++) {
    const clone = originalSlides[i].cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    slider.appendChild(clone);
}

// Clone for start (copies of end)
for (let i = 0; i < cloneCount; i++) {
    // Use modulus to handle if totalSlides < cloneCount (unlikely here but safe)
    const index = (totalOriginalSlides - 1 - (i % totalOriginalSlides));
    const clone = originalSlides[index].cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    slider.prepend(clone);
}

// Re-query all slides including clones
const allSlides = document.querySelectorAll('.app-slide');

// Create dots
for (let i = 0; i < totalOriginalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('slider-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        if (!isTransitioning && currentSlide !== i) goToSlide(i);
    });
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.slider-dot');

function updateSlidesPerView() {
    if (window.innerWidth <= 480) {
        slidesPerView = 1;
    } else if (window.innerWidth <= 768) {
        slidesPerView = 2;
    } else {
        slidesPerView = 3;
    }
    // Reset to a safe valid position instantly when resizing
    // Re-calculate position without animation
    updateSliderPosition(false);
}

function updateSliderPosition(animate = true) {
    if (allSlides.length === 0) return;

    const slideWidth = allSlides[0].offsetWidth;
    const gap = 30;
    // Logical index 0 is at visual index 'cloneCount'
    const offset = (slideWidth + gap) * (currentSlide + cloneCount);

    if (!animate) {
        slider.style.transition = 'none';
    } else {
        slider.style.transition = 'transform 0.5s ease-in-out';
    }

    slider.style.transform = `translateX(-${offset}px)`;

    // Map logical index to dot index (0..total-1)
    let dotIndex = currentSlide;
    // Handle negative logic index mapping
    if (dotIndex < 0) {
        dotIndex = (dotIndex % totalOriginalSlides + totalOriginalSlides) % totalOriginalSlides;
    } else {
        dotIndex = dotIndex % totalOriginalSlides;
    }

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === dotIndex);
    });
}

function goToSlide(n) {
    currentSlide = n;
    isTransitioning = true;
    updateSliderPosition(true);
}

function nextSlide() {
    if (isTransitioning) return;
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    if (isTransitioning) return;
    goToSlide(currentSlide - 1);
}

// Handle infinite loop logic
slider.addEventListener('transitionend', () => {
    isTransitioning = false;

    // If we scrolled past the last real slide (to clone of first)
    if (currentSlide >= totalOriginalSlides) {
        currentSlide = currentSlide % totalOriginalSlides;
        updateSliderPosition(false);
    }
    // If we scrolled before the first real slide (to clone of last)
    else if (currentSlide < 0) {
        currentSlide = (currentSlide % totalOriginalSlides + totalOriginalSlides) % totalOriginalSlides;
        updateSliderPosition(false);
    }
});

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

window.addEventListener('resize', () => {
    updateSlidesPerView();
});

// Initialize
// Small delay to ensure layout is ready
setTimeout(() => updateSlidesPerView(), 100);

// Auto play
setInterval(() => {
    if (!isTransitioning) nextSlide();
}, 5000);
