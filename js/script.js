const elForm = document.querySelector(".form");
const elFormInput = document.querySelector(".form__input");
const elPeopleSpeed = document.querySelector(".result__people");
const elBicycleSpeed = document.querySelector(".result__bicycle");
const elCarSpeed = document.querySelector(".result__car");
const elPlaneSpeed = document.querySelector(".result__plane");

// speed off the transports
const byFoot = 3.6;
const byBicycle = 20.1;
const byCar = 70;
const byPlane = 800;

elForm.addEventListener('submit', function(evt){
    evt.preventDefault()
    const inputValue = elFormInput.value;
    // peope for
    walkHour = Math.floor((inputValue/byFoot));
    walkMin = ((Number(inputValue/byFoot) - Math.floor((inputValue/byFoot))) *60).toFixed(0);
    elPeopleSpeed.textContent = `${walkHour}soat, ${walkMin}min`; 
    //bicycle for
    bikeHour = Math.floor((inputValue/byBicycle));
    bikeMin = ((Number(inputValue/byBicycle) - Math.floor((inputValue/byBicycle))) *60).toFixed(0);
    elBicycleSpeed.textContent = `${bikeHour}soat, ${bikeMin}min`; 
    // car for
    carHour = Math.floor((inputValue/byCar));
    carMin = ((Number(inputValue/byCar) - Math.floor((inputValue/byCar))) *60).toFixed(0);
    elCarSpeed.textContent = `${carHour}soat, ${carMin}min`; 
    // plane for
    planeHour = Math.floor((inputValue/byPlane));
    planeMin = ((Number(inputValue/byPlane) - Math.floor((inputValue/byPlane))) *60).toFixed(0);
    elPlaneSpeed.textContent = `${planeHour}soat, ${planeMin}min`; 
     
})