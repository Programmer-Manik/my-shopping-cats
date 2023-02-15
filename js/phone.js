
function allPhoneprice(phonePulse){
    const inputNumber = document.getElementById('input-pone-text');
    const inputNumberString = inputNumber.value ; 
    const inputnumberpules = parseInt(inputNumberString)

    let totalPhoe ;

    if(phonePulse === true){
        totalPhoe = inputnumberpules + 1;
    }
    else{
        totalPhoe = inputnumberpules - 1;
    }

    inputNumber.value = totalPhoe;

    return totalPhoe;
}


function totalPhonemany(phonePulse){
    const totalAllPricePhone = phonePulse * 1219;
    const phonePriceall = document.getElementById('phone-total');
    phonePriceall.innerText = totalAllPricePhone;
}


document.getElementById('btn-phone-palus').addEventListener('click', function(){
    const phonePulse = allPhoneprice(true) 
    totalPhonemany(phonePulse)
    myalltaka()
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
  const phonePulse =  allPhoneprice(false)  
  totalPhonemany(phonePulse)
  
  myalltaka()
})