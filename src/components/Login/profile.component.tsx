import { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../../services/auth.service";
import IUser from "../../types/user.type";
import Meals from "../../components/Meals/Meals";
import {ErrorMessage, Field, Form, Formik} from "formik";

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
      currentUser: { accessToken: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }
  handleLogin(formValue: { username: string; password: string }) {
    const { username, password } = formValue;
  }
  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    const initialValues = {
      username: "",
      password: "",
    };
    return (
      <div className="container">
        {(this.state.userReady) ?
          <div className = "container">
            <header className="jumbotron">
              <h3>
                <strong>Profile</strong>
              </h3>
            </header>
            <img src="../../../../images/proficon.jpg" alt="Profile Image" style={{width: "150px",borderRadius: "50%"}}/>
            <p>
              <strong> Username:</strong> {currentUser.username}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              {currentUser.email}
            </p>
            <Formik
                initialValues={initialValues} onSubmit={this.handleLogin}>
            <Form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <Field name="username" type="text" className="form-control" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" className="form-control" />
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  <span>Login</span>
                </button>
              </div>
            </Form>
            </Formik>
          </div> : null}
      </div>
    );
  }
}
