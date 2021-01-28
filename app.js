const num2text = {
    ones: ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'],
    tens: ['', '', 'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'],
    sep: ['', ' Thousand, ', ' Million, ', ' Billion, ', ' Trillion, ', ' Quadrillion, ', ' Quintillion, ', ' Sextillion, ']
  };
  const convert = function(val) {
    if (val.length === 0) {
      return '';
    }
  
    val = val.replace(/,/g, '');
    if (isNaN(val)) {
      return 'Invalid input.';
    }
  
  
    let [val1, val2] = val.split(".")
    let str2 = "";
    if (val2 != null && val2 != '') {
      //convert the decimals here
      var digits = (val2+"0").slice(0,2).split("");
      str2 = num2text.tens[+digits[0]] + " " + num2text.ones[+digits[1]]
    }
    let arr = [];
    while (val1) {
      arr.push(val1 % 1000);
      val1 = parseInt(val1 / 1000, 10);
    }
    let i = 0;
    let str = "";
    while (arr.length) {
      str = (function(a) {
        var x = Math.floor(a / 100),
          y = Math.floor(a / 10) % 10,
          z = a % 10;
  
        return (x > 0 ? num2text.ones[x] + ' Hundred and ' : '') +
          (y >= 2 ? num2text.tens[y] + ' ' + num2text.ones[z] : num2text.ones[10 * y + z]);
      })(arr.shift()) + num2text.sep[i++] + str;
    }
  
    return str +
      ' Naira' +
      (str2 ? ', ' + str2 + ' Kobo' : '') +
      ' Only';
  };
  


Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

Date.prototype.formatMMDDYYYY = function(){
    return  this.getDate() +
    "/" + (this.getMonth() + 1) + 
    "/" +  this.getFullYear();
}


function clearfields(){
    document.querySelector('#clientName').value = '';
    document.querySelector('#periodRepay').value = '';
    document.querySelector('#amount').value = '';
    document.querySelector('#interest').value = '';
    document.querySelector('#dateDisburse').value = '';
}













document.querySelector('#calc-form').addEventListener('submit', function(e){
    e.preventDefault();

    const clientName = document.querySelector('#clientName').value;
    const loanAmount = parseFloat(document.querySelector('#amount').value);
    const interest = parseFloat(document.querySelector('#interest').value);
    const totalAmount = loanAmount + interest;

    const amountInWords = convert(`${totalAmount}`);

    const dateDisburse = new Date(document.querySelector('#dateDisburse').value);
    const periodRepay = document.querySelector('#periodRepay').value;

    const periodInDays = parseInt(periodRepay) * 7;
    const lastRepay = dateDisburse.addDays(periodInDays);

    const repayment = totalAmount / parseInt(periodRepay);

    if(clientName === '' || document.querySelector('#amount').value === '' || document.querySelector('#interest').value === '' || document.querySelector('#dateDisburse').value === '' || periodRepay === ''){

        alert('Please Fill In All Fields');
        clearfields();

    } else{

        $('#tab').show();

        document.querySelector('#tab table').innerHTML = `
        <tbody>
            <tr>
                <th colspan="2">Client Name:</th>
                <th colspan="4">${clientName}</th>
            <tr>
                <th colspan="2">Amount In Figures:</th>
                <th colspan="4">${loanAmount.toLocaleString(undefined,{'minimumFractionDigits':2, 'maximumFractionDigits':2})}</th>
            </tr>
            <tr>
                <th colspan="2">TOTAL INTEREST:</th>
                <th colspan="4">${interest.toLocaleString(undefined,{'minimumFractionDigits':2,'maximumFractionDigits':2})}</th>
            </tr>
            <tr>
                <th colspan="2">TOTAL AMOUNT:</th>
                <th colspan="4">${totalAmount.toLocaleString(undefined,{'minimumFractionDigits':2,'maximumFractionDigits':2})}</th>
            </tr>
            <tr>
                <th colspan="2">AMOUNT (In words):</th>
                <th colspan='4'>${amountInWords}</th>
            </tr>
            <tr>
                <th colspan="2">Date of Disbursment</th>
                <th colspan="4">${dateDisburse.toDateString()}</th>
            </tr>
            <tr>
                <th colspan="2">Date of Last Repayment</th>
                <th colspan="4">${lastRepay.toDateString()}</th>
            </tr>
            <tr>
                <th colspan="2">Period For Repayment</th>
                <th colspan="4">${periodRepay}</th>
            </tr>
            <tr>
                <th colspan="2">Repayment</th>
                <th colspan="4">${repayment.toLocaleString(undefined, {'minimumFractionDigits':2, 'maximumFractionDigits':2})}</th>
            </tr>
            <tr>
                <th colspan='6' class='text-center'>LEASE REPAYMENT SCHEDULE</th>
            </tr>
            <tr>
                <th scope="col" style="width: 50px"></th>
                <th scope="col" style="height: 55px; padding: 5px; vertical-align: bottom;">Periods</th>
                <th scope="col" style="height: 55px; padding: 5px; vertical-align: bottom;">Repayment</th>
                <th scope="col" style="height: 55px; padding: 5px; vertical-align: bottom;">COS</th>
                <th scope="col" style="height: 55px; padding: 5px; vertical-align: bottom;">TOTAL</th>
                <th scope="col" style="height: 55px; padding: 5px; vertical-align: bottom;">Issuer Sign</th>
            </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="6">&copy; Capital Edge.</td>
          </tr>
        </tfoot>
    `;



    let currentDate = dateDisburse.addDays(7);

    for( let i = 1; i <= parseInt(periodRepay); i++ ){
        const amount = loanAmount / parseInt(periodRepay);
        const int = interest / parseInt(periodRepay);
        const total = int + amount;

        const date = currentDate.formatMMDDYYYY()
        

        const tr = document.createElement('tr');

        tr.innerHTML = `
            <th scope="row">${i}</th>
            <td>${date}</td>
            <td>${amount.toLocaleString(undefined, {'minimumFractionDigits':2, 'maximumFractionDigits':2})}</td>
            <td>${int.toLocaleString(undefined, {'minimumFractionDigits':2, 'maximumFractionDigits':2})}</td>
            <td>${total.toLocaleString(undefined, {'minimumFractionDigits':2, 'maximumFractionDigits':2})}</td>
            <td></td>
        `;

        document.querySelector('#tab table tbody').appendChild(tr);

        currentDate = currentDate.addDays(7);

    } 

    // Clear fields
    clearfields();


    // Show Button
    document.querySelector('#pdf').innerHTML = `
        <button class="btn btn-primary">Save PDF</button>
    `
    }

});





//Print on click
$('#pdf').on('click', 'button', function(){
    window.print();
});

