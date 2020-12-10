import './Quiz.css';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

export default class Quiz extends React.Component {
    state = {}

    render() {

        const setActive = this.props.setActive;

        return (
            <>
                <Sidebar active="Quiz" setActive={setActive} />
            </>
        )
    }
}