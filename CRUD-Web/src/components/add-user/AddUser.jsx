import React, { useState } from 'react';
import './AddUser.css';

function AddUser({ onAdd }) {
  const [adding, setAdding] = useState(false);
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    address: { street: '', suite: '', city: '' },
    phone: '',
    website: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (['street', 'suite', 'city'].includes(id)) {
      setUser({ ...user, address: { ...user.address, [id]: value } });
    } else {
      setUser({ ...user, [id]: value });
    }
  };

  const handleAdd = () => {
    if (user.name === '' || user.username === '') {
      alert('Vui lòng nhập Name và Username!');
      return;
    }
    onAdd(user);
    setUser({
      name: '',
      username: '',
      email: '',
      address: { street: '', suite: '', city: '' },
      phone: '',
      website: '',
    });
    setAdding(false);
  };

  return (
    <div className="add-user">
      <button onClick={() => setAdding(true)}>Thêm người dùng</button>

      {adding && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Thêm người dùng</h3>
            <label>Name:</label>
            <input id="name" value={user.name} onChange={handleChange} />
            <label>Username:</label>
            <input
              id="username"
              value={user.username}
              onChange={handleChange}
            />
            <label>Email:</label>
            <input id="email" value={user.email} onChange={handleChange} />
            <label>City:</label>
            <input
              id="city"
              value={user.address.city}
              onChange={handleChange}
            />
            <label>Phone:</label>
            <input id="phone" value={user.phone} onChange={handleChange} />
            <label>Website:</label>
            <input id="website" value={user.website} onChange={handleChange} />

            <div className="modal-buttons">
              <button onClick={handleAdd}>Lưu</button>
              <button onClick={() => setAdding(false)}>Hủy</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddUser;
