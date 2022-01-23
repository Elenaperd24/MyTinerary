import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Link as LinkRouter } from "react-router-dom";



export default function FloatingActionButtons() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      
      <Fab color="secondary" aria-label="MapsUgc">
        <MapsUgcIcon />
      </Fab>
      <Fab variant="extended">
        <LinkRouter to="/city">
        Read More
        </LinkRouter>
      </Fab>
      <Fab aria-label="like">
        <FavoriteIcon />
      </Fab>
    </Box>
  );
}