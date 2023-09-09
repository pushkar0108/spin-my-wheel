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
                <Grid item xs={12} md={4}>
                    <Component
                        index={1}
                        title="Add slices"
                        subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Component
                        index={2}
                        title="Configure"
                        subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
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

