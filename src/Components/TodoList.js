import React, { useState, useEffect } from "react";
import axios from "axios";

const TodoList = () => {
  const [Data, setData] = useState([]);
    const [IdTital, setIdTital] = useState()
  const [Userdata, setUserdata] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")

      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const userdetails = async (id) => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id.userId}`
      );
      console.log(res.data);
      console.log(id);
      setIdTital(id)
      setUserdata(res.data);
    } catch (error) {
      console.log(error.responce);
    }
  };
  return (
    <div className="d-flex flex-row  ">
      <table className="  table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Tital</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        {Data?.map((user, id) => {
          return (
            <tbody key={id}>
              <tr>
                <th scope="row">{user?.id}</th>
                <td> {user?.title}</td>

                <td>{user?.completed ? "complete" : "incomplete"}</td>

                <td>
                  <div className="btn-group">
                    <a
                      href="#"
                      className="btn btn-primary active"
                      aria-current="page"
                      onClick={() => userdetails(user)}
                    >
                     View user
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <div className=" container">
        <h1>User Detail</h1>
        <div className="border-top   border-dark text-center  ">
          <div className="d-flex flex-row justify-content-between">
            <span>ToDo Id</span>
            <div>{IdTital?.id} </div>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <span>ToDo Title</span>
            <div>{IdTital?.title}</div>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <span>User Id</span>
            <div>{Userdata?.id}</div>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <span> Name</span>
            <div>{Userdata?.name}</div>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <span>Email</span>
            <div>{Userdata?.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
