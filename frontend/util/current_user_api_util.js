export const fetchUserInformation = (user) => {
  return $.ajax(
    method: 'GET'
    url: `/api/users/${user.id}`
  )
}
