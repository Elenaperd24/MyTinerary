import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Chile1 from '../image/cities/Chile/Chile(1).jpg'
import Chile2 from '../image/cities/Chile/Chile(2).jpg'
import GatronomiaChile from '../image/cities/Chile/Chile Gastronomia.jpg'
import ChileCultura from '../image/cities/Chile/Chile Cultura.jpg'
import SeguridadChile from '../image/cities/Chile/ChileSeguridad.jpg'
import PanoramicaChile from '../image/cities/Chile/PanoramicaChile.jpg'

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ListaImagenesCity() {
  return (
      <div className='listaDeImagenesCity'>
    <ImageList
      sx={{
        width: "100vw",
        height: 450,
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={200}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: Chile1,
    title: 'Modern Infrastructure',
    author: '@myTinerary',
    featured: true,
  },
  {
    img: Chile2,
    title: 'Amazing landscapes',
    author: '@myTinerary',
  },
  {
    img: GatronomiaChile,
    title: 'Unique Gastronomy',
    author: '@myTinerary',
  },
  {
    img: ChileCultura,
    title: 'Culture and heritage',
    author: '@myTinerary',
  },
  {
    img: SeguridadChile,
    title: 'Safety and Quality of Life',
    author: '@myTinerary',
  },
  {
    img: PanoramicaChile,
    title: 'Beautiful Santiago de Chile',
    author: '@myTinerary',
    featured: true,
  },
  
];
