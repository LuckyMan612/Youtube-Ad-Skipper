// Funkcja do przyspieszenia odtwarzania reklam
function speedUpAds() {
    const video = document.querySelector('video');
    if (video && video.playbackRate !== 16) {
        video.playbackRate = 16;
        console.log("Ad sped up");
    }
}

// Nasłuchiwanie na zmiany w elemencie video (np. gdy zaczyna się nowa reklama)
const observer = new MutationObserver(() => {
    // Reklamy są identyfikowane po obecności elementów z klasą 'ad-showing'
    const adContainer = document.querySelector('.ad-showing');
    if (adContainer) {
        speedUpAds();
    }
});

// Obserwuj zmiany w drzewie DOM
observer.observe(document.body, { childList: true, subtree: true });
