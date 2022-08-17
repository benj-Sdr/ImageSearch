import { useState, useEffect} from "react"
import axios from 'axios'
import './style.css'
const App = () => {

const [search, setSearch] = useState([])

const [show, setShow] = useState([])
console.log(show)
  const inputSearch = (event) => {
        setSearch(event.target.value)
  }
  
useEffect(() => {
  axios
        .get(`https://api.unsplash.com/search/photos?client_id=x8SAb07qlzJEkXO0QhY7Q8LpCFTOiyFA3xi1e-IJ0FI&query=${search}`)
        .then(res => {
          const mapResult = res.data.results.map(item => {
            console.log(item)
            return <img src={item.urls.small_s3} alt={item.alt_description}/>
          })
          setShow(mapResult)
        })
}, [search])

   

  return(
    <div className="app">
      <div className="img-search">
          <label className="label">Image Search</label><br/>
          <input onChange={inputSearch}/>
      </div>
       
        { 
          <div className="show">
             {show}
          </div>
        }
    </div>
  )
}
export default App