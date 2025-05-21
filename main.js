const elForm = document.querySelector(".form"),
elNumber = document.querySelector(".number")
elHIisoblash = document.querySelector(".btn")
elPerson = document.querySelector(".person")
elVelo = document.querySelector(".velo")
elMoshina = document.querySelector(".moshina")
elSamalyot = document.querySelector(".Samalyot");

elForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const personSpeed = 3.6;
    const veloSpeed = 20.1;
    const moshinaSpeed = 70.1;
    const samalyotSpeed = 800.1;

    const inputValue =elNumber.value;

    if (String(inputValue).lenget ===0) {
        alert("Iltimos, masofani Kiriting");
        return;
    } else {
        elPerson.innerHTML = `${Math.round(inputValue / personSpeed)} soat`;
        elVelo.innerHTML = `${Math.round(inputValue / veloSpeed)} soat`;
        elMoshina.innerHTML = `${Math.round(inputValue / moshinaSpeed)} soat`;
        elSamolyot.innerHTML = `${Math.round(inputValue / samolyotSpeed)} soat`;
        
        elForm.requestFullscreen();

    }
});