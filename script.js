$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
    }

    function close() {
        envelope.addClass("close").removeClass("open");
    }

    // Crear mariposas
    function createButterflies() {
        const butterflyCount = 5; // Cambia este número para más mariposas
        for (let i = 0; i < butterflyCount; i++) {
            const butterfly = document.createElement('div');
            butterfly.className = 'butterfly mariposa';
            butterfly.style.left = Math.random() * 100 + '%'; // Posición horizontal aleatoria
            butterfly.style.top = Math.random() * 100 + '%'; // Posición vertical aleatoria
            document.body.appendChild(butterfly);
        }
    }

// Crear burbujas
function createBubbles() {
    const bubbleCount = 20; // Número de burbujas
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        // Posición horizontal aleatoria
        bubble.style.left = Math.random() * 100 + '%';
        // Altura inicial aleatoria (más arriba, por ejemplo entre 100px y 300px)
        bubble.style.bottom = Math.random() * 200 + 100 + 'px'; // Cambiado a 100-300px
        document.body.appendChild(bubble);
    }
}

    // Llama a las funciones para crear mariposas y burbujas
    createButterflies();
    createBubbles();
});
