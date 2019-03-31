const initialState = {
  block: true,
  messageForm: '',
  button: true,
  formsButton: 'block'
};

export function offerFormStatus(state = initialState, action) {
    switch (action.type) {
    case 'SEND_OFFER_':
      return {
        ...state,
        block: false,
		messageForm: 'Сообщение отправляется',
		button: true,
		formsButton: 'none'
	  };
    case 'SEND_OFFER_SUCCSESS':
      return {
        ...state,
        block: false,
		messageForm: 'Сообщение отправлено',
		button: false,
		formsButton: 'none'
      };
	case 'SEND_OFFER_ERROR':
      return {
        ...state,
        block: false,
		messageForm: 'Не удалось отправить сообщение. Пожалуйста, свяжитесь с нами через info@dlg.im или +7(800)775-82-02',
		button: false,
		formsButton: 'none'
      };
	case 'CLOSE_MODAL_FORM':
      return {
        ...state,
        block: true,
		messageForm: '',
		button: true,
		formsButton: 'block'
      }; 
    default:
      return state;
  }
}
