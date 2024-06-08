export function redirectToLink(url) {
    if (url) {
        window.location.href = url;
    } else {
        window.location.href = '/';
    }
}
