import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

interface IProps {
    isFetching: boolean;
    children: React.ReactNode;
}

class AsyncPage extends React.Component<IProps> {
    public componentDidCatch () {
        // todo: fire action
    }

    public render () {
        return (
            this.props.isFetching ? 
                <CircularProgress variant='indeterminate' /> :
                this.props.children
        );
    }
}

export default AsyncPage;
