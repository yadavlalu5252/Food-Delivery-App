import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "dummy",
        location: "xyz"
      }
    };
    
    // console.log("Child Constructor");
  }


  async componentDidMount(){
    console.log(this.props.name+"Child Component Did Called");
    const data = await fetch("https://api.github.com/users/yadavlalu5252");
    const json = await data.json();

    // this.setState({
    //   userInfo: json,
    // })

    // this. = setInterval(() => {
    //   console.log("I am inside component did Update");
    // }, 1000);

    // console.log(json);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update is called");
    // if(this.state.count !== prevState.count || this.state.count !== prevState.count2){
    //   // if in useEffect() we pass array [count, count2] here in class based component we will have to check this way
    // }

  }

  componentWillUnmount() {
    // removing from ui
    console.log("When we go to other page this called");
    // clearInterval(this.)
  }

  render() {
    // console.log(this.props.name+"Child Render");

    const { username } = this.props;
    const { count } = this.state;

    const {name, bio, avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h4>Bio: {bio}</h4>
        <img src={avatar_url} alt="photo" />
        <h3>Username: {username}</h3>
        <h4>Count: {count} (class) </h4>
        <button
          onClick={() => {
            // Never Ever update state variable directly
            this.setState({
                count: this.state.count+1
            })
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default UserClass;
