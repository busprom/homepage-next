import React, { useState } from 'react';
import classNames from 'classnames';

import { Input } from '../Input/Input';

export function SubscribeForm({ onSubmit, className, status, cleanForm }) {
  const [email, setEmail] = useState('');
  const classes = classNames('form', className);

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ email });
  }

  function handleChange(value) {
    setEmail(value);
  }
  
  function setAttribute(event) {//установка атрибутов required для полей формы
	if(event.target.innerHTML === 'Отправка') {
		event.target.style.cursor = 'not-allowed';
	}
	let parentform = event.target.parentElement.parentNode;
	parentform.getElementsByTagName('input')[0].setAttribute('required', 'required');
  }
  
  function getClean(e) {
	if(e.target.innerHTML === 'Очистить') {
		setEmail('')
		cleanForm(e, '_SUBSCRIBE_')
		e.target.parentElement.parentNode.getElementsByTagName('input')[0].value = ''
	} 
  }
  return (
    <form className={classes} onSubmit={handleSubmit}>
      <Input
        value={email}
        type="email"
        name="email"
        onChange={handleChange}
        label="Ваш e-mail"
      />
      <div className="form__footer">
        <button type="submit" className="button button--default"
			disabled = { status.disable }
			onMouseOver = {setAttribute}
			onClick = { getClean }
		>
          { status.value }
        </button>
		<div style = {{color: 'black', marginTop: '5%'}}>
		  { status.messageStatus }
		</div>
      </div>
    </form>
  );
}
