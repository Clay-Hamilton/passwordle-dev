import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterJS = (props) => {
//   const [messages, setMessages] = useState([
//     "Welcome to Passwordle. Please sign up using the form below.",
//     "Welcome to my website!",
//     "I hope you have a great day!"
//   ]);
  const [index, setIndex] = useState(0);

//   const handleClick = () => {
//     setIndex((index + 1) % messages.length);
//   }

  return (
    <div>
      <Typewriter
        options={{
          strings: props.message,
          autoStart: true,
          delay: 70
        }}
      />
    </div>
  );
}

export default TypewriterJS;
