module.exports = (req, res, next) => {
    if(req.method === 'POST' && req.path === '/login') {
        if(req.body.username === 'username' && req.body.password === '123456') {
            return res.status(200).json({
                user: {
                    token: '123456'
                },
                message: '登录成功！'
            })
        } else {
            return res.status(400).json({
                message: '用户名或者密码错误'
            })
        }
    }
    next()
}