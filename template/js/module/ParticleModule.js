export default function ParticleModule() {
    if (window.innerWidth >= 768) {
        const particleEls = document.querySelectorAll('.particle-square');

        if (particleEls.length) {
            particleEls.forEach((el, index) => {
                const id = 'particle-' + index;
                el.setAttribute('id', id);

                const particleValue = parseInt(el.getAttribute('data-particle-value')) || 100;
                const particleColor = el.getAttribute('data-particle-color') || "#ffffff";
                const particleDistance = parseInt(el.getAttribute('data-particle-distance')) || 100;
                const particleOpacity = parseFloat(el.getAttribute('data-particle-opacity')) || 0.4;
                particlesJS(id, {
                    particles: {
                        number: { value: particleValue, density: { enable: true, value_area: 500 } },
                        color: { value: particleColor },
                        shape: { type: "circle" },
                        opacity: { value: particleOpacity },
                        size: { value: 3, random: true },
                        line_linked: {
                            enable: true,
                            distance: particleDistance,
                            color: particleColor,
                            opacity: particleOpacity,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 1,
                            direction: "none",
                            out_mode: "out"
                        }
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: { enable: false },
                            onclick: { enable: false },
                            resize: true
                        }
                    },
                    retina_detect: true
                });
            });
        }
    }
}