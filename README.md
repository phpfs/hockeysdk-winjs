[![Code Climate](https://codeclimate.com/github/phpfs/hockeysdk-winjs/badges/gpa.svg)](https://codeclimate.com/github/phpfs/hockeysdk-winjs)    
# HockeySDK for WinJS Windows 10 Apps
>Have you ever wondered why your WinJS Apps crashes? - No? - Well I did!    

## Usage & Installation
### Simple
Add the hockeyapp.js file to your project and include it in your main html file.
Then, put at the beginning of your main js file the following lines:
```javascript
HockeyApp.start("myappidfrommydashboard", "my.bundle.identifier", function () {
        var msgBox = new Windows.UI.Popups.MessageDialog("This App as crashed :( A report has been sent to the developer!");
        msgBox.showAsync();
    });
```
```javascript
HockeyApp.start(appid, bundleIdentifier string, crashFunction function);
``` 
- appid: Your whole HockeyApp appid. - string   
- bundleIdentifier: Must be the same bundleIdentifier as in your HockeyApp-Dashboard! - string   
- crashFunction: A function which is run after the App has crashed. - function    
(See demo.js for examples)
```javascript
HockeyApp.user(id);
```   
- id: An id which is later on visible on your dashboard, makes it easier to debug or contact the user whose app has crashed.      

### Detailed
0. Open/Create a WinJS-App in VisualStudio.
1. Log in to https://hockeyapp.net/ with your Account.
2. Create a new App and select `Manual` there.
3. Select platform `Windows` if possible and your current release type.
4. Enter your app name and make sure to use the exact bundle identifier as in VisualStudio. (f.ex. 27484MaxMuster.Example)
5. Now you can see your AppID!
6. Now follow the -simple- explanation!

## Disclaimer
Please keep in mind: This App is user-made and not connected to HockeyApp!
Also, use this framework at your own risk!
If I have made a mistake, please submit a pull request :)
