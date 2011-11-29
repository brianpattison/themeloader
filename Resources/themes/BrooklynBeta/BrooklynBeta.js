// Brooklyn Beta
// http://www.colourlovers.com/web/trends/websites/7818/Brooklyn_Beta

var BrooklynBeta = Themes.Theme.create({
  backgroundColor:        '#ded4b9',
  backgroundColorButton:  '#46433a',
  backgroundImage:        '/themes/BrooklynBeta/background.jpg',
  barColor:               '#46433a',
  colorBad:               '#ce534d',
  colorGood:              '#64b6b1',
  colorHeading:           '#46433A',
  
  borderColor: function() {
    return ColorChanger.darker(this.get('backgroundColor'), .3);
  }.property('backgroundColor').cacheable(),
  
  labelShadowColor: function() {
    return ColorChanger.darker(this.get('backgroundColor'), .2);
  }.property('backgroundColor').cacheable(),
});