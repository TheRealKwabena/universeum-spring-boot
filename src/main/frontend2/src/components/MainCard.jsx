import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';




const MainCard = ({name, image, text, link}) => {
  
  return (
    <a href={link} className='button'>
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
           
             
             
            </CardActions>
          </Card>
    </a>

    
  );
}

export default MainCard

