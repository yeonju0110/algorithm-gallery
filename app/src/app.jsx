import React from 'react';
import './app.module.css';
import Field_Tags from './components/Field_Tags/Field_Tags';
import Field_PostEdit from './components/Field_PostEdit/Field_PostEdit';
import Field_PostPublish from './components/Field_PostPublish/Field_PostPublish';

function App() {
  return (
    <>
      {/* 
      <Field_Tags />
      <Field_PostEdit />
      */}
      <Field_PostPublish />
    </>
  );
}

export default App;
