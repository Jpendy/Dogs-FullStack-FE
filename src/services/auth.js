// import { post, get } from '../services/requests';

// export const fetchSignup = (username, password) => {
//   return post('/api/v1/auth/signup', { username, password });
// };

// export const fetchLogin = (username, password) => {
//   return post('/api/v1/auth/login', { username, password });
// };

export const fetchSignup = (username, password) => {
  return fetch('http://localhost:7890/api/v1/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ username, password })    
  })
    .then(res => res.json());
};

export const fetchLogin = (username, password) => {
  return fetch('http://localhost:7890/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ username, password })    
  })
    .then(res => res.json());
};


// export const fetchVerify = () => get('/api/v1/auth/verify');
export const fetchVerify = () => {
  return fetch('http://localhost:7890/api/v1/auth/verify', {
    credentials: 'include'
  })
    .then(res => res.json());
};
