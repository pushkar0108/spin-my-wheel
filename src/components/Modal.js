import * as React from 'react';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxHeight: "80vh",
  overflow: 'scroll',
  p: 4,
  minWidth: '350px',
};

export default function AppModal({ 
  isOpen, handleModalClose, children, width,
}) {
  return (
    <Modal
      open={isOpen}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper elevation={3} sx={{
        ...style,
        width
      }}>
        <Tooltip title="Close">
          <IconButton 
            onClick={handleModalClose}
            aria-label="delete"
            style={{ 
              position: 'absolute',
              right: '20px',
            }}>
            <CloseIcon />
          </IconButton>
        </Tooltip>
        
        {children}
      </Paper>
    </Modal>
  );
}