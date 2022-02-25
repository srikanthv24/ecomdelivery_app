const API_URL = process.env.REACT_BASE_URL;

export class UpdateOrder {
    static updateOrder =  (data) => {
        return fetch(`https://c3vy4pkb7g.execute-api.ap-south-1.amazonaws.com/prod/kotorder/${data.endPoint}`, {
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