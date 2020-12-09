const COVID_API_URL = 'https://api.covidtracking.com'

class UsModel {

    static all = () => {
        // Calling the index method in the API controller
        return fetch(`${COVID_API_URL}/v1/us/current.json`).then(res => res.json())
    }
}


export default UsModel