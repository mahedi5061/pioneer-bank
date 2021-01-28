var loginBtn=document.getElementById('enter-login');
     //deposit Login Button handler
     loginBtn.addEventListener('click',function(){
     const loginHide=document.getElementById('login-area');
     loginHide.style.display="none";
     const transactionArea=document.getElementById('transaction-area');
     transactionArea.style.display="block";
})
//deposit submit Button handler
     const depositBtn=document.getElementById('addDepositBtn');
     depositBtn.addEventListener('click',function(){

          const depositAmount=getInputNumber('depositAmount');
           
          // without function
          // const depositAmount=document.getElementById('depositAmount').value;
          // const depositAmountNumber=parseFloat(depositAmount);
          //This method work without function
          // const currentDeposit=document.getElementById('currentDeposit').innerText;
          // const currentDepositNumber=parseFloat(currentDeposit);

          // const totalDeposit=depositAmount+currentDepositNumber;
          // document.getElementById('currentDeposit').innerText=totalDeposit;
          

          //This method work with function

          updateSpanText("currentDeposit",depositAmount);
          updateSpanText("currentBalance",depositAmount);
          document.getElementById('depositAmount').value="";

 
})

     //withdraw button

     const withdrawBtn=document.getElementById('withdrawBtn');
     withdrawBtn.addEventListener('click',function(){
          const withdrawAmount=getInputNumber('withdrawAmount');

           updateSpanText('currentWithdrawAmount',withdrawAmount);
           updateSpanText('currentBalance', -1* withdrawAmount);

          // without function
          // const currentWithdrawAmount=document.getElementById('currentWithdrawAmount').innerText;
          // const currentWithdrawAmountNumber=parseFloat(currentWithdrawAmount);

          // const totalWithdrawAmount=withdrawAmount+currentWithdrawAmountNumber;
          // document.getElementById('currentWithdrawAmount').innerText=totalWithdrawAmount;

          // const restBalance=document.getElementById('currentBalance').innerText;
          // const restBalanceAmount=parseFloat(restBalance);
          // const restTotalBalance=restBalanceAmount-withdrawAmountNumber;
          // document.getElementById('currentBalance').innerText=restTotalBalance;

          document.getElementById('withdrawAmount').value="";          
          

     })

     function getInputNumber(id){
          const amount=document.getElementById(id).value;
          const amountNumber=parseFloat(amount);
          return amountNumber;
     }



function updateSpanText(id,value){
     const current= document.getElementById(id).innerText;
     const currentNumber=parseFloat(current);
     const totalBalance=currentNumber+value;
     document.getElementById(id).innerText=totalBalance;
    }
