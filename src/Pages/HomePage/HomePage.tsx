import { useNavigate } from "react-router-dom";


export const HomePage = () => {
    const router = useNavigate();

    const handleClick = () => {
        router('/users-search');
    }

    return (
        <div className="container">
            <div className="welcome-text">Welcome to the user search page</div>
            <button className="search-button" onClick={handleClick}>Search Users</button>
        </div>
    );
};
