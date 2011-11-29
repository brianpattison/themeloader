Ti.include('/themes/lib/color_changer.js');

Themes = {};

Themes.Theme = SC.Object.extend({
  backgroundColor:        '#fff',
  backgroundColorButton:  '#000',
  backgroundImage:        null,
  barColor:               '#000',
  barImage:               null,
  borderRadiusButton:     10,
  borderWidthButton:      1,
  color:                  '#000',
  colorBad:               '#e00',
  colorButton:            '#fff',
  colorGood:              '#0e0',
  colorHeading:           '#000',
  font:                   {fontSize: 22, fontWeight: 'bold'},
  fontButton:             {fontSize: 18, fontWeight: 'bold'},
  fontHeading:            {fontSize: 32, fontWeight: 'bold'},
  fontParagraph:          {fontSize: 18},
  shadowOffset:           {x: 0, y: -1},
  
  borderColor: function() {
    return ColorChanger.darker(this.get('backgroundColor'), .3);
  }.property('backgroundColor').cacheable(),
  
  shadowColor: function() {
    return ColorChanger.darker(this.get('backgroundColor'), .3);
  }.property('backgroundColor').cacheable(),
});

Ti.include('/themes/BrooklynBeta/BrooklynBeta.js');
Ti.include('/themes/Club/Club.js');
Ti.include('/themes/ConspicuousCreep/ConspicuousCreep.js');
Ti.include('/themes/RiverbridgeAPC/RiverbridgeAPC.js');

// Theme Window Style
Themes.Window = SCTi.Window.extend({
  barColorBinding: SC.Binding.oneWay('theme.barColor'),
  barImageBinding: SC.Binding.oneWay('theme.barImage'),
  themeBinding: SC.Binding.oneWay('Themes.themesController.theme'),
  
  init: function() {
    this._super();

    // Background with fixed size
    var backgroundView = SCTi.View.create({
      backgroundColorBinding: SC.Binding.oneWay('parentView.theme.backgroundColor'),
      backgroundImageBinding: SC.Binding.oneWay('parentView.theme.backgroundImage'),
      
      height: 480,
      top: 0,
      width: 320,
      
      backgroundImageDidChange: function() {
        if (this.get('backgroundImage') === null) {
          this.render();
          this.get('tiObject').backgroundImage = null;
        }
      }.observes('backgroundImage')
    });
    backgroundView.set('parentView', this);
    this.set('backgroundView', backgroundView);
    
    // Scroll view for every window
    var scrollView = SCTi.ScrollView.create({
      contentHeight: 'auto',
      contentWidth: 320,
      width: 320
    });
    scrollView.set('parentView', this);
    this.set('scrollView', scrollView);
    
    // Add the Background View to the Ti Window
    this.render();
    backgroundView.render();
    this.get('tiObject').add(backgroundView.get('tiObject'));
    
    // Add the Scroll View to the Ti Window
    scrollView.render();
    this.get('tiObject').add(scrollView.get('tiObject'));
  },
  
  add: function(view) {
    var scrollView = this.get('scrollView');
    var childViews = scrollView.get('childViews');
    childViews.push(view);
    
    if (scrollView.get('isRendered')) {
      view.render();
      scrollView.addChildView(scrollView.get('tiObject'), view);
    }
    
    return this;
  },
  
  barImageDidChange: function() {
    if (this.get('barImage') === null) {
      this.render();
      this.get('tiObject').barImage = null;
    }
  }.observes('barImage')
});

// Theme Label Styles
Themes.Label = SCTi.Label.extend({
  colorBinding: SC.Binding.oneWay('theme.color'),
  fontBinding: SC.Binding.oneWay('theme.font'),
  themeBinding: SC.Binding.oneWay('Themes.themesController.theme'),
  
  height: 'auto',
  width: 'auto'
});

// Heading Label
Themes.HeadingLabel = Themes.Label.extend({
  colorBinding: SC.Binding.oneWay('theme.colorHeading'),
  fontBinding: SC.Binding.oneWay('theme.fontHeading'),
  shadowColorBinding: SC.Binding.oneWay('theme.shadowColor'),
  shadowOffsetBinding: SC.Binding.oneWay('theme.shadowOffset')
});

// Paragraph Label
Themes.ParagraphLabel = Themes.Label.extend({  
  fontBinding: SC.Binding.oneWay('theme.fontParagraph')
});

// Success Label
Themes.SuccessLabel = Themes.Label.extend({
  colorBinding: SC.Binding.oneWay('theme.colorGood'),
  fontBinding: SC.Binding.oneWay('theme.font'),
  shadowColorBinding: SC.Binding.oneWay('theme.shadowColor'),
  shadowOffsetBinding: SC.Binding.oneWay('theme.shadowOffset')
});

// Error Label
Themes.ErrorLabel = Themes.Label.extend({
  colorBinding: SC.Binding.oneWay('theme.colorBad'),
  fontBinding: SC.Binding.oneWay('theme.font'),
  shadowColorBinding: SC.Binding.oneWay('theme.shadowColor'),
  shadowOffsetBinding: SC.Binding.oneWay('theme.shadowOffset')
});

// Theme Button Styles
Themes.Button = SCTi.Button.extend({
  backgroundColorBinding: SC.Binding.oneWay('theme.backgroundColorButton'),
  borderColorBinding: SC.Binding.oneWay('theme.borderColor'),
  borderRadiusBinding: SC.Binding.oneWay('theme.borderRadiusButton'),
  borderWidthBinding: SC.Binding.oneWay('theme.borderWidthButton'),
  themeBinding: SC.Binding.oneWay('Themes.themesController.theme'),

  buttonClicked: false,
  buttonPressed: false,  
  height: 40,
  style: 'plain',
  width: 130,
  
  init: function() {
    this._super();
    
    var buttonLabel = SCTi.Label.create({
      backgroundColorBinding: 'parentView.backgroundColor',
      borderRadiusBinding: 'parentView.borderRadius',
      colorBinding: SC.Binding.oneWay('parentView.theme.colorButton'),
      fontBinding: SC.Binding.oneWay('parentView.theme.fontButton'),
      textBinding: 'parentView.title',
      
      height: '100%',
      textAlign: 'center',
      width: '100%',
      
      backgroundGradient: function() {
        var backgroundColor = this.get('backgroundColor');
        return { type: 'linear', colors: [ColorChanger.lighter(backgroundColor, .15), ColorChanger.darker(backgroundColor, .2)], startPoint: {x:0, y:0}, endPoint: {x: 0, y:'100%'} };
      }.property('backgroundColor').cacheable(),
      
      opacity: function() {
        return this.get('parentView').get('enabled') === false ? 0.7 : 1;
      }.property('parentView.enabled').cacheable(),
      
      shadowColor: function() {
        return ColorChanger.darker(this.get('backgroundColor'), .2);
      }.property('backgroundColor').cacheable(),
    });
    buttonLabel.set('parentView', this);
    this.set('buttonLabel', buttonLabel);
    this.add(buttonLabel);
    
    var buttonOverlay = SCTi.View.create({
      borderRadiusBinding: 'parentView.borderRadius',
      
      backgroundColor: '#000',
      height: '100%',
      opacity: 0.4,
      visible: false,
      width: '100%',
      
      visible: function() {
        return (this.get('parentView').get('enabled') === false || this.get('parentView').get('buttonPressed') || this.get('parentView').get('buttonClicked'));
      }.property('parentView.enabled', 'parentView.buttonPressed', 'parentView.buttonClicked')
    });
    buttonOverlay.set('parentView', this);
    this.set('buttonOverlay', buttonOverlay);
    this.add(buttonOverlay);
  },
  
  opacity: function() {
    return this.get('enabled') === false ? 0.9 : 1;
  }.property('enabled').cacheable(),
  
  touchstart: function() {
    this.set('buttonPressed', true);
  },
  
  click: function() {
    if (this.get('buttonClicked')) {
      return;
    }
    this.set('buttonClicked', true);
    return this;
    // The idea here is to pass the unclick function as a callback to make 
    // sure the user can tell that they pressed the button and something is happening
    // 
    // Example:
    // 
    // var someFunction = function(x, y, button) {
    //   var z = x + y; // <-- Super complex function
    //   button.unclick();
    //   alert('x + y = ' + z);
    // }
    // 
    // click: function() {
    //   if (this._super()) {
    //     someFunction(x, y, this);
    //   }
    // }
  },
  
  touchend: function() {
    this.set('buttonPressed', false);
  },
  
  unclick: function() {
    this.set('buttonClicked', false);
    this.set('buttonPressed', false);
  }
});

Themes.SubmitButton = Themes.Button.extend({
  backgroundColorBinding: SC.Binding.oneWay('theme.colorGood')
});
Themes.CancelButton = Themes.Button.extend({
  backgroundColorBinding: SC.Binding.oneWay('theme.colorBad')
});