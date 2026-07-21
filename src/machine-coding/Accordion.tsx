import React, { useState, useEffect } from 'react';

const SAMPLE = [
  { id: '1', title: 'What is React?', content: 'A JS library for building component-based UIs.' },
  { id: '2', title: 'What is State?', content: 'Data that changes over time and triggers re-renders.' },
  { id: '3', title: 'What is JSX?', content: 'A syntax extension that lets you write HTML inside JS.' }
];

const App = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId == id ? null : id)

  return (
    <div style={{maxWidth: "400px", margin: "20px auto"}}>
      {SAMPLE.map(({id, title, content}) => {
        const isOpen = openId == id;
        return (
          <div style={{border: "1px solid", padding: "16px", marginTop: "2px"}}>
            <button onClick={() => toggle(id)}
              style={{
                width: '100%',
                padding: '12px 0',
                display: 'flex',
                justifySpace: 'space-between',
                background: 'none',
                border: 'none',
                fontSize: '15px',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
            <span>{title}</span>
            <span>{isOpen ? '-' : '+'}</span>
          </button>
            {
              isOpen && (
                <div style={{ padding: '0 0 12px 0', color: '#284A62', fontSize: '14px' }}>
                  {content}
                </div>
              )
            }
          </div>
        )
      })}
    </div>
  )
}

export default App