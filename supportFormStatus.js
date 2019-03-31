const initialState = {
  value: 'Отправить',
  disable: false,
  messageStatus: '',
 };

export function supportFormStatus(state = initialState, action) {
    switch (action.type) {
    case 'SEND_SUPPORT_':
      return {
        ...state,
       value: 'Отправка',
       disable: true,
	  };
    case 'SEND_SUPPORT_SUCCSESS':
      return {
        ...state,
        value: 'Очистить',
        disable: false,
		messageStatus: 'Сообщение отправлено',
	   };
	case 'SEND_SUPPORT_ERROR':
      return {
        ...state,
        value: 'Очистить',
		disable: false,
		messageStatus: 'Не удалось отправить сообщение. Пожалуйста, свяжитесь с нами через info@dlg.im или +7(800)775-82-02',
	  };
	case 'CLEAN_SUPPORT_FORM':
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
