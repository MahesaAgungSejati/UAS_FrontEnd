import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './user.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser(); 
  }, []);

  const getUser = async () => {
    try {
      const userData = await axios.get('http://localhost:8080/user');
      console.log('Data pengguna:', userData.data);
      setUser(userData.data);
    } catch (error) {
      console.error('Kesalahan mengambil data pengguna:', error);
    }
  };
  

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/delete-user/${id}`);
      getUser();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <div>
      <Link to ={'/i/AddUser'} className='custom-button'>Tambah Data</Link>
        <table className="table-container">
          <caption className="table-caption">Data Tukang</caption>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Fasilitas</th>
              <th>Deskripsi</th>
            </tr>
          </thead>
          <tbody>
            {user.length > 0 ? (
              user.map((userData, index) => (
                <tr key={userData.id}>
                  <td>{index + 1}</td>
                  <td>{userData.nama}</td>
                  <td>{userData.facilities}</td>
                  <td>{userData.description}</td>
                  <td>
                    <a className="custom-button" href={`/i/EditUser/${userData.id}`}>Edit</a>
                    <button onClick={() => deleteUser(userData.id)} className="custom-button">
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div>
        <p>&copy; {new Date().getFullYear()} Tukang Aja.</p>
      </div>
    </div>
  );
};

export default User;
