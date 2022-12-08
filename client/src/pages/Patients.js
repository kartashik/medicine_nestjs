import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Context } from '../index';
import PatientsList from "../components/PatientsList";

const Patients = observer (() => {
    const {patient} = useContext(Context)
   /* useEffect(() => {
        fetchPatients().then(data => patient.setPatients(data))
    }) */
  return (
    <Container>
        <Row className="mt-2">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Фамилия</th>
                        <th>Имя</th>
                        <th>Отчество</th>
                        <th>Дата рождения</th>
                    </tr>
                </thead>
                <PatientsList/>
            </Table>
        </Row>
    </Container>
  );
});

export default Patients