function wprowadzanieMinuta() {
    console.log("w polu minut wcisnięto klawisz.key: " + event.key);
    console.log("w polu minut wcisnięto klawisz.keyCode: " + event.keyCode);

    let poleMinut = document.getElementById("minuta");

    if (event.key === "ArrowUp") {
        let tymczasowaZmienna = parseInt(poleMinut.value) + 1;
        if (tymczasowaZmienna < 10) {
            tymczasowaZmienna = "0" + tymczasowaZmienna;
        }
        if (tymczasowaZmienna > 59) {
            tymczasowaZmienna = "00";
        }
        if (poleMinut.value === "") {
            tymczasowaZmienna = "00";
        }
        poleMinut.value = tymczasowaZmienna;
        pokazIks();
    }
    else if (event.key === "ArrowDown") {
        let tymczasowaZmienna = parseInt(poleMinut.value) - 1;
        if (tymczasowaZmienna < 10 && tymczasowaZmienna >= 0) {
            tymczasowaZmienna = "0" + tymczasowaZmienna;
        }
        if (tymczasowaZmienna === -1) {
            tymczasowaZmienna = 59;
        }
        if (poleMinut.value === "") {
            tymczasowaZmienna = 59;
        }
        poleMinut.value = tymczasowaZmienna;
        pokazIks();
    }

    else if (event.key === "ArrowLeft") {
        document.getElementById("godzina").focus();
    }

    else if (event.key === "Tab") {

        console.log("Tab w minucie ################ ");
//             document.getElementById("godzina").focus();
        document.getElementById("minuta").blur();
    }

    else if ((event.keyCode >= 48) && (event.keyCode <= 57) || (event.keyCode >= 96) && (event.keyCode <= 105)) {
        if (poleMinut.value.length === 1) {
            let tymczasowaZmienna = "0" + event.key;
            poleMinut.value = tymczasowaZmienna;
            pokazIks();
        }
        else {
            let tymczasowaZmienna = poleMinut.value.substring(1, 2);
            poleMinut.value = tymczasowaZmienna + event.key;

        }
    }
    else {
        if (poleMinut.value.length === 1) {
//                poleMinut.value = "";
            console.log("wszystkie inne klawisze w minucie ################ ");
            event.preventDefault();
        }
    }
}
