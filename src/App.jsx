import './Main.css'; 
import React from 'react';
import Layout from './components/Layout';
import Top from './components/Top/Top';
import ContentBox from './components/ContentBox/ContentBox';

function App() {
  return (
    <div>
    <Layout>
      
      <Top />
      <ContentBox />
    </Layout>
    
    </div>
  );
}

export default App;
