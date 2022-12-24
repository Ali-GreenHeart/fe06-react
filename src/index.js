import ColorModeContext, { COLOR_MODE_CONTEXT } from 'context/ColorModeContext';
import UserDataContext from 'context/UserDataContext';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <UserDataContext>
        <ColorModeContext>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ColorModeContext>
    </UserDataContext>
);