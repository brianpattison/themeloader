Titanium.UI.setBackgroundColor('#000');

ThemeLoader = SC.Application.create();

// Include Themes
Ti.include('/themes/themes.js');

// Include Models

// Include Controllers
Ti.include('/controllers/themes_controller.js');

// Include Views
Ti.include('/views/preview/default.js');
Ti.include('/views/themes/default.js');

var tabGroup = SCTi.TabGroup.create();
tabGroup.add(themesTab);
tabGroup.add(previewTab);
tabGroup.open();