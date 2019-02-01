import { combineReducers } from 'redux'; // 工具函数，用于组织多个reducer，并返回reducer集合
import count from './count';

export default combineReducers({
  count
});
