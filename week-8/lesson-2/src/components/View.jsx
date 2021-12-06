import React from 'react';
import { Table, Button } from 'react-bootstrap';

const View = (props) => {
    console.log(props);
    return (
        <div className="container">
            {
                props.todos.length ? (
                    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Title</th>
      <th>#</th>
    </tr>
  </thead>
  <tbody>
      {
          props.todos.map((item, index) => (
            <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>
                    <Button onClick={() => props.deleteTask(item.id)}>Delete</Button>
                </td>
            </tr>
          ))
      }
    
  </tbody>
</Table>
                ) : (
                    <h2>Пока что у вас нету тасков!</h2>
                )
            }
           
        </div>
    );
};

export default View;