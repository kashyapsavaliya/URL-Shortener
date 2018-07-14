function getShortURL() {

    chrome.tabs.getSelected(null, function(tab) {

        // grabbing the tab url here
        var tablink = tab.url;
        console.log("LONG URL : " + tablink);

        // API 
        var accessToken = 'add token here';
        var url = 'https://api-ssl.bitly.com/v3/shorten?access_token=' + accessToken + '&longUrl=' + encodeURIComponent(tablink);

        jQuery.getJSON(url, function(response) {

            console.log("SHORT URL : " + response.data.url);
            var element = document.getElementById("the-url");
            element.innerHTML = response.data.url;

        });

    });
}

getShortURL();
