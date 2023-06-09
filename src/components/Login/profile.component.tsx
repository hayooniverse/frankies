import {Component} from "react";
import {Navigate} from "react-router-dom";
import AuthService from "../../services/auth.service";
import IUser from "../../types/user.type";

type Props = {};

type State = {
    redirect: string | null,
    userReady: boolean,
    currentUser: IUser & { accessToken: string }
}
export default class Profile extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            redirect: null,
            userReady: false,
            currentUser: {accessToken: ""}
        };
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();

        if (!currentUser) this.setState({redirect: "/home"});
        this.setState({currentUser: currentUser, userReady: true})
    }

    render() {
        if (this.state.redirect) {
            return <Navigate to={this.state.redirect}/>
        }

        const {currentUser} = this.state;

        return (
            <div className="container" style={{paddingLeft: 20}}>
                {(this.state.userReady) ?
                    <div className="container">

                        <header className="jumbotron">
                            <h3>
                                <strong>Profile</strong>
                            </h3>
                        </header>
                        <img src="../../../../images/proficon.jpg" alt="Profile Image"
                             style={{width: "150px", borderRadius: "50%"}}/>
                        <p>
                            <strong> Username:</strong> {currentUser.username}
                        </p>
                        <p>
                            <strong>Email:</strong>{" "}
                            {currentUser.email}
                        </p>
                    </div> : null}
            </div>
        );
    }
}
