const path = require('path');
const { config } = require('./wdio.shared.conf');

// ====================
// Runner Configuration
// ====================
config.port = 4723;

// ====================
// Specs
// ====================
config.specs = [
  path.join(process.cwd(), 'test/specs/android/Assignment.js')
];

// ====================
// Capabilities
// ====================
config.capabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "10",
    "appium:deviceName": "pixel 7",
    "appium:automationName": "UIAutomator2",
    "appium:app": path.join(process.cwd(), "app/android/app-release (2).apk"),
    "appium:autoGrantPermissions": true,
    'appium:ignoreUnimportantViews': true

  }
];

// ====================
// Services
// ====================
config.services = [['appium', {
  args: {
    address: 'localhost',
    port: 4723,
    relaxedSecurity: true
  },
  logPath: './'
}]];

// ====================
// Reporters
// ====================

/*
config.reporters = [
  'spec',
  ['@wdio/allure-reporter', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: false,
    disableWebdriverScreenshotsReporting: false,
  }]
];
*/
exports.config = config;
