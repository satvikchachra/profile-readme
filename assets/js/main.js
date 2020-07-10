particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});
const instance = new Typewriter('#typewriter', {
    loop: true
});

instance.typeString("Hello World!")
    .pauseFor(1000)
    .deleteAll()
    .typeString('I am Satvik Chachra.')
    .pauseFor(1000)
    .deleteChars(15)
    .typeString('an aspiring<br>Software Engineer.')
    .pauseFor(1000)
    .deleteChars(29)
    .typeString('currently learning<br>Web Development.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Check out my work at<br>github.com/satvikchachra')
    .pauseFor(1000)
    .deleteAll()
    .start();
