Supported Platform
==================

Android Only

Installation
============

``npm install xml2js``

``cordova plugin add https://github.com/six519/cordova-plugin-qrcode-mobile-vision.git``

Usage
=====
::

    window.qRCodeMobileVisionPlugin.read(function(e){
        alert('The data is: ' + e);
    }, function(e){
        alert('Error: ' + e);
    });
