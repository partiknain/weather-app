const button = document.getElementById('search-button');
const Input = document.getElementById('city-input');
const cityname =document.getElementById('city-name');
const temp = document.getElementById('temp');
const time = document.getElementById('city-time');
async function getdata(cityName){
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=1bd75a6b7c404b069d8125941260505&q=${cityName}&aqi=no`);
    return  await response.json();
}
button.addEventListener('click', async () => {
    const cityName = Input.value;
    const data = await getdata(cityName);
    cityname.textContent =`${data.location.name}, ${data.location.country}`;
    temp.textContent=`${data.current.temp_c}°C`;
    time.textContent=`${data.location.localtime}`;
})