document.addEventListener('DOMContentLoaded', function() {
    loadContent('header.html', 'header');
    loadContent('footer.html', 'footer');
});

function loadContent(url, targetId) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            document.getElementById(targetId).innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}
