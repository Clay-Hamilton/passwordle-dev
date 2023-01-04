import { useState } from 'react';
import Modal from 'react-modal';
import './App.css';
import OptionModal from './OptionModal';


const AppModal = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [selectedOption, setSelectedOption] = useState(undefined)

  // const submitBad = (e) => {
  //   e.preventDefault()
  //   alert("You suck!")
  // }
  const submit = (e) => {
    e.preventDefault()
    if (username == "clayham" && password == "hunter123") {
      alert("You have logged in successfully!")
    }
    else {
      alert("Wrong!")
    }
    // alert("Username: " + username + " Password: " + password)
    // console.log("Username: " + username + " Password: " + password)
  }

  const handleClearSelectedOption = () => {
    this.setState(() => ({selectedOption: undefined}));
  }



  return (
    <div className="App">
      <h1>Passwordle</h1>

      <OptionModal
      selectedOption={this.state.selectedOption}
      handleClearSelectedOption = {this.handleClearSelectedOption}
      />
    <p>Username:</p>
    <form onSubmit={submit}>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
    </form>
    <p>Password:</p>
    <form onSubmit={submit}>
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
    </form>
    </div>
  );
}

export default AppModal;
