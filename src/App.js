import React from 'react';
import './App.css';
import Button from './Button';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      animes: [
        {
          id: 1,
          nome: 'Naruto',
          img: 'https://bit.ly/3zgeVLy'
        },
        {
          id: 2,
          nome: 'Sete Pecados',
          img: 'https://bit.ly/3iyRbLO'
        },
        {
          id: 3,
          nome: 'Dragon Ball Z',
          img: 'https://bit.ly/3zkqRvS'
        },
        {
          id: 4,
          nome: 'One Piece',
          img: 'https://bit.ly/3BisVGx'
        },
        {
          id: 5,
          nome: 'Boruto',
          img: 'https://bit.ly/3BritfG'
        },
        {
          id: 6,
          nome: 'My Hero Academia',
          img: 'https://bit.ly/2UVkIau'
        },
        {
          id:7,
          nome:'Yu-Gi-Oh!',
          img:'https://bit.ly/36Rbdvz',
        },
        {
          id:8,
          nome:'Bleach',
          img:'https://bit.ly/3BiuyUF',
        },
        {
          id:9,
          nome:"JoJo's Bizarre Adventure",
          img:'https://bit.ly/3BlaYXM',
        },
        {
          id:10,
          nome:"Demon Slayer",
          img:'https://bit.ly/2UuF0rv',
        },
        {
          id:11,
          nome:"Dr. STONE",
          img:'https://bit.ly/3xTDL3n',
        },
        {
          id:12,
          nome:"One-Punch Man",
          img:'https://bit.ly/2UYLeQr',
        },
      ],
      nomeAnime:"",
      imgAnime:"",
      editando: false,
      indexEditando:null,
    };
  }

  onSubmit = (editar) => {
    editar.preventDefault();

    const{animes, editando, indexEditando, nomeAnime, imgAnime} = this.state;

    if(editando){
      const animesAtualizados = animes.map((anime,index) => {
        if(indexEditando === index){
          anime.nome = nomeAnime;
          anime.img = imgAnime;
        }

        return anime;
      });

      this.setState({
        animes: animesAtualizados,
        indexEditando: null,
        editando:false,
      });

    }else{
      this.setState({
        animes: [
          ...animes,
          {
            nome: nomeAnime,
            img: imgAnime, 
          }
        ]
      });
    };

    this.setState({
      nomeAnime: "",
      imgAnime:"",
    });

  }

  deletar = (index) =>{
    const {animes} = this.state;
    this.setState({
      animes: animes.filter((anime,i) => i!==index),
    });

  }


  render() {
    const { animes } = this.state;

    return (
      <div className="container">
        <main className="main">
          <h1 className="titulo">Animes</h1>
          <div className="bloco-card">
            {animes.map(anime => (
              <div className="card" Key={anime.id}>
                  <h3 className="card-titulo">{anime.nome}</h3>
                  <img src={anime.img} alt={anime.nome}></img>  
                  <Button name="Visualizar"/>
                  
              </div>  
              
            ))}
            
          </div>
        </main>
      </div>
    );
  }
}
