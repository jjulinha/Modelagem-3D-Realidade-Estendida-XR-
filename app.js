document.addEventListener('DOMContentLoaded', () => {
    const viewer = document.querySelector('#ar-viewer');

    if (!viewer) {
        console.error("Erro: <model-viewer> não encontrado no HTML!");
        return;
    }

    // 1. Ouvir se o modelo carregou com sucesso
    viewer.addEventListener('load', () => {
        console.log('✅ SUCESSO: Modelo 3D carregado e pronto!');
        // Se carregou mas não aparece, é problema de câmera/zoom
        // Vamos forçar um enquadramento
        viewer.cameraOrbit = '45deg 55deg 2.5m'; 
    });

    // 2. Ouvir se houve erro no arquivo (404, corrompido, etc)
    viewer.addEventListener('error', (error) => {
        console.error('❌ ERRO CRÍTICO: O modelo não pôde ser carregado.', error);
        alert('Erro: O arquivo .glb não foi encontrado ou está corrompido. Verifique o console (F12).');
    });

    // 3. Status do AR
    viewer.addEventListener('ar-status', (event) => {
        console.log('Status AR:', event.detail.status);
    });

    console.log("Sistema AR Inicializado - Aguardando modelo...");
});
