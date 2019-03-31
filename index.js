import { connect } from 'react-redux';
import { submitSubscribeForm } from '../../actions/forms';
import { cleanForm } from '../../actions/modalForms';
import { SubscribeForm } from './SubscribeForm';

const mapStateToProps = (state) => {
  return {
	status: state.subscribeFormStatus
  };
};

const mapDispatchToProps = { onSubmit: submitSubscribeForm, cleanForm: cleanForm };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubscribeForm);
