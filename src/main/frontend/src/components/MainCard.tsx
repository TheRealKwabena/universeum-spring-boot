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
    <a href={link} className='button'>
      <Card sx={{ maxWidth: 345 }} style={{backgroundColor: "#e8ebeb"}} className="card">
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
                <Typography variant="body2" >
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

