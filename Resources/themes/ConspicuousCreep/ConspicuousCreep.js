// Conspicuous Creep
// http://www.colourlovers.com/palette/663167/Conspicuous_Creep

var ConspicuousCreep = Themes.Theme.create({
  backgroundColor:        '#0b8c8f',
  backgroundColorButton:  '#2b2825',
  backgroundImage:        '/themes/ConspicuousCreep/background.jpg',
  barColor:               '#2b2825',
  color:                  '#fff',
  colorBad:               '#d6156c',
  colorGood:              '#cacf43',
  colorHeading:           '#fff',
  
  borderColor: function() {
    return ColorChanger.darker(this.get('backgroundColor'), .3);
  }.property('backgroundColor').cacheable(),
  
  labelShadowColor: function() {
    return ColorChanger.darker(this.get('backgroundColor'), .3);
  }.property('backgroundColor').cacheable(),
});