import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './components/hooks/useTelegram';
const tgWebApp = window.Telegram.WebApp;

function App() {
  const { tgWebApp, onToggleButton } = useTelegram()

  useEffect(() => {
    tgWebApp.ready()
  }, [])

  return (
    <div className="App">

      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
