import React from 'react';

export default props => (
    <table className="table">
      <thead>
        <tr>
        <th onClick={props.onSort.bind(null, 'id')}>
            ID {props.sortField === 'id' ? <small>{props.sort}</small> : null}
          </th>
          <th onClick={props.onSort.bind(null, 'secondName')}>
              Фамилия {props.sortField === 'secondName' ? <small>{props.sort}</small> : null}
          </th>
          <th onClick={props.onSort.bind(null, 'firstName')}>
              Имя {props.sortField === 'firstName' ? <small>{props.sort}</small> : null}
          </th>
          <th onClick={props.onSort.bind(null, 'middleName')}>
              Отчество {props.sortField === 'middleName' ? <small>{props.sort}</small> : null}
          </th> 
          <th onClick={props.onSort.bind(null, 'dateOfBirth')}>
            Дата рождения {props.sortField === 'dateOfBirth' ? <small>{props.sort}</small> : null}
          </th>
          </tr>
        </thead>
        <tbody>
            { props.data.map(item =>(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.secondName}</td>
                    <td>{item.firstName}</td>
                    <td>{item.middleName}</td>
                    <td>{item.dateOfBirth}</td>
                </tr>
            ))}
        </tbody>
    </table>
)
/*
<th onClick={props.onSort.bind(null, 'id')}>
            ID {props.sortField === 'id' ? <img alt={"sort"} src={props.sort}/>  : null}
          </th>

import {$host} from "./index";

export const fetchPatients = async () => {
    const {data} = await $host.get('patients/getAll?userId=1')
    return data 
}
*/