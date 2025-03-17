import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Figure from 'react-bootstrap/Figure';
import Nav from 'react-bootstrap/Nav';
import Main from './main';
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import axios from 'axios';


function Home() {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//// Começo das integrações
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const [data, setData] = useState([]); // Estado para armazenar os dados da API
const [data2, setData2] = useState([]); 




function Chamadas() {
  

  useEffect(() => {
    // Fazer a chamada GET à API quando o componente for montado
    axios.get('http://localhost:3001/usuarios')
      .then(response => {
        setData2(response.data); // Atualizar o estado com os dados da API
      })
      .catch(error => {
        console.error('Erro ao fazer a solicitação:', error);
      });
  }, []); // O array vazio como segundo argumento garante que a chamada seja feita apenas uma vez

  return (
    <div>
      <h1>Dados da API:</h1>
      <ul>
        {data2.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function CriaUsuario (novoU){
    
  
  
  const dados = novoU;

  axios.post('http://localhost:3001/usuarios', dados) // Ajuste a URL conforme necessário
      .then(response => {
        console.log("Usuário cadastrado:", response.data);
        setData(response.data); // Atualizar o estado com a resposta da API
      })
      .catch(error => {
        console.error("Erro ao fazer a solicitação:", error);
        if (error.response) {
          // O servidor respondeu com um status de erro (fora da faixa 2xx)
          console.error("Erro na resposta:", error.response.data);
          console.error("Status:", error.response.status);
        } else if (error.request) {
          // A requisição foi feita, mas não houve resposta
          console.error("Erro na requisição:", error.request);
        } else {
          // Algo aconteceu ao configurar a requisição
          console.error("Erro ao configurar a requisição:", error.message);
        }
      });

}




function JsonGenerator() {
  const [data, setData] = useState({
    name: '',
    age: '',
    email: ''
  });

  const [jsonResult, setJsonResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generateJSON = () => {

    CriaUsuario(data);
    const jsonData = JSON.stringify(data, null, 2);
    
   
    setJsonResult(jsonData);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2 style={{ textAlign: 'center' }}>Cadastro</h2>
      <div style={{ marginBottom: '10px' }}>
        <label>Nome:</label>
        <input type="text" name="name" value={data.nome} onChange={handleChange} style={{ width: '100%', padding: '5px' }} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Idade:</label>
        <input type="number" name="age" value={data.idade} onChange={handleChange} style={{ width: '100%', padding: '5px' }} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Email:</label>
        <input type="email" name="email" value={data.email} onChange={handleChange} style={{ width: '100%', padding: '5px' }} />
      </div>
      <button onClick={generateJSON} style={{ width: '100%', padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Concluir</button>
      {jsonResult && (
        <div>
          <h3 style={{ textAlign: 'center' }}>Dados do cadastro:</h3>
          <pre>{jsonResult}</pre>
        </div>
      )}
    </div>
  );
}














  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////// Final das integrações
  const [lgShow, setLgShow] = useState(false);
  const [lgShow2, setLgShow2] = useState(false);
  const [lgShow3, setLgShow3] = useState(false);
  const [lgShow4, setLgShow4] = useState(false);
  const [lgShow5, setLgShow5] = useState(false);
  const [lgShow6, setLgShow6] = useState(false);
    
  return ( 
        <>
        <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} md={8}>

       { /*INICIO CAROUSEL */}
      <h1>Últimas Notícias</h1>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.587e88ba5a8a8971c161896c5393766d?rik=DzJga5m4BAvu4A&riu=http%3a%2f%2fagenciabrasil.ebc.com.br%2fsites%2fdefault%2ffiles%2fatoms%2fimage%2f1061559-rj_12.01.2016_tmaz-2563.jpg&ehk=r8Gal7N3jde%2bbeBXzQ7Ef3zsdYGPMn8bA0I7sfYk8p8%3d&risl=1&pid=ImgRaw&r=0"
          alt="First slide"
          style={{width: 1060, height: 342}}
        />
        <Carousel.Caption>
          <h3>últimas notícias</h3>
          <p>Rio de Janeiro segue em estágio de alerta por causa de chuvas</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.r7.com/images/refugiados-europa-13062018115009661?dimensions=460x305"
          alt="Second slide"
          style={{width: 1060, height: 342}}
        />

        <Carousel.Caption>
          <h3>Europa busca saída para a crise dos refugiados</h3>   
          <p>Milhares de pessoas continuam a arriscar a vida em perigosas travessias rumo ao continente, fugindo de guerras, perseguição e pobreza.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s2-g1.glbimg.com/VvIZ9QEw_VHYESL4YoAidOsWgoI=/0x0:6720x4480/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/2/9/oz5AdNQnSrZfZy2SZnIA/pexels-karolina-grabowska-4386465.jpg"
          alt="Third slide"
          style={{width: 1060, height: 342}}
        />

        <Carousel.Caption>
          <h3>Dólar sobe e fecha a R$ 4,96, de olho em crise na China e juros nos EUA; Ibovespa cai aos 115 mil pontos</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 

       
    </Col>
    <br/>
    <br/>
    <br/>
    <h1 style={{textAlign: 'center'}}>Principais Destinos</h1>    
    { /*INICIO CARDS */}

        
      </Row>
      <br/><br/>
      
      <Row>
        {/*Inicio segundo card */}
        <Col xs={6} md={4}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th?id=OSK.HEROq7HMnPOmD0oZq67fSiPpCAZeldpMagr5w76l67Bsnac&w=472&h=280&c=1&rs=2&o=6&dpr=1.3&pid=SANGAM"/>
      <Card.Body>
        <Card.Title>Rio de Janeiro</Card.Title>
        <Card.Text>
        Pacotes de viagem com até 50% de economia e pagamento facilitado em até 12x iguais.
        </Card.Text>
        { /*INICIO MODAL */}
        <Button onClick={() => setLgShow2(true)}>Saiba mais</Button>

   
     

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Rio de Janeiro</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        Sobre este lugar
Rio de Janeiro é um município brasileiro, capital do estado homônimo, situado no Sudeste do país. Maior destino turístico internacional no Brasil, da América Latina e de todo o Hemisfério Sul, a capital fluminense é a cidade brasileira mais conhecida no exterior, funcionando como um "espelho", ou "retrato" nacional, seja positiva ou negativamente. É a segunda maior metrópole do Brasil, a sexta maior da América e a trigésima quinta do mundo. Sua população estimada pelo IBGE para 1.º de julho de 2021 era de 6 775 561 habitantes. Tem o epíteto de Cidade Maravilhosa, e os que nela nascem são chamados de cariocas.
<br/>
<div style={{textAlign: 'center'}}>


</div>

        </Offcanvas.Body>
        
      </Offcanvas>
    
      <Modal id="primeiromodal"
        size="lg"
        show={lgShow2}
        onHide={() => setLgShow2(false)}
        aria-labelledby="example-modal-sizes-title-lg-primeiro">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg-primeiro">
            Saiba mais
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><Row>
            <Col xs={6} md={4}>
            <Figure>
      <Figure.Image
        src="https://th.bing.com/th?id=OSK.HEROq7HMnPOmD0oZq67fSiPpCAZeldpMagr5w76l67Bsnac&w=472&h=280&c=1&rs=2&o=6&dpr=1.3&pid=SANGAM"
        
      />
    </Figure>
            </Col>
            <Col xs={12} md={8}>
            <h1>Rio de Janeiro</h1>
            Devido à grande oferta turística do Rio de Janeiro, é comum encontrar opções de pacotes de viagens para o destino. Reserve já o seu pacote de viagem parar o Rio de Janeiro
            </Col>
            <a href='/Plano_Riodejaneiro'><button class="btn btn-warning">Confira agora!</button></a>
          </Row></Modal.Body>
      </Modal>
      </Card.Body>
    </Card>
        </Col>




      {/*Inicio terceiro card */}

        <Col xs={6} md={4}>
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th?id=OSGI.E583C2E2C8FF66F338EC99F3905D83DC&w=472&h=240&c=8&rs=2&o=6&dpr=1.3&pid=TravelL2" />
      <Card.Body>
        <Card.Title>Nova Iorque</Card.Title>
        <Card.Text>
        Confira nossa vasta seleção com as atividades mais bem avaliadas para sua viagem.
        </Card.Text>
        { /*INICIO MODAL */}
        <Button>Saiba mais</Button>
      </Card.Body>
    </Card>        
    
    </Col>



      {/*Inicio quarto card */}


        <Col xs={6} md={4}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th?id=OSK.HEROTbzPtIYL8no3vk63g3dCHXhcXloaH2Kn0a3yJlB0B18&w=472&h=280&c=1&rs=2&o=6&dpr=1.3&pid=SANGAM" />
      <Card.Body>
        <Card.Title>Salvador</Card.Title>
        <Card.Text>
        As melhores condições e hoteis bem situados.
        </Card.Text>

        { /*INICIO MODAL */}

        <Button>Saiba mais</Button>
     
      </Card.Body>
    </Card>        
    
    </Col>
      </Row>

      <br/><br/>

      <Row>

        {/*Inicio quinto card */}
        <Col xs={6}> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th?id=ALSTUE88FFC2BFE9BE973EE82287CDFCF8A2DDFA69525A410B3DFA7A79A5770978D03&w=472&h=280&c=13&rs=2&o=6&oif=webp&dpr=1.3&pid=SANGAM" />
      <Card.Body>
        <Card.Title>Paris</Card.Title>
        <Card.Text>
        Confira os pacotes com as melhores condições disponíveis
        </Card.Text>
        <Button>Saiba mais</Button>
      </Card.Body>
    </Card>
    
    </Col>

    <Col xs={6} md={4}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/R.a68042571adfdc2a9d66bb485f8d65c4?rik=3ExHQxSPHtDSsA&riu=http%3a%2f%2fimgs-akamai.mnstatic.com%2f8f%2fa5%2f8fa5e6d50c0d2ff5e5c2b1a7c246b9e2.jpg%3foutput-quality%3d75%26output-format%3dprogressive-jpeg%26interpolation%3dlanczos-none%26fit%3dinside%7c980%3a880&ehk=trp0cJVW6wqHk4s9GB3QhGP4qdAGw8jXzYdLTYgHIrc%3d&risl=&pid=ImgRaw&r=0" />
      <Card.Body>
        <Card.Title>Espanha</Card.Title>
        <Card.Text>
        O território espanhol é um dos principais polos culturais e turísticos de todo o mundo.
        </Card.Text>
        { /*INICIO MODAL */}
        <Button>Saiba mais</Button>
      
      </Card.Body>
    </Card>
        </Col>

       
      </Row>
    </Container>
    
    <br/>
    <Row>
          <Col>
            <JsonGenerator />
          </Col>
        </Row>



  
    </>

    
    
    
    
    );
}

export default Home;