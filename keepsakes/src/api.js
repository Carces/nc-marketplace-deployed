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
  console.log(searchOptions, '<<<<<<<< FROM FETCH');
  let path = `/items?limit=10&p=${currentPage}`;
  if (searchOptions) {
    if (searchOptions.category_name)
      path += `&category_name=${searchOptions.category_name}`;
    if (searchOptions.search) path += `&search=${searchOptions.search}`;
    if (searchOptions.sort_by) path += `&sort_by=${searchOptions.sort_by}`;
    if (searchOptions.order) path += `&order=${searchOptions.order}`;
    if (searchOptions.min_price)
      path += `&min_price=${searchOptions.min_price}`;
    if (searchOptions.max_price)
      path += `&max_price=${searchOptions.max_price}`;
  }
  console.log(path);
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

export const fetchBasket = (username) => {
  return api.get(`/users/${username}/basket`).then(({ data: { items } }) => {
    return items;
  });
};

export const postBasketItem = (item_id, username) => {
  return api
    .post(`/users/${username}/basket`, { item_id })
    .then(({ data: { item } }) => {
      return item;
    });
};

export const deleteBasketItem = (item_id, username) => {
  return api.delete(`/users/${username}/basket/${item_id}`).then(() => {
    return;
  });
};

export const fetchOrders = (username) => {
  return api.get(`/users/${username}/orders`).then(({ data: { items } }) => {
    return items;
  });
};

export const postOrder = (item_id, username) => {
  return api
    .post(`/users/${username}/orders`, { item_id })
    .then(({ data: { item } }) => {
      return item;
    });
};
