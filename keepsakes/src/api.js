import axios from 'axios';

const api = axios.create({
  baseURL: `https://nc-marketplace-sem-4.onrender.com/api/`,
});

export const fetchListings = (searchOptions, currentPage) => {
  let path = `/items?limit=10&p=${currentPage}`;

  return api.get(path).then(({ data: { items } }) => {
    return items;
  });
};

export const fetchItemById = (item_id) => {
  return api.get(`/items/${item_id}`).then(({ data: { item } }) => {
    return item;
  });
};

export const fetchLatestDeals = () => {
  return api.get('/items').then(({ data }) => {
    return data;
  });
};

export const fetchUser = (username) => {
  return api.get(`/users/${username}`).then(({ data: { user } }) => {
    return user;
  });
};

export const postItem = (item) => {
  return api.post('/items', item).then(({ data }) => {
    return data;
  });
};
