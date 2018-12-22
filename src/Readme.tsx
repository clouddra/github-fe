import * as React from 'react';
import {IUserSearchState} from "./UserSearch";
import Markdown from 'react-markdown';

interface IReadmeProps extends IUserSearchState {
  repo: string
}

export class Readme extends React.Component<IReadmeProps, {content: string}> {
  state = {
    content: ""
  }

  constructor(props: IReadmeProps) {
    super(props);
  }

  async componentDidMount() {
    const response = await fetch(`https://api.github.com/repos/${this.props.user}/${this.props.repo}/readme`);
    const json = await response.json();
    const markdown = await (await fetch(json.download_url)).text();
    this.setState({content: markdown});
  }

  render() {
    return <div>
      <Markdown source={this.state.content}/>
    </div>;
  }
}


