import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [first_name, setFirst_name] = useState('');
    const [middle_name, setMiddle_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [address, setAddress] = useState('');
    const [zip_code, setZip_code] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [place_of_birth, setPlace_of_birth] = useState('');
    const [date_of_birth, setDate_of_birth] = useState('');
    const [sex, setSex] = useState('');
    const [civil_status, setCivil_status] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [blood_type, setBlood_type] = useState('');
    const [occupation, setOccupation] = useState('');
    const [mother_first_name, setMother_first_name] = useState('');
    const [mother_middle_name, setMother_middle_name] = useState('');
    const [mother_last_name, setMother_last_name] = useState('');
    const [father_first_name, setFather_first_name] = useState('');
    const [father_middle_name, setFather_middle_name] = useState('');
    const [father_last_name, setFather_last_name] = useState('');
    const [elementary, setElementary] = useState('');
    const [secondary, setSecondary] = useState('');
    const [college, setCollege] = useState('');

    useEffect(() => {
        if (item) {
            setFirst_name(item.first_name);
            setMiddle_name(item.middle_name);
            setLast_name(item.last_name);
            setAddress(item.address);
            setZip_code(item.zip_code);
            setEmail(item.email);
            setPhone(item.phone);
            setPlace_of_birth(item.place_of_birth);
            setDate_of_birth(item.date_of_birth);
            setSex(item.sex);
            setCivil_status(item.civil_status);
            setCitizenship(item.citizenship);
            setHeight(item.height);
            setWeight(item.weight);
            setBlood_type(item.blood_type);
            setOccupation(item.occupation);
            setMother_first_name(item.mother_first_name);
            setMother_middle_name(item.mother_middle_name);
            setMother_last_name(item.mother_last_name);
            setFather_first_name(item.father_first_name);
            setFather_middle_name(item.father_middle_name);
            setFather_last_name(item.father_last_name);
            setElementary(item.elementary);
            setSecondary(item.secondary);
            setCollege(item.college);
        }
    }, [item]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            first_name, middle_name, last_name, address, zip_code, email, phone,
            place_of_birth, date_of_birth, sex, civil_status, citizenship, height,
            weight, blood_type, occupation, mother_first_name, mother_middle_name,
            mother_last_name, father_first_name, father_middle_name, father_last_name,
            elementary, secondary, college
        };
        try {
            if (item) {
                await axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                await axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First name</label>
                <input type='text' value={first_name} onChange={(e) => setFirst_name(e.target.value)} />
            </div>
            <div>
                <label>Middle name</label>
                <input type='text' value={middle_name} onChange={(e) => setMiddle_name(e.target.value)} />
            </div>
            <div>
                <label>Last name</label>
                <input type='text' value={last_name} onChange={(e) => setLast_name(e.target.value)} />
            </div>
            <div>
                <label>Address</label>
                <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <label>Zip Code</label>
                <input type='text' value={zip_code} onChange={(e) => setZip_code(e.target.value)} />
            </div>
            <div>
                <label>Email</label>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Phone</label>
                <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label>Place of Birth</label>
                <input type='text' value={place_of_birth} onChange={(e) => setPlace_of_birth(e.target.value)} />
            </div>
            <div>
                <label>Date of Birth</label>
                <input type='date' value={date_of_birth} onChange={(e) => setDate_of_birth(e.target.value)} />
            </div>
            <div>
                <label>Sex</label>
                <input type='text' value={sex} onChange={(e) => setSex(e.target.value)} />
            </div>
            <div>
                <label>Civil Status</label>
                <input type='text' value={civil_status} onChange={(e) => setCivil_status(e.target.value)} />
            </div>
            <div>
                <label>Citizenship</label>
                <input type='text' value={citizenship} onChange={(e) => setCitizenship(e.target.value)} />
            </div>
            <div>
                <label>Height</label>
                <input type='text' value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div>
                <label>Weight</label>
                <input type='text' value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
                <label>Blood Type</label>
                <input type='text' value={blood_type} onChange={(e) => setBlood_type(e.target.value)} />
            </div>
            <div>
                <label>Occupation</label>
                <input type='text' value={occupation} onChange={(e) => setOccupation(e.target.value)} />
            </div>
            <div>
                <label>Mother's First Name</label>
                <input type='text' value={mother_first_name} onChange={(e) => setMother_first_name(e.target.value)} />
            </div>
            <div>
                <label>Mother's Middle Name</label>
                <input type='text' value={mother_middle_name} onChange={(e) => setMother_middle_name(e.target.value)} />
            </div>
            <div>
                <label>Mother's Last Name</label>
                <input type='text' value={mother_last_name} onChange={(e) => setMother_last_name(e.target.value)} />
            </div>
            <div>
                <label>Father's First Name</label>
                <input type='text' value={father_first_name} onChange={(e) => setFather_first_name(e.target.value)} />
            </div>
            <div>
                <label>Father's Middle Name</label>
                <input type='text' value={father_middle_name} onChange={(e) => setFather_middle_name(e.target.value)} />
            </div>
            <div>
                <label>Father's Last Name</label>
                <input type='text' value={father_last_name} onChange={(e) => setFather_last_name(e.target.value)} />
            </div>
            <div>
                <label>Elementary</label>
                <input type='text' value={elementary} onChange={(e) => setElementary(e.target.value)} />
            </div>
            <div>
                <label>Secondary</label>
                <input type='text' value={secondary} onChange={(e) => setSecondary(e.target.value)} />
            </div>
            <div>
                <label>College</label>
                <input type='text' value={college} onChange={(e) => setCollege(e.target.value)} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default ItemForm;
