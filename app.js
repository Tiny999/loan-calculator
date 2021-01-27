var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
}


document.querySelector('#calc-form').addEventListener('submit', function(e){
    e.preventDefault();
    $('#tab').show();

    const clientName = document.querySelector('#clientName').value;
    const loanAmount = parseFloat(document.querySelector('#amount').value);
    const interest = parseFloat(document.querySelector('#interest').value);
    const totalAmount = loanAmount + interest;
    const dateDisburse = document.querySelector('#dateDisburse').value;
    const periodRepay = document.querySelector('#periodRepay').value;

    // console.log(dateDisburse)

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
                <th colspan="4">${dateDisburse}</th>
            </tr>
            <tr>
                <th colspan="2">Date of Last Repayment</th>
                <th colspan="4">08 December 2020</th>
            </tr>
            <tr>
                <th colspan="2">Period For Repayment</th>
                <th colspan="4">${periodRepay}</th>
            </tr>
            <tr>
                <th colspan="2">Repayment</th>
                <th colspan="4">18,500.00</th>
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
            <tr>
                <th scope="row">1</th>
                <td>29/06/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>06/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>13/07/20</td>
                <td>12,819.22</td>
                <td>5,470.78</td>
                <td>18,500.00</td>
                <td></td
            </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="6">*All rights reserved.</td>
          </tr>
        </tfoot>
    `;

    document.querySelector('#pdf').innerHTML = `
        <button class="btn btn-primary">Save PDF</button>
    `
});

$('#pdf').on('click', 'button', function(){

    window.print();
});

