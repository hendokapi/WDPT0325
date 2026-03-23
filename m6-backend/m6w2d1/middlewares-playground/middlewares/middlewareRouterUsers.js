const middlewareRouterUsers = (req, res, next) => {
    console.log('middleware applicato al routerUsers');
    next();
};

export default middlewareRouterUsers;
