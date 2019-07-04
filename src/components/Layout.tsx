import * as React from 'react';
import AppBar from 'components/AppBar';

interface IProps {
    children: React.ReactNode;
}

class Layout extends React.Component<IProps> {
    public render () {
        return (
            <div>
                <AppBar />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;
