const middlewareC = (req, res, next) => {
    console.log('middleware C');
    next();
};

export default middlewareC;
