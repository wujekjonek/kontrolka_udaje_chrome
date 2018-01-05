function focusoutMinuta() {
    if (document.getElementById("minuta").value > 59) {
        document.getElementById("minuta").value = 59;
    }
    document.getElementById("minuta").style.backgroundColor = "";
}

function focusMinuta() {
    document.getElementById("minuta").style.backgroundColor = "lightblue";
}
