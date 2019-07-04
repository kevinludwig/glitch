import * as React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {withStyles, Theme} from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
    root: {
        flexGrow: 1
    },
    button: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
});

interface IProps {
    classes: any;
}

class AppBar extends React.Component<IProps> {
    public render () {
        const classes = this.props.classes;
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
    }
}

export default withStyles(styles)(AppBar);
