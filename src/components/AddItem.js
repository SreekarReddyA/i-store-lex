import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {getModalProperties} from '../services/uiServices'

import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

export default function AddItem(props) {
    const classes = getModalProperties();
    const [open,
        setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<AddIcon />}
              onClick={handleOpen}
            >
              {props.buttonText}
            </Button>
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500
            }}>
                <Fade in={open}>
                    <React.Fragment>
                        <CssBaseline/>
                        <Container maxWidth="sm" style={{backgroundColor: 'white'}}>
                            {props.form}
                        </Container>
                    </React.Fragment>
                </Fade>
            </Modal>
        </div>
    );
}