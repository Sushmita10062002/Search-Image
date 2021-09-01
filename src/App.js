import React,{useState,useEffect} from 'react'
import Image from './Components/GridImages/Image/Image'
import SearchBox from './Components/SearchBox/SearchBox'
import "./GridImages.css"
const App =()=>{
   const [images,setImages] = useState([])
   const [loading,setLoading] = useState(true)
   const [searchTerm,setSearchTerm] =  useState("")
useEffect(()=>{
   fetch(`https://pixabay.com/api/?key=${process.env.
   REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}s&image_type=photo&pretty=true`)
  .then(res=>res.json())
  .then(data => {
     setImages(data.hits);
     setLoading(false)
  })
  .catch(err => console.log(err))

  },[searchTerm])

   return(
      <div>
        <SearchBox searchText={(text)=>setSearchTerm(text)}/>
        {!loading && images.length===0 && <h1>No Images Found</h1>}
        {loading? <h1>Loading</h1>:
         <div className="grid container">
         {images.map(image=>(
             <Image key={image.id} image={image}/>
        ))}
        </div>}
     </div>
     
   )
}
export default App;