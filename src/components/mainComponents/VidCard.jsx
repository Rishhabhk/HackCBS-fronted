import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


const VidCard = ({VidData}) => {
    const vid = VidData;
    return (
        <Card sx={{ maxWidth: 245}} key={vid}>
            <a href={vid.vidUrl} target='_blank' rel="noreferrer">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="100"
                        image={vid.imageUrl}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant='body1' component='div'>
                            {vid.title}
                        </Typography>
                        <br />
                        <Typography color="text.secondary" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant='body2' display='flex' alignItems='center'><VisibilityIcon fontSize='1rem' />{vid.views}</Typography>
                            <Typography variant='body2' display='flex' alignItems='center'><AccessTimeIcon fontSize='1rem' />{vid.duration}</Typography>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </a>
        </Card>
    )
}

export default VidCard