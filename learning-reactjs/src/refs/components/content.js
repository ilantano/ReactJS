import React from 'react';

class Content extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }
  changeInput = (e) => {
    const val = e.target.value;
    this.setState({...this.state, text: val});
  }
  render() {
    return (
      <input onChange={this.changeInput} type="text" />
    )
  }
}
export default Content;