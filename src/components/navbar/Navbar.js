import {
  NavbarContainerStyled,
  NavbarLinkContainerStyled,
} from './NavbarStyles';
import { useNavigate } from 'react-router-dom';
import { LinkItem } from '../LinkItem/LinkItem';



function Navbar() {
  const navigate = useNavigate();
  return (
    <NavbarContainerStyled>
      <NavbarLinkContainerStyled>

        <LinkItem to='/'>Home</LinkItem>
        <LinkItem to='poke'>Poke</LinkItem>
        <LinkItem to='todo'>TodoList</LinkItem>

      </NavbarLinkContainerStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;