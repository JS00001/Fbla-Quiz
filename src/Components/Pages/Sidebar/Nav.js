import Account from '@material-ui/icons/AccountCircle';
import Dashboard from '@material-ui/icons/Dashboard';
import Chat from '@material-ui/icons/QuestionAnswer';
import Create from '@material-ui/icons/Create';
import Home from '@material-ui/icons/Home';

const Nav = [
    {
        name: "Home",
        icon: <Home className="icon" />
    },
    {
        name: "Quiz",
        icon: <Create className="icon" />
    },
    {
        name: "Dashboard",
        icon: <Dashboard className="icon" />
    },
    {
        name: "Account",
        icon: <Account className="icon" />
    },
    {
        name: "Faq",
        icon: <Chat className="icon" />
    }
]

export default Nav;