// Base exchange
export const BASE_EXCHANGE = 'BINANCE';
// Base request timeout
export const BASE_TIMEOUT = 1000;
// Exchanges api
export const EXCHANGES = {
    BINANCE : {
        BASE_API: 'https://api.binance.com',
        HEADERS: {
            'Access-Control-Allow-Headers': 'Content-Type',
            'X-MBX-APIKEY':'mKE5vD5ZH07ZLNyYXaSSxYNNYF0vBmnZDYev97cyL8RHchgC1y73yGizC7zqH19Y',
        },
        REQUEST_EXCHANGE_INFO: '/api/v1/exchangeInfo',
        REQUEST_KLINES: '/api/v3/klines'
    }
}