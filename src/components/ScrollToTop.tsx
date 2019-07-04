import * as React from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';

type Props = RouteComponentProps<{}> & {
    children: React.ReactNode
};

class ScrollToTop extends React.Component<Props> {
    public componentWillReceiveProps(nextProps) {
        if (this.props.location.pathname !== nextProps.location.pathname) {
            window.scrollTo(0, 0);
        }
    }

    public render () {
        return this.props.children;
    }
}

export default withRouter(ScrollToTop);
