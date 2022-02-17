//income calculation function

function getIncomeTotal(){
    const income = document.getElementById('income');
    const incomeTotal = parseFloat(income.value);
    return incomeTotal;
}
// expence calculatuion funcation

function expenceTotal(){

    const food = document.getElementById('food');
    const foodCost = parseFloat(food.value);    
    const rent = document.getElementById('rent');
    const rentCost = parseFloat(rent.value);
    const clothes = document.getElementById('clothes');
    const clothesCost = parseFloat(clothes.value);     
    
    // calculation

    const totalExpensesValue = foodCost + rentCost + clothesCost;    
    return totalExpensesValue;
}

// income to expance calculation

document.getElementById('calculate').addEventListener('click', function(){
    
    if ( getIncomeTotal() > 0 && expenceTotal() > 0 && expenceTotal() <= getIncomeTotal() ) {

    const expensesText = document.getElementById('total-expenses');
    const balanceText = document.getElementById('remaining-balance');     

    // update on the html

    expensesText.innerText = expenceTotal();
    balanceText.innerText = getIncomeTotal() - expenceTotal();

    document.getElementById('aleart-top').style.display = 'none';

    }
    else{
       document.getElementById('aleart-top').style.display = 'block';
    }
})

// saving function

document.getElementById('save').addEventListener('click', function() {

    const parsentage = document.getElementById('parsantage').value;
    const parsantageAmount = getIncomeTotal() * parsentage / 100;
    const rBalance = getIncomeTotal() - expenceTotal();

    if (parsantageAmount > rBalance && parsentage > 0){
        document.getElementById('aleart-top-savings').style.display = 'block';
    }
    else if (isNaN(getIncomeTotal())){
        document.getElementById('aleart-top').style.display = 'block';
    }
    else{
    // update html savings and balanceText

    document.getElementById('savings-amount').innerText = parsantageAmount;
    document.getElementById('r-blance').innerText = getIncomeTotal() - expenceTotal() - parsantageAmount;

    document.getElementById('aleart-top-savings').style.display = 'none';
    }   
})