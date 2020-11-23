/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/core/styles';
import { Container, Bar, IconButtonContainer, Logo } from './styles';

const HeaderLayout = ({ logo, leftIcon }) => {
  const theme = useTheme();

  const handleClickMenu = () => {
    /*     collapseDrawer(false);
     */
  };

  return (
    <Container position="static" theme={theme}>
      <Bar theme={theme}>
        {/* <IconButtonContainer>{leftIcon}</IconButtonContainer> */}
        <IconButtonContainer onClick={handleClickMenu}>
          <MenuIcon />
        </IconButtonContainer>
        <Logo src={logo} alt="logo" />
      </Bar>
    </Container>
  );
};

export default HeaderLayout;
