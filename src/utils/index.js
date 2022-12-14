export const tokenFetch = async (setUser) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${localStorage.getItem('myToken')}` },
    });
    const data = await response.json();
    setUser(data.user.username);
  } catch (error) {
    console.log(error);
  }
};

export const signUpFetch = async (username, email, passw, setSuccess) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        email,
        passw,
      }),
    });
    const data = await response.json();
    setSuccess(true);
    localStorage.setItem('myToken', data.token);
  } catch (error) {
    console.log(error);
  }
};

export const loginFetch = async (username, password, setUser) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    console.log(data.user.passw);
    setUser(data.user.username);
    localStorage.setItem('myToken', data.token);
    console.log(localStorage);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (username, passw, setUser) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        passw,
      }),
    });
    const data = await response.json();
    setUser(data.user);
    localStorage.removeItem('myToken');
  } catch (error) {
    console.log(error);
  }
};

export const logOut = () => {
  try {
    localStorage.removeItem('myToken');
  } catch (error) {
    console.log(error);
  }
};
