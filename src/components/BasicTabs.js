import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import List from "./List";
import Paper from '@mui/material/Paper';
import SettingsIcon from '@mui/icons-material/Settings';
import Modal from './Modal';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({
  segments, setSegments, results
}) {
  const [value, setValue] = React.useState(0);
  const [openModal, setOpenModal] = React.useState(false);
  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={3} className="p-4 mt-8">

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div>Spinning Wheel</div>
        </Grid>
        <Grid item xs={4}>
          <SettingsIcon sx={{ float: 'right' }} onClick={handleModalOpen} />
        </Grid>
      </Grid>
      
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab value={0} {...a11yProps(0)}
              label={
                <Badge badgeContent={segments.length} color="primary">
                  Inputs &nbsp; &nbsp;
                </Badge>
              }
            />
            <Tab value={1} {...a11yProps(0)}
              label={
                <Badge badgeContent={results.length} color="primary">
                  Results &nbsp; &nbsp;
                </Badge>
              }
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <List
            segments={segments}
            setSegments={setSegments}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {
            results.map((result, i) => <div key={result + i}>{result}</div>)
          }
        </CustomTabPanel>
      </Box>

      <Modal
        isOpen={openModal}
        handleModalClose={handleModalClose}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Modal>
    </Paper>

  );
}