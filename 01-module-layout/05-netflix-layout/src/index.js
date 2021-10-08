console.log('hello from playground');

function screenCounter() {
    let screenWidth = window.innerWidth;
    let topNumber = document.getElementById("top-text");

    if (screenWidth > 1280) {
        topNumber.innerHTML = "5";
    } else { topNumber.innerHTML = "3"};
}

window.onresize = () => {
    screenCounter();
};

screenCounter();