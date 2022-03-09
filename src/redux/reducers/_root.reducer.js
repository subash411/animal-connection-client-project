import { combineReducers } from 'redux';
import animals from './animal.reducer';
import selectedAnimal from './selectedAnimal.reducer';
import jobs from './job.reducer';
import errors from './errors.reducer';
import user from './user.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  animals, // contains list of current filtered animals
  selectedAnimal, // contains the selected animal being used in AnimalDetail
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  jobs, // contains list of current filtered jobs
});

export default rootReducer;
  