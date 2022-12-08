import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import PatientItem from './PatientItem';

const PatientsList = observer (() => {
    const {patient} = useContext(Context)
  return (
    <tbody>
      {patient.patients.map(patient => 
            <PatientItem key={patient.id} patient={patient}/>
        )}
         <tr>
        <td>1</td>
        <td>Кукушкина</td>
        <td>Евдокия</td>
        <td>Ивановна</td>
        <td>01.01.1975</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Чижиков</td>
        <td>Иван</td>
        <td>Петрович</td>
        <td>11.05.1999</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Львова</td>
        <td>Алина</td>
        <td>Дмитриевна</td>
        <td>11.11.2000</td>
      </tr>
    </tbody>
  );
});

export default PatientsList