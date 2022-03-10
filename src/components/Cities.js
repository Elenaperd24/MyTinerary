import React, { useEffect, useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { useStateValue } from "../StateProvide";
import CarouselHeader from "./CarouselHeader";
import FloatingActionButtons from "./FloatingActionButtons";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { accionType } from '../reducer'


function Cities() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    //MIS DATOS DB   
    const [{ cities, citiesNew }, dispatch] = useStateValue()

    console.log(citiesNew);
    console.log(cities)

    const [noFind, setNoFind] = useState(false)

    let countries = []
    citiesNew.map((city) => {
        if (!countries.includes(city.country)) {
            return (
                countries.push(city.country)
            )
        }
    })
    function filterCities(event) {
        console.log("llame a la funcion");
        console.log(event.target.value);

        let textCity = document.getElementById("City").value.toLowerCase()
        console.log(textCity);
        let textCountry = document.getElementById("Country").value.toLowerCase()
        if (textCity !== "" || textCountry !== "") {
            let resultFilter = []
            resultFilter = cities.filter(city => city.name.toLowerCase().includes(textCity) && city.country.toLowerCase().includes(textCountry))
            // setCitiesNew(resultFilter)
            console.log(resultFilter);
            dispatch({
                type: accionType.FILTER,
                citiesNew: resultFilter
            })
        }
        else {
            dispatch({
                type: accionType.FILTER,
                citiesNew: cities
            })
        }
    }

    return (
        <>
            <CarouselHeader cities={cities} />
            <div className='busquedaCity'>
                <Stack spacing={2} sx={{ width: 300 }}>
                    <Autocomplete
                        id="Country"
                        freeSolo
                        options={countries.map((option) => option)}
                        onKeyPress={filterCities}
                        onChange={filterCities}
                        renderInput={(params) => <TextField {...params} label="Country" color="success" focused onChange={filterCities} />}
                    />
                    <Autocomplete
                        freeSolo
                        id="City"
                        disableClearable
                        options={citiesNew.map((option) => option.name)}
                        onKeyPress={filterCities}
                        renderInput={(params) => (
                            <TextField {...params} label="Search City" placeholder="Name City" color="secondary" InputProps={{ ...params.InputProps, type: 'search', }}
                                onChange={filterCities}
                                onKeyPress={filterCities}
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

                    {citiesNew.map((city) => {
                        return (
                            <Card sx={{ maxWidth: 375, margin: "2vw", background: "#fff4ee", borderRadius: "15px" }} key={city._id}>
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
                                    style={{ color: "#ff4b4a", fontFamily: "Permanent Marker" }}
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
                                            <LinkRouter key={city._id} to={`/city/${city._id}`} style={{ textDecoration: "none", color: "#ff4b4a", fontFamily: "Permanent Marker" }}>
                                                <h3>See More About This City</h3>
                                            </LinkRouter>
                                        </div>
                                    </figure>
                                </div>

                                <CardContent>
                                    <FloatingActionButtons />
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div >

        </>
    )
}
export default Cities;