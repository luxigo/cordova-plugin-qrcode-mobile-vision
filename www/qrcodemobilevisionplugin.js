"use strict";

var exec = require("cordova/exec");

var qRCodeMobileVisionPlugin = {
	read: function(sc, ec) {
		exec(sc, ec, "QRCodeMobileVisionPlugin", "read", []);
	}
};

module.exports = qRCodeMobileVisionPlugin;