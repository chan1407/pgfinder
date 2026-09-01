const API_URL = "https://pgfinder-server.onrender.com";

export const getPGs = async () => {
  const response = await fetch(`${API_URL}/api/data/`);

  if (!response.ok) {
    throw new Error("Failed to fetch PGs");
  }

  const data = await response.json();

  return data.pgs;
};

export const getPGById = async (id) => {
  const pgs = await getPGs();

  const pg = pgs.find((item) => String(item.id) === String(id));

  if (!pg) {
    throw new Error("PG not found");
  }

  return pg;
};

export const getUsers = async () => {
  const response = await fetch(`${API_URL}/api/data/`);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await response.json();

  return data.users;
};
