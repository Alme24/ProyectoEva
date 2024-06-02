let keyboard = document.querySelector(".piano_keyboard");
let controls = document.querySelectorAll(".piano_control_option");
let pianoNotes = ["C", "D", "E", "F", "G", "A", "B"];
let keyboardMap = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
];
let playBtn = document.querySelector(".piano_play_btn");
let tempoSelect = document.querySelector(".piano_tempo");
let songSelect = document.querySelector(".piano_song_list");
let keys = [];

let SetRain = `A3,1,D3,1,F3,1,D3,1,A3,1,D3,1,F3,1,A3,1,,A3,1,C3,1,F3,1,C3,1,A3,1,A#3,1,A3,1,G3,1,G3,1,C3,1,E3,1,C3,1,G3,1,C3,1,E3,1,A#3,1,,A#3,1,D3,1,E3,1,D3,1,A#3,1,D3,1,G3,1,A3,1,,A3,1,D3,1,F3,1,D3,1,A3,1,D3,1,F3,1,A3,1,,A3,1,C3,1,F3,1,C3,1,A3,1,A#3,1,A3,1,G3,1,,G3,1,C3,1,E3,1,C3,1,G3,1,C3,1,E3,1,A#3,1,,A#3,1,D3,1,G3,1,D3,1,A#3,1,D3,1,G3,1,C3,1,C3,1,C3,1`;

/* let jingleBells = `E4,E4,E4,,E4,E4,E4,,E4,G4,C4,D4,E4,,,,F4,F4,F4,F4,F4,E4,E4,E4,E4,D4,D4,E4,D4,G4`; */

let jingleBells = `E2,,E4,,C2,,G2,,C3,,G2,,C2,,G2,,E2,,C3,,E4,,G2,1,D4,1,E4,1,As1,1,G2,1,As2,1,G2,1,E4,1,As1,1,G2,1,E4,1,E4,As2,1,G2,1,D4,1,D4,1,A1,1,E2,1,A2,1,E2,1,A2,1,Cs4,,E2,,A1,,E1,,A3,A2,,E2`;

let playSong = (notesString, tempo, cb) => {
    let notes = notesString.split(",");
    let currentNote = 0;
    let mousedown = new Event("mousedown");
    let mouseup = new Event("mouseup");
    let btn;

    let interval = setInterval(() => {
        if (currentNote < notes.length) {
            if (notes[currentNote].trim() !== "") {
                if (btn) {
                    btn.dispatchEvent(mouseup);
                }
                btn = document.querySelector(
                    `[data-letter-note="${notes[currentNote].trim()}"]`
                );
                if (btn) {
                    btn.dispatchEvent(mousedown);
                }
            }
            currentNote++;
        } else {
            if (btn) {
                btn.dispatchEvent(mouseup);
            }
            clearInterval(interval);
            cb();
        }
    }, 300 / tempo);
};

playBtn.addEventListener("mousedown", () => {
    let tempo = +tempoSelect.value;
    let songNum = +songSelect.value;
    playBtn.disabled = true;

    let enablePlayBtn = () => (playBtn.disabled = false);

    switch (songNum) {
        case 1:
            playSong(jingleBells, tempo, enablePlayBtn);
            break;
        case 2:
            playSong(SetRain, tempo, enablePlayBtn);
            break;
    }
});

let init = () => {
    for (let i = 1; i <= 5; i++) {
        for (let j = 0; j < 7; j++) {
            let key = createKey("white", pianoNotes[j], i);
            key.dataset.keyboard = keyboardMap[j + (i - 1) * 7];
            keyboard.appendChild(key);

            if (j != 2 && j != 6) {
                let key = createKey("black", pianoNotes[j], i);
                key.dataset.keyboard = "⇧+" + keyboardMap[j + (i - 1) * 7];
                let emptySpace = document.createElement("div");
                emptySpace.className = "empty_space";
                emptySpace.appendChild(key);
                keyboard.appendChild(emptySpace);
            }
        }
    }
};

let createKey = (type, note, octave) => {
    let key = document.createElement("button");
    key.className = `piano_key piano_key_${type}`;
    key.dataset.letterNote =
        type == "white" ? note + octave : note + "#" + octave;
    key.dataset.letterNoteFileName =
        type == "white" ? note + octave : note + "s" + octave;
    key.textContent = key.dataset.letterNote;
    keys.push(key);

    key.addEventListener("mousedown", () => {
        playSound(key);
        key.classList.add("piano_key_playing");
    });

    key.addEventListener("mouseup", () => {
        key.classList.remove("piano_key_playing");
    });

    key.addEventListener("mouseleave", () => {
        key.classList.remove("piano_key_playing");
    });

    return key;
};

document.addEventListener("keydown", (e) => {
    if (e.repeat) {
        return;
    }
    pressKey("mousedown", e);
});

document.addEventListener("keyup", (e) => {
    pressKey("mouseup", e);
});

let pressKey = (mouseEvent, e) => {
    let lastLetter = e.code.substring(e.code.length - 1);
    let isShiftPressed = e.shiftKey;
    let selector;
    if (isShiftPressed) {
        selector = `[data-keyboard="⇧+${lastLetter}"]`;
    } else {
        selector = `[data-keyboard="${lastLetter}"]`;
    }
    let key = document.querySelector(selector);
    if (key !== null) {
        let event = new Event(mouseEvent);
        key.dispatchEvent(event);
    }
};

let playSound = (key) => {
    let audio = document.createElement("audio");
    audio.src = "samples2/" + key.dataset.letterNoteFileName + ".mp3";
    audio.play().then(() => audio.remove());
};

controls.forEach((input) => {
    input.addEventListener("input", () => {
        let value = input.value;
        let type;
        switch (value) {
            case "letterNote":
                type = "letterNote";
                break;
            case "keyboard":
                type = "keyboard";
                break;
            case "none":
                type = "";
                break;
        }
        keys.forEach((key) => {
            key.textContent = key.dataset[type];
        });
    });
});

init();
