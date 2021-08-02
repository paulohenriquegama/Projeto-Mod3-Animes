import React, { useState } from 'react'
import './App.css'
import Button from './Button'
// import SearchInput from './SearchInput';

export default function Home() {
  const [animes, setAnimes] = useState([
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
      id: 7,
      nome: 'Yu-Gi-Oh!',
      img: 'https://bit.ly/36Rbdvz'
    },
    {
      id: 8,
      nome: 'Bleach',
      img: 'https://bit.ly/3BiuyUF'
    },
    {
      id: 9,
      nome: "JoJo's Bizarre Adventure",
      img: 'https://bit.ly/3BlaYXM'
    },
    {
      id: 10,
      nome: 'Demon Slayer',
      img: 'https://bit.ly/2UuF0rv'
    },
    {
      id: 11,
      nome: 'Dr. STONE',
      img: 'https://bit.ly/3xTDL3n'
    },
    {
      id: 12,
      nome: 'One-Punch Man',
      img: 'https://bit.ly/2UYLeQr'
    }
  ])

  // const [buscaAnime, setBuscaAnime] = useState('')
  const [nomeAnime, setNomeAnime] = useState('')
  const [imgAnime, setImgAnime] = useState('')
  const [editando, setEditando] = useState(false)
  const [indexEditando, setIndexEditando] = useState(null)

  const onSubmit = editar => {
    editar.preventDefault()
    console.log("Estou aqui")
    if (editando) {
      const animesAtualizados = animes.map((anime, index) => {
        if (indexEditando === index) {
          anime.nome = nomeAnime
          anime.img = imgAnime
        }

        return anime
      })

      
        setAnimes(animesAtualizados);
        setIndexEditando(null);
        setEditando(false);
     
    } else {
        setAnimes( [
          ...animes,
          {
            nome: nomeAnime,
            img: imgAnime
          }
        ]
      )
    }

      setNomeAnime("");
      setImgAnime("");
    
  }

  const deletar = index => {
    console.log("OIi")
    setAnimes(animes.filter((anime, i) => i !== index))
  }

  return (
    <div className="container">
      <main className="main">
        <header className="header">
          <div className="aux"></div>
          <div className="titulo">
            <h1>Animes</h1>
          </div>
          <div className="bloco-search">
            <img
              className="img-search"
              src="https://bit.ly/2WfEo9J"
              alt="Pesquisar"
            ></img>

          </div>
        </header>

        <div className="bloco-card">
          {animes.map(anime => (
            <div className="card" Key={anime.id}>
              <h3 className="card-titulo">{anime.nome}</h3>
              <img src={anime.img} alt={anime.nome}></img>
              <Button name="Visualizar" />
              <Button name="Editar" onCLick = {onSubmit}/>
              <Button name="Deletar" onChange = {deletar}/>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
