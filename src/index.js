import { ThemeProvider } from '@mui/material';
import ColorModeContext from 'context/ColorModeContext';
import UserDataContext from 'context/UserDataContext';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { counter_reducer } from 'reducers/CounterRedux';
import { createStore } from 'redux';
import theme from 'theme';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


const store = createStore(counter_reducer)



root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <UserDataContext>
                <ColorModeContext>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </ColorModeContext>
            </UserDataContext>
        </ThemeProvider>
    </Provider >
);