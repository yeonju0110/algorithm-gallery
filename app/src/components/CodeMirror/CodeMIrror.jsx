import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';


function CodeMirror() {
  const [code, setCode] = React.useState(
    `#코드를 이곳에 입력하세요`
  );

  document.documentElement.setAttribute('data-color-mode', 'dark')

  return (
    <CodeEditor
      value={code}
      language="python"
      onChange={(evn) => setCode(evn.target.value)}
      padding={15}
      style={{
        fontSize: 20,
        width: '500px', //여기서 크기 조절
        height: '500px',
      }}
    />
  );
}

export default CodeMirror;




