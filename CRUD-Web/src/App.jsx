import { useState } from 'react';
import './App.css';
import AddUser from './components/add-user/AddUser';
import SearchForm from './components/search-form/SearchForm';
import ResultTable from './components/result-table/ResultTable';

function App() {
  const [kw, setKeyword] = useState('');
  const [newUser, setNewUser] = useState(null);

  return (
    <>
      <div className="app-container">
        <h1>Quản lý người dùng</h1>
        <SearchForm onChangeValue={setKeyword} />
        <AddUser onAdd={setNewUser} />
        <ResultTable
          keyword={kw}
          user={newUser}
          onAdded={() => setNewUser(null)}
        />
      </div>
    </>
  );
}

export default App;
