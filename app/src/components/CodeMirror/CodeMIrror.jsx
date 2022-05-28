import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';


function CodeMirror() {
  const [code, setCode] = React.useState(
    ``
  );

  document.documentElement.setAttribute('data-color-mode', 'dark')

  return (
    <CodeEditor
      value={code}
      language="python"
      placeholder='#코드를 이곳에 입력하세요'
      onChange={(evn) => setCode(evn.target.value)}
      padding={15}
      style={{
        fontSize: 18,
        width: '100%', //여기서 크기 조절
        height: '900px',
        overflow: 'auto'
      }}
    />
  );
}

export default CodeMirror;




