import React, { useState } from 'react';

const AddSong = ({ addSong }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title);
        setTitle('');
    }

    return (
        <div class="form-group">
            <form className='mt-3' onSubmit={handleSubmit}>
                <label>Song Name:</label>
                <input className='form-control w-25 mx-auto' type='text' value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input type='submit' value='add song' className='btn btn-primary mt-2' />
            </form>
        </div>
    );
}

export default AddSong;