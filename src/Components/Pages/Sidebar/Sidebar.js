import './Sidebar.css';
import Nav from './Nav';
import React from 'react';
import logo from '../../../assets/fbla.png';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton'
import ListItemText from '@material-ui/core/ListItemText'

import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Youtube from '@material-ui/icons/YouTube';

export default class Sidebar extends React.Component {
    render() {

        const active = this.props.active;
        const setActive = this.props.setActive;

        return (
            <>
                <div className="sidebar">
                    <img src={logo} alt="logo" className="logo" />

                    <div className="sidebar-menu">
                        <List>
                            {
                                Nav.map(item => {
                                    return (
                                        <div className={"item " + (active === item.name ? "active" : "")}>
                                            <ListItem button onClick={() => setActive(item.name)}>
                                                {item.icon}
                                                <ListItemText className="text">{item.name}</ListItemText>
                                            </ListItem>
                                        </div>
                                    )
                                })
                            }
                        </List>
                    </div>

                    <div className="sidebar-buttons">
                        <button className="buttons voice">Run Voice Command</button>
                        <button className="buttons settings">Settings</button>
                    </div>

                    <div className="sidebar-social">
                        <IconButton href="https://facebook.com/" target="_blank"> <Facebook className="icon" /> </IconButton>
                        <IconButton href="https://twitter.com/" target="_blank"> <Twitter className="icon" /> </IconButton>
                        <IconButton href="https://youtube.com/" target="_blank"> <Youtube className="icon" /> </IconButton>
                    </div>
                </div>

            </>
        )
    }
}
