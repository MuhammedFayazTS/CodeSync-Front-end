import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Styles/global.css'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'context/ThemeProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
  // </React.StrictMode>,
)
