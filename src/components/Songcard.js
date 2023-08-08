import React,{useEffect} from 'react'
import "./Startpage.css";
import AOS from "aos";
import 'aos/dist/aos.css';


const Card = ({songs}) => {

    useEffect(()=>{
        AOS.init({duration:2500});
       },[]);


    return (
        <div>
            <div className = "row" >
                    {songs.map(song =>{ 
                        return(
                            <div className = "col-md-4" key={song.id}>
                            <div className="card m4" data-aos="flip-right">
                            <img src={song.image_src} className="card-img-top" alt={song.song_name} />
                            <div className="card-body">
                                <h5 className="card-title">{song.song_name} - {song.movie_name}</h5>
                                <audio controls controlsList='nodownload' src={song.song_src} className='audiostyle' />
                            </div>
                            </div>
                            </div>
                        )})}
                </div>
        </div>
    )
}

export default Card