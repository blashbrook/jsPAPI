/** 
 * @module jsPAPI/_init
 */

/**
 * Do initial setup stuff
 * 
 * Default config should be moved to a .env or something tho
 *
 * @param {object} cfg - pass in any config values you want to override defaults
 * 
 */

module.exports = function(parent) {
    parent._init = function(cfg = {}) {

        // Initialize root config object
        parent._config = {};

        // Set some sane defaults
        var defaults = {
            accessid: '',
            key: '',
            server: '',
            domain: '',
            appid: '100',
            orgid: '1',
            scheme: 'https://',
            path: 'PAPIService/REST',
            version: 'v1',
            method: 'GET',
            auth: 'public',
            authlevel: 'all',
            pass: false,
            token: false,
            lang: '1033',
            encode: 'application/json',
            accept: 'application/json',
            logging: true,
        }

        // Merge custom config over defaults
        for(key in defaults) {
            cfg[key] = (typeof(cfg[key]) == 'undefined') ? defaults[key] : cfg[key];
        }

        cfg.initTime = parent._polarisDate();

        // Save combined config
        parent.configSet(cfg);
    }
    return parent;
}