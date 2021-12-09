const getAllGames = async () => {
  const res = await fetch(
    `http://localhost:3030/data/games?sortBy=_createdOn%20desc`
  );
  const data = await res.json();

  return data;
};

export default getAllGames;
