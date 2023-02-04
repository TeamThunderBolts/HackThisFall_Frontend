import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="Home">
            <div className="Home_centertitle">
                CallBot
            </div>
            <div className="Home_buttons">
                <button onClick={() => navigate("/signup")}>Sign Up</button>
                <button onClick={() => navigate("/login")}>Log In</button>
            </div>
        </div>
    );
};

export default Home;