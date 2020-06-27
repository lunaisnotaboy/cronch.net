// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const source = 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';
    const video = document.querySelector('video'); // For options (second argument) see: https://github.com/sampotts/plyr/#options

    const player = new Plyr(video); // Expose player so it can be used from the console

    window.player = player; // For more Shaka Player options, see: https://github.com/google/shaka-player

    if (shaka.Player.isBrowserSupported()) {
        // Install built-in polyfills
        shaka.polyfill.installAll();
        const shakaInstance = new shaka.Player(video);
        shakaInstance.load(source);
    } else {
        console.warn('Browser is not supported!');
    }
});