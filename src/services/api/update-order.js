const API_URL = process.env.REACT_APP_BASE_URL;

export class UpdateOrder {
    static updateOrder =  (data) => {
      console.log("API_URL",API_URL );
        return fetch(`${API_URL}/kotorder/${data.endPoint}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `${sessionStorage.getItem("id_token")}`,
          },
          body: JSON.stringify(data.payload),
        })
          .then((res) => res.json())
          .then((data) => {
            return data;
          })
          .catch((error) => {
            return error;
          });
      };
}