import { USER_DATA_CONTEXT } from "context/UserDataContext";
import { useContext } from "react";


const Header = () => {
    const value = useContext(USER_DATA_CONTEXT)
    console.log(value)
    return (
        <header style={{ backgroundColor: 'lime' }}>
            <h1>Welcome {value.name} </h1>
        </header>
    )
}

export default Header;