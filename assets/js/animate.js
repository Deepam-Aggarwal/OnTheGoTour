anime({
  targets: 'svg #ship',
 translateX: [-200, 350], // from 100 to 250
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine',
  duration: 8000
});

anime({
  targets: 'svg #baloon',
 translateX: [-200, 350], // from 100 to 250
  direction: 'alternate',
   keyframes: [
    {translateY: -50},
    {translateX: 800},
    {translateY: 10},
    {translateX: 10},
    {translateY: 100}
  ],
  loop: true,
  easing: 'easeInOutSine',
  duration: 15000
});

var design = anime({
  targets: 'svg #wing',
   skew: 10, 
  easing: 'linear',
  loop: true,
  direction: 'alternate',
});


anime({
  targets: 'svg #fan1',
  rotate: ([360]),
  loop: true,
  easing: 'linear',
  duration: 5000,
});

anime({
  targets: 'svg #fan2',
  rotate: ([360]),
  loop: true,
  easing: 'linear',
  duration: 5000,
});

anime({
  targets: 'svg #fan3',
  rotate: ([360]),
  loop: true,
  easing: 'linear',
  duration: 5000,
});

anime({
  targets: '#Group_42 path',
  translateX: [20, -50], // from 100 to 250
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine',
  delay: function(el, i, l) {
    return i * 400;
  },
  endDelay: function(el, i, l) {
    return (l - i) * 50;
  }
});
