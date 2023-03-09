import axios from 'axios';

export const fetchListings = (searchOptions, currentPage) => {};

export const fetchItemById = (item_id) => {};

export const fetchLatestDeals = () => {};

export const fetchUser = (username) => {
  const userAPI = axios.create({
    baseURL: `https://nc-marketplace-sem-4.onrender.com/api/users`,
  });

  return userAPI.get(`/${username}`).then(({ data: { user } }) => {
    console.log(typeof user);
    return user;
  });
};
