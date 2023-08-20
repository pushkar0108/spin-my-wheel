import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const Component = ({ index, title, subTitle }) => {
    return (
        <Card className="m-8 ml-16 mr-16">
            <CardContent>
                <Typography sx={{ mb: 1.5 }} variant="h3" component="div" align="center">
                    {index}
                </Typography>
                <Typography sx={{ mb: 1.5 }} variant="h5" component="div" align="center">
                    {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
                    {subTitle}
                </Typography>
            </CardContent>
        </Card>
    )
}

const items = [
    {
        title: "Random prize draw",
        subTitle: "pick a random winner out of a list of potential winners. Ideal for random Twitter prize draws, or other prize games."
    },
    {
        title: "In the classroom",
        subTitle: "gamify education by picking a student randomly who should answer the next question."
    },
    {
        title: "At work",
        subTitle: "at standup meetings, use the wheel to draw a random person who should speak first."
    },
    {
        title: "Help fix arguments",
        subTitle: "if you can't agree on something, use the wheel to make a final, random, decision."
    },
    {
        title: "At a sleepover",
        subTitle: "make a wheel for the classic party game Truth or Dare. The wheel decides if the next player should say a truth, or do a dare."
    },
    {
        title: "Help fix arguments",
        subTitle: "create a Yes or No wheel that will help you make decisions faster."
    },
]

export default function WhatToUse({ }) {
    return (
        <Grid container spacing={2} className="mt-16">
            <Grid item xs={12}>
                <Typography variant="h5" component="div" align="center">
                    What can I use the wheel for?
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
                    A few ideas on how you can use a random spinner wheel at work, at home, or in the classroom.
                </Typography>
            </Grid>
            <Grid container item xs={12} justifyContent="space-evenly">
                {
                    items.map((item, i) => {
                        return (
                            <Grid key={item.title} item xs={12} md={4}>
                                <Component
                                    index={i+1}
                                    title={item.title}
                                    subTitle={item.subTitle}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Grid>
    )
}

