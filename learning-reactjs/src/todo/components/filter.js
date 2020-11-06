import React from 'react';
import {Row, Col, Button} from 'antd';

class FilterTodo extends React.PureComponent {

  render() {
    return(
      <Row style={{marginTop: '10px', marginBottom: '10px'}}>
        <Col span={24}>
          <Button
            type="dashed"
            size="small"
            onClick={() => this.props.filter('all')}
          >All</Button>
          <Button 
            type="dashed"
            size="small"
            style={{marginLeft: '20px', marginRight: '20px'}}
            onClick={() => this.props.filter('unfinished')}
          >Unfinished</Button>
          <Button
            type="dashed"
            size="small"
            onClick={() => this.props.filter('finished')}
          >Finished</Button>
        </Col>
      </Row>
    )
  }
}
export default FilterTodo;