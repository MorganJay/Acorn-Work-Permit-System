import styled from 'styled-components';

import Notification from '../components/navigation/Notification';

import ProfilePic from '../assets/img/caleb.png';
import { ArrowDown } from '../assets/icons/ArrowDown';

const NavProfileMenu = () => {
  return (
    <Container className="d-flex justify-content-end align-items-center gap-2 px-5 py-3">
      <Notification />
      <h5 className="text-blue text-nowrap m-0">Caleb Joshua</h5>
      <img
        src={ProfilePic}
        alt="Caleb Joshua smiling pic"
        className="mx-2 rounded-3"
      />
      <ArrowDown style={{ marginTop: 15, cursor: 'pointer' }} />
    </Container>
  );
};
export default NavProfileMenu;

const Container = styled.div`
  border-bottom: 1px solid #d9d9d9;
`;
