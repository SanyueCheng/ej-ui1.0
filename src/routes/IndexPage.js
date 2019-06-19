import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
//首页
function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
        
        <h2>我的第一段 JavaScript</h2>
         <button type="button"
          onclick="document.getElementById('demo').innerHTML = Date()">
         点击这里来显示日期和时间
         </button>
         <p id="demo"></p>

         
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
