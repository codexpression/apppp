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