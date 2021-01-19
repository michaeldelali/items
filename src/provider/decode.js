
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

export default function decode() {
    // setCookie(Cookies.get('token'))
    // setCurrentUser(jwt.decode(cookie))
    const cookie = Cookies.get('token')
    const currentUser = jwt.decode(cookie)
    return currentUser
}
