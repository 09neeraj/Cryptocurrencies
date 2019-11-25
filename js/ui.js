class UI {
    constructor() {
        this.init();
    }

    init() {
        this.printCryptoCurrencies();
    }

    printCryptoCurrencies() {
        //this FUNCTION is in cryptoAPI class so use its object to call it.
        cyprtoapi.getCryptoCurrencies()
            .then(data => {

                const CryptoCurrencies = data.CryptoCurrencies;

                //select drop down list ID 
                const cryptocurrencyID = document.getElementById('cryptocurrency');
                //run loop using cruptoCurrencies array 
                CryptoCurrencies.forEach(function (I) {

                    //create option element
                    const option = document.createElement('option');
                    option.value = I.id;
                    option.appendChild(document.createTextNode(I.name));
                    //append option element
                    cryptocurrencyID.appendChild(option);
                });
            })
    }

    //printMessage
    printMessage(message, className) {
        const div = document.createElement('div');
        div.className = className;
        div.textContent = message;

        const messageId = document.querySelector('.messages');
        messageId.appendChild(div);

        //remove child

        setTimeout(() => {
            document.querySelector('.messages div').remove();
        }, 3000);
    }


    //display result

    displayResult(response, currency) {


        //read the currency
        let currencyLowerCase = 'price_' + currency.toLowerCase();
        //read result from object
        let value = response[currencyLowerCase];
        //remove the previous result
        const prevResult = document.querySelector('#result > div');
        if (prevResult) {
            prevResult.remove();
        }

        let resultTemplate = '';
        resultTemplate += `
        <div class="card cyan darken-3">
                <div class="card-content white-text">
                    <span class="card-title">Result</span>
                    <p>The Price of ${response.name} from ${currency} is $ ${value}</p>
                    <p>Last Hour: ${response.percent_change_1h} %</p>
                    <p>Last Day: ${response.percent_change_24h} %</p>
                    <p>Last 7 Days: ${response.percent_change_7d} %</p>
                </div>
        </div>

        `;

        this.displaySpinner();



        setTimeout(() => {
            const result = document.querySelector('#result');
            result.innerHTML = resultTemplate;
            document.querySelector('.spinner img').remove();
        }, 3000);

    }

    displaySpinner() {

        const image = document.createElement('img');
        image.src = '/img/spinner.gif';
        const spinner = document.querySelector('.spinner');
        spinner.appendChild(image);
    }
}  