import React from 'react';
// import React, { useState } from 'react';
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';

function NewAlert(props) {
  return (
    <div>
      
       props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{props.alert.type}{props.alert.msg} </strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}

export default NewAlert
