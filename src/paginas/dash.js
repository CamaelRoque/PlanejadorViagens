import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';



function Dash() {
  const [lgShow, setLgShow] = useState(false);
    return ( 
      <>
      <div >
      
      <Container>
      <Row>
        <Col sm={8}>
          
        <Container fluid>
      <Row>
        <Col><h1>Hospedagens</h1></Col>
      </Row>
    </Container>
    
      
      <br/><br/><br/>


      
      <Container>
      <Row>
        <Col><img style={{width: '200px', height: '100px'}}  src='https://cf.bstatic.com/xdata/images/hotel/square600/173466882.webp?k=8380792f64a431577c29d45c3e7dba2f2a55a1f920832ee9f874e2496388304d&o='/></Col>
        <Col><h6 a href="/agenda">Bourbon Barra da Tijuca Residence</h6></Col>
        <Col><h6> R$368 Diária</h6>
        <Button variant="primary" a href='/agenda'>
        Agendar
      </Button>
        </Col>
        <Col></Col>
        
        
        
      </Row>
      <br/><br/>
      <Row>
        <Col><img style={{width: '200px', height: '100px'}}  src='https://cf.bstatic.com/xdata/images/hotel/square600/54453581.webp?k=c8a6206c59abe7c156115341c726fab8165d1ef215d4c109e0a1723870cb61ee&o='/></Col>
        <Col><h6>Hotel Atlantico Prime</h6></Col>
        <Col><h6> R$205 Diária</h6>
        <Button variant="primary" a href='/agenda'>
        Agendar
      </Button>
        </Col>
        
        <Col></Col>
        
        <br/><br/>
      </Row>
      <br/><br/>
      <Row>
      
        <Col><img style={{width: '200px', height: '100px'}}  src='https://cf.bstatic.com/xdata/images/hotel/square600/251953077.webp?k=c83f25f9fee61d7f76c6d42842ce5e14eed8bcfe592f71d7f4872dec112e9e28&o='/></Col>
        <Col><h6>ibis Rio Porto Atlantico</h6></Col>
        <Col><h6> R$339 Diária</h6>
        <Button variant="primary" a href='/agenda'>
        Agendar
      </Button>
        </Col>
       
        <Col></Col>
        
        <br/><br/>
      </Row>
      <br/><br/>
      <Row>
        <Col><img style={{width: '200px', height: '100px'}}  src='https://cf.bstatic.com/xdata/images/hotel/square600/89191374.webp?k=195fed4ceed86f3198aaa2a4d7f93875b17d31a7c950ce7774af377e94729200&o='/></Col>
        <Col><h6>Hotel Atlântico Travel Copacabana</h6></Col>
        <Col><h6> R$290 Diária</h6>
        <Button variant="primary" a href='/agenda'>
        Agendar
      </Button>
        </Col>
      
        <Col></Col>
        
        <br/><br/>
      </Row>
      <br/><br/>
      <Row>
        <Col><img style={{width: '200px', height: '100px'}}  src='https://cf.bstatic.com/xdata/images/hotel/square600/248124380.webp?k=bd4b8b4dd41c38cad66c28509018e4b388afe14f94c5a423899cac0d08566ce0&o='/></Col>
        <Col><h6>ibis budget RJ Praia de Botafogo</h6></Col>
        <Col><h6> R$377 Diária</h6>
        <Button variant="primary" a href='/agenda'>
        Agendar
      </Button>
        </Col>
       
        <Col></Col>
        
        <br/><br/>
      </Row>
      <br/><br/>
      <Row>
        <Col><img style={{width: '200px', height: '100px'}}  src='https://cf.bstatic.com/xdata/images/hotel/square600/66810392.webp?k=c60ee17a8c1fe8db8404def538dd799515605d6ef8c22d14fc382caf7c9a06e0&o='/></Col>
        <Col><h6>Hotel Monte Alegre</h6></Col>
        <Col><h6> R$176 Diária</h6>
        <Button variant="primary" a href='/agenda'>
        Agendar
      </Button>
        </Col>
        
        <Col></Col>
        
        <br/><br/>
      </Row>
      <br/><br/>
      <Row>
        <Col><img style={{width: '200px', height: '100px'}}  src='https://cf.bstatic.com/xdata/images/hotel/square600/97553469.webp?k=0976ae33238b5dd263d35cd4715bf362cfabbb2c8f1273096622324b4267619f&o='/></Col>
        <Col><h6>ibis Rio de Janeiro Santos Dumont</h6></Col>
        <Col><h6> R$349 Diária</h6>
        <Button variant="primary" a href='/agenda'>
        Agendar
      </Button>
        </Col>
        
        <Col></Col>
        
        <br/><br/>
      </Row>
      <br/><br/>
      </Container>


        </Col>

        <Col sm={4}>
          
        <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        

        
        
        
        
        
        <Col></Col>
        
      </Row>

        </Col>
      </Row>
      
      </Container>

      <Container>
        <div>

        <a href='/' > <Button variant="dark">Voltar</Button></a>
        </div>
      
      </Container>

      






      </div>
      

      </>
    
    );
}

export default Dash;