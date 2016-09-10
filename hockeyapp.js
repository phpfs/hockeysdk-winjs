//HockeyApp SDK for WinJS
//Copyright 2016 by Florian Sold

'use strict';

//Don't close App on crash
WinJS.Application.onerror = function (e) { return true };

var HockeyApp = {

    appid: "APPID",
    bundle: "mybundle",
    inform: function () { },
    userID: "-",

    /*
    Function: start()
    Parameters: appid, bundle [string], inform [function] {Function to run after error occured!}
    Return: none
    */
    start: function (appid, bundle, inform) {
        HockeyApp.appid = appid;
        HockeyApp.bundle = bundle;
        HockeyApp.inform = inform;

        window.removeEventListener('error', this._handler);
        window.addEventListener('error', this._handler);
    },

    /*
    Function: user()
    Parameters: id [string] {UserID to supplie to HockeyApp}
    Return: none
    */
    user: function (id){
        HockeyApp.userID = id;
    },

    /*
    Function: _handler()
    Parameters: e [object] {Error Object}
    Return: none
    */
    _handler: function(e) {
        var formData = new FormData();
        var data = [];
        data.push("Package: " + HockeyApp.bundle);
        data.push("Version: " + HockeyApp._version(Windows.ApplicationModel.Package.current.id.version));
        data.push("Language: " + window.navigator.language);
        data.push("OS: " + window.navigator.platform);
        data.push("Manufacturer: Windows 10");
        data.push("Model: UWP WinJS");
        data.push("User-Agent: " + window.navigator.userAgent);
        data.push("");
        data.push(e.error.stack);

        var logString = data.join("\r\n");
        var log = new Blob([logString], { type: 'plain/text' });

        formData.append('log', log, "error.log");
        formData.append('userID', HockeyApp.userID);

        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState == XMLHttpRequest.DONE) {
                console.log(request);
            }
        }
        request.open("POST", "https://rink.hockeyapp.net/api/2/apps/" + HockeyApp.appid + "/crashes/upload");
        request.send(formData);

        HockeyApp.inform();
        
        return true;
    },

    /*
    Function: _version()
    Parameters: v [object] {Windows.ApplicationModel.Package.current.id.version}
    Return: version {Formatted X.X.X.X}
    */
    _version: function (v) {
        return "" + v.major + "." + v.minor + "." + v.build + "." + v.revision;
    }

};
