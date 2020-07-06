function getShortURL() {

    chrome.tabs.getSelected(null, function (tab) {

        // grabbing the tab url here
        var tablink = tab.url;
        console.log("LONG URL : " + tablink);

        // API 
        var accessToken = 'add api key here';
        var url = 'https://api-ssl.bitly.com/v3/shorten?access_token=' + accessToken + '&longUrl=' + encodeURIComponent(tablink);

        jQuery.getJSON(url, function (response) {
            console.log("SHORT URL : " + response.data.url);
            var element = document.getElementById("url");
            element.innerHTML = response.data.url;
        });
    });
}

getShortURL();

function copy() {
    var toCopy = document.createElement("textarea");
    var copy = document.getElementById("url").innerHTML;
    toCopy.textContent = copy;
    document.body.appendChild(toCopy);
    toCopy.select();
    document.execCommand('copy');
    document.body.removeChild(toCopy);
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("copy").onclick = copy;
});
