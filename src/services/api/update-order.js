const API_URL = process.env.REACT_APP_BASE_URL_ADMIN;

export class UpdateOrder {
    static updateOrder =  (data) => {
        return fetch(`${API_URL}/${data.endPoint}`, {
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