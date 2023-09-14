// Music by <a href="https://pixabay.com/users/olexy-25300778/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=152722">Olexy</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=152722">Pixabay</a>
// Music by Olexy from Pixabay
// all code inspired by https://codepen.io/pixelkind/pen/eYbWyVW
// Then i added feedback delay and change the shape
// This project is second version of the project called sound.js


let player;
let analyser;
let delay;

window.addEventListener("load", () => {
  player = new Tone.Player("summer-walk.mp3");
  analyser = new Tone.Analyser("fft", 4096);
  delay = new Tone.FeedbackDelay("8n", 0.2);

  delay.connect(analyser);
  player.connect(delay);
  delay.toDestination();
});

window.addEventListener("click", () => {
  player.start();
  //oscillator.start();
});

function setup() {
  createCanvas(innerWidth, innerHeight);
}

let x = 0;

//let gap = 5;
function draw() {
  background(0);
  let value = analyser.getValue();
  for (let i = 0; i < value.length; i++) {
    let v = map(value[i], -100, 0, height, 0);

    push();
    let r = 0;
    let g = map(v, 0, height, 0, 255);
    let b = map(v, 0, height, 0, 255);

    for (let x = 0; x < 30; x++){

    fill(r, g, b);
    noStroke();
    ellipse(x * 100 , i, 100, 100); // waveform: * 100
    }

    pop();
  }
  //x = x + gap;
}
