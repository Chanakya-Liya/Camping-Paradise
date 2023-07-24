let visible = false;
function displayContents() {
    if (visible == true) {
        document.getElementById('contents').style.display = "none";
        visible = false;
    } else if (visible == false) {
        document.getElementById('contents').style.display = "flex";
        visible = true;
    }
}
