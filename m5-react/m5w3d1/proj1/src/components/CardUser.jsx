import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { ContextTheme } from '../contextes/ThemeContext';

function CardUser(props) {
    const { theme } = useContext(ContextTheme);

    return (
        <Col sm={12} md={6} lg={4}>
            <Card className={theme == 'dark' && 'bg-dark'}>
                {/* <Card.Img
                variant="top"
                src="https://picsum.photos/id/237/100/200"
            /> */}
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.email}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default CardUser;
