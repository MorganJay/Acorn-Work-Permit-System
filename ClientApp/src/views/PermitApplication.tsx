import { useState } from 'react';
import styled from 'styled-components';

import ApplicationStepper from '../components/work-permit-application/ApplicationStepper';
import WorkPermit from '../components/work-permit-application/WorkPermit';

const PermitApplication = () => {
  const [step] = useState(1);
  return (
    <Container className="h-100 d-flex flex-column">
      <div className="d-flex align-items-center justify-content-between mb-5">
        <ApplicationStepper step={1} label="Work permit" active={step === 1} />
        <Divider />
        <ApplicationStepper
          step={2}
          label="Additional Work permit"
          active={step === 2}
        />
        <Divider />
        <ApplicationStepper
          step={3}
          label="Special equipment"
          active={step === 3}
        />
      </div>
      <WorkPermit />
    </Container>
  );
};

export default PermitApplication;

const Container = styled.div`
  padding: 3rem;
`;

const Divider = styled.hr`
  border: 1px solid #868686;
  background: #868686;
  max-width: 100px;
  width: 50%;
  height: 0px;
`;
