import React  , {useState} from 'react';
import './AddressFormModal.css';
import TextField from '@material-ui/core/TextField';
import Button from '../Buttons/Button';

import ModalContainer from '../ModalContainer/ModalContainer.jsx';


const AddressFormModal = () => {
  var [address, setAddress] = useState("")
  var [name, setName] = useState("")
  var [contact, setContact] = useState("")
  var [email, setEmail] = useState("")
  return (
    <ModalContainer>
      <form className="addressFormModal center">
        <div className="addressFormFields">
          <TextField
            id="standard-basic"
            style={{ width: '100%', marginTop: '1em' }}
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            id="standard-basic"
            style={{ width: '100%', marginTop: '1em' }}
            label="Address"
          />
          <TextField
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            id="standard-basic"
            style={{ width: '100%', marginTop: '1em' }}
            label="Contact"
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="standard-basic"
            style={{ width: '100%', marginTop: '1em' }}
            label="Email"
          />
        </div>
        <Button style={{marginTop:"2em"}}>Pay  Proceed</Button>
      </form>
    </ModalContainer>
  );
};

export default AddressFormModal;
