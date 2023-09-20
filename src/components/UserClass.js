import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, userInfo: {} };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/abhishekl1289");
    const json = await data.json();
    this.setState({ userInfo: json });
  }
  render() {
    const { name } = this.props;
    const { count } = this.state;
    const { login, id, avatar_url } = this.state.userInfo;
    return (
      <div className="user-class">
        <h3>{login}</h3>
        <h3>{id}</h3>
        <img src={avatar_url} className="avatar-img"></img>
        <h1>count: {count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          click
        </button>
        <h3>Name : {name}</h3>
      </div>
    );
  }
}
export default UserClass;
