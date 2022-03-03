const API_BASE_URL = process.env.REACT_APP_BASE_URL;

export class Orders {
    static getOrders = (action) => {
        const {mobile, startDate} = action.payload;
        return fetch(`${API_BASE_URL}?mobile=${mobile}&startdate=${startDate}`, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `${sessionStorage.getItem('id_token')}`
             },
        }).then((response) => {
            return response.json()
        }).then((data) => {
            return data
        })
    }
}