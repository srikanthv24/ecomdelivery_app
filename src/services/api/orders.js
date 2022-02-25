const API_URL = process.env.REACT_BASE_URL;

export class Orders {
    static getOrders = (action) => {
        return fetch(`https://c3vy4pkb7g.execute-api.ap-south-1.amazonaws.com/prod/deliverypartner?mobile=9550163323&fromdate=2022-02-24&todate=2022-02-25`, {
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