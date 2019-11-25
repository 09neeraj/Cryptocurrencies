class cryptoAPI {


    // get all the crypto currency
    async getCryptoCurrencies() {
        const url = await fetch('https://api.coinmarketcap.com/v1/ticker/');
        let CryptoCurrencies = await url.json();

        return {
            CryptoCurrencies
        }
    }


    async queryAPI(currency, cryptocurrency) {
        const url = await fetch(`https://api.coinmarketcap.com/v1/ticker/${cryptocurrency}/?convert=${currency}`);
        const response = await url.json();

        return {
            response
        }
    }
}