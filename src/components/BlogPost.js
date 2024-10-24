import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function BlogPost({
  date, imageSrc, title, subTitle, content
}) {

  return (
    <Card sx={{m: {
      md: 8,
      xs: 2
    }}}>
      <CardHeader
        subheader={date}
      />
      <CardMedia
        component="img"
        sx={{ 
          height: { md: 340 },
          objectFit: { xs: "cover" }
        }}
        image={imageSrc}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align='center'>
          {title}
        </Typography>
        {
          content.map((section, index) => {
            const { variant = "body1", texts, marginLeft = 0 } = section;
            return (
              <Typography 
                sx={{ mt: 2, ml: marginLeft }} 
                key={index}
                variant={variant} 
                color="text.secondary">
                {
                  texts.map((text, index) => {
                    return (
                      <div key={index}>{text}</div>
                    )
                  })
                }
              </Typography>
            )
          })
        }
      </CardContent>
    </Card>
  );
}