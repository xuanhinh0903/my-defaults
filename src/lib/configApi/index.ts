export type ConfigApi = {
  url: string;
};

const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer YOUR_ACCESS_TOKEN", // get your access token in localstorage
};

export const api = {
  get: async ({ url }: ConfigApi) => {
    try {
      const response = await fetch(url, {
        ...headers,
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw new Error(String(error));
    }
  },

  post: async <T extends ConfigApi>({ url, ...props }: T) => {
    try {
      const response = await fetch(url, {
        ...headers,
        method: "POST",
        body: JSON.stringify(props),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw new Error(String(error));
    }
  },

  patch: async <T extends ConfigApi>({ url, ...props }: T) => {
    try {
      const response = await fetch(url, {
        ...headers,
        method: "PATCH",
        body: JSON.stringify(props),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw new Error(String(error));
    }
  },

  delete: async <T extends ConfigApi>({ url, ...params }: T) => {
    try {
      const response = await fetch(url, {
        ...headers,
        method: "DELETE",
        body: JSON.stringify(params),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw new Error(String(error));
    }
  },
};
