export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  });
};

export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session',
  });
};

export const fetchCurrentUser = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  });
};

export const updateUser = (formData) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${formData.get('user[id]')}`,
    contentType: false,
    processData: false,
    data: formData
  })
}
