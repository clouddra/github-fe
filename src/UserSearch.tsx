import * as React from 'react';
import {ChangeEvent} from 'react';
import {Link} from "react-router-dom";

export interface IUserSearchState {
  user: string
}

export class UserSearch extends React.Component<{}, IUserSearchState> {
  state = {
    user: ""
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({user: event.target.value});
  };


  render() {
    return <div>
      <input type="text" name="name" value={this.state.user} onChange={this.handleChange}/>
      {/*<input type="submit" value="Search User"/>*/}
      <Link to={`/repos/${this.state.user}`}>Search user</Link>
    </div>;
  }
}