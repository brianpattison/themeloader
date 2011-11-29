var window = this;
Ti.include('/lib/sc_ti.js');
Ti.include('/lib/sc_ti_addons.js');

var RUN_TESTS = false;

if (RUN_TESTS) {
  Ti.include('/tests/tests.js');
} else {
  // Load Main App File
  Ti.include('/themeloader.js')
}