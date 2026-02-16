import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProduct(props) {
    return (
        <Col sm={12} md={6} lg={4}>
            <Card>
                {/* <Card.Img
                variant="top"
                src="https://picsum.photos/id/237/100/200"
            /> */}
                <Card.Body>
                    <Card.Title>{props.titolo}</Card.Title>
                    <Card.Text>{props.testo}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default CardProduct;
