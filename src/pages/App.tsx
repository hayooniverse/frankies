import {Component} from "react";
import {Routes, Route, Link} from "react-router-dom";
import "./App.css";
import AuthService from "../services/auth.service";
import IUser from '../types/user.type';
import Login from "../components/Login/login.component";
import Register from "../components/Login/register.component";
import Home from "../components/Login/home.component";
import Profile from "../components/Login/profile.component";
import BoardModerator from "../components/Login/board-moderator.component";
import BoardAdmin from "../components/Login/board-admin.component";
import Menu from "../components/Login/menu.component";
import EventBus from "../common/EventBus";
import Header from "../components/Layout/Header";
import AvailableBakery from "../components/Login/bakery.component";
import AvailableDrinks from "../components/Login/drink.component";
import AvailableFood from "../components/Login/food.component";
import AvailableSnack from "../components/Login/snack.component";
import Order from "../components/Login/order.component";

type Props = {};

type State = {
    showModeratorBoard: boolean,
    showAdminBoard: boolean,
    currentUser: IUser | undefined
}

class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user,
                showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
                showAdminBoard: user.roles.includes("ROLE_ADMIN"),
            });
        }

        EventBus.on("logout", this.logOut);
    }

    componentWillUnmount() {
        EventBus.remove("logout", this.logOut);
    }

    logOut() {
        AuthService.logout();
        this.setState({
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        });
    }

    render() {
        const {currentUser, showModeratorBoard, showAdminBoard} = this.state;
        const isAdmin = currentUser?.username === 'admin';
        return (
            <div className="homepage">
                <header className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="navbar-nav" style={{paddingLeft: '30px'}}>
                        <a href="/">
                            <img src="images/transparentfrankies.png" alt="Home"
                                 style={{height: '100px', width: 'Auto'}}/>
                        </a>
                    </div>
                    {/* <Header/> */}
                    <div>
                      {currentUser ? (
                        isAdmin? (
                          <div>
                            <ul>
                              <li><Link to = {"/admin"} className = "nav-button">Admin</Link></li>
                              <li><Link to = {"/profile"} className = "nav-button">Profile</Link></li>
                              <li><Link to = {"/Login"} onClick = {this.logOut} className = "nav-button">Log Out</Link></li>
                            </ul>
                          </div>
                        ):(
                            <div>
                              <Header/>
                                <ul>
                                    <li>
                                        <Link to={"/food"} className="nav-button">
                                            Food
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/bakery"} className="nav-button">
                                            Bakery
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/drink"} className="nav-button">
                                            Drinks
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/snack"} className="nav-button">
                                            Snacks
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to ={"/Login"} onClick={this.logOut} className="nav-button">
                                            Log Out
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/profile"} className="nav-button">
                                            Profile
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )
                        ) : (
                            <div>
                                <ul>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/register">Sign Up</Link></li>
                                    {/* <li><Link to="/admin">Admin</Link></li> */}
                                </ul>
                            </div>
                        )}
                    </div>
                </header>
                <main>
                    <h1 style={{paddingLeft: '20px'}}>
                        Welcome to Frankie's Kitchen!
                    </h1>

                </main>
                <div className="container mt-3">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/mod" element={<BoardModerator/>}/>
                        <Route path="/admin" element={<BoardAdmin/>}/>
                        <Route path="/menu" element={<Menu/>}/>
                        <Route path="/bakery" element={<AvailableBakery/>}/>
                        <Route path="/drink" element={<AvailableDrinks/>}/>
                        <Route path="/snack" element={<AvailableSnack/>}/>
                        <Route path="/food" element={<AvailableFood/>}/>
                        <Route path="/order" element={<Order/>}/>
                    </Routes>
                </div>

            </div>
        );
    }
}

export default App;
