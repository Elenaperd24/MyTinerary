import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import axios from 'axios'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import swal from 'sweetalert'

function CarouselItinerario(props) {
//responsive de MATERIAL UI
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 412 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 412, min: 0 },
    items: 1
  }
};
//START COMPONENTE
  let city = props.city
  const [itineraries, setItineraries] = useState([])
  const [reload, setReload] = useState(false)

  useEffect(() => {
   // window.scrollTo(0, 0);
    city.map(city =>
        axios.get(`https://mytinerary-elena.herokuapp.com/api/infoitinerary/${city.name}`)
            .then(response => setItineraries(response.data.response.itinerary))
    )
}, [reload])

 const Darlike = async (id) => {
  const token = localStorage.getItem("token")
  if(!token){
    swal({
      title: "Go to signin to post your opinions",
      icon: "error",
      buttons: "ok"
  })
  }
  else{

  axios.put(`https://mytinerary-elena.herokuapp.com/api/likeDislike/${id}`, {},
      { headers: { 'Authorization': 'Bearer ' + token } })
      .then(response => {  
        console.log(response); 
          setReload(!reload)
      })
    }
}
 
  return (
    <>
      <Carousel responsive={responsive} >
        {itineraries?.map((item) => {  
          return (
            <div key={item._id} style={{ maxWidth: 450, backgroundColor: "red" }}>
              <Card key={item._id} sx={{ maxWidth: 450, background: "#fff4ee" , position:"relative" }}>
              <Box sx={{ '& > :not(style)': { m: 1.7 } , position:"absolute", right:0}}>
                    <Fab aria-label="like" onClick={() => Darlike(item._id)}>
                        <ThumbUpAltIcon /> {item.likes.length} 
                    </Fab>
                </Box>
                <CardMedia key={item._id}
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={process.env.PUBLIC_URL + `/image/itinerary/itinerary${item.nroItinerario}/place1.jpg`}               
                
                />               
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {/* {item.descripcion} */}
                    <div><h5>{item.duracion + "h "} - {item.costo + " USD"}</h5></div>
                    <ul className="itemItinerario" >
                      <li className="nav-link" >{item.actividades.activity1.name}</li>
                      <li className="nav-link" >{item.actividades.activity2.name}</li>
                      <li className="nav-link" >{item.actividades.activity3.name}</li>
                    </ul>
                  </Typography>
                  <Comments itinerary={item._id} likes={item.likes} />
                </CardContent>
              </Card></div>)
        })}
      </Carousel>
    </>
  )
}
export default CarouselItinerario;