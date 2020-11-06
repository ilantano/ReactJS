import React from 'react';
import ContentInput from './components/content';

class AppRefs extends React.Component {
  constructor() {
    super();
    // tao ra 1 refs de truy cap vao DOM node element khi render ra
    this.infoDom = React.createRef();
    this.infoInput = React.createRef();
  }
  showInfoDom = () => {
    console.log(this.infoDom.current);
  }

  getDataInput = () => {
    const data = this.infoInput.current.state.text;
    console.log(data);
    alert(data);
  }

  render(){
    return(
      <>
        <h1 ref={this.infoDom} id="title" name="title">This is content</h1>
        <ContentInput ref={this.infoInput} />
        <br/>
        <button onClick={this.showInfoDom}>Lay thong tin the h1</button>
        <button onClick={this.getDataInput}>Lay du lieu tu input</button>
      </>
    )
  }
}
export default AppRefs;