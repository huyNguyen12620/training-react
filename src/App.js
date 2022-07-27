import logo from './logo.svg';
import './App.css';
import DemoFunctionCom from './Components/DemoComponent/DemoFunctionCom';
import DemoClassCom from './Components/DemoComponent/DemoClassCom';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import Databinding from './Databinding/Databinding';

function App() {
  return (
    // <div className="App">
    //     hello cybersoft
    //     <DemoFunctionCom/>
    //     <div className='w-25'>
    //     <DemoClassCom/>
    //     </div>
    // </div> 

      <div className='App'>
        {/* <BaiTapLayout/> */}
        <Databinding/>
      </div>
      
        
  );
}

export default App;
