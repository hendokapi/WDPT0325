export default function middlewareBSelector(selector) {
    if (selector == 1) {
        return (req, res, next) => {
            console.log('middleware B-1');
            next();
        };
    } else {
        return (req, res, next) => {
            console.log('middleware B-2');
            next();
        };
    }
}
