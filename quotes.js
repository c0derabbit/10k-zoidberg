var quotes = [
  "Hooray, I’m useful!",
  "He talked non-stop, he did. Like a parrot of the sea he was.",
  "Your music’s bad and you should feel bad!",
  "Why always the fighting?",
  "One art, please!",
  "Now open your mouth and lets have a look at that brain. ",
  "Talk to the claw.",
];

var bq = document.getElementById('zoid_says');

function random(arr) {
  var str = bq.innerHTML;
  var prev = arr.indexOf(str.slice(1));
  var rand = Math.floor(Math.random() * arr.length);
  console.log(prev, rand);
  return (rand !== prev ? arr[rand] : rand < arr.length - 1 ? arr[rand+1] : arr[rand-2]);
}

setTimeout(function() {
  bq.style.color = 'transparent';
}, 8500);

setInterval(function() {
  bq.innerHTML = ' ' + random(quotes);
  bq.style.color = '#445'
  setTimeout(function() {
    bq.style.color = 'transparent';
  }, 8500);
}, 9000);
