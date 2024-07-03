import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';

export default function MediaCard({
  imageSrc, title, subTitle,
}) {
  const router = useRouter();

  return (
    <Card sx={{m:2}}>
      <CardHeader
        subheader="September 14, 2016"
      />
      <CardMedia
        sx={{ height: 140 }}
        image={imageSrc}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subTitle}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => {
          router.push(`/blog/${title}`);
        }}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}