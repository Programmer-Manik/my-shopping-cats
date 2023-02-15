function getTextElementById(element){
    const phonetoaltk = document.getElementById(element);
    const phonetoaltkString = phonetoaltk.innerText;
    const allphoneta = parseInt(phonetoaltkString);
    return allphoneta;
}

function myNameMank(elementId, value){
    const allTotalNumber = document.getElementById(elementId)
   allTotalNumber.innerText = value;
}

function myalltaka(){
    const allphoneta = getTextElementById('phone-total')
   const allcasetoal = getTextElementById('case-total')

   const subAllTotal = allphoneta + allcasetoal;
   myNameMank('subtotal-blancs', subAllTotal)


   const textAomunteAll = (subAllTotal * 0.1).toFixed(2)
   const textAomunteAllStrin = parseFloat(textAomunteAll)
   myNameMank('tex-amount', textAomunteAllStrin)

   const finaltext =  subAllTotal + textAomunteAll ;
   myNameMank('text-total', finaltext)

}