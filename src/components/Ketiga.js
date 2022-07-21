import { Col, Container, Image, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Imageslima from "../assets/images/tiga/fotolima.png"
import Imagesenam from "../assets/images/tiga/fotoenam.png"




const Ketiga = () => {
    return (
     <div>
        <Container>
            <br />
            <h1 className='text-white text-center'> ~2021~ </h1>
            <br />
            <Row>
             <Col md={6} className='ImageWrapper'>
              <Card className="Imagessembilan">
                <Image src={Imagesenam} alt="2021" />
                <div className='bg-dark'>
                    <div className='p-2 m-1 text-white'>
                    <Card.Title className='text-center'>2021</Card.Title>
                    <Card.Text className='text-left'>
                    ini tu pas masi coronii juga,
                    tapi dah agak mereda
                    </Card.Text>
                    <Card.Text className='text-left'>2 years ago</Card.Text>
                    </div>
                </div>
              </Card>
             </Col>
             <Col md={6} className='ImageWrapper' id='ketiga'>
              <Card className="Imagessembilan">
                <Image src={Imageslima} alt="2021" />
                <div className='bg-dark'>
                    <div className='p-2 m-1 text-white'>
                    <Card.Title className='text-center'>2021</Card.Title>
                    <Card.Text className='text-left'>
                    I call it double H !!!!
                    </Card.Text>
                    <Card.Text className='text-left'>2 years ago</Card.Text>
                    </div>
                </div>
              </Card>
             </Col>
            </Row>
        </Container>
     </div>
    )
}

export default Ketiga