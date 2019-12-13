import React, {useState} from 'react';
import axios from 'axios';

const Input = () => {

    const [input, setInput] = useState({quote: '', person: ''});
    const [information, setInformation] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const data = {
            quote: input.quote,
            person: input.person
        };

        axios.post(`${process.env.REACT_APP_SERVER}/api/quote/new`, data)
        .then((res) => {
            console.log(res);
            setInput({quote: '', person: ''});
            setInformation(res.data.message);
        })
        .catch((err) => {
            console.log(err);
            setInformation(err.data.message);
        });
    }

    const handleFormInputChange = (e) => {
        setInput({...input, [e.target.id]: e.target.value});
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <p>Quote</p>
                <input required value={input.quote} id="quote" onChange={handleFormInputChange} />
                <p>Person</p>
                <input required value={input.person} id="person" onChange={handleFormInputChange} />
                <button type="submit">Add</button>
            </form>
            <p>{information}</p>
        </div>
    );
}

export default Input;