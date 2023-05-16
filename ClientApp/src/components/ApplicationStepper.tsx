import styled from 'styled-components';

interface StepperProps {
  step: number;
  label: string;
  active?: boolean;
}

const ApplicationStepper = ({ step, label, active }: StepperProps) => {
  return (
    <StepContainer className={`d-flex gap-1 ${active && 'active'}`}>
      <StepCircle className={`${active && 'active'}`}>{step}</StepCircle>{' '}
      {label}
    </StepContainer>
  );
};
export default ApplicationStepper;

const StepContainer = styled.div`
  font-family: 'Satoshi';
  font-weight: 500;
  flex-shrink: 0;

  &.active {
    color: #4353e1;
  }
`;

const StepCircle = styled.span`
  border: 1px solid #d9d9d9;
  min-width: 25px;
  min-height: 25px;
  flex-shrink: 0;
  text-align: center;
  display: block;
  border-radius: 50%;
  &.active {
    background: #4353e1;
    border: none;
    color: white;
  }
`;
