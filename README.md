# Spotify-Inspired Music Player

A simple browser-based music player built with HTML, CSS, and vanilla JavaScript. It displays a playlist of local audio tracks and provides playback controls in a Spotify-inspired interface. This is an independent learning project and is not affiliated with Spotify.

## Features

- Play and pause the current track
- Select a track from the playlist
- Skip to the next or previous track (the playlist loops at either end)
- Seek through a track with the progress bar
- Show the current track title and playback state
- Load audio from the local `songs/` folder

## Built With

- HTML5
- CSS3
- Vanilla JavaScript
- [Font Awesome 6.5.1](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css) for playback icons

## Getting Started

### Requirements

A modern web browser. No package installation or build step is required.

### Run Locally

1. Clone or download this repository.
2. Open `index.html` in your browser, or open the project folder in Visual Studio Code and run it with the Live Server extension.
3. Use the playlist or the controls at the bottom of the page to play music.

> Keep the `songs/` folder and the image assets alongside the HTML file so their relative paths continue to work. Font Awesome icons are loaded from a CDN, so an internet connection is needed for those icons.

## Project Structure

```text
.
├── index.html       # Page structure and playlist
├── style.css        # Layout and visual styles
├── scriot.js        # Audio playback and player controls
├── bg2.jpg          # Playlist background image
├── cover1.jpg       # Track cover image
├── logo1.png        # Brand logo image
├── music.gif        # Playback animation
└── songs/           # Local MP3 files (1.mp3 through 9.mp3)
```

## Controls

- Select the play icon next to a track to play or pause it.
- Use the central play/pause button to control the current track.
- Use the previous and next buttons to move through the playlist.
- Drag or click the progress bar to seek within the current track.

## Customization

Audio files are referenced from the `songs/` folder in `scriot.js`. To add or replace music, update the playlist data and ensure the audio paths and playlist entries in `index.html` stay in sync. Use audio and image assets that you have permission to distribute.

## Notes

- The JavaScript file is currently named `scriot.js` (rather than `script.js`); `index.html` loads it by that name.
- The playlist has ten entries, while the `songs/` folder currently contains nine MP3 files. The last two playlist entries both reference `songs/9.mp3`.
