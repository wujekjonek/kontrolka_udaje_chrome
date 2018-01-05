function mouseOver() {
    console.log(" function MouseOver()");
    document.getElementById("kontrolka").style.backgroundColor = "red";
    document.getElementById("klawisze").style.visibility = 'visible';
    // todo   if godzina lub minuta nie puste pokazuj iks
    if ((document.getElementById("godzina").value != 0) || (document.getElementById("minuta").value != 0)) {
        pokazIks();
    }
    else {
        ukryjIks();
    }
}