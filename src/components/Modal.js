import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "60vw",
  maxHeight: "80vh",
  overflow: 'scroll',
  p: 4
};

export default function AppModal({ isOpen, handleModalClose, children }) {
  return (
    <Modal
      open={isOpen}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper elevation={3} sx={style}>
        {children}
      </Paper>
    </Modal>
  );
}