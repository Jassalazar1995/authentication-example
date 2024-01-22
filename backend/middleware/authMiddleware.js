const jwt = require('jsonwebtoken')

function authorize(req,res, next){
    
try {
    console.log('authorizing....')

    // 1. Check if the request has a token (in the Authorization header)

    const token = req.header("Authorization")

    if(!token){
        return res.status(403).json({ error: "No token provided" })
    }
    console.log(token) // "Bearer 9j343jfdsf94FDSAf43"

    token = token.replace("Bearer ", "") // "9j343jfdsf94FDSAf43"

    // 2. Check that the token is valid and not expired

    const payload = jwt.verify(token,process.env.JWT_SECRET)

    if (payload.error){
        return res.status(400).json({ error: payload.error })

    }

    

    // 3. Attach the payload from the token to the request object (req)
    req.id = payload.id
    req.username = payload.username
    
    // 4. Move on to the requested route (next)

    next()
} catch (error) {
    console.log(error.message)
    res.status(400).json({ error: error.message})
}
}

module.exports = {
    authorize
}