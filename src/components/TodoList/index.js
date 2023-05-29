import { Col, Row, Input, Space, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import boundToDoAction from '../Redux/actions';
import TodoListSlice from './todoListSlice';
import { v4 as uuidv4 } from 'uuid'
import todoRemaining from '../Redux/selectors';

export default function TodoList() {

  const [inputText, setInputText] = useState('');
  const [selectPriority, setSelectPriority] = useState('Medium');

  const handleChangeText = (e) => {
    setInputText(e.target.value);
  }
  const dispatch = useDispatch();

  const todoList = useSelector(todoRemaining);

  const handleChoosePriority = (value) => {
    setSelectPriority(value);
  }

  const handleAddTodo = () => {
    dispatch(TodoListSlice.actions.addToDoAction({
      id: uuidv4(),
      name: inputText,
      completed: false,
      priority: selectPriority,
    }));
    setInputText('');
    setSelectPriority('Medium');
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map(todo => (
          <Todo name={todo.name} priority={todo.priority} completed={todo.completed} key={todo.id} id={todo.id}></Todo>
        ))}
      </Col>
      <Col span={24}>
        <Space.Compact style={{ display: 'flex' }} >
          <Input value={inputText} onChange={handleChangeText} />
          <Select value={selectPriority} onChange={handleChoosePriority}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddTodo}>
            Add
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  );
}
