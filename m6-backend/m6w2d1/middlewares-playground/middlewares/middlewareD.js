const middlewareD = (req, res, next) => {
    console.log('middleware D');
    next();
};

export default middlewareD;
