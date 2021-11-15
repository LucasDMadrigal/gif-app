import React, { useEffect, useState } from 'react';
import './styles/App.css';
import { getGif } from '../helpers/getGif'
import GifCard from './GifCard';
import Loading from './Loading';
import GifForm from './GifForm';
function App() {  

  const [category, setCategory] = useState('snoopy')
  const [gif, setGif] = useState({
    datos: [],
    loading: true
  })

  const [inputValue, setInputValue] = useState('')

  useEffect( () => {

    setGif({
      datos: [...gif.datos],
      loading: true
    })

    getGif(category)
    .then(response => {
      console.log(response);

      setGif({
        datos:response,
        loading: false
      })
    })
    .catch ( err => console.error(err))
  }, [category])

  const handleChange = ({ target }) => {
    setInputValue(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // if (inputValue) {
      setCategory(inputValue)
      setInputValue('')
    // }
  }

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col text-center header">
          <h1>Gif Expert App</h1>
        </div>
      </div>
      <div className="row main">
        <div className="col-12 col-md-6 offset-md-3">
          <GifForm
          onChange={handleChange}
          onSubmit={handleSubmit}
          inputValue={inputValue}
          />
        </div>
      <div className="row my-3">
        <div className="col">
          <div className="row row-cols-1 row-cols-md-3 g-4">
        {gif.loading ? <Loading/> : 
        gif.datos.map( img => {
          return <GifCard
          img={img}
          />
        })
        
      }
      </div>
      </div>
      </div>
        </div>
    </div>

  );
}

export default App;