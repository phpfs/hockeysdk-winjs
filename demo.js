//Put this after app.start()
window.onload = function () {
    //Supplie it your AppID and your Bundle Identifier - both can be found in your hockeyapp-dashboard; Third is a function which will be run after the crash to inform the User what happened!
    HockeyApp.start("myappidfrommydashboard", "my.bundle", function () {
        var msgBox = new Windows.UI.Popups.MessageDialog("This App as crashed :( A report has been sent to the developer!");
        msgBox.showAsync();
    });
    
    //Set UserID when App has one
    HockeyApp.user(233);
    
    //Demo Crash
    console.log(coldDrink);
}
