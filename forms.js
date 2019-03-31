import axios from 'axios';

//import { Field } from '../utils/field';
import { sendStart, sendSuccsess, sendError } from './modalForms'

function getData(responce) {
  return responce.data;
}

export function submitSubscribeForm(form) {
  return (dispatch) => {
    const body = { ...form, form: 'subscribe' };
	const type = '_SUBSCRIBE_';
	getAxios(dispatch, body, type);
	
    /* Field.dispatch({
      dispatch,
      type: 'SUBSCRIBE_FORM_SUBMIT',
      context: {},
      action: axios.post('/api/v1/', body).then(getData),
      initialState: null,
    }); */
  };
}

export function submitOfferForm(form) {
  return (dispatch) => {
    const body = { ...form, form: 'offer' };
	const type = '_OFFER_';
	getAxios(dispatch, body, type);
   
   /*  Field.dispatch({
      dispatch,
      type: 'OFFER_FORM_SUBMIT',
      context: {},
      action: axios.post('/api/v1/', body).then(getData),
      initialState: null,
    }); */
  };
}

export function submitSupportForm(form) {
  return (dispatch) => {
    const body = { ...form, form: 'support' };
	const type = '_SUPPORT_';
	getAxios(dispatch, body, type);
   /*  Field.dispatch({
      dispatch,
      type: 'SUPPORT_FORM_SUBMIT',
      context: {},
      action: axios.post('/api/v1/', body).then(getData),
      initialState: null,
    }); */
  };
}

async function getAxios(dispatch, data, type) {
	dispatch(sendStart(type))
	try {
		const response = await axios.post('kgh', data);
		dispatch(sendSuccsess(type));
		getData(response);
	}
	catch(e) {
		dispatch(sendError(type));
	}
}






