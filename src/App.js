import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployeeAction } from './actions/fetchEmployeeAction';
import { deleteEmployeeAction } from './actions/deleteEmployeeAcrion';
import { useNavigate } from 'react-router-dom';

function App() {
  const { employeeList} = useSelector((state)=>state.employeeReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getEmployees = () => {
    dispatch(fetchEmployeeAction());
  };

  const deleteEmployee = (id) => {
    dispatch(deleteEmployeeAction(id));
    getEmployees();
  }

  useEffect(()=> {
    if(!localStorage.getItem("token")) {
      navigate("/login")
    } else {
      getEmployees();
    }
  } , []);

  return (
    <div className="App">
      <h1>CREATE new employee</h1>

      
{employeeList && employeeList.map((el) => (
  <div key={el.id} className="employees">
    <div>id: {el.id}</div>
    <div>{el.title}</div>
    <div>{el.userId}</div>
    <button onClick={()=>deleteEmployee(el.id)}>Delete</button>
  </div>
))}
    </div>
  );
}

export default App;
