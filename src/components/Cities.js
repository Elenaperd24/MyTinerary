import React, { useEffect, useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { useStateValue } from "../StateProvide";
import CarouselHeader from "./CarouselHeader";
import FloatingActionButtons from "./FloatingActionButtons";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import MaterialIcon, { colorPalette } from 'material-icons-react';
import { valueToPercent } from "@mui/material";


const CitiesPrueba = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    // esto es expand more de card cities 
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    //MIS DATOS DB

    const [{ cities }, dispatch] = useStateValue()
    const [citiesNew, setCitiesNew] = useState(cities)
    const [noFind, setNoFind] = useState(false)
    let countries = []
    cities.map((city) => {
        if(!countries.includes(city.country)){
        return (
            countries.push(city.country)
        )}})

    const filterCities = (event) => {
        console.log(event.target.value);
        let textCity = document.getElementById("City").value.toLowerCase()
        let textCountry = document.getElementById("Country").value.toLowerCase()
        console.log("llame a la funcion")
        console.log(textCountry)
        if (textCity !== "" ||textCountry!== "" ) {
            let resultFilter = []
            resultFilter = cities.filter(city => city.name.toLowerCase().includes(textCity) && city.country.toLowerCase().includes(textCountry))
            setCitiesNew(resultFilter)
            setNoFind(false)
        }
        else {

            setCitiesNew(cities)
        }
    };
    return (
        <>
            <CarouselHeader />
            <div className='busquedaCity'>
                <Stack spacing={2} sx={{ width: 300 }}>
                    <Autocomplete
                        id="Country"
                        freeSolo
                        options={countries.map((option) => option)}
                        onKeyPress={filterCities}
                        renderInput={(params) => <TextField {...params} label="Country" color="success" focused  onChange={filterCities} />}
                    />
                    <Autocomplete
                        freeSolo
                        id="City"
                        disableClearable
                        options={cities.map((option) => option.name)}
                        onKeyPress={filterCities}
                        renderInput={(params) => (
                            <TextField {...params} label="Search City" placeholder="Name City" color="secondary" InputProps={{ ...params.InputProps, type: 'search', }}
                                onChange={filterCities}
                                variant="standard"
                                focused
                            />
                        )}
                    />
                </Stack>
            </div>
            <div style={{ whidth: "100%", margin: "0", pading: "0", display: "flex", justifyContent: "center" }}>

                {/* Aqui comienzan mis cards Cities */}

                <div className="row cardsCities">
                    {noFind ? "City No Find" : ""}
                    {citiesNew.map((city) => {
                        return (
                            <Card sx={{ maxWidth: 375, margin: "2vw", background: "#fff4ee", borderRadius: "15px" }}>
                                <CardHeader
                                    /*    avatar={
                                         <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                           R
                                         </Avatar>
                                       } */
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title={city.name}
                                    subheader={city.country}
                                    style={{ color: "#ff4b4a" , fontFamily: "Permanent Marker" }}
                                />
                                <div className="contenerdorInfoCity">
                                    <figure>
                                        <CardMedia className="imagen-card  img"
                                            component="img"
                                            height="194"
                                            image={process.env.PUBLIC_URL + `/image/cities/${city.name}/${city.images.banner2}`}
                                            alt="Paella dish"
                                        />
                                        <div className="capa">
                                            <LinkRouter key={city._id} to={`/city/${city._id}`} style={{ textDecoration: "", color: "black" }}>
                                                <h3>See More About This City</h3>
                                            </LinkRouter>
                                        </div>
                                    </figure>
                                </div>

                                <CardContent>
                                    <FloatingActionButtons />
                                </CardContent>
                                <CardActions disableSpacing>
                                    <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent style={{ textAlign: "justify" }}>
                                        <Typography style={{ color: "#ff4b4a" }} paragraph >About {" " + city.name}:</Typography>
                                        <Typography paragraph>
                                            {city.descripcion.main}
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        )
                    })}
                </div>
            </div >

        </>
    )
}
export default CitiesPrueba;