const cyprtoapi = new cryptoAPI();
const ui = new UI();


const formID = document.getElementById('form');
formID.addEventListener('submit', event => {

    event.preventDefault();

    //read values of form fields
    let currency = document.getElementById('currency').value;
    let cryptocurrency = document.getElementById('cryptocurrency').value;
    if (currency === '' || cryptocurrency === '') {
        ui.printMessage('All fields are Mandatory', 'deep-orange darken-4 card-panel');

    }
    else {

        cyprtoapi.queryAPI(currency, cryptocurrency)
            .then(function (data) {
                ui.displayResult(data.response[0], currency);

            })

    }
});