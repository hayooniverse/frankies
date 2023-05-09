import { Component } from "react";

import UserService from "../../services/user.service";
import EventBus from "../../common/EventBus";
import Food from "../../components/Meals/Food";
import Bakery from "../../components/Meals/Bakery";
import Drink from "../../components/Meals/Drink";
import Snacks from "../../components/Meals/Snack";



type Props = {};

type State = {
  content: string;
}

export default class BoardAdmin extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }

//   render() {
//     return (
//       <div className="container">
//         <header className="jumbotron">
//           <h3>{this.state.content}</h3>
//           <strong>hi</strong>
//         </header>
//       </div>
//     );
//   }
// }

  render() {

    return (
      <div className="container">
          <div>
              <main>
                  <Food/>
                  <Bakery/>
                  <Drink/>
                  <Snacks/>
              </main>
          </div>
      </div>
    );
  }
}