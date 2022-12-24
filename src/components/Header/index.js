import Button from "components/Button";
import { COLOR_MODE_CONTEXT } from "context/ColorModeContext";
import { USER_DATA_CONTEXT } from "context/UserDataContext";
import { useContext } from "react";


const Header = () => {
    const value = useContext(USER_DATA_CONTEXT)
    const [isDarkMode, changeDarkMode] = useContext(COLOR_MODE_CONTEXT)

    console.log(value)
    return (
        <header style={{ display: "flex", justifyContent: 'space-between' }}>
            <h1>Welcome {value.name} </h1>
            <Button
                txt={`${isDarkMode ? "🌞" : '🌙'}`}
                clickleyende={changeDarkMode}
            />
        </header>
    )
}

export default Header;