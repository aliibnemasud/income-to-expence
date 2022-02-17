document.getElementById('calculate').addEventListener('click', function(){
 

    const income = document.getElementById('income');
    const incomeTotal = parseFloat(income.value);

    const food = document.getElementById('food');
    const foodCost = parseFloat(food.value);    
    const rent = document.getElementById('rent');
    const rentCost = parseFloat(rent.value);
    const clothes = document.getElementById('clothes');
    const clothesCost = parseFloat(clothes.value);

    const expensesText = document.getElementById('total-expenses');
    const balanceText = document.getElementById('remaining-balance');   
    
    // calculation
    const totalExpensesValue = foodCost + rentCost + clothesCost;
    const balance = incomeTotal - totalExpensesValue;   

    // update on the html
    expensesText.innerText = totalExpensesValue;
    balanceText.innerText = balance;    

})


