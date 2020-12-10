import './Statbar.css';
import React from 'react';

export default class Statbar extends React.Component {
    render() {

        const icon = this.props.icon;
        const title = this.props.title;
        const description = this.props.description;

        return (
            <>
                <div className="statbar">
                    <div className="row">
                        <div className="column-65">
                            <p className="header">{title}</p>
                            <p className="description">{description}</p>
                        </div>
                        <div className="column-35">
                            <p className="icon">{icon}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}