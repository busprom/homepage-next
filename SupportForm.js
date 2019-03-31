import React, { useState } from 'react';
import classNames from 'classnames';

import { Input } from '../Input/Input';
import { Checkbox } from '../Checkbox/Checkbox';

export function SupportForm({ onSubmit, className, status, cleanForm }) {
  
  const classes = classNames('form', className);
  const [form, setForm] = useState({
    email: '',
    topic: '',
    message: '',
    agree: true,
  });
 
  function handleSubmit(event) {
    event.preventDefault()
	onSubmit(form);
  }
  function setAttribute(event) {//установка атрибутов required для полей формы
	if(event.target.innerHTML === 'Отправка') {
		event.target.style.cursor = 'not-allowed';
	}
	let parentform = event.target.parentElement.parentNode;
	parentform.getElementsByTagName('textarea')[0].setAttribute('required', 'required');
	let inputs = parentform.getElementsByTagName('input');
	for(let i = 0; i < inputs.length; i++) {
		inputs[i].setAttribute('required', 'required');
	}
  }
  function handleChange(value, name) {
   	setForm({
      ...form,
      [name]: value,
    });
  }
  function getClean(e) {
	if(e.target.innerHTML === 'Очистить') {
		form.email = ''
		form.topic = ''
		form.message = ''
		cleanForm(e, '_SUPPORT_')
	} 
  }
  return (
	<div>
		<form onSubmit={handleSubmit} className={classes}>
		  <Input
			value={form.email}
			name="email"
			type="email"
			onChange={handleChange}
			label="Ваш e-mail"
		  />

		  <Input
			value={form.topic}
			name="topic"
			type="text"
			onChange={handleChange}
			label="Тема"
			
		  />

		  <Input
			value={form.message}
			name="message"
			type="textarea"
			onChange={handleChange}
			required
			rows={6}
			label="Опишите ваш вопрос"
		  />

		  <Checkbox
			label="Я согласен на обработку персональных данных"
			value={form.agree}
			name="agree"
			onChange={handleChange}
		  />

		  <div className="form__footer">
			<button type="submit" className="button button--default"
			  disabled = { status.disable }
			  onMouseOver = {setAttribute}
			  onClick = { getClean }
			>
			  { status.value }
			</button>
			<div className="information">
			  Служба поддержки обычно отвечает в течение 15 минут
			</div>
		  </div>
		  <div className="information" style = {{width: '100%', color: 'black', marginTop: '3%'}}>
			  { status.messageStatus }
			</div>
		</form>
	</div>
  );
}
