const middlewareRouterPosts = (req, res, next) => {
    console.log('middleware applicato al routerPosts');
    next();
};

export default middlewareRouterPosts;
