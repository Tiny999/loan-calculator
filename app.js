const { jsPDF } = window.jspdf;

document.querySelector('#calc-form').addEventListener('submit', function(e){
    e.preventDefault();

    document.querySelector('#tab').innerHTML = `
        <tbody>
            <tr>
                <th colspan="2">Client Name:</th>
                <th colspan="2">Adegoke Mathew</th>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <th colspan="2">Amount In Figures:</th>
                <th>908,925.00</th>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <th colspan="2">TOTAL INTEREST:</th>
                <th>409,016.90</th>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <th colspan="2">TOTAL AMOUNT:</th>
                <th>1,317,941.07</th>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <th colspan="2">AMOUNT (In words):</th>
                <th colspan='4'>One Million, Three Humdred And Seventeen Thousand, Nine Hundred & Fourty One Naira, Twenty One Kobo</th>
            </tr>
            <tr>
                <th colspan="2">Date of Disbursment</th>
                <th colspan="4">19th June 2020</th>
            </tr>
            <tr>
                <th colspan="2">Date of Last Repayment</th>
                <th colspan="4">08 December 2020</th>
            </tr>
            <tr>
                <th colspan="2">Period For Repayment</th>
                <th colspan="4">72</th>
            </tr>
            <tr>
                <th colspan="2">Repayment</th>
                <th colspan="4">18,500.00</th>
            </tr>
            <tr>
                <td></td>
                <th colspan='2' class='text-center'>LEASE REPAYMENT SCHEDULE</th>
                <td></td>
                <td></td>
                <td></td>
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
        </tbody>
    `;

    $('#pdf').show();
})

$('#pdf').click(function(){
    // const table = $('#tab').html()

    var doc = new jsPDF('p', 'pt', 'a4');

    doc.html(document.querySelector('#tab'), {
      callback: function (doc) {
        doc.save('loan-details.pdf');
      },
      margin: [60, 60, 60, 60],
      x: 32,
      y: 32,
    });
})

