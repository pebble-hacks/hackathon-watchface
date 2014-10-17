var UI = require('ui');
var Vector2 = require('vector2');

var wind = new UI.Window({
  fullscreen: true
});

var time_text = new UI.TimeText({
  position: new Vector2(0, 144),
  size: new Vector2(144, 24),
  font: 'gothic-18-bold',
  text: '%H:%M:%S',
  textAlign: 'center'
});

var hackathon_logo = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 144),
  backgroundColor: 'clear',
  image: 'images/boilermake.png',
});

wind.add(hackathon_logo);
wind.add(time_text);
wind.show();
