const middlewareForRoute = (req, res, next) => {
    console.log('middleware applicato alla rotta');
    next();
};

export default middlewareForRoute;
