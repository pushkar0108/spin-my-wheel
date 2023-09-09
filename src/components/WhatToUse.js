import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const Component = ({ index, title, subTitle }) => {
    return (
        <Card className="m-8 ml-16 mr-16 overflow-visible rounded-2xl">
            <CardContent className="relative">
                <Avatar className="absolute m-auto left-0 right-0" sx={{ width: 56, height: 56, top: "-30px" }}>
                {index}
                </Avatar>
                <Typography sx={{ mt: 2, mb: 1.5 }} variant="h4" component="div" align="center">
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
        subTitle: "Pick a random winner out of a list of potential winners. Ideal for random Twitter prize draws, or other prize games."
    },
    {
        title: "In the classroom",
        subTitle: "Gamify education by picking a student randomly who should answer the next question."
    },
    {
        title: "At work",
        subTitle: "At standup meetings, use the wheel to draw a random person who should speak first."
    },
    {
        title: "Help fix arguments",
        subTitle: "If you can't agree on something, use the wheel to make a final, random, decision."
    },
    {
        title: "At a sleepover",
        subTitle: "Make a wheel for the classic party game Truth or Dare. The wheel decides if the next player should say a truth, or do a dare."
    },
    {
        title: "Help fix arguments",
        subTitle: "Create a Yes or No wheel that will help you make decisions faster."
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

