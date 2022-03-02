const API_URL = process.env.REACT_APP_BASE_URL;

export class Orders {
    static getOrders = (action) => {
        console.log("ACTION_GETORDERS_API", action);
        const {mobile, fromDate, toDate} = action.payload;
        return fetch(`${API_URL}/deliverypartner?mobile=${mobile}&fromdate=${fromDate}&todate=${toDate}`, {
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