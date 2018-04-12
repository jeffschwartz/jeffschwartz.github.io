(function (w) {
    let img;
    let imageSrcs = [
        "../media/black-and-white-close-up-cobweb-worked.jpg",
        "../media/cyclone-roller-coaster-coney-island-worked.jpg",
        "../media/alphabet-arts-and-crafts-blog-459688-worked.jpg",
        "../media/tatoo-handshake-worked.jpg"
    ];
    w.imagePreloadCache = [];
    imageSrcs.forEach(src => {
        img = new Image();
        img.src = src;
        w.imagePreloadCache.push(img);
    });
}(window));