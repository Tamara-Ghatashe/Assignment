require('dotenv').config();
const allure = require('allure-commandline');

exports.config = {
    user: process.env.LT_USERNAME,
    key: process.env.LT_ACCESS_KEY,

    updateJob: false,
    specs: ["test/specs/android/Assignment.js"],
    exclude: [],

    maxInstances: 1,  // Set to 1 if you're not running tests in parallel
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }],
    ],

    capabilities: [
        {
            deviceName: "iPhone 14",
            platformVersion: "16",
            platformName: "iOS",
            name: "Sample Test",
            app: process.env.LT_APP_ID || "lt://APP10160361821724239403468893",
            ignoreUnimportantViews: true,
            build: "Test",
            isRealMobile: true,
            network: true,
            devicelog: true,
            visual: true,
        },
    ],

    logLevel: "info",
    coloredLogs: true,
    screenshotPath: "./errorShots/",
    baseUrl: "",
    waitforTimeout: 60000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    path: "/wd/hub",
    hostname: process.env.LT_GRID_URL ,
    port: 80,

    framework: "mocha",
    mochaOpts: {
        ui: "bdd",
        timeout: 60000,
    },
};
