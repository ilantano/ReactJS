import React from 'react';
import LayoutPage from './components/Layout';
import Global from './components/Global';
import Countries from './components/Country';
import MyProvider from './context/my-provider';

class Corona extends React.Component {
  render() {
    return (
      <MyProvider>
        <LayoutPage>
          <Global/>
          <Countries/>
        </LayoutPage>
      </MyProvider>
    )
  }
}
export default Corona;