import { Col, Container, Image, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Imagestujuh from "../assets/images/empat/fotosembilan.png"
import Imagesdelapan from "../assets/images/empat/fotodelapan.png"


const Keempat = () => {
    return (
     <div>
        <Container>
            <br />
            <h1 className='text-white text-center'> ~2022~ </h1>
            <br />
            <Row>
             <Col md={6} className='ImageWrapper' id='keempat'>
              <Card className="Imagessembilan">
                <Image src={Imagestujuh} alt="2022" />
                <div className='bg-dark'>
                    <div className='p-2 m-1 text-white'>
                    <Card.Title className='text-center'>2022</Card.Title>
                    <Card.Text className='text-left'>
                    kalo ini pas mata merah menyerang
                    </Card.Text>
                    <Card.Text className='text-left'>two months ago</Card.Text>
                    </div>
                </div>
              </Card>
             </Col>
             <Col md={6} className='ImageWrapper'>
              <Card className="Imagessembilan">
                <Image src={Imagesdelapan} alt="2022" />
                <div className='bg-dark'>
                    <div className='p-2 m-1 text-white'>
                    <Card.Title className='text-center'>2022</Card.Title>
                    <Card.Text className='text-left'>
                    ini tuh pas hanipah graduation sma
                    </Card.Text>
                    <Card.Text className='text-left'>two months ago</Card.Text>
                    </div>
                </div>
              </Card>
             </Col>
            </Row>
        </Container>
     </div>
    )
}

export default Keempat