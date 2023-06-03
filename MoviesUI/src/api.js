const API_URL = "https://localhost:50514/api/Movies";
const DIRECTORS_URL = "https://localhost:50514/api/Directors";

async function api_getAllDirectors(){
  return fetch("https://localhost:50514/api/Directors")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return data;
  })
}

async function api_getAll() {
  return fetch(API_URL)
    .then((response) => {
      return response.json();
    })
}


/*
async function api_getAll() {
  let response;
  try {
    //response = await fetch(API_URL);
    fetch(API_URL)
    .then((response) => {
      if(!response.ok){
        console.log("response was not ok")
      }else{
        return response.json;
      }
    })
    .then((response) => {
      console.log(response);
    })
  } catch (error) {
    console.error(error);
  } finally {
    if (!response || !response.ok) {
      return null;
    } else return response.json();
  }
}
*/
async function api_post(payload) {
  await fetch(API_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
}


async function api_addNewDirector(payload){
  await fetch("https://localhost:50514/api/Directors", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
}

  /*
  let response;
  try {
    response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error(error);
  } finally {
    if (!response || !response.ok) {
      return false;
    } else return true;
  }*/


async function api_put(payload) {
  let response;
  try {
    response = await fetch(API_URL + `/${payload.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error(error);
  } finally {
    if (!response || !response.ok) {
      return false;
    } else return true;
  }
}

async function api_putDirectors(payload) {
  let response;
  try {
    response = await fetch(DIRECTORS_URL + `/${payload.directorId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error(error);
  } finally {
    if (!response || !response.ok) {
      return false;
    } else return true;
  }
}

async function api_delete(id) {
  const newURL = API_URL + `/${id}`;
  console.log(newURL);
  return await fetch(newURL, { method: 'DELETE' })
    .then(response => { return response.json() });
  //const response = await fetch(API_URL + `/${id}`, { method: 'DELETE' })
  //.then(response => {console.log(response.json())})

  /*let response;
  try {
    response = await fetch(API_URL + `/${id}`, { method: "DELETE" });
  } catch (error) {
    console.error(error);
  } finally {
    if (!response || !response.ok) {
      return false;
    } else return true;
  }*/
}
async function api_deleteDirector(directorId) {
  const newUrl = DIRECTORS_URL + `/${directorId}`;
  return await fetch(newUrl, {method: 'DELETE'})
    .then(response => { return response.json() });
}


export { api_getAll, api_post, api_put, api_delete, api_getAllDirectors, api_addNewDirector, api_deleteDirector, api_putDirectors };
