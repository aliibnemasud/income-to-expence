function getIncomeTotal(){
    const income = document.getElementById('income');
    const incomeTotal = parseFloat(income.value);
    return incomeTotal;
}

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

document.getElementById('calculate').addEventListener('click', function(){    
    
    const expensesText = document.getElementById('total-expenses');
    const balanceText = document.getElementById('remaining-balance');     

    // update on the html

    expensesText.innerText = expenceTotal();
    balanceText.innerText = getIncomeTotal() - expenceTotal();   

})


document.getElementById('save').addEventListener('click', function() {

    const parsectage = document.getElementById('parsantage').value;
    const parsantageAmount = getIncomeTotal() * parsectage / 100;


    
    
    
})