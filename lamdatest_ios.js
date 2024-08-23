require('dotenv').config()
const { config } = require('./wdio.shared.conf');
const allure = require('allure-commandline');


exports.config = {
    user: process.env.LT_USERNAME || "Tamara.Abdulhameed",
    key: process.env.LT_ACCESS_KEY || "q2YneeruaZ1jLnZxEB8me1zJznRmW6biGYeg9bns4ZGq5MmfJo",

    updateJob: false,
    specs: ["/Users/altibbi/Desktop/webdriverio-appium-course-master/test/specs/ios/Assignment_ios.js"],
    exclude: [],

    maxInstances: 10,
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }],
    ],
    commonCapabilities: {
        build: "Test",
        name: "Sample Parallel Test - WebDriverIO",
        isRealMobile: true,
        network: true,
        devicelog: true,
        visual: true,
    },

    capabilities: [
        {
            deviceName: "iPhone 14",
            platformVersion: "16",
            platformName: "iOS",
            name: "Sample  Test ",
            app: process.env.LT_APP_ID||"lt://APP10160361821724239403468893",
            ignoreUnimportantViews: true ,


        },


      /*  {
            deviceName: "iPhone.*",
            platformVersion: "14",
            platformName: "iOS",
            name: "Sample Parallel Test - WebDriverIO",
            app: process.env.LT_APP_ID||"lt://proverbial-ios",
        },*/
    ],

    logLevel: "info",
    coloredLogs: true,
    screenshotPath: "./errorShots/",
    baseUrl: "",
    waitforTimeout: 60000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    path: "/wd/hub",
    hostname: process.env.LT_GRID_URL||"mobile-hub.lambdatest.com",
    port: 80,

    framework: "mocha",
    mochaOpts: {
        ui: "bdd",
        timeout: 60000,
    },
};

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
    for (var i in exports.config.commonCapabilities)
        caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
