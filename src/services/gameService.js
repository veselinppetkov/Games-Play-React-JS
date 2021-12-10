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
