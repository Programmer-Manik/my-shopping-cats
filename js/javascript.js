function caseNumber(paramita){
    const inputNumberFiled = document.getElementById('input-filed');
    const inputNumberFiledString = inputNumberFiled.value ;
    const newNumberIputFiled = parseInt(inputNumberFiledString);

    let newNumberCount ;

    if(paramita === true){
        newNumberCount = newNumberIputFiled + 1;
    }
    else{
        newNumberCount = newNumberIputFiled - 1;
    }

    inputNumberFiled.value = newNumberCount;

    return newNumberCount ;
}

function totalCasePirce(newNumberCount){
    const  totaleNumber = newNumberCount * 59;
    const caseTotalNumberText = document.getElementById('case-total');
    caseTotalNumberText.innerText =  totaleNumber ; 
}
document.getElementById('btn-case-palus').addEventListener('click', function(){
   const newNumberCount = caseNumber(true)
   totalCasePirce(newNumberCount)

   myalltaka()
})

document.getElementById('btn-case-maines').addEventListener('click', function(){
    const newNumberCount = caseNumber(false)
    totalCasePirce(newNumberCount)
    myalltaka()
})