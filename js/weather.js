
const API_KEY = "ac0aa36790eda57db8339252ef785858";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    })
    .catch(err => {console.log(err);})
}

function onGeoErr(){
    alert("Can't find you. No weather for you.")
}

// 현재 위치에 관한 정보를 가져옴 (모든게 정상적으로 가져오면 onGeoOk가 실행되며, 실패하면 onGeoErr를 실행한다.)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);