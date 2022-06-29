import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import '@uiw/react-textarea-code-editor/dist.css';

const CodeEditor = dynamic(
  () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
  { ssr: false }
);

function CodeMirror({hiAlgCode, tag1}) {
  const [code, setCode] = useState(
    ``
  );

  const codeChangeHandler = (e) => {
    setCode(e.currentTarget.value);
  }

  useEffect(() => {
    hiAlgCode(code);
  }, [code]);

  // document.documentElement.setAttribute('data-color-mode', 'dark')

  return (
    <CodeEditor
      value={code}
      language={`${tag1}`}
      placeholder='#코드를 이곳에 입력하세요'
      onChange={codeChangeHandler}
      padding={15}
      style={{
        fontSize: 18,
        width: '100%', //여기서 크기 조절
        height: '870px',
        overflow: 'auto',
      }}
    />
  );
}

export default CodeMirror;