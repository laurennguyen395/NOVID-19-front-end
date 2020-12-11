const COVID_API_URL = 'https://api.covidtracking.com'
const REACT_APP_API_URL = "http://localhost:4000/api/v1"

class ByStateModel {

    static all = () => {
        // Calling the index method in the API controller
        return fetch(`${COVID_API_URL}/v1/states/current.json`).then(res => res.json())
    }

    static show = (state) => {
        return fetch(`${COVID_API_URL}/v1/states/${state}/current.json`).then(res => res.json())
    }
    
}




export default ByStateModel