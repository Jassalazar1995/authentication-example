function authorize(req,res, next){
    
try {
    console.log('authorizing....')

    // 1. Check if the request has a token (in the Authorization header)

    const token = req.header("Authorization")

    if(!token){
        return res.status(403).json({ error: "No token provided" })
    }
    console.log(token)
    // 2. Check that the token is valid and not expired

    


    // 3. Attach the payload from the token to the request object (req)

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