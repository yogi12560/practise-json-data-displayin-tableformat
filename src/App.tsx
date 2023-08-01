import * as React from 'react';
import './style.css';

import data from './data.json';

export default function App() {
  return (
    // <div className="users">
    //   {data.people.map((user) => (
    //     <div className="user">{user.firstName}</div>
    //   ))}
    // </div>

    <table border="1">
      <thead>
        <tr>
          {' '}
          <td>firstName </td> <td> lastName</td> <td>gender </td> <td>age </td>{' '}
          <td>number</td>{' '}
        </tr>
      </thead>
      <tbody>
        {data.people.map((user) => {
          return (
            <tr>
              <td>{user.firstName} </td>
              <td> {user.lastName} </td>
              <td> {user.gender}</td>
              <td> {user.age}</td>
              <td> {user.number}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
