import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterJS = (props) => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <Typewriter
        options={{
          strings: props.message,
          autoStart: true,
          delay: 30
        }}
      />
    </div>
  );
}

export default TypewriterJS;
