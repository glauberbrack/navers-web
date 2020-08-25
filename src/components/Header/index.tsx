import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import logo from '../../assets/images/logo.png';

import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Link to="/dashboard">
        <img src={logo} alt="Navers" />
      </Link>

      <button type="button" onClick={signOut}>
        <p>Sair</p>
      </button>
    </Container>
  );
};

export default Header;
