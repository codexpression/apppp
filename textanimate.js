const instance = new TypeIt("#pauseResume", {
  strings: ["Words fail me, in my bid to express how grateful I am to you.", "The love and support you have shown me are immerse.", "How could I ever repay you?", "Thank you for being such a wonderful person.", "I'm indeed grateful, ma", "I cannot thank you enough! You are nothing less than a blessing from God!", "<br><br>Thanks again and again😊"],
  waitUntilVisible: true
}).go();

document.querySelector('#freezeButton').addEventListener('click', function(e) {
  if (instance.is('frozen')) {
    instance.unfreeze();
    return;
  }

  instance.freeze();
});

// For welcome text

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i + 1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });