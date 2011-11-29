(function() {
  var get = SC.get, set = SC.set;

  SCTi.ScrollView = SCTi.View.extend({
    tiOptions: 'canCancelEvents contentHeight contentOffset contentWidth disableBounce horizontalBounce maxZoomScale minZoomScale scrollType showHorizontalScrollIndicator showVerticalScrollIndicator verticalBounce zoomScale'.w(),
    tiEvents: 'scale scroll'.w(),
    
    createTiObject: function(options) {
      return Ti.UI.createScrollView(options);
    }
  });
  
})();
