import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Guarantee_bond_creation from './components/Guarantee_bond_creation';


function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="primary" onClick={() => setShow(true)}>
           Guarantee Bond Creation
        </Button>
        <Modal
        size="xl"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        
        <Modal.Body>
          <Guarantee_bond_creation />
        </Modal.Body>
        
        <div className='border-2 border-gray bg-blue-800 text-white'>
          <p className='mb-1 ml-5'>All Mandoratory Fields' Labels are displayed in blue</p> 
        </div>
      </Modal>
      </header>
    </div>
  );
}

export default App;
