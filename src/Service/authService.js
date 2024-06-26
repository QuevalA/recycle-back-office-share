import axios from 'axios'
import jwt_decode from 'jwt-decode'

export async function loginFunction(email, password) {
  let url = `${process.env.REACT_APP_API_URL}api/login_check`

  return axios
    .post(url, {
      username: email,
      password: password,
    })
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('id', jwt_decode(res.data.token).id)
      localStorage.setItem('roles', jwt_decode(res.data.token).roles)

      return res
    })
    .catch((err) => {
      return err
    })
}
