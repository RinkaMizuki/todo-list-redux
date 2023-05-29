import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
// import boundToDoAction from '../Redux/actions';
import { useDispatch } from 'react-redux';
import FiltersSlice from './filtersSlice';
const { Search } = Input;

export default function Filters() {

  const [filterSearch, setFilterSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterPriority, setFilterPriority] = useState([]);

  const dispatch = useDispatch();

  const handleSearchText = (e) => {
    setFilterSearch(e.target.value);
    dispatch(FiltersSlice.actions.filtersSearchTodoAction(e.target.value))
  }

  const handleChangeStatus = (e) => {
    setFilterStatus(e.target.value);
    dispatch(FiltersSlice.actions.filtersStatusTodoAction(e.target.value));
  }

  const handleSelectPriority = (value) => {
    setFilterPriority(value);
    dispatch(FiltersSlice.actions.filtersPriorityTodoAction(value));
  }

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={filterSearch} onChange={handleSearchText} />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={handleChangeStatus}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={filterPriority}
          onChange={handleSelectPriority}
        >
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
      </Col>
    </Row >
  );
}
