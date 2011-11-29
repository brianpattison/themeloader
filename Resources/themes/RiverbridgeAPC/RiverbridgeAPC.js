// Riverbridge APC
// http://www.colourlovers.com/palette/1862583/Riverbridge_APC

var RiverbridgeAPC = Themes.Theme.create({
  backgroundColor:        '#2d2c32',
  backgroundColorButton:  '#cf7e08',
  backgroundImage:        '/themes/RiverbridgeAPC/background.jpg',
  barColor:               '#cf7e08',
  color:                  '#fff',
  colorBad:               '#b1372a',
  colorGood:              '#a4a32f',
  colorHeading:           '#fff',
  
  borderColor: function() {
    return ColorChanger.darker(this.get('backgroundColor'), .3);
  }.property('backgroundColor').cacheable(),
  
  labelShadowColor: function() {
    return ColorChanger.darker(this.get('backgroundColor'), .3);
  }.property('backgroundColor').cacheable(),
});