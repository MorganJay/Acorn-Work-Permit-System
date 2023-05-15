import { useState } from 'react';
import styled from 'styled-components';

import ApplicationStepper from '../components/ApplicationStepper';

const PermitApplication = () => {
  const [step, setStep] = useState(1);
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
      <div className="d-flex justify-content-between align-items-end">
        <h1 className="text-blue">Work Permit Application</h1>
        <p>Permit no: 021/30/2023</p>
      </div>
      <p>
        Ensure you fill out every available space with correct details as the
        information provided will be used to determine if this permit will be
        approved
      </p>
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
