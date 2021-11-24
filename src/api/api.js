const API = {
  apiURL: "https://back-lo-to.herokuapp.com/tasks",
  fetchGetAll: () => fetch(API.apiURL),
  fetchGetById: (id) => fetch(`${API.apiURL}/${id}`),
  fetchPost: (data) => {
    return fetch(`${API.apiURL}/add`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  },
  fetchPut: (task, id) => {
    return fetch(`${API.apiURL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(task),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  },
  fecthDelete: (id) => {
    return fetch(`${API.apiURL}/${id}`, {
      method: "DELETE",
    });
  },
};

export default API;
