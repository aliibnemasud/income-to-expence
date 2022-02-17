document.getElementById('calculate').addEventListener('click', function(){
 

    const income = document.getElementById('income');
    const incomeTotal = parseFloat(income.value);
    


    const food = document.getElementById('food');
    const foodCost = parseFloat(food.value);
    
    const rent = document.getElementById('rent');
    const rentCost = parseFloat(rent.value);
    const clothes = document.getElementById('clothes');
    const clothesCost = parseFloat(clothes.value);

    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesvalue = parseFloat(totalExpenses.value);

    const remainingBalance = document.getElementById('remaining-balance');
    

    totalExpenses.innerText = foodCost + rentCost + clothesCost;

    remainingBalance.innerText = incomeTotal - totalExpensesvalue;
    

})