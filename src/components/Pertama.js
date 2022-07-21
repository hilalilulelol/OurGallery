import { Col, Container, Image, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Imagessatu from "../assets/images/satu/fotosatu.png"
import Imagesdua from "../assets/images/satu/fotodua.png"


const Pertama = () => {
    return (
     <div>
        <Container>
            <br />
            <h1 className='text-white text-center'> ~2019~ </h1>
            <br />
            <Row>
             <Col md={6} className='ImageWrapper' id='pertama'>
              <Card className="Imagessembilan">
                <Image src={Imagessatu} alt="2019" />
                <div className='bg-dark'>
                    <div className='p-2 m-1 text-white'>
                    <Card.Title className='text-center'>2019</Card.Title>
                    <Card.Text className='text-left'>
                    ini kalo ga salah pas abis lulus mts 
                    </Card.Text>
                    <Card.Text className='text-left'>4 years ago</Card.Text>
                    </div>
                </div>
              </Card>
             </Col>
             <Col md={6} className='ImageWrapper'>
              <Card className="Imagessembilan">
                <Image src={Imagesdua} alt="2019" />
                <div className='bg-dark'>
                    <div className='p-2 m-1 text-white'>
                    <Card.Title className='text-center'>2019</Card.Title>
                    <Card.Text className='text-left'>
                    nah kalo ini pas masi mts
                    masiii bocill
                    </Card.Text>
                    <Card.Text className='text-left'>4 years ago</Card.Text>
                    </div>
                </div>
              </Card>
             </Col>
            </Row>
        </Container>
     </div>
    )
}

export default Pertama