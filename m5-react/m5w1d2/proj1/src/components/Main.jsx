import Row from 'react-bootstrap/Row';
import CardProduct from './CardProduct.jsx';
import Container from 'react-bootstrap/Container';

function Main() {
    const cards = [
        {
            titolo: 'Ciao',
            testo: 'questo è il primo contenuto',
        },
        {
            titolo: 'due',
            testo: 'loremmmmm',
        },
        {
            titolo: 'tre',
            testo: 'gigi content',
        },
    ];

    return (
        <main>
            <Container fluid>
                <Row>
                    <CardProduct
                        titolo="Ciao"
                        testo="questo è il primo contenuto"
                    />
                    <CardProduct titolo="due" testo="loremmmmm" />
                    <CardProduct titolo="tre" testo="gigi content" />

                    {/* rendering a partire da un array */}
                    {cards.map((card) => (
                        <CardProduct titolo={card.titolo} testo={card.testo} />
                    ))}
                </Row>
            </Container>
        </main>
    );
}

export default Main;
