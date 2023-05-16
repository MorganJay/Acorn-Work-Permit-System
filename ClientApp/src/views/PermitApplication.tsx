import { useState } from 'react';
import styled from 'styled-components';
import { Form, FormGroup, Label, Col, Input, Button, Row } from 'reactstrap';

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
      <div className="d-flex justify-content-between gap-4">
        <h1 className="text-blue text-nowrap">Work Permit Application</h1>
        <p className="m-0 align-self-center">Permit no: 021/30/2023</p>
      </div>
      <p>
        Ensure you fill out every available space with correct details as the
        information provided will be used to determine if this permit will be
        approved
      </p>
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input id="lastName" name="lastName" type="text" required />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input id="firstName" name="firstName" type="text" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="projectName">Project Name</Label>
              <Input id="projectName" name="projectName" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="jsaNo">JSA No</Label>
              <Input id="jsaNo" name="jsaNo" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="companyName">Company Name</Label>
              <Input id="companyName" name="companyName" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="companyAddress">Company Address</Label>
          <Input id="companyAddress" name="companyAddress" />
        </FormGroup>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="durationOfWork">Duration of Work</Label>
              <Input id="durationOfWork" name="durationOfWork" type="select" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="startDate">Start Date</Label>
              <Input id="startDate" name="startDate" type="date" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="endDate">End Date</Label>
              <Input id="endDate" name="endDate" type="date" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="typeOfWork">Type of Work</Label>
              <Input id="typeOfWork" name="typeOfWork" type="select" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="startTime">Start Time</Label>
              <Input id="startTime" name="startTime" type="time" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="endTime">End Time</Label>
              <Input id="endTime" name="endTime" type="time" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="equipmentToBeUsed">Equipment To Be Used</Label>
              <Input
                name="equipmentToBeUsed"
                id="equipmentToBeUsed"
                type="textarea"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="equipmentDescription">Equipment Description</Label>
              <Input
                name="equipmentDescription"
                id="equipmentDescription"
                type="textarea"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup className="mb-4" check>
          <Input
            id="agreeToPermitConditions"
            name="agreeToPermitConditions"
            type="checkbox"
          />
          <Label check for="agreeToPermitConditions">
            I understand and agree to permit conditions
          </Label>
        </FormGroup>
        <Row className="w-full">
          <Col md={8}>
            <Button outline>Cancel</Button>
          </Col>
          <Col className="d-flex justify-content-end gap-2" md={4}>
            <Button type="button" outline>
              Save to Draft
            </Button>
            <Button type="button" className=''>Next</Button>
          </Col>
        </Row>
      </Form>
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
