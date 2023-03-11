import axios from 'axios';

const api = axios.create({
  baseURL: `https://nc-marketplace-sem-4.onrender.com/api/`,
});

export const fetchListingsLength = (searchOptions) => {
  let path = `/items`;

  return api.get(path).then(({ data: { items } }) => {
    return items.length;
  });
};

export const fetchListings = (searchOptions, currentPage) => {
  let path = `/items?limit=10&p=${currentPage}`;
  if (searchOptions) {
    if (searchOptions.category_name)
      path += `&category_name=${searchOptions.category_name}`;
    if (searchOptions.search) path += `&search=${searchOptions.search}`;
  }

  return api.get(path).then(({ data: { items } }) => {
    return items;
  });
};

export const fetchItemIDs = () => {
  return api.get(`/items`).then(({ data: { items } }) => {
    const itemIDs = items.map((item) => item.item_id);
    return itemIDs;
  });
};

export const fetchItemById = (item_id) => {
  return api.get(`/items/${item_id}`).then(({ data: { item } }) => {
    return item;
  });
};

export const fetchLatestDeals = () => {
  return api.get('/items').then(({ data: { items } }) => {
    return items;
  });
};

export const fetchUser = (username) => {
  return api.get(`/users/${username}`).then(({ data: { user } }) => {
    return user;
  });
};

export const postUser = (user) => {
  return api.post('/users', user).then(({ data: { user } }) => {
    return user;
  });
};

export const postItem = (item) => {
  return api.post('/items', item).then(({ data }) => {
    return data;
  });
};

export const postOrder = (item_id, username) => {
  return api
    .post(`/users/${username}/orders`, { item_id })
    .then(({ data: { item } }) => {
      return item;
    });
};
