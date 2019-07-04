import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SearchIcon from '@material-ui/icons/Search';
import {makeStyles} from '@material-ui/core/styles';

interface IProps {
    open: boolean;
    onClose: () => void;
}

const useStyles = makeStyles({
    root: {
        width: 250
    }
});

export default (props: IProps) => {
    const classes = useStyles({});
    return (
        <Drawer open={props.open} onClose={props.onClose}>
            <div className={classes.root}
                role='presentation'
                onClick={props.onClose}
                onKeyDown={props.onClose}>
                <List>
                    <ListItem button>
                        <ListItemIcon><SearchIcon /></ListItemIcon>
                        <ListItemText primary='Search' />
                    </ListItem>
                </List>
            </div>
        </Drawer>
    );
}
