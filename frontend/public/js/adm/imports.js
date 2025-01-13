// loadScripts.js

// Função para carregar scripts dinamicamente
function loadScripts() {
    const scripts = [
        "/frontend/public/libs/adm/chart/chart.min.js",
        "/frontend/public/libs/adm/easing/easing.min.js",
        "/frontend/public/libs/adm/waypoints/waypoints.min.js",
        "/frontend/public/libs/adm/owlcarousel/owl.carousel.min.js",
        "/frontend/public/libs/adm/tempusdominus/js/moment.min.js",
        "/frontend/public/libs/adm/tempusdominus/js/moment-timezone.min.js",
        "/frontend/public/libs/adm/tempusdominus/js/tempusdominus-bootstrap-4.min.js"
    ];

    scripts.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false; // Garantir que os scripts sejam executados na ordem
        document.body.appendChild(script);
    });

    // Adicionando o jQuery e Bootstrap diretamente (com versão fixa)
    const jqueryScript = document.createElement('script');
    jqueryScript.src = "https://code.jquery.com/jquery-3.4.1.min.js";
    jqueryScript.async = false;
    document.body.appendChild(jqueryScript);

    const bootstrapScript = document.createElement('script');
    bootstrapScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js";
    bootstrapScript.async = false;
    document.body.appendChild(bootstrapScript);
}

// Chamada para carregar os scripts
loadScripts();
