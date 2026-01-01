var iframe = document.getElementById('iframe');


function attachClickHandler() {
    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    var letsgoButton = innerDoc.getElementById('letsgo');

    if (letsgoButton) {
        letsgoButton.addEventListener('click', function () {
            // Skip the name prompt and proceed with a default name
            window.top.localStorage.setItem('name', 'Guest');
            window.top.location.href = '/';
        });
    }
}


iframe.addEventListener('load', attachClickHandler);


iframe.contentWindow.addEventListener('DOMContentLoaded', attachClickHandler);