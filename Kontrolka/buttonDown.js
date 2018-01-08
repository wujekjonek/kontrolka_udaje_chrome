function buttonDown() {
    console.log(" function buttonDown()");
    // todo tu kod z arrow down
    let poleGodzin = document.getElementById("godzina");
    let tymczasowaZmienna = parseInt(poleGodzin.value) - 1;
    if (tymczasowaZmienna < 10 && tymczasowaZmienna >= 0) {
        tymczasowaZmienna = "0" + tymczasowaZmienna;
    }
    if (tymczasowaZmienna === -1) {
        console.log("tymczasowaZmienna == -1   ");
        tymczasowaZmienna = 23;
    }
    if (poleGodzin.value === "") {
        console.log("tymczasowaZmienna == -1   ");
        tymczasowaZmienna = 23;
    }
    poleGodzin.value = tymczasowaZmienna;
    pokazIks();

}
