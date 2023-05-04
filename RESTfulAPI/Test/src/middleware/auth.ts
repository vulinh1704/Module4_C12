import jwt from "jsonwebtoken";

export const SECRET = '123456'
export const auth = (req, res, next) => {
    let authorization = req.headers.authorization;
    if(authorization) {
        let accessToken = authorization.split(' ')[1];
        if (accessToken) {
            jwt.verify(accessToken, SECRET, (err, payload) => {
                if(err) {
                    res.status(401).json({
                        error: err.message,
                        message: 'Bạn k có quyền'
                    })
                } else {
                    req.decode = payload;
                    return next();
                }
            })
        } else {
            res.status(401).json({
                message: 'Bạn k có quyền'
            })
        }
    } else {
        res.status(401).json({
            message: 'Bạn k có quyền'
        })
    }
}