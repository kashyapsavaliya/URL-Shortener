function getShortURL() {

    chrome.tabs.getSelected(null, function(tab) {

        // grabbing the tab url here
        var tablink = tab.url;
        console.log("LONG URL : " + tablink);

        // API 
        var accessToken = 'add token here!';
        var url = 'https://api-ssl.bitly.com/v3/shorten?access_token=' + accessToken + '&longUrl=' + encodeURIComponent(tablink);

    });
}

getShortURL();
