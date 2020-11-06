import React from 'react';
import LayoutPage from './components/layout';
import AddTodo from './components/addTodo';
import ListTodo from './components/listTodo';
import FilterTodo from './components/filter';

class Todo extends React.Component {
  constructor(){
    super();
    this.state = {
      nameWork: '',
      idTodo: 1, 
      listTodo: []
    }
  }

  getNameWork = (event) => {
    const name = event.target.value;
    this.setState({...this.state, nameWork: name});
  }

  addTodo = (name) => {
    if(name.length > 0){
      this.setState({
        ...this.state,
        idTodo: this.state.idTodo + 1,
        nameWork: '',
        listTodo: [...this.state.listTodo, {
          id: this.state.idTodo,
          name: name,
          done: false,
          show: true
        }]
      })
    }
  }

  deleteTodo = (idWork) => {
    // lay ra duoc du lieu moi voi dieu kien khong bao gom cong viec co id trung voi idWork tu du lieu ban dau
    // loai bo du lieu trung voi idWork ra khoi du lieu ban dau
    const newTodo = this.state.listTodo.filter(item => item.id !== idWork);
    //console.log(this.state.listTodo);
    //console.log(newTodo);
    this.setState({
      ...this.state,
      listTodo: newTodo
    })
  }

  finishedTodo = (idWork) => {
    // duyet qua mang listTodo kiem tra id trong listTodo do bang dung idWork thi se update lai done trong listTodo
    const newList = this.state.listTodo.map(item => {
      return item.id === idWork ? {...item, done: !item.done } : item;
    });
    this.setState({
      ...this.state,
      listTodo: newList
    })
  }

  filterListTodo = (type) => {
    switch (type){
      case 'all':
        const all = this.state.listTodo.map(item => {
          return {...item, show: true};
        });
        
        this.setState({
          ...this.state,
          listTodo: all
        })
        break;
      case 'finished':
          // tim tat ca nhung thang ko phai la done an di
          const finished = this.state.listTodo.map(item => {
            return !item.done ? {...item, show: false} : (item.done ? {...item, show: true} : item);
          });

          this.setState({
            ...this.state,
            listTodo: finished
          })
        break;
      case 'unfinished':
          // tim tat ca nhung thang la done an di
          const unfinished = this.state.listTodo.map(item => {
            return item.done ? {...item, show: false} : (!item.done ? {...item, show: true} : item);
          });

          this.setState({
            ...this.state,
            listTodo: unfinished
          })
        break;
    }
  }

  render() {
    return (
      <LayoutPage>
        <AddTodo
          change={this.getNameWork}
          add={this.addTodo}
          value={this.state.nameWork}
        />
        <FilterTodo
          filter={this.filterListTodo}
        />
        <ListTodo
          todo={this.state.listTodo}
          delete={this.deleteTodo}
          finish={this.finishedTodo}
        />
      </LayoutPage>
    )
  }
}
export default Todo;