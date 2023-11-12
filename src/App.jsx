import { useState } from 'react';

import InputForm from './Components/InputForm';

function App() {

  const [dataUser, setDataUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  // const [errorMessage, setErrorMessage] = useState({
  //   name: [],
  //   email: [],
  //   password: [],
  // })

  // Input Correct
  // const correctInput = () => {
  //   alert('Correct');
  // };

  // // Input incorrect
  // const incorrectInput = () => {
  //   alert('Incorrect');
  // };

  // Check input required
  const inputRequired = (obj) => {
    const isEmpty = Object.values(obj).filter((ele) => !ele).length
    if(!isEmpty){
      // correctInput();
      // alert('Input required correct')
    } else {
      // incorrectInput();
      alert('All input required')
    }
  };

  // Check input length
  const inputLength = (ele, min, max) => {
    if(ele.length <= max && ele.length >= min) {
      // correctInput();
      // alert('Input length correct')
    } else {
      // incorrectInput();
      alert(`input ${ele} minimum ${min} and maximum ${max}`)
    }
  };

  // Check valid email
  const inputEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)) {
      // correctInput();
      // alert('Email correct')
    } else {
      // incorrectInput();
      alert(`Email ${email} incorrect`)
    }
  };

  // Check Confirm Password
  const inputConfirmPassword = (pass, confPass) => {
    if(pass === confPass) {
      // correctInput();
      // alert('Password confirm correct')
    } else {
      // incorrectInput();
      alert('Password confirm incorrect')
    }
  };

  // Handler to validate input
  const handleDataUser = (data) => {
    const {confirmPassword, name, email, password} = data;
    inputRequired(data);
    inputLength(name, 6, 15);
    inputEmail(email);
    inputConfirmPassword(password, confirmPassword);
  };

  return (
    <>
      <div className='bg-blue-100 flex h-full flex-col items-center text-zinc-900'>
        <div className='bg-blue-400 p-4 my-12 shadow-xl hover:shadow-black rounded-lg lg:w-1/3 h-fit'>
          <h1 className='text-center text-4xl font-extrabold'>Register</h1>
          <InputForm inputDataUser={handleDataUser} />
        </div>
      </div>
    </>
  )
}

export default App
