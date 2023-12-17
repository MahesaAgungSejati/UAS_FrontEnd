import axios from "axios";
import React, { useState, useEffect } from 'react';
import './EditUser.css';
import { Prompt } from "react-router-dom";

const EditUser = ({ match }) => {
    const userId = match.params.id;
    const [formData, setFormData] = useState({
        nama: '',
        facilities: '',
        description: '',
    });
    const [nama, setNama] = useState("");
    const [facilities, setFacilities] = useState("");
    const [description, setDescription] = useState("");
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isBlocking, setIsBlocking] = useState(false);

    // const handleChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value,
    //     });
    //     setIsBlocking(true);
    // };

    const getdetail = async () => {
        setLoading(true);

        try {
            const detail_data = await axios.get(`http://localhost:8080/detail-user/${userId}`);
            setNama(detail_data.data.data[0]['nama']);
            setFacilities(detail_data.data.data[0]['facilities']);
            setDescription (detail_data.data.data[0]['description']);
        } catch (error) {
            setError('Error Updating Data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getdetail(); 
      }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.put(`http://localhost:8080/update-user/${userId}`, {
                nama: nama,
                facilities: facilities,
                description: description,
            });
            alert('Data Updated successfully');
            setShow(false);
            setIsBlocking(false);
            window.location.href="/i/User"
        } catch (error) {
            setError('Error Updating Data');
        } finally {
            setLoading(false);
        }
    };

    const closeModal = () => {
        setNama("");
        setFacilities("");
        setDescription("");
        setShow(false);
        setError(null);
    };

    return (
        <div show= {show} onHide= {closeModal} className="form-input">
            <Prompt when={isBlocking} message="You have unsaved changes. Are you sure you want to leave this page?" />
            <h2 className="label input">Edit Data Tukang</h2>

            <form onSubmit={handleSubmit}>
                <div className="input-form">
                    <label className="label-input">Nama Tukang</label>
                    <input
                        type="text"
                        name="nama"
                        onChange={(e) =>
                            setNama(e.target.value)}
                        value={nama}
                        placeholder="Enter Nama"
                    />
                </div>

                <div className="input-form">
                    <label className="label-input">Facilities</label>
                    <input
                        type="text"
                        name="facilities"
                        onChange={(e) =>
                            setFacilities(e.target.value)}
                        value={facilities}
                        placeholder="Enter Facilities"
                    />
                </div>

                <div className="input-form">
                    <label className="label-input">Description</label>
                    <input
                        type="text"
                        name="description"
                        onChange={(e) =>
                            setDescription(e.target.value)}
                        value={description}
                        placeholder="Enter Description"
                    />
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? 'Updating...' : 'Update User'}
                </button>

                {error && <p className="text-danger">{error}</p>}
            </form>
        </div>
    );
};

export default EditUser;
