import PermitForm1 from './Form1';

const WorkPermit = () => {
  return (
    <>
      <div className="d-flex justify-content-between gap-4">
        <h1 className="text-blue text-nowrap">Work Permit Application</h1>
        <p className="m-0 align-self-center">Permit no: 021/30/2023</p>
      </div>
      <p>
        Ensure you fill out every available space with correct details as the
        information provided will be used to determine if this permit will be
        approved
      </p>
      <PermitForm1 />
    </>
  );
};

export default WorkPermit;
