const refs= {
    range : document.getElementById("font-size-control"),
    text : document.getElementById("text"),
}

refs.range.addEventListener("input", OnRange);

function OnRange (even) {
    refs.text.style.fontSize = `${even.target.value}px`;
}