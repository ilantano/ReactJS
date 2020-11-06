import React from 'react';
import PropTypes from 'prop-types';
import { Input, Row, Col } from 'antd';

const { Search } = Input;

class AddTodo extends React.PureComponent {
  render() {
    return (
      <Row>
        <Col span={24}>
          <Search
            placeholder="todo name ..."
            enterButton="Add"
            size="large"
            onSearch={value => this.props.add(value)}
            onChange={this.props.change}
            value={this.props.value}
          />
        </Col>
      </Row>
    )
  }
}
AddTodo.propTypes = {
  add: PropTypes.func,
  change: PropTypes.func,
  value: PropTypes.string
}
export default AddTodo;