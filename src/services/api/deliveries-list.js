const API_URL = process.env.REACT_APP_BASE_URL;

export class DeliveriesList {
    static getDeliveriesList = (action) => {
        const {mobile, fromDate, toDate, type} = action.payload;
        return fetch(`${API_URL}/allorders?mobile=${mobile}&fromdate=${fromDate}&todate=${toDate}&type=${type}`, {
            method: 'get',
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