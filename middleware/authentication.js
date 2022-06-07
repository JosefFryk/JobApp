import jwt from 'jsonwebtoken'
import { UnAuthenticatedError } from '../errors/index.js'

const auth = ( req, res, next) => {
    //check header
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new UnAuthenticatedError('Authentication invalid')

    }
    //vse za Bearer
    const token = authHeader.split(' ')[1]

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        // attach the user to the job routes
        req.user = {userId: payload.userId, name:payload.name}
        next()
    } catch (error) {
        throw new UnAuthenticatedError('Authentication invalid')
    }
}

export default auth