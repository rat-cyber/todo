import React, { useState, useEffect } from "react";
import axios from "axios";

const TodoList = () => {
  const [Data, setData] = useState([
    {
      userId: null,
      id: null,
      title: null,
      completed: null,
    },
  ]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
       console.log(res.data[0].complete)
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  
  console.log(Data)
  
  const users = [
    {
      userId: 1,
      id: 2,
      title: "delectus aut autem",
      completed: false,
    },
  ];
  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Tital</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        {Data.map((user, id) => {
          return (
            <tbody key={id}>
              <tr>
                <th scope="row">{user.id}</th>
                <td> {user.title}</td>

                <td>
                  { user.completed}
                    {/* // (user.completed ===  true
                    //   ? (user.completed = "incomplete")
                    //   : (user.completed = "complete"), */}
                   
                </td>
                <td>
                  <div class="btn-group">
                    <a
                      href="#"
                      class="btn btn-primary active"
                      aria-current="page"
                    >
                      Active link
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default TodoList;
