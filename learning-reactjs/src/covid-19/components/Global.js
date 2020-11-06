import React from 'react';
import { Row, Col, Card, Skeleton } from 'antd';
import MyContext from '../context/my-context';

class Global extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
      {context => {
        
        if(context.loading || context.virus.Global === undefined){
          return(
            <Skeleton active />
          )
        }
        return(
          <Row>
            <Col span={8}>
              <Card title="Mac benh" bordered={true}>
                <p>So ca moi nhiem: {context.virus.Global.NewConfirmed}</p>
                <p>Tong so ca nhiem: {context.virus.Global.TotalConfirmed}</p>
              </Card>
            </Col>
            <Col span={8}>
            <Card title="Tu vong" bordered={true}>
                <p>So ca moi chet: {context.virus.Global.NewDeaths}</p>
                <p>Tong so ca chet: {context.virus.Global.TotalDeaths}</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Khoi benh" bordered={true}>
                <p>So ca moi khoi: {context.virus.Global.NewRecovered}</p>
                <p>Tong so ca khoi: {context.virus.Global.TotalRecovered}</p>
              </Card>
            </Col>
          </Row>
        )
      }}
      </MyContext.Consumer>
    );
  }
}
export default Global;