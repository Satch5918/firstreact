/* import React, {useState , useEffect} from 'react'
import Slide from './Slice'



export default function Carrousel() {
    const [numero, setNumero] = useState(0)
    const [id, serId] = useState(0)
    const [mangas, setMangas] = useState([])

    const traerData = async () => {
        try{
            const res = await fetch ('../manga.json')
            const data = await res.json()

            setMangas(data)
          
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetch('../manga.json')
        .then(res => res.json)
        .then(data => {
            setMangas(data)
        })
    })

    useEffect(() =>{
        let idInterval = setInterval(() =>{
            next()
        }, 5000)

        setImmediate(idInterval)
        return clearInterval(id)
    })

  return (
    <div className='slideshow-container'>
        <Slide nombre={mangas[numero]?.title} foto={mangas[numero]?.photo}/>
        <a className='prev' onClick={prev}></a>
        <a className='next' onClick={next}></a>
    </div>
    
  )
}
 */