var XHR = new XMLHttpRequest() {
    console.log("READY STATE IS... " + XHR.readyState);
}

XHR.open("GET", "https://api.github.com/zen");
XHR.send();