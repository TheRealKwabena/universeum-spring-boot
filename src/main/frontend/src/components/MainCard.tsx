import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


interface Props {
  name: string,
  text: string,
  image: string,
  link: string
}


const MainCard: React.FC<Props> = ({name, image, text, link}) => {
  
  return (

    <Card sx={{ maxWidth: 345 }} className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={link} className='button'>
        <Button size="small" color="warning" >
          Select
        </Button> 
        </a>      
      </CardActions>
    </Card>
  );
}

export default MainCard

