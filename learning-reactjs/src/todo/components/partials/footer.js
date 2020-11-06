import React from 'react';
import {Layout} from 'antd';
const {Footer} = Layout;

const FooterPage = () => {
  return (
    <Footer>
      <p style={{textAlign: 'center'}}>Copyright © 20020 - Todo App</p>
    </Footer>
  )
}
export default React.memo(FooterPage);