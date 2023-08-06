import { useEffect } from 'react';
import './App.css';
const tgWebApp = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tgWebApp.ready()
  }, [])

  const onCLose = () => {
    tgWebApp.close()
  }

  return (
    <div className="App">
      It works

      <button onClick={onCLose}>Close</button>
    </div>
  );
}

export default App;
