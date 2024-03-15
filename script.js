const input_box=document.querySelector('.input-box')
const searchbtn=document.querySelector('#searchBtn')
const temperature=document.querySelector('.temperature')
const humidity=document.querySelector('#humidity')
const wind_speed=document.querySelector('#wind-speed')
const weather_img=document.querySelector('.weather-image')
const description=document.querySelector('.description')
const location_not_found=document.querySelector('.location-not-found');
const weather_body=document.querySelector('.weather-body')
const Tryagain=document.querySelector('.Tryagain');
let weather_data;


async function checkWeather(city){
    const api_key='7fca2c92a6227913782e01524097b758';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const weather_data=await fetch(`${url}`).then(response => response.json());
    
    if(weather_data.cod ==='404'){
        location_not_found.style.display="flex";
        weather_body.style.display='none'
        console.log("error")
        // Tryagain.style.display="flex";
        return;
    }
    location_not_found.style.display="none";
    weather_body.style.display="flex";
    

console.log(weather_data)
    temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`

    description.innerHTML=`${weather_data.weather[0].description}`
    
    humidity.innerHTML=`${weather_data.main.humidity}%`

    wind_speed.innerHTML=`${weather_data.wind.speed}KM/H`

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src="/images/cloud.png";
            break;
            case 'Clear':
                weather_img.src="/images/clear.png";
                break;
                case 'Rain':
                    weather_img.src="/images/rain.png";
                    break;
                    case 'Snow':
                        weather_img.src="/images/snow.png";
                        break;
                        case 'Mist':
                            weather_img.src="/images/mist.png";
                            
                        }
                        
                        // Tryagain.style.display="flex"
                    }


searchbtn.addEventListener('click',()=>{
    checkWeather(input_box.value)
})

Tryagain.addEventListener('click',()=>{
    location.reload();
})