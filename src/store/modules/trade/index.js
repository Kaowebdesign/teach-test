import axios from "axios";
import {instance} from '@/utils/axios';
import {BASE_EXCHANGE, EXCHANGES} from '@/constants/api';

// actions
export const GET_SYMBOLS = 'GET_SYMBOLS';
export const GET_KLINES = 'GET_KLINES';
// mutations
export const SET_SYMBOLS = 'SET_SYMBOLS';
export const SET_KLINES = 'SET_KLINES';

export default {
    state:{
        symbols:[
            {
                id: 'BTCUSDT',
                name: 'BTC/USD'
            },
            {
                id: 'ETHUSD',
                name: 'ETH/USD'
            }
        ],
        interval: [
            {
                name: '1m',
                code: '1m'
            },
            {
                name: '1h',
                code: '1h'
            },
            {
                name: '1d',
                code: '1d'
            },
            {
                name: '1w',
                code: '1w'
            },
            {
                name: '1M',
                code: '1M'
            }
        ],
        chartData: {
            ohlcv: []
        },
        langs: [
            {
                icon: 'en.png',
                title: 'END'
            },
            {
                icon: 'deu.png',
                title: 'DEU'
            },
            {
                icon: 'ita.png',
                title: 'ITA'
            },
            {
                icon: 'fra.png',
                title: 'FRA'
            },
            {
                icon: 'jpn.png',
                title: 'JPN'
            },
            {
                icon: 'che.png',
                title: 'CHE'
            },
            {
                icon: 'rus.png',
                title: 'RUS'
            }
        ]
    },
    mutations:{
        [SET_SYMBOLS] (state, payload) {
            state.symbols = payload
        },
        [SET_KLINES] (state, payload) {
            state.chartData.ohlcv = payload
        },
    },
    actions:{
        async [GET_SYMBOLS] ({commit}) {

            try {
                const response = await instance.get(EXCHANGES[BASE_EXCHANGE].REQUEST_EXCHANGE_INFO)
              
                if( response.status == 200 ) {
                    const {data} = response;
                    const symbols = data['symbols'];

                    commit(SET_SYMBOLS, symbols);
                }
            } catch (error) {
                console.log('error', error);
            }
        },
        async [GET_KLINES] ({commit, state}, payload) {
            try {
                const params = {
                    'symbol': state.symbols[0].id || payload.symbol,
                    'interval': state.interval[0].code || payload.interval
                }

                const response = await instance.get(EXCHANGES[BASE_EXCHANGE].REQUEST_KLINES, {params})
              
                if( response.status == 200 ) {
                    const {data} = response;
                    const chartData = [];

                    data.length && data.forEach(function(item) {
                        chartData.push([item[0], +item[1], +item[2], +item[3], +item[4]])
                    });

                    commit(SET_KLINES, chartData);
                }
            } catch (error) {
                console.log('error', error);
            }
        }
    },
    getters:{

    }
}