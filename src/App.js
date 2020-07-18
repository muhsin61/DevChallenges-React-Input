import React from 'react';
import './App.css';
import Input from './Input.js'

function App() {
  return (
    <div className="App">
     <div><p>&lt;Input label="hello" /&gt;</p><Input label="hello"></Input></div>
     <div><p>&lt;Input error /&gt;</p><Input error ></Input></div>
     <div><p>&lt;Input disabled /&gt;</p><Input disabled ></Input></div>
     <div><p>&lt;Input helperText="Some interesting text" /&gt;</p><Input helperText="Some interesting text" ></Input></div>
     <div><p>&lt;Input size="sm" error /&gt;</p><Input size="sm" error ></Input></div>
     <div><p>&lt;Input size="md" error /&gt;</p><Input size="md" error ></Input></div>
     <div><p>&lt;Input value="some texts" error /&gt;</p><Input value="some texts" error ></Input></div>
     <div><p>&lt;Input value="some texts" /&gt;</p><Input value="some texts" ></Input></div>
     <div><p>&lt;Input startIcon="phone" /&gt;</p><Input startIcon="phone"></Input></div>
     <div><p>&lt;Input endIcon="lock" /&gt;</p><Input endIcon="lock"></Input></div>
     <div><p>&lt;Input endIcon="lock" size="md" /&gt;</p><Input endIcon="lock" size="md"></Input></div>
     <div><p>&lt;Input endIcon="lock" size="sm" /&gt;</p><Input endIcon="lock" size="sm"></Input></div>
     <div><p>&lt;Input fullWidth /&gt;</p><Input fullWidth></Input></div>
     <div><p>&lt;Input error fullWidth  error size="md" endIcon="lock" /&gt;</p><Input fullWidth error size="md" endIcon="lock" ></Input></div>
     <div><p>&lt;Input error fullWidth  error size="md" startIcon="lock" /&gt;</p><Input fullWidth error size="md" startIcon="lock" ></Input></div>
     <div><p>&lt;Input multiline row="5" /&gt;</p><Input multiline row="5" ></Input></div>
    </div>
  );
}

export default App;
