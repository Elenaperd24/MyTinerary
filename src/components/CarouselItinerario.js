import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SanPedrodeAtacama from '../image/cities/Chile/San Pedro de Atacama.jpg'
import SurDeChile from '../image/cities/Chile/SurDeChile.jpg'
import ValledeCasablanca from '../image/cities/Chile/ValledeCasablanca.jpg'
import RegiondeAysen from '../image/cities/Chile/Region deAysen.jpg'
function CarouselItinerario() {
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
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <><Carousel responsive={responsive}>
      <div><Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={SanPedrodeAtacama}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            San Pedro de Atacama
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Romance, adventure and rest in the middle of the desert
            <div><h3>5 days - 259km</h3></div>
            <ul className="itemItinerario">
              <li className="nav-link" >ASTROTOURISM</li>
              <li className="nav-link" >ADVENTURE AND SPORTS</li>
              <li className="nav-link" >HOT SPRINGS</li>
            </ul>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card></div>
      <div><Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={SanPedrodeAtacama}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            San Pedro de Atacama
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Romance, adventure and rest in the middle of the desert
            <div><h3>5 days - 259km</h3></div>
            <ul className="itemItinerario">
              <li className="nav-link" >ASTROTOURISM</li>
              <li className="nav-link" >ADVENTURE AND SPORTS</li>
              <li className="nav-link" >HOT SPRINGS</li>
            </ul>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card></div>
      <div><Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={SanPedrodeAtacama}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            San Pedro de Atacama
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Romance, adventure and rest in the middle of the desert
            <div><h3>5 days - 259km</h3></div>
            <ul className="itemItinerario">
              <li className="nav-link" >ASTROTOURISM</li>
              <li className="nav-link" >ADVENTURE AND SPORTS</li>
              <li className="nav-link" >HOT SPRINGS</li>
            </ul>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card></div>
      <div><Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={SanPedrodeAtacama}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            San Pedro de Atacama
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Romance, adventure and rest in the middle of the desert
            <div><h3>5 days - 259km</h3></div>
            <ul className="itemItinerario">
              <li className="nav-link" >ASTROTOURISM</li>
              <li className="nav-link" >ADVENTURE AND SPORTS</li>
              <li className="nav-link" >HOT SPRINGS</li>
            </ul>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card></div>
      <div><Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={SanPedrodeAtacama}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            San Pedro de Atacama
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Romance, adventure and rest in the middle of the desert
            <div><h3>5 days - 259km</h3></div>
            <ul className="itemItinerario">
              <li className="nav-link" >ASTROTOURISM</li>
              <li className="nav-link" >ADVENTURE AND SPORTS</li>
              <li className="nav-link" >HOT SPRINGS</li>
            </ul>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card></div>
    </Carousel>;
    </>

  )
}
export default CarouselItinerario;