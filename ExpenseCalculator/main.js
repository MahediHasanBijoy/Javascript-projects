
//form validation
function validateInputs(btn) {

  if(btn == 'calc'){
    let errorCount = 0;
    //income input error handling
      const income = document.getElementById('income').value;
      if(income==''||income<0){
        document.getElementById('error-income').innerText = "Income value must be filled and value have to be non-negative";
        errorCount++;
      }else{
        document.getElementById('error-income').innerText = '';
      }

    //Expenses Inputs error handling
      const food = document.getElementById('food').value;
      const rent = document.getElementById('rent').value;
      const clothes = document.getElementById('clothes').value;

      if(food == '' && rent == '' && clothes == ''){
        document.getElementById('error-expense').innerText = "At least one expense must be needed.";
        errorCount++;
      }else{
        document.getElementById('error-expense').innerText = '';
      }

      if(food<0){
        document.getElementById('error-food').innerText = 'Negative value is invalid';
        errorCount++;
      }else{
        document.getElementById('error-food').innerText = '';
      }
      if(rent<0){
        document.getElementById('error-rent').innerText = 'Negative value is invalid';
        errorCount++;
      }else{
        document.getElementById('error-rent').innerText ='';
      }
      if(clothes<0){
        document.getElementById('error-clothes').innerText = 'Negative value is invalid';
        errorCount++;
      }else{
        document.getElementById('error-clothes').innerText = '';
      }
      

      if(errorCount>0){
        return false;
      }else{
        return true;
      }


  } 
  //error handling for saving input
  if(btn=='save-btn'){
    let errorCount= 0;

    let saveInput = document.getElementById('save').value;
    if(saveInput=="" || saveInput < 0 || saveInput>100){
      document.getElementById('error-save').innerText='Please input a number in a range of 0 to 100';
      errorCount++;

      //if error occurs then these field will become empty
      document.getElementById('saving-amount').innerText = 'Saving amount: ';
      document.getElementById('remaining-balance').innerText = 'Remaining Balance: ';
      document.getElementById('error-notsave').innerText = '';

    }else{
      document.getElementById('error-save').innerText = '';
    }

    if(errorCount>0){
      return false;
    }else{
      return true;
    }
  }

}

//Calculation function
function calculate(i, f, r, c){

  let totalExpense = f + r + c;
  if(i>=totalExpense){
    let balance = i-totalExpense;

    document.getElementById('total-expense').innerText = 'Total Expense: '+totalExpense;
    document.getElementById('balance').innerText = balance;
    document.getElementById('error-bal').innerText = '';
  }else{
    document.getElementById('error-bal').innerText = 'Your income is not sufficient for these expense';
    document.getElementById('total-expense').innerText = 'Total Expense: '+0;
    document.getElementById('balance').innerText = ''+0;
  }

}

//Saving function
function saving(income, savingPercent, balance){
  let saving = income * savingPercent /100;
  if(saving>balance){
    //if error occurs then these field will become empty
    document.getElementById('saving-amount').innerText = 'Saving amount: '+0;
    document.getElementById('remaining-balance').innerText = 'Remaining Balance: '+0;
    //error
    document.getElementById('error-notsave').innerText = 'Your current balance is insufficient for saving this amount.';

  }else{
    let remainingBal = balance -saving;
    document.getElementById('saving-amount').innerText = 'Saving amount: '+ saving;
    document.getElementById('remaining-balance').innerText = 'Remaining Balance: '+ remainingBal;
    document.getElementById('error-notsave').innerText = '';
  }
  


}


//Calculation Expenses
document.getElementById('calc').addEventListener('click', ()=>{

  let error = validateInputs('calc');
  if(error){
    let incomeValue = income.value;
    let foodValue = food.value=='' ? 0 : parseFloat(food.value);
    let rentValue = rent.value=='' ? 0 : parseFloat(rent.value);
    let clothesValue = clothes.value=='' ? 0 : parseFloat(clothes.value);
    calculate(incomeValue, foodValue, rentValue, clothesValue);
  }
  

});

//Calculationg saving
document.getElementById('save-btn').addEventListener('click', ()=>{
  let error = validateInputs('save-btn');

  let savePercentage = document.getElementById('save').value;
  let balance = parseFloat(document.getElementById('balance').innerText);
  if(balance=''){
    balance = 0;
  }
  if(error){
    saving(income.value, savePercentage, balance);
  }
  
});