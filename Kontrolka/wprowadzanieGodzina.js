function wprowadzanieGodzina() {
    console.log("w polu godzin wcisnięto klawisz.key: " + event.key);
    console.log("w polu godzin wcisnięto klawisz.keyCode: " + event.keyCode);

    let poleGodzin = document.getElementById("godzina");

    if (event.key === "ArrowUp") {
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

    else if (event.key === "ArrowDown") {
        let tymczasowaZmienna = (poleGodzin.value) - 1;
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

    else if (event.key === "ArrowRight") {
        document.getElementById("minuta").focus();
    }

    else if (event.key === "Tab") {
        console.log("Tab w godzinie ################ ");
        document.getElementById("minuta").focus();
    }

    else if (
        ((poleGodzin.value === "00") || (poleGodzin.value === "01"))
        &&
        ((event.keyCode >= 48) && (event.keyCode <= 57) || (event.keyCode >= 96) && (event.keyCode <= 105))
    ) {
        let tymczasowaZmienna = poleGodzin.value.substring(1, 2);
        poleGodzin.value = tymczasowaZmienna + event.key;
        document.getElementById("minuta").focus();
        pokazIks();
    }

    else if (
        (poleGodzin.value === "02")
        &&
        ((event.keyCode >= 48) && (event.keyCode <= 51) || (event.keyCode >= 96) && (event.keyCode <= 99))
    ) {
        let tymczasowaZmienna = poleGodzin.value.substring(1, 2);
        poleGodzin.value = tymczasowaZmienna + event.key;
        document.getElementById("minuta").focus();
        pokazIks();
    }

    else if (
        (poleGodzin.value === "02")
        &&
        ((event.keyCode >= 52) && (event.keyCode <= 57) || (event.keyCode >= 100) && (event.keyCode <= 105))
    ) {
        poleGodzin.value = 23;
        document.getElementById("minuta").focus();
        pokazIks();
    }

    else if ((event.keyCode >= 51) && (event.keyCode <= 57) || (event.keyCode >= 99) && (event.keyCode <= 105)) {
        let tymczasowaZmienna = "0" + event.key;
        poleGodzin.value = tymczasowaZmienna;
        document.getElementById("minuta").focus();
        pokazIks();
    }

    else if ((event.keyCode >= 48) && (event.keyCode <= 50) || (event.keyCode >= 96) && (event.keyCode <= 98)) {
        let tymczasowaZmienna = "0" + event.key;
        poleGodzin.value = tymczasowaZmienna;
        pokazIks();
    }

    else {
        if (poleGodzin.value.length === 1) {
            poleGodzin.value = "";
            console.log("wszystkie inne klawisze w godzinie!!!!!!!!!! ");
        }
    }
}
