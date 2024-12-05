const API_URL = import.meta.env.VITE_API_URL;

const apiService = {
  get: async (endpoint: string) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return response.json();
  },

  post: async (endpoint: string, data: any) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return response.json();
  },

  put: async (endpoint: string, data: any) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return response.json();
  },

  delete: async (endpoint: string) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return response.json();
  },
};

export default apiService;
