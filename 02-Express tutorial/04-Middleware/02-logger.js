const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const timer = new Date().getFullYear();
    console.log(method, url, timer)
    if(res.status=='404'){
        res.status(200).send(url.replace('/',' ') + ' not found');
    }
    // res.send('Testing')
    next();
}
module.exports = logger;