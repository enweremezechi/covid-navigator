
//get all classes
let totalCase = document.querySelector('.total-case'),
    activeCase = document.querySelector('.active-case')
    totalRecovered = document.querySelector('.total-recovered')
    totalDeath = document.querySelector('.total-death')
    columnFirst = document.querySelector('.col-1')
    columnSecond = document.querySelector('.col-2')
    columnThird = document.querySelector('.col-3')
    columnFour = document.querySelector('.col-4')
    columnFive = document.querySelector('.col-5')
    columnSix = document.querySelector('.col-6')
    newCount1 = document.querySelector('.new-count-1')
    newCount2 = document.querySelector('.new-count-2')
    newCount3 = document.querySelector('.new-count-3')
    newCount4 = document.querySelector('.new-count-4')
    kovidDate = document.querySelector('.kovid-date')
    kovidMobileDate = document.querySelector('.kovid-mobile-date')





const engine = (className, value) =>{
    return className.textContent = value;
}



let baseUrl = "https://api.covid19api.com";

const loadApi = async () => {
    try{
        let res = await fetch(`${baseUrl}/summary`);
        const globe = await res.json()
        let caseForm = globe.Global;
        // console.log(caseForm)
        engine(totalCase, caseForm.TotalConfirmed)
        engine(newCount1,`+${caseForm.NewConfirmed}`)
        engine(newCount3, `+${caseForm.NewRecovered}`)
        activeCase.textContent = `${(caseForm.TotalConfirmed) - (caseForm.TotalDeaths + caseForm.TotalRecovered)}`,
       
        engine(totalRecovered, caseForm.TotalRecovered)
        engine(totalDeath, caseForm.TotalDeaths)
        engine(columnFirst, caseForm.TotalConfirmed)
        columnSecond.textContent = `${(caseForm.TotalConfirmed) - (caseForm.TotalDeaths + caseForm.TotalRecovered)}`,
        engine(columnThird, caseForm.TotalRecovered)
        engine(columnFour, caseForm.TotalDeaths)
        let newCase = columnFive.textContent = `${(caseForm.NewConfirmed) - (caseForm.NewDeaths + caseForm.NewRecovered)}`
        engine(newCount2,`+${newCase}`)
        engine(columnSix, caseForm.NewDeaths)
        engine(newCount4, `+${caseForm.NewDeaths}`)
       // displayCount(caseForm)
        
    } catch(err){
        console.log(err)
    }
}


loadApi()





const date = new Date().toUTCString()
engine(kovidDate, date)
engine(kovidMobileDate, date)

// burger menu 
 const getBtn = document.querySelector('.burger');
  getBtn.addEventListener('click', validate);
  function validate(){
      let eze = document.querySelector('.nav-links');
      if(eze.style.display === 'none') {
          eze.style.display = 'block'
      }else {
          eze.style.display = 'none'
      }
  }