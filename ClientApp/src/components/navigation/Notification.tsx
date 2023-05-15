import styled from 'styled-components';

import { RedDot } from '../../assets/icons/RedDot';
import { BellIcon } from '../../assets/icons/BellIcon';

const Notification = () => {
  return (
    <Container className="position-relative p-1">
      <RedDot
        width={25}
        height={25}
        className="position-absolute"
        style={{ right: -8 }}
      />
      <BellIcon width={25} height={25} />
    </Container>
  );
};

export default Notification;

const Container = styled.div`
  cursor: pointer;
`;
