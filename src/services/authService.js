const url = `http://localhost:3030`;

export const loginRequest = async (email, password) => {
  const res = await fetch(url + `/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const result = await res.json();

  if (res.ok !== true) {
    throw new Error(result.message);
  } else {
    return result;
  }
};

export const registerRequest = async (email, password) => {
  const res = await fetch(url + `/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const result = await res.json();
  return result;
};
