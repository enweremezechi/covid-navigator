let mainUrl = "https://api.covid19api.com";
let listAll =  document.querySelector('.list-all')

const listCountries = async () => {
    try{
        let resp = await fetch(`${mainUrl}/summary`)
        let result = await resp.json()
        // console.log(result.Countries)
        getTopTenCountries(result.Countries)
        // getOption(result.Countries)
    }catch{
        console.log(`${err}: 404 NOT FOUND`)
    }
}

function getTopTenCountries (country){
    
    let red = country.sort((a,b) => {
        return b.TotalConfirmed - a.TotalConfirmed
    })

    let topTen = red.slice(0, 10);
    // console.log(topTen)
    
     let sorted = topTen.map(name => {
             return `
             <div class="column2">
                <div class="kovid-img-name">
               <div class= "country-code">${name.CountryCode}</div class= "country-code">
                 <span>${name.Country}</span> 
                </div>
                <p>${name.TotalConfirmed}</p>
                 </div>
              `
         })
          .join('');
        
         listAll.innerHTML = sorted;
}

listCountries();