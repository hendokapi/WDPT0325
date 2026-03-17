import express from 'express';
import 'dotenv/config';

const PORT = process.env.PORT;

const server = express();
server.use(express.json());

const router = express.Router();

router.get('/', (request, response) => {
    console.log('hai visitato la root');
    response.send({
        saluto: 'ciao',
    });
});

router.get('/posts/:postId', (request, response) => {
    console.log(request.params);
    console.log(request.query);
    const postId = request.params.postId;
    console.log(postId);
    response.send({
        postId: postId,
    });
});

router.post('/', (request, response) => {
    console.log(request.body);
    response.status(404).send({
        message: 'nel body il titolo è: ' + request.body.title,
    });
});

server.use(router);

server.listen(PORT, () => {
    console.log(`Server in esecuzione alla porta ${PORT}`);
});
