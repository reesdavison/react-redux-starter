import { connect } from 'react-redux';
import * as C from '../constants';

import ExampleComponent from '../components/ExampleComponent';


const mapStateToProps = state => ({
  exampleProp: state.example.task1,
  exampleProp2: state.example.task2
});

const mapDispatchToProps = dispatch => {
  return {
    doSomething() {
      dispatch({
        type: C.DO_SOMETHING
      })
    },

    doSomething2() {
      dispatch({
        type: C.DO_SOMETHING2
      })
    }
  }
}


const ExampleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleComponent);

export default ExampleContainer;
