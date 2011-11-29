// Themes Window
var themesWindow = Themes.Window.create({
  title: 'Themes'
});

var BrooklynBetaButton = Themes.Button.create({
  title: 'Brooklyn Beta',
  top: 30,
  width: 250,
  
  click: function() {
    if (this._super()) {
      Themes.themesController.changeTheme(BrooklynBeta, this);
    }
  }
});
themesWindow.add(BrooklynBetaButton);

var ClubButton = Themes.Button.create({
  title: 'Club',
  top: 90,
  width: 250,
  
  click: function() {
    if (this._super()) {
      Themes.themesController.changeTheme(Club, this);
    }
  }
});
themesWindow.add(ClubButton);

var ConspicuousCreepButton = Themes.Button.create({
  title: 'Conspicuous Creep',
  top: 150,
  width: 250,
  
  click: function() {
    if (this._super()) {
      Themes.themesController.changeTheme(ConspicuousCreep, this);
    }
  }
});
themesWindow.add(ConspicuousCreepButton);

var RiverbridgeAPCButton = Themes.Button.create({
  title: 'Riverbridge APC',
  top: 210,
  width: 250,
  
  click: function() {
    if (this._super()) {
      Themes.themesController.changeTheme(RiverbridgeAPC, this);
    }
  }
});
themesWindow.add(RiverbridgeAPCButton);

// Themes Tab
var themesTab = SCTi.Tab.create({
  icon: '/images/tabs/42-photos.png',
  title: 'Themes',
  window: themesWindow
});