import "react-multi-carousel/lib/styles.css";
import { useEffect } from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import swal from 'sweetalert'
import { useStateValue } from '../StateProvide';
import axios from "axios";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { type } from "@testing-library/user-event/dist/type";
import { accionType } from '../reducer'



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

function Comments(props) {
    //console.log(props)
    //funciones de MATERIAL UI
    const actions = [
        { icon: <ModeEditIcon />, name: 'Edit' },
        { icon: <DeleteForeverIcon />, name: 'Delete' }
    ];
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    //FUNCIONALIDAD
    //  console.log(props);
    const [{ user}, dispatch] = useStateValue()

    //CONSTANTES SET   
    let date = ""
    const [comment, setComment] = useState()
    const [reload, setReload] = useState(false)
    const [edit, setEdit] = useState(true)
    const [changeComment, setChangeComment] = useState()
    const [contador, setContador] = useState(props.likes.length)

    //FUNCIONES


    const submitComent = async (event) => {
        event.preventDefault()
        swal({
            title: "comment sent",
            icon: "success",
            buttons: "ok"
        })
        fecha()
        const dataComments = {
            intinerary: props.itinerary,
            user: user.datosUser.id,
            message: event.target[0].value,
            date: date
        }
        await axios.post("http://localhost:4000/api/comments", { dataComments })
            .then(response => {
                setComment(response.data.response.comment)
            })
        setReload(!reload)
    }
    useEffect(() => {
        let id = props.itinerary
        axios.get(`http://localhost:4000/api/comments/${id}`)
            .then(response => {
                console.log(response.data.response.comment)
                setComment(response.data.response.comment)
            })

    }, [reload])

    const deleteEdit = async (id, name) => {
        if (name === "Delete") {
            axios.delete(`http://localhost:4000/api/comments/${id}`)
            setReload(!reload)
        }
        else if (name === "Edit") {
            setEdit(false)
        }
    }
    const inputText = (event) => {
        setChangeComment(event.target.value)
    }
    const editComments = async (id) => {
        fecha()
        let data = changeComment
        let newDate = date
        axios.put(`http://localhost:4000/api/comments/${id}`, { data, newDate })
            .then(response => {
                setEdit(true)
                setReload(!reload)
            })

    }

    const Darlike = async () => {
        console.log(user)
        const token = localStorage.getItem("token")
        axios.put(`http://localhost:4000/api/likeDislike/${props.itinerary}`, {},
            { headers: { 'Authorization': 'Bearer ' + token } }
        )
            .then(response => {
                console.log(response)
                setContador(response.data.response.length)
              
            })

    }

    function fecha() {
        var registro = new Date()
        var dia = registro.getDate()
        var mes = registro.getMonth() +1
        var time = registro.getHours() + ":" + registro.getMinutes()
        var year = registro.getYear()
        date = dia + "/" + mes + "/" + year + " " + time
    }
    return (
        <>
            <CardActions>
                <Box sx={{ '& > :not(style)': { m: 1.7 } }}>
                    <Fab aria-label="like" onClick={Darlike} >
                        <FavoriteIcon /> {contador}
                    </Fab>
                </Box>
                {user ?
                    <ExpandMore
                        // expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <Fab color="secondary" aria-label="CommentIcon">
                            <CommentIcon />
                        </Fab>
                    </ExpandMore> : ""}
            </CardActions>
            <h3 style={{ textDecoration: "none", color: "#ff6f6f", fontFamily: "Permanent Marker", textAlign: "center" }}>
               {comment?.length>0?"know opinions of our users":"Be the first to comment"} 
            </h3>
            <div className="comments shadow">
                {comment?.map((item) => {
                    return (
                        <Card sx={{ maxWidth: 390, margin: "6px" }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} /* aria-label="recipe" */>
                                        {item.user.from !== "MyTineray" ?
                                            <img src={item.user.img} alt="login" />
                                            :
                                            item.user.img}
                                    </Avatar>
                                }
                                title={item.user.name.charAt(0).toUpperCase() + item.user.name.slice(1)}
                                subheader={item.date + "h" + " from " + item.user.from}
                            />
                            <CardContent>
                                {user?.datosUser.id === item.user._id ?
                                    edit ?
                                        <Typography variant="body2" color="text.secondary">
                                            {item.comments}
                                        </Typography> :
                                        <input variant="body2" color="text.secondary"
                                            defaultValue={item.comments}
                                            onChange={inputText}
                                            style={{ width: "100%", height: 70 }} >
                                        </input>
                                    : <Typography variant="body2" color="text.secondary">
                                        {item.comments}
                                    </Typography>
                                }
                            </CardContent>
                            {user?.datosUser.id === item.user._id ?
                                edit ?
                                    <Box sx={{ height: 40, transform: 'translateZ(0px)', flexGrow: 1 }}>
                                        <SpeedDial
                                            ariaLabel="SpeedDial"
                                            sx={{ position: 'absolute', bottom: 10, right: 5 }}
                                            icon={<MoreVertIcon />}
                                            direction="left"
                                        >
                                            {actions.map((action) => (
                                                <SpeedDialAction sx={{ backgroundColor: "#ff4a48", color: "white" }}
                                                    key={action.name}
                                                    icon={action.icon}
                                                    tooltipTitle={action.name}
                                                    onClick={() => deleteEdit(item._id, action.name)}
                                                />
                                            ))}
                                        </SpeedDial>
                                    </Box> :
                                    <Fab color="secondary" aria-label="SendIcon" aria-expanded={expanded} onClick={() => editComments(item._id)}>
                                        <SendIcon />
                                    </Fab>
                                : ""
                            }
                        </Card>)
                })}          
            </div>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <form onSubmit={submitComent}>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label"></label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" style={{ borderStyle: "solid", borderColor: "#ff4a48" }}></textarea>
                        </div>
                        <div>
                            <div>
                                <ExpandMore
                                    // expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <Fab color="secondary" aria-label="SendIcon" aria-expanded={expanded} type="submit">
                                        <SendIcon />
                                    </Fab>
                                </ExpandMore>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Collapse>
        </>
    )
}
export default Comments;