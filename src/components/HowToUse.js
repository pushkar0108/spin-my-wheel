import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const Component = ({ index, title, subTitle }) => {
    return (
        <Card className="m-8 ml-16 mr-16 rounded-2xl" sx={{ 
            overflow: 'visible' 
        }}>
            <CardContent sx={{ position: 'relative' }}>
                <Avatar 
                    sx={{ 
                        width: 56, 
                        height: 56, 
                        top: "-30px",
                        margin: "auto",
                        position: 'absolute',
                        left: 0,
                        right: 0
                    }}>
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

export default function HowToUse({ }) {
    return (
        <Grid container spacing={2} sx={{mt: 4}}>
            <Grid item xs={12}>
                <Typography variant="h5" component="div" align="center">
                    Spin the wheel to make random choices
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
                    Build your own wheel to make random decisions, hand out prizes, gamify education, or more...
                </Typography>
            </Grid>
            <Grid container item xs={12} justifyContent="space-evenly">
                <Grid item xs={12} md={4}>
                    <Component
                        index={1}
                        title="Add slices"
                        subTitle="You have the flexibility to add up to 30 slices to the wheel. You can either manually input your entries in the adjacent box or import a list all at once."
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Component
                        index={2}
                        title="Customize"
                        subTitle="Customize the wheel to your preferences. You can configure themes, sounds, speed, and duration—all adjustable through the settings menu!"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Component
                        index={3}
                        title="Spin"
                        subTitle="Click the Spin button to set the wheel in motion. It will come to a stop on one random slice selected by our algorithm."
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

