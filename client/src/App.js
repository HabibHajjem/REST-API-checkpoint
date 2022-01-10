import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddContact from './components/AddContact';
import ContactDetails from './components/ContactDetails';
import ListContacts from './components/ListContacts';
import NavBare from './components/NavBare';

function App() {
  return (
    <div className="App">
      <NavBare/>
      <Routes>
          <Route path='/' element={<h1 style={{textAlign:"center",marginTop:"20px"}}>Welcome to my web site !</h1>} ></Route>
          <Route path='/contacts' element={<ListContacts/>} ></Route>
          <Route path='/addContact' element={<AddContact/>} ></Route>
          <Route path='/contacts/:id' element={<ContactDetails/>}></Route>
          <Route path='/updateContact/:id' element={<AddContact/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
