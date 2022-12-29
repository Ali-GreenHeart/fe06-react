import ColorModeContext, { COLOR_MODE_CONTEXT } from 'context/ColorModeContext';
import UserDataContext from 'context/UserDataContext';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { redux_reducer } from 'reducers/UsersReduxReducer';
import { createStore } from 'redux';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


const store = createStore(redux_reducer)


root.render(
    <Provider store={store}>
        <UserDataContext>
            <ColorModeContext>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ColorModeContext>
        </UserDataContext>
    </Provider>
);