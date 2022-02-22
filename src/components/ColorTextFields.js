import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import MaterialIcon, { colorPalette } from 'material-icons-react';

export default function FreeSolo() {
  return (
    <div className='busquedaCity'>
      <Stack spacing={2} sx={{ width: 300 }}>
        
        <Autocomplete
          id="Continent"
          freeSolo
          options={continent.map((option) => option.title)}
          renderInput={(params) => <TextField {...params} label="Continent" color="success" focused />}
        />
        
        <Autocomplete
          freeSolo
          id="City"
          disableClearable
          options={city.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search City" color="secondary"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
              variant="standard"
              focused


            />
          )}
        />
      </Stack>

    </div>
  );
}
const continent = [
  { title: 'Asia', city1: "Japon" },
  { title: 'Africa', city1: "Jerusalen" },
  { title: 'America', city1: "Buenos Aires" }
]
const city = [
  { title: 'Dublin', year: 1994 },
  { title: 'Sidney', year: 1972 },
];
