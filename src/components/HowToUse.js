import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const Component = ({ index, title, subTitle }) => {
    return (
        <Card>
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

export default function HowToUse({ }) {
    return (
        <Grid container spacing={2} className="mt-16">
            <Grid item xs={12}>
                <Typography variant="h5" component="div" align="center">
                    Spin the wheel to make random choices
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
                    Build your own wheel to make random decisions, hand out prizes, gamify education, or more...
                </Typography>
            </Grid>
            <Grid container item xs={12} justifyContent="space-evenly">
                <Grid item xs={12} md={3}>
                    <Component
                        index={1}
                        title="Add slices"
                        subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text"
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Component
                        index={2}
                        title="Configure"
                        subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text"
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Component
                        index={3}
                        title="Play"
                        subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text"
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

