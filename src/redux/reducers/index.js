import { combineReducers } from 'redux';
import UserReducer  from './userReducer';

export default combineReducers({
  root : UserReducer,
  //some more reducer will come
});

// export  const ApplicationState = ReturnType<typeof rootReducer>;

// export { rootReducer };