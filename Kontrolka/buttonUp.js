
function buttonUp() {
    console.log(" function buttonUp()");
    // todo tu kod z arrow up
    let poleGodzin = document.getElementById("godzina");
    let tymczasowaZmienna = parseInt(poleGodzin.value) + 1;
    if (tymczasowaZmienna < 10) {
        tymczasowaZmienna = "0" + tymczasowaZmienna;
    }
    if (tymczasowaZmienna > 23) {
        tymczasowaZmienna = "00";
    }
    if (poleGodzin.value === "") {
        tymczasowaZmienna = "00";
    }
    poleGodzin.value = tymczasowaZmienna;
    pokazIks();
}
