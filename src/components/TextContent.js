import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Component = ({ title, subTitles }) => {
    return (
        <Box>
        <Typography sx={{ mt: 2, mb: 1.5 }} variant="h5" component="div">
            {title}
        </Typography>
        <ul>
            {
            subTitles.map(subTitle => {
                return (
                <li key={subTitle}>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {subTitle}
                    </Typography>
                </li>
                )
            })
            }
        </ul>
        </Box>
    )
}

export default function TextContent({ items, title }) {
    return (
        <Grid container spacing={2} className="mt-16 mb-16">
          <Grid item xs={12}>
            <Typography variant="h4" component="div" align="center">
              {title}
            </Typography>
          </Grid>
          <Grid container item xs={12} justifyContent="space-evenly">
            {
              items.map((item, i) => {
                return (
                  <Grid key={item.title} item xs={8}>
                    <Component
                      index={i + 1}
                      title={item.title}
                      subTitles={item.subTitles}
                    />
                  </Grid>
                )
              })
            }
          </Grid>
        </Grid>
    )
}