import axios from "axios";
import React, { useState, useEffect } from 'react';
import './AddUser.css';

function AddUser() {
    const [nama, setNama] = useState("");
    const [facilities, setFacilities] = useState("");
    const [description, setDescription] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (nama === "" || facilities === "" || description === "") {
            alert("Data Failed to be Added, field cannot be empty!")
        } else {
            try{
                await axios.post('http://localhost:8080/insert-user', {
                    nama : nama,
                    facilities : facilities,
                    description : description,
                });

                alert("Data added successfully");
                window.location.href = '/i/user';
            } catch (error) {
                console.error('Error adding user:', error);
                alert("Data failed to add, an error occurred");
            }
            }
        
        }

        return (
            <div>
              <form className="form-input" onSubmit={handleFormSubmit}>
                <caption className="table-caption">Form Input Data</caption>
                <div>
                  <label className="label-input">Nama Tukang</label>
                  <input
                    type="text"
                    className="input-form"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Masukkan Nama Tukang"
                  />
                </div>
                <div>
                  <label className="label-input">Fasilitas</label>
                  <input
                    type="text"
                    className="input-form"
                    value={facilities}
                    onChange={(e) => setFacilities(e.target.value)}
                    placeholder="Masukkan Fasilitas"
                  />
                </div>
                <div>
                  <label className="label-input">Deskripsi</label>
                  <input
                    type="text"
                    className="input-form"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Masukkan Deskripsi"
                  />
                </div>
                <div>
                  <button type="submit">Tambahkan</button>
                </div>
              </form>
            </div>
          );
        }
export default AddUser;