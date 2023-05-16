import styled from 'styled-components';
import { Form, FormGroup, Label, Col, Input, Button, Row } from 'reactstrap';

const PermitForm1 = () => {
  return (
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
      <Row className="mt-1 w-full">
        <Col sm={6} md={8}>
          <Button className="fw-bold" outline>
            Cancel
          </Button>
        </Col>
        <Col
          className="d-flex justify-content-end gap-2 flex-grow-0"
          md={4}
          sm={6}
        >
          <Button
            type="button"
            className="fw-bold flex-grow-0 text-nowrap"
            outline
          >
            Save to Draft
          </Button>
          <NextButton className="fw-bold flex-grow-0" type="button">
            Next
          </NextButton>
        </Col>
      </Row>
    </Form>
  );
};

export default PermitForm1;

const NextButton = styled(Button)`
  background: #4353e1;
  transition: filter 0.3s ease;
  border: none;
  width: 80px;
  &:hover {
    color: white;
    background-color: #0b20d8;
  }
`;
