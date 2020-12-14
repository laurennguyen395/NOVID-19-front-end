const COVID_API_URL = 'https://api.covidtracking.com'


class ByStateModel {

    static all = () => {
        // Calling the index method in the API controller
        return fetch(`${COVID_API_URL}/v1/states/current.json`).then(res => res.json())
    }

    static show = (state) => {
        return fetch(`${COVID_API_URL}/v1/states/${state}/current.json`).then(res => res.json())
    }

    static allHistory = () => {
        return fetch(`${COVID_API_URL}/v1/states/daily.json`).then(res => res.json())
    }
    static allStateHistory = (state) => {
        return fetch(`${COVID_API_URL}/v1/states/${window.location.pathname.slice(8)}/daily.json`).then(res => res.json())
    }
}



export default ByStateModel