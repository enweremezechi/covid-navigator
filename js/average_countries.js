let countryUrl = `https://api.covid19api.com`;

const countryApi = async () => {
    try{
    let response = await fetch(`${countryUrl}/summary`)
        let testing = await response.json() 
        // console.log(testing.Countries)
        getCountryDetails(testing.Countries)
        
    }catch(err){
        console.log(`${err} NOT FOUND`)
    }
}

const perCountryApi = async (counrtyName) => {
    try{
        let getCountries = await fetch(`${countryUrl}/country/${counrtyName}`)
        let isACountry = await getCountries.json() 
        let lastName = isACountry[isACountry.length-1]
        console.log(lastName)
        document.querySelector('.cn').innerHTML = `
       
            <div class="kovid-result">
                <div class="kovid-total-cases">
                 <img src="" alt="" class="kol">
                  <p>Total Cases</p>
                   <p><span>${lastName.Confirmed}</span></p>
            </div>
             <div class="kovid-total-deaths">
                <img src="" alt="" class="kol">
                <p>Total Deaths</p>
                <p><span>${lastName.Deaths}</span></p>
            </div>
            </div>
            <div class="kovid-result">
            <div class="kovid-total-recoveries">
            <img src="" alt="" class="kol">
            <p>Total Recoveries</p>
            <p><span>${lastName.Recovered}</span></p>
            </div>
            <div class="kovid-active-cases">
                <img src="" alt="" class="kol">
                <p>Active Cases</p>
                <p><span>${lastName.Active}</span></p>
            </div>
            </div>
            <div class="kovid-result">
            <div class="kovid-new-cases">
            <img src="" alt="" class="kol">
            <p>New Cases</p>
            <p><span>${(lastName.Active) - (lastName.Deaths + lastName.Recovered)}</span></p>
            </div>
            <div class="kovid-new-deaths">
            <img src="" alt="" class="kol">
            <p>New Deaths</p>
            <p><span>${lastName.Recovered - (lastName.Confirmed - lastName.Active)}</span></p>
            </div>
        `;
        // document.querySelector('.cn').innerHTML = who
    }catch(err){
        console.log(`${err} NOT FOUND`)
    }
}


let perCountry = document.querySelector('#kovid-countries'),
    gridA = document.querySelector('.gridA')

 function getCountryDetails (opt){
    // let perCountry = document.querySelector('#kovid-countries').value
    let countryArr = opt.map(el => {
        // console.log(el.Country)
        return`
        <option value="${el.Country}">${el.Country}</option>
        `
    })
    perCountry.innerHTML = countryArr;
    console.log(perCountry)

    perCountry.addEventListener('click', (e) => {
        e.preventDefault()
        let getValue = e.target.value;
        console.log(getValue)
        perCountryApi(getValue)
    })
 }

// map
var map;
function initMap(lat, lng) {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 5.476310, lng: 7.025853 },
    zoom: 12
  });
}

 countryApi()
