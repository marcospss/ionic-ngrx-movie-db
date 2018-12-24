/**
 * https://medium.com/@siddhartha.ng/ionic-3-import-using-aliases-2aa260d6fab3
 */
const path = require('path');
const useDefaultConfig = require('./../node_modules/@ionic/app-scripts/config/webpack.config.js');

const env = process.env.IONIC_ENV;

useDefaultConfig[env].resolve.alias = {
    "@app": path.resolve('./../src/app/'),
    "@pages": path.resolve('./../src/pages/'),
    "@providers": path.resolve('./../src/providers/')
};

module.exports = function() {
    return useDefaultConfig;
};