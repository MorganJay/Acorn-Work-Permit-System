import styled from 'styled-components';
import { Link } from 'react-router-dom';

import NavItem from './navigation/NavItem';

import AppLinks from '../AppLinks';

const NavMenu = () => {
  return (
    <StyledAside className="d-flex flex-column justify-content-between pt-5 pb-3 px-5 pr-4 sticky-top top-0">
      <div className="d-flex flex-column gap-4">
        <Title>
          <Link to="/" className="fs-3">
            ACORN
          </Link>
        </Title>
        <NavItemContainer className="ng-white navbar-nav d-flex flex-column justify-content-around gap-2">
          {AppLinks.map(({ icon, name, path }) => (
            <NavItem key={name} Icon={icon} linkTo={path} text={name} />
          ))}
        </NavItemContainer>
      </div>
      <SupportContainer className="text-center">
        <Link to="/" className="fw-bold">
          Need help?
        </Link>
        <p className="text-center">
          Our support team is here <br />
          for you
        </p>
        <button className="fw-semibold p-1 px-2" type="button" title="Get Help">
          Get help
        </button>
      </SupportContainer>
    </StyledAside>
  );
};

export default NavMenu;

const Title = styled.h1`
  color: #4154ff;
  font-size: 25px;

  a {
    font-family: 'Satoshi-Bold';
  }
`;

const StyledAside = styled.aside`
  border-right: 1px solid #f1f1f1;
  max-width: 360px;
`;

const NavItemContainer = styled.ul`
  margin-left: -1rem;
`;
const SupportContainer = styled.div`
  a,
  button {
    color: #272c6f;
    font-size: 1.125rem;
  }

  p {
    color: #868686;
    font-size: 1.125rem;
  }

  button {
    border: 1px solid #868686;
    border-radius: 5px;
    max-width: 106px;
    white-space: nowrap;
    background: transparent;
    font-size: 18px;
    max-height: 40px;
  }
`;
