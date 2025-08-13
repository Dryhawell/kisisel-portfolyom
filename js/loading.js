// Loading Screen
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Sayfa tam olarak yüklendiğinde
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1000); // 1 saniye sonra loading ekranını gizle
});

// Sayfa yenilendiğinde loading ekranını tekrar göster
window.addEventListener('beforeunload', function() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.remove('hidden');
});
