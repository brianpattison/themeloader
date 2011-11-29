var previewWindow = Themes.Window.create({
  title: 'Preview'
});

// Labels

var headingLabel = Themes.HeadingLabel.create({
  text: 'Heading Label',
  top: 20
});
previewWindow.add(headingLabel);

var successLabel = Themes.SuccessLabel.create({
  text: 'Success Message',
  top: 60
});
previewWindow.add(successLabel);

var errorLabel = Themes.ErrorLabel.create({
  text: 'Error Message',
  top: 90
});
previewWindow.add(errorLabel);

var paragraphLabel = Themes.ParagraphLabel.create({
  text: 'Paragraph Label',
  top: 130
});
previewWindow.add(paragraphLabel);

// Buttons

var testClickFunction = function(message, button) {
  // Simulate a slow operation
  setTimeout(function() {
    Ti.API.info(message);
    if (!SC.none(button)) button.unclick();
  }, 2000);
};

var defaultButton = Themes.Button.create({
  left: 20,
  title: 'Default',
  top: 180,
  
  click: function() {
    if (this._super()) {
      var self = this;
      setTimeout(function() {
        self.unclick();
      }, 200);
    }
  }
});
previewWindow.add(defaultButton);

var disabledButton = Themes.Button.create({
  enabled: false,
  right: 20,
  title: 'Disabled',
  top: 180
});
previewWindow.add(disabledButton);

var cancelButton = Themes.CancelButton.create({
  left: 20,
  title: 'Cancel',
  top: 240,
  
  click: function() {
    if (this._super()) {
      var self = this;
      setTimeout(function() {
        self.unclick();
      }, 200);
    }
  }
});
previewWindow.add(cancelButton);

var submitButton = Themes.SubmitButton.create({
  right: 20,
  title: 'Submit',
  top: 240,
  
  click: function() {
    if (this._super()) {
      testClickFunction('Hello!', this);
    } else {
      Ti.API.info('Already clicked.');
    }
  }
});
previewWindow.add(submitButton);

var previewTab = SCTi.Tab.create({
  icon: '/images/tabs/12-eye.png',
  title: 'Preview',
  window: previewWindow
});