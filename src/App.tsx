import React, { useState } from 'react';
import get from 'lodash/get';
import Button from 'antd/es/button';
import 'antd/es/button/style/css';
import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  const [state, setState] = useState(0);
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />

        <Button type="primary" onClick={() => setState((prev) => prev + 1)}>
          Hello
        </Button>
        <a
          className={styles['App-link']}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React1221
        </a>
        <h1 className="title">Hello</h1>
      </header>
    </div>
  );
}

export default App;
