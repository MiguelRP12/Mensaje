function showText() {
    const paragraphs = document.querySelectorAll('#text p');
    paragraphs.forEach((paragraph, index) => {
        let delay;
        // Establecer tiempos de espera diferentes para párrafos según su longitud
        if (index === 0) delay = 0;
        else if (index === 1) delay = 4000;
        else if (index === 2) delay = 8000;
        else if (index === 3) delay = 12000;
        else if (index === 4) delay = 16000;
        else delay = 20000;

        setTimeout(() => {
            paragraph.style.opacity = 1; // Revelar el párrafo
        }, delay); // Retraso específico
    });
}

window.onload = showText(); // Ejecutar al cargar la página