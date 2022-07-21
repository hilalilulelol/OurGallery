import { Col, Container, Image, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Imagestiga from "../assets/images/dua/fototiga.png"
import Imagesempat from "../assets/images/dua/fotoempat.png"


const Kedua = () => {
    return (
     <div>
        <Container>
            <br />
            <h1 className='text-white text-center'> ~2020~ </h1>
            <br />
            <Row>
             <Col md={6} className='ImageWrapper' id='kedua'>
              <Card className="Imagessembilan">
                <Image src={Imagestiga} alt="2020" />
                <div className='bg-dark'>
                    <div className='p-2 m-1 text-white'>
                    <Card.Title className='text-center'>2020</Card.Title>
                    <Card.Text className='text-left'>
                    ini pas baru masuk sma
                    </Card.Text>
                    <Card.Text className='text-left'>3 years ago</Card.Text>
                    </div>
                </div>
              </Card>
             </Col>
             <Col md={6} className='ImageWrapper'>
              <Card className="Imagessembilan">
                <Image src={Imagesempat} alt="2020" />
                <div className='bg-dark'>
                    <div className='p-2 m-1 text-white'>
                    <Card.Title className='text-center'>2020</Card.Title>
                    <Card.Text className='text-left'>
                    nah kalo ini pas coronii menyerang
                    </Card.Text>
                    <Card.Text className='text-left'>3 years ago</Card.Text>
                    </div>
                </div>
              </Card>
             </Col>
            </Row>
        </Container>
     </div>
    )
}

export default Kedua