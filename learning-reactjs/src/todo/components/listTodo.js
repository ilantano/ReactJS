import React from 'react';
import PropTypes from 'prop-types';
import { List, Row, Col, Checkbox, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
const { Text } = Typography;

class ListTodo extends React.PureComponent {

  render() {
    //console.log(this.props.todo);
    return (
      <Row style={{marginTop: '20px', marginBottom: '20px'}}>
        <Col span={24}>
          <List
            itemLayout="horizontal"
            dataSource={this.props.todo}
            renderItem={item => (
            <>
            {item.show && (
              <List.Item>
                <List.Item.Meta
                  avatar={<Checkbox
                    onChange={() => this.props.finish(item.id)}
                    checked={item.done}
                    ></Checkbox>}
                  title={ item.done ? (<Text delete>{item.name}</Text>) : (<Text>{item.name}</Text>) }
                />
                <div>
                  <DeleteOutlined
                    onClick={() => this.props.delete(item.id)}
                  />
                </div>
              </List.Item>
            )}
            </>
          )}
        />
      </Col>
    </Row>
    )
  }
}
ListTodo.propTypes = {
  todo: PropTypes.array,
  delete: PropTypes.func,
  finish: PropTypes.func
}
export default ListTodo;