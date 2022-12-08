import React from 'react';

const PatientItem = ({patient}) => {
    return (
       /* <tr>
          <td>{patient.id}</td>
          <td>{patient.secondName}</td>
          <td>{patient.firstName}</td>
          <td>{patient.middleName}</td>
          <td>{patient.dateOfBirth}</td>
        </tr>
        */
        <tr>
        <td>1</td>
        <td>Кукушкина</td>
        <td>Евдокия</td>
        <td>Ивановна</td>
        <td>01.01.1975</td>
      </tr>
    );
};

export default PatientItem