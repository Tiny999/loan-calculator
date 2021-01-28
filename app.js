Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

document.querySelector('#calc-form').addEventListener('submit', function(e){
    e.preventDefault();

    const clientName = document.querySelector('#clientName').value;
    const loanAmount = parseFloat(document.querySelector('#amount').value);
    const interest = parseFloat(document.querySelector('#interest').value);
    const totalAmount = loanAmount + interest;
    const dateDisburse = new Date(document.querySelector('#dateDisburse').value);
    const periodRepay = document.querySelector('#periodRepay').value;

    const periodInDays = parseInt(periodRepay) * 7;
    const lastRepay = dateDisburse.addDays(periodInDays);

    const repayment = totalAmount / parseInt(periodRepay);

    if(clientName === '' || document.querySelector('#amount').value === '' || document.querySelector('#interest').value === '' || document.querySelector('#dateDisburse').value === '' || periodRepay === ''){

        alert('Please Fill In All Fields');

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
                <th colspan='4'>One Million, Three Hundred And Seventeen Thousand, Nine Hundred & Fourty One Naira, Twenty One Kobo</th>
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
            <td colspan="6">*All rights reserved.</td>
          </tr>
        </tfoot>
    `;

    // let currentDate = new Date(document.querySelector('#dateDisburse').value);

    for( let i = 1; i <= parseInt(periodRepay); i++ ){
        const amount = loanAmount / parseInt(periodRepay);
        const int = interest / parseInt(periodRepay);
        const total = int + amount;
        

        const tr = document.createElement('tr');

        tr.innerHTML = `
            <th scope="row">${i}</th>
            <td>29/06/20</td>
            <td>${amount.toLocaleString(undefined, {'minimumFractionDigits':2, 'maximumFractionDigits':2})}</td>
            <td>${int.toLocaleString(undefined, {'minimumFractionDigits':2, 'maximumFractionDigits':2})}</td>
            <td>${total.toLocaleString(undefined, {'minimumFractionDigits':2, 'maximumFractionDigits':2})}</td>
            <td></td>
        `;

        document.querySelector('#tab table tbody').appendChild(tr);

    } 





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

