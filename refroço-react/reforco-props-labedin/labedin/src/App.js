import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Imgleo from './components/img/PerfilLeo.jpeg';
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Imgleo} 
          nome="Leonardo Chagas" 
          descricao="Sou Leonardo, aspirante a cientista da computação e estudante de programação pela Labenu."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/128/149/149688.png" 
          texto="Ver mais"
        />

        <CardPequeno
          email="leocruzchagas@gmail.com"
          endereco="R. Rio Poti, 23 "
          
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Cap Informática" 
          descricao="Assistente técnico e ligador de cabos oficial da empresa." 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="LE Parceira " 
          descricao="Gerente de logística." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
