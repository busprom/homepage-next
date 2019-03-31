const initialState = {
  value: 'Отправить',
  disable: false,
  messageStatus: '',
 };

export function subscribeFormStatus(state = initialState, action) {
    switch (action.type) {
    case 'SEND_SUBSCRIBE_':
      return {
        ...state,
       value: 'Отправка',
       disable: true,
	  };
    case 'SEND_SUBSCRIBE_SUCCSESS':
      return {
        ...state,
        value: 'Очистить',
        disable: false,
		messageStatus: 'Сообщение отправлено',
	   };
	case 'SEND_SUBSCRIBE_ERROR':
      return {
        ...state,
        value: 'Очистить',
		disable: false,
		messageStatus: 'Не удалось отправить сообщение. Пожалуйста, свяжитесь с нами через info@dlg.im или +7(800)775-82-02',
	  };
	case 'CLEAN_SUBSCRIBE_FORM':
      return {
        ...state,
       value: 'Отправить',
	   disable: false,
	   messageStatus: '',
	  };  
	default:
      return state;
  }
}