Themes.themesController = SC.ArrayController.create({
  theme: BrooklynBeta,
  
  changeTheme: function(theme, button) {
    this.set('theme', theme);
    tabGroup.setActiveTab(1);
    if (!SC.none(button)) button.unclick();
    return this;
  }
});