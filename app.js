document.querySelector('#calc-form').addEventListener('submit', function(e){
    e.preventDefault();

    document.querySelector('#tab').innerHTML = `
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Periods</th>
                <th scope="col">COS</th>
                <th scope="col">TOTAL</th>
                <th scope="col">Issuer Sign</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
        </tbody>
    `;
})