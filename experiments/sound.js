// Music by <a href="https://pixabay.com/users/olexy-25300778/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=152722">Olexy</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=152722">Pixabay</a>
//Music by Olexy from Pixabay
// all code inspired by https://codepen.io/pixelkind/pen/eYbWyVW

let player;
let analyser;

window.addEventListener("load", () => {
  player = new Tone.Player("experiment/summer.mp3");

  analyser = new Tone.Analyser("fft", 4096);

  player.connect(analyser);
  player.toDestination();
});

window.addEventListener("click", () => {
  player.start();
  //oscillator.start();
});

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(255, 255, 255);
  let value = analyser.getValue();
  for (let i = 0; i < value.length; i++) {
    let v = map(value[i], -100, 0, height, 0);
    rect(i * 1, 0, 1, v); // waveform: * 100
  }
}
