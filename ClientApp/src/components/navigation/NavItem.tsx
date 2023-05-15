import { SVGProps } from 'react';
import styled from 'styled-components';
import { Link, useMatch } from 'react-router-dom';
import { NavItem, NavLink } from 'reactstrap';

interface NavItemProps {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  linkTo: string;
  text: string;
}

const CustomNavItem = ({ Icon, linkTo, text }: NavItemProps) => {
  const match = useMatch({ path: `/${linkTo}` });

  return (
    <StyledNavItem
      className={`d-flex align-items-center px-3 py-4 ${match && 'active'}`}
    >
      <NavLink
        tag={Link}
        className="d-flex fs-6 justify-content-between gap-3 align-items-center"
        to={`/${linkTo}`}
      >
        <Icon width={25} height={25} fill="#868686" />
        <NavText className="m-0">{text}</NavText>
      </NavLink>
    </StyledNavItem>
  );
};
export default CustomNavItem;

const StyledNavItem = styled(NavItem)`
  max-width: 260px;
  max-height: 50px;
  border-radius: 10px;
  transition: all 1.5ms ease;
  padding-right: 1rem;
  cursor: pointer;
  svg {
    min-width: 25px;
  }

  &:hover,
  &.active {
    background: #4154ff;
    span {
      color: #f1f1f1;
    }
    svg {
      fill: #f1f1f1;
    }
  }
`;

const NavText = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #868686;
  white-space: nowrap;
`;
