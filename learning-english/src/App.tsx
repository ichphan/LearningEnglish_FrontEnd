import React from 'react';
import './App.css';
import { Layout} from 'antd';
import  {Navbar} from './components';
function App() {
  return (
    <div className="App">
      <Layout>
        <Navbar/>
        <Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
