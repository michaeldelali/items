
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

export function decode() {
    // setCookie(Cookies.get('token'))
    // setCurrentUser(jwt.decode(cookie))
    const cookie = Cookies.get('token')
    const currentUser = jwt.decode(cookie)
    return currentUser
}
 export const baseUrl = 'http://localhost:9000/'
//  export const baseUrl = '/node/'