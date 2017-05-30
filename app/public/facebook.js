window.fbAsyncInit = function () {
      FB.init({
        appId: '227075607780029',
        cookie: true,
        xfbml: true,
        version: 'v2.8'
      });
      FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    function onButtonClick() {
      FB.AppEvents.logEvent("sentFriendRequest")
    }

      FB.getLoginStatus(function(response){
        if (response.status === 'connected') {
          document.getElementById('status').innerHTML = 'We are connected';
        } else if (response.status === 'not authorized'){
          document.getElementById('status').innerHTML = 'we are not logged in';
        } else {
          document.getElementById('status').innerHTML = 'you are not logged in';
        }
      });
      FB.AppEvents.logEvent("New User");
    };

    

function login(){
    FB.login(function(response){
        if (response.status === 'connected') {
          document.getElementById('status').innerHTML = 'We are connected';
        } else if (response.status === 'not authorized'){
          document.getElementById('status').innerHTML = 'we are not logged in';
        } else {
          document.getElementById('status').innerHTML = 'you are not logged in';
        }
      }, {scope: 'email'});
    }