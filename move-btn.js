document.addEventListener("DOMContentLoaded", () => {
    const element = document.querySelector('.flecha__icone');
    const distance = 10; // Distância do movimento
    const duration = 1000; // Duração do movimento em milissegundos

    let direction = 1; // 1 para baixo, -1 para cima

    function animate() {
        let start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const translateY = distance * Math.sin((progress / duration) * Math.PI);

            element.style.transform = `translateY(${translateY * direction}px)`;

            if (progress < duration) {
                requestAnimationFrame(step);
            } else {
                direction *= -1; // Inverte a direção
                requestAnimationFrame(animate); // Inicia a próxima animação
            }
        }

        requestAnimationFrame(step);
    }

    animate();
});
