const middlewareA = (req, res, next) => {
    console.log('middleware A');
    next();
};

export default middlewareA;
