import React from 'react';
import Form from 'react-bootstrap/Form';

export default function Checkbox() {
  return (
    <div>
     <Form>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className='checkbox'>
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            // label={`default ${type}`}
          />

          {/* <Form.Check
            disabled
            type={type}
            label={`disabled ${type}`}
            id={`disabled-default-${type}`}
          /> */}
        </div>
      ))}
    </Form>

    </div>
      
    
  );
}
