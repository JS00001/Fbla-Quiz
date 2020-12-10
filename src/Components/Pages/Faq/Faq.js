import './Faq.css';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

export default class Faq extends React.Component {
    state = {}

    render() {

        const setActive = this.props.setActive;

        return (
            <>
                <Sidebar active="Faq" setActive={setActive} />
            </>
        )
    }
}