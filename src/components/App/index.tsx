import React from "react";
import { useState } from "react";
import Header from "../Header"
import Data from "../Data"
import Graph from "../Graph"

type IView = 'data' | 'graph'  

const App: React.FC = () => {
  
  const [view, setView] = useState<IView>('data')

  return (
    <div>
      <Header/>
      {view === 'data' ? <Data /> : <Graph/>}
    </div>
  );
};

export default App;