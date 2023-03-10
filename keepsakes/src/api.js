import axios from "axios";

const api = axios.create({
  baseURL: `https://nc-marketplace-sem-4.onrender.com/api/`,
});

export const fetchListings = (searchOptions, currentPage) => {};

export const fetchItemById = (item_id) => {
  return api.get(`/items/${item_id}`).then(({ data: { item } }) => {
    return item;
  });
};

export const fetchLatestDeals = () => {
  return api.get("/items").then(({ data }) => {
    console.log(data);
    return data;
  });
};

export const fetchUser = (username) => {
  return api.get(`/users/${username}`).then(({ data: { user } }) => {
    console.log(typeof user);
    return user;
  });
};
