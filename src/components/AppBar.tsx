import * as React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Theme, makeStyles} from '@material-ui/core/styles';

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
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <MuiAppBar position='static'>
                <Toolbar>
                    <IconButton
                        className={classes.button}
                        edge='start'
                        color='inherit'>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        Glitch
                    </Typography>
                </Toolbar>
            </MuiAppBar>
        </div>
    );
};

