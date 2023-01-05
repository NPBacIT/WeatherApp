var search = document.querySelector('.input-search')
var city = document.querySelector('.city')
var coutry = document.querySelector('.coutry')
var time = document.querySelector('.time')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var cloud = document.querySelector('.cloud span')
var content = document.querySelector('.content')
var body = document.querySelector('body')


async function changeSearch(){
 
  let capitalSearch=  search.value.trim()
let apiURL= `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch} &appid=68fd77e01d92086ec15e214b087f6995`

let data=await fetch(apiURL).then(res=> res.json())
console.log(data)
 if(data.cod == 200)
 {
    content.classList.remove('hide')
    city.innerText= data.name
    coutry.innerText= data.sys.country
    visibility.innerText=data.visibility + 'm'
    wind.innerText = data.wind.speed + 'm/s'
    cloud.innerText = data.main.humidity +'%'
    const tempp = Math.round(data.main.temp - 273)
     value.innerText= tempp
    shortDesc.innerText= data.weather[0] ? data.weather[0].main :''
    time.innerText = new Date().toLocaleString('vi')

body.setAttribute('class', 'cold')
if(tempp >= 25){
  body.setAttribute('class', 'hot')

}

 }
 else{
    content.classList.add('hide')

 }
}

search.addEventListener('keypress', function(e){
  if(e.code === 'Enter'){

    changeSearch()
  }

})