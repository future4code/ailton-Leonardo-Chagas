import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';






function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Leonardo Cruz Chagas" 
          descricao="Sou Leonardo, aspirante a FullStack Dev pela Labenu, e em breve, Cientista da Computação."
          
          
        />
        
        <ImagemButton 
          imagem="https://cdn.icon-icons.com/icons2/788/PNG/512/down-arrow_icon-icons.com_64915.png" 
          texto="Ver mais"
        />
        
        <CardPequeno
        imagem="https://cdn-icons-png.flaticon.com/512/121/121923.png"
        texto="Email: leocruzchagas@gmail.com"
        />

        <CardPequeno
        imagem="https://cdn-icons-png.flaticon.com/512/1295/1295181.png"
        texto="Endereço: Rua João Dourado, 760"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://cdn-icons-png.flaticon.com/512/2038/2038775.png" 
          nome="Formação" 
          descricao="Acadêmico de Ciências da Computação." 
          descricao2="Dev FullStack em formação na Labenu." 
        />
        
        <CardGrande 
          imagem="https://cdn-icons-png.flaticon.com/512/76/76788.png" 
          nome="CAP Informática" 
          descricao="Técnico em Informatica." 
        
        />

        <CardGrande
        imagem="https://cdn.pixabay.com/photo/2017/10/16/03/08/shipping-2856031_960_720.png"
        nome="LE Freitas Transportes"
        descricao="Gerente de Logística."      
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
