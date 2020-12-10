import './Account.css';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

export default class Account extends React.Component {
    state = {}

    render() {

        const setActive = this.props.setActive;

        return (
            <>
                <Sidebar active="Account" setActive={setActive} />
            </>
        )
    }
}