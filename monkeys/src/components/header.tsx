import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@material-ui/core';

const Header = () => (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit"><Link to="/">Home</Link></Button>
        <Button color="inherit"><Link to="/macaque">macaque</Link></Button>
        <Button color="inherit"><Link to="/babouin">babouin</Link></Button>
        </Toolbar>
    </AppBar>
);

export default Header;
