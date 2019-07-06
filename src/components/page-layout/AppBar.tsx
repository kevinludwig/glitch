import React, {useState, useCallback} from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Theme, makeStyles} from '@material-ui/core/styles';

import NavMenu from './NavMenu';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1
    },
    button: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

export default () => {
    const classes = useStyles({});
    const [open, setOpen] = useState(false);
    const handleOpen = useCallback(() => setOpen(true), []);
    const handleClose = useCallback(() => setOpen(false), []);

    return (
        <div className={classes.root}>
            <MuiAppBar position='static'>
                <Toolbar>
                    <IconButton
                        className={classes.button}
                        edge='start'
                        color='inherit'
                        onClick={handleOpen}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        Glitch
                    </Typography>
                </Toolbar>
            </MuiAppBar>
            <NavMenu open={open} onClose={handleClose} />
        </div>
    );
};

