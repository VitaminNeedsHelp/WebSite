let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let eyeL = document.getElementById(".eyeball-l");
let eyeR = document.getElementById(".eyeball-r");
let handL = document.getElementById(".hand-l");
let handR = document.getElementById(".hand-r");

let normalEyeStyle = () => {
    eyeL.style.cssText =
        `left: 0.6em;
        top: 0.6em;`;
    eyeR.style.cssText =
        `right: 0.6em;
        top: 0.6em;`;
};

let normalHandStyle = () => {
    handL.style.cssText =
        `height: 2.81em;
        top: 8.4em;
        left: 7.5em;
        transform: rotate(0deg);`;
    handR.style.cssText =
        `height: 2.81em;
        top: 8.4em;
        right: 7.5em;
        transform: rotate(0deg);`;
};

usernameRef.addEventListener("focus", () => {
    eyeL.style.cssText =
        `left: 0.75em;
        top: 1.12em;`;
    eyeR.style.cssText =
        `right: 0.75em;
        top: 1.12em;`;
    normalHandStyle();
});

passwordRef.addEventListener("focus", () => {
    normalEyeStyle();
    handL.style.cssText =
        `height: 2.81em;
        top: 8.4em;
        left: 7.5em;
        transform: rotate(15deg);`;
    handR.style.cssText =
        `height: 2.81em;
        top: 8.4em;
        right: 7.5em;
        transform: rotate(-15deg);`;
});