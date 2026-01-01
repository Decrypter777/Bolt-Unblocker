if (!localStorage.getItem('cloak')) {
    localStorage.setItem('cloak', 'none');
}

if (localStorage.getItem('autoab') === 'true' && !window.top.location.href.includes('about:blank')) {
    var newTab = window.open('about:blank', '_blank');
    if (!newTab || newTab.closed || typeof newTab.closed == 'undefined') {
        alert('Please allow popups and redirects for auto about:blank cloak to work.');
    }
    newTab.document.body.innerHTML = '<iframe src="/srcdocs/apps/index.html" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"></iframe>';
    window.top.location.href = 'https://classroom.google.com/u/0/h';
}

function changeFavicon(newFaviconPath) {

    let link = document.querySelector("link[rel~='icon']");

    if (!link) {

        link = document.createElement('link');
        link.rel = 'icon';

        document.head.appendChild(link);
    }


    link.href = newFaviconPath;


    const extension = newFaviconPath.split('.').pop().toLowerCase();
    switch (extension) {
        case 'png':
            link.type = 'image/png';
            break;
        case 'jpg':
        case 'jpeg':
            link.type = 'image/jpeg';
            break;
        case 'gif':
            link.type = 'image/gif';
            break;
        case 'svg':
            link.type = 'image/svg+xml';
            break;
        case 'ico':
        default:
            link.type = 'image/x-icon';
            break;
    }
}

document.addEventListener('DOMContentLoaded', function () {

    if (!localStorage.getItem('cloak')) {
        localStorage.setItem('cloak', 'none');
    }

    switch (localStorage.getItem('cloak')) {
        case 'classroom':
            changeFavicon("https://ginger.pythonanywhere.com/static/favicon.png");
            document.title = 'Home';
            break;
        case 'clever':
            changeFavicon("https://ginger.pythonanywhere.com/static/favicon.png");
            document.title = 'Clever | Portal';
            break;
        case 'desmos':
            changeFavicon("https://ginger.pythonanywhere.com/static/favicon.png");
            document.title = 'Desmos | Graphing Calculator';
            break;
        case 'none':
        default:
            changeFavicon("https://ginger.pythonanywhere.com/static/favicon.png");
            document.title = 'Fluxi';
            break;
    }

}); 