const url = `http://localhost:3030`;

export const getAllGames = async () => {
  const res = await fetch(`${url}/data/games?sortBy=_createdOn%20desc`);
  const result = await res.json();

  return result;
};

export const getGameById = async (id) => {
  const res = await fetch(`${url}/data/games/${id}`);
  const result = await res.json();

  return result;
};

export const getLatestGames = async () => {
  const res = await fetch(
    `${url}/data/games?sortBy=_createdOn%20desc&distinct=category`
  );
  const result = await res.json();

  return result;
};

export const createGame = (data, token) => {
  fetch(`${url}/data/games`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify(data),
  });
};

export const deleteGameById = async (id, token) => {
  const res = await fetch(`${url}/data/games/${id}`, {
    method: "DELETE",
    headers: {
      "X-Authorization": token,
    },
  });
  const result = await res.json();

  return result;
};
