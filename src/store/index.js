import { combineReducers } from 'redux';
import todo from './modules/todo';

// Store 통합 관리
export default combineReducers({
  todo,
});
