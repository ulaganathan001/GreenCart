import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Customer = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:800/customer")
      .then((res) => {
        setCustomers(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }

  const deleteCustomer = (id) => {
    if (window.confirm(`Are you sure to delete customer with id: ${id}`)) {
      axios.delete(`http://localhost:800/customer/${id}`)
        .then(() => {
          window.alert("Customer Deleted Successfully");
          fetchData();
        })
        .catch((err) => {
          console.error("Error deleting customer:", err);
        });
    }
  }

  return (
    <div className="container mt-4">
      <h2>Customer List</h2>

      <table className='table table-bordered table-hover'>
        <thead className='table-dark'>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Payment Type</th>
            <th>Changes</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.id}</td>
              <td>{customer.cusname}</td>
              <td>{customer.location}</td>
              <td>{customer.paytype}</td>
              <td>
                <Link to={`/editcus/${customer.id}`} className='btn btn-outline-primary btn-sm me-2'>Edit</Link>
                <button type='button' onClick={() => deleteCustomer(customer.id)} className='btn btn-outline-danger btn-sm'> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/addcus" className='btn btn-warning btn-lg'>Add Customer</Link>
    </div>
  );
}

export default Customer;
