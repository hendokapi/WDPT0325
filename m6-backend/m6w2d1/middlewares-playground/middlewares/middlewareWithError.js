const middlewareWithError = (req, res, next) => {
    console.log('middleware with error');
    try {
        throw new Error('errore simulato');
    } catch (error) {
        next(error);
    }
    next();
};

export default middlewareWithError;
