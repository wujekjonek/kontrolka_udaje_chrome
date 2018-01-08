function buttonUp() {
    console.log(" function buttonUp()");
    // console.log("kolor: " + document.getElementById("minuta").style.backgroundColor);




    // document.getElementById("btnUp").style.backgroundColor = "lightblue";



    // todo tu kod z arrow up
    // jesli focus w minutach to zwiększamy minuty - jesli nie to godziny


//     document.getElementById("minuta").style.backgroundColor = "lightblue";


//     this === document.activeElement




    if (document.getElementById("minuta")== document.activeElement) {
        console.log(" function buttonUp() w minutach !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        let poleMinut = document.getElementById("minuta");

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

    else {


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
        // document.getElementById("btnUp").style.backgroundColor = "";

    }





}
