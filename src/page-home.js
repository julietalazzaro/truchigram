import React from "react";
import insta from "./instashot.png";
import jony from "./home-jony.jpg";
import firebase from "firebase/app";
import "firebase/auth";

class Home extends React.Component {
  state = { user: null };

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
      if (this.state.user) {
        this.props.history.push("/feed");
      }
    });
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // console.log("entro el Mr./Ms", result.user.email);
        this.props.history.push("/feed");
      })
      .catch((error) => console.log(error.code));
  }

  render() {
    return (
      <React.Fragment>
        <div className="container vh100">
          <div className="row ">
            <div className="col m4 l5 offset-l1 off">
              <img alt="" src={insta} />
            </div>
            <div className="col offset-s2 s8 m4 l3 top120">
              <div className="card">
                <div className="card-content center">
                  <img
                    alt="Jonatan Ariste"
                    className="circle homePic"
                    src={jony}
                  />
                  <p>
                    Bienvenidos a <strong>Truchigram</strong>, esta app# esta
                    creada para el curso de Firebase de escuela devRock para
                    mostrar un primer ejemplo del poder de esta base de datos y
                    lo fácil que resulta para arrancar a crear.
                  </p>
                </div>
                <div className="card-action center-align">
                  <button
                    className="waves-effect waves-light btn"
                    onClick={this.handleAuth}
                  >
                    Logear con Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
