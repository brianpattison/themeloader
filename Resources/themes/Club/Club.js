// Club
// http://www.colourlovers.com/palette/1862321/Club

var Club = Themes.Theme.create({
  backgroundColor:        '#a4a0a0',
  backgroundColorButton:  '#a4a0a0',
  backgroundImage:        '/themes/Club/background.jpg',
  barColor:               '#424149',
  colorBad:               '#686667',
  colorGood:              '#ff7000',
  colorHeading:           '#fff',
  
  borderColor: function() {
    return ColorChanger.darker(this.get('backgroundColor'), .3);
  }.property('backgroundColor').cacheable(),
  
  labelShadowColor: function() {
    return ColorChanger.darker(this.get('backgroundColor'), .3);
  }.property('backgroundColor').cacheable(),
});