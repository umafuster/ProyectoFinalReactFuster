import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

//CSS
import "./CardComponent.css"

const CardComponent = ({ item }) => {
  const { name, date, description, img } = item;
  return (
    <Card sx={{ maxWidth: 350 }}>

      <CardMedia
        className='card-container'
        component="img"
        height="500"
        image={img}
        alt="Producto"
      />
      <CardContent className='card-typo'>
        <Typography className='card-typo' gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography className='card-typo' variant="subtitle1" color="text.secondary">
          {date}
        </Typography>
        <Typography className='card-typo' variant="body3" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

    </Card>
  );
};

export default CardComponent;