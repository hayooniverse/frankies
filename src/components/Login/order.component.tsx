import { Component } from "react";
import { Navigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import AuthService from "../../services/auth.service";

type Props = {};

type State = {

  name: string,
  cardnum: string,
  csv: string,
  date: string,
  loading: boolean,
  message: string
};

export default class Login extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      name: "",
      cardnum: "",
      csv: "",
      date: "",
      loading: false,
      message: ""
    };
  }

validationSchema() {
    return Yup.object().shape({
      cardnum: Yup.string()
        .test(
          "len",
          "The card number must be between 13 and 16 characters.",
          (val: any) =>
            val &&
            val.toString().length >= 13 &&
            val.toString().length <= 16
        )
        .required("This field is required!"),
       date: Yup.string()
        .test(
          "len",
          "The date should be in MM/YY format.",
          (val: any) =>
            val &&
            val.toString().length == 5
        )
        .required("This field is required!"),
      csv: Yup.string()
        .test(
          "len",
          "The csv must be 3 digits.",
          (val: any) =>
            val &&
            val.toString().length == 3
        )
        .required("This field is required!"),
    });
  }

  handleLogin(formValue: { name: string; cardnum: string, date: string, csv: string }) {
    const { name, cardnum, date, csv } = formValue;

    this.setState({
      message: "Order Placed",
      name: "",
      cardnum: "",
      date:"",
      csv:""
    });

  }

  render() {

    const { loading, message } = this.state;

    const initialValues = {
      name: "",
      cardnum: "",
      csv: "",
      date: ""
    };

    return (

      <div className="col-md-12">
        <h2> <center>Order Form</center></h2>
        <div className="card card-container">
          <Formik
            initialValues={initialValues}
            validationSchema={this.validationSchema}
            onSubmit={this.handleLogin}
          >
            <Form>
              <div className="form-group">
                <label htmlFor="name">Card Holder Name</label>
                <Field name="name" type="text" className="form-control" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-group">
                <label htmlFor="cardnum">Card Number</label>
                <Field name="cardnum" type="text" className="form-control" />
                <ErrorMessage
                  name="cardnum"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="csv">CSV</label>
                <Field name="csv" type="text" className="form-control" />
                <ErrorMessage
                  name="csv"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date/Year</label>
                <Field name="date" type="text" className="form-control" />
                <ErrorMessage
                  name="date"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="form-group">
                <button>
                  <span>Place Order</span>
                </button>
              </div>

              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
            </Form>
          </Formik>
        </div>
      </div>
    );
  }
}
