import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DesignCard from '../tablerows/DesignCard';
import "./NewdesignModal.css"
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewDesignCard from '../tablerows/NewDesignCard';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: '600px',
    bgcolor: '#ffff',
    border: 'gray',
    boxShadow: 24,
    p: 4,
    overflowY: "auto"
};

export default function basicModal({ open, data, handleOpen, handleClose,handleInsertDesign }) {

    return (
        <div className='!shadow-2xl rounded'>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography className='d-flex justify-content-between' id="modal-modal-title" variant="h6" component="h2">
                        <span className='d-flex ms-4 text-blue-800 fw-medium cm-number '> select a design to link </span> <FontAwesomeIcon className=" cm-pointer" size="xl" icon={faXmark} onClick={handleClose} />
                    </Typography>
                        <div className='mt-4 cm-designs-dashbord'>
                            {data.map((item,index) => {
                              return  <NewDesignCard id={index} data={item.imageUrl} imageName={item.imageName} isInside={true} handleInsertDesign = {handleInsertDesign} />
                            })}
                        </div>
                </Box>
            </Modal>
        </div>
    );
}
