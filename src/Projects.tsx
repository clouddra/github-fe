import * as React from 'react';
import {IUserSearchState} from "./UserSearch";
import {Link} from "react-router-dom";

interface IProjectState {
  projectNames: { name: string, fullName: string }[]
}

export class Projects extends React.Component<IUserSearchState, IProjectState> {
  state: IProjectState = {
    projectNames: []
  }

  constructor(props: IUserSearchState) {
    super(props);
  }

  async componentDidMount() {
    const response = await fetch(`https://api.github.com/users/${this.props.user}/repos`);
    const json = await response.json();
    this.setState({
      projectNames: json.map((proj: any) => ({name: proj.name, fullName: proj.full_name}))
    });
  }

  render() {
    return <div>
      {
        this.state.projectNames.map(proj => {
          return <div key={proj.fullName}><Link to={`/repos/${proj.fullName}/readme`}>{proj.name}</Link></div>;
        })
      }
    </div>;
  }
}


