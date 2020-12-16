const REACT_APP_API_URL = "http://localhost:4000/api/v1"
const userId = localStorage.getItem('id')

class StateModel {

    static all = () => {
        // Calling the index method in the API controller
        return fetch(`${REACT_APP_API_URL}/mystates`).then(res => res.json())
    }

    static show = () => {
        return fetch(`${REACT_APP_API_URL}/mystates/${userId}`).then(res => res.json())
    }

    static create = (savedState, userId) => {
        console.log(savedState, userId)
        return fetch(`${REACT_APP_API_URL}/mystates`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ savedState, userId })
        })
            .then(res => res.json())
    }
}




export default StateModel