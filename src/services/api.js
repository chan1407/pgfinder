const API_URL = "http://localhost:3000";

export const getPGs = async () => {
  const response = await fetch(`${API_URL}/pgs`);

  if (!response.ok) {
    throw new Error("Failed to fetch PGs");
  }

  return response.json();
};

export const getPGById = async (id) => {
  const response = await fetch(`${API_URL}/pgs/${id}`);

  if (!response.ok) {
    throw new Error("PG not found");
  }

  return response.json();
};

export const createPG = async (pgData) => {
  const response = await fetch(`${API_URL}/pgs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pgData),
  });

  return response.json();
};

export const updatePG = async (id, pgData) => {
  const response = await fetch(`${API_URL}/pgs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pgData),
  });

  return response.json();
};

export const deletePG = async (id) => {
  const response = await fetch(`${API_URL}/pgs/${id}`, {
    method: "DELETE",
  });

  return response.json();
};
