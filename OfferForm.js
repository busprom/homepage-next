import React, { useState } from 'react';
import classNames from 'classnames';

import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { Checkbox } from '../Checkbox/Checkbox';
import {ModalForms} from '../ModalForms/ModalForms';
import './OfferForm.css';

export function OfferForm({ onSubmit, className, status, closeStatus }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    users: '1-10',
    agree: true,
    subscribe: false,
  });

  const classes = classNames('form', className);

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(form);
  }
  function setAttribute(event) {
	let parentform = event.target.parentElement.parentNode
	let inputs = parentform.getElementsByTagName('input')
	for(let i = 0; i < inputs.length; i++) {
		if(inputs[i].name !== 'subscribe') {
			inputs[i].setAttribute('required', 'required')
		}
	}
  }
  function handleChange(value, name) {
    if(name === 'phone') {
		value = '+ ' + value.replace(/[^\d]/g, '')
	}
	setForm({
      ...form,
      [name]: value,
    });
  }

  return (
   <div>
	<form className={classes} onSubmit={handleSubmit}>
     <ModalForms state = {status} clickFunc = { closeStatus } />
	  <div className="form__box">
        <Input
          value={form.name}
          name="name"
          onChange={handleChange}
          label="Как к вам обращаться"
        />
        <Input
          value={form.email}
          name="email"
          onChange={handleChange}
          label="Рабочий e-mail"
        />
        <Input
          value={form.phone}
          name="phone"
          onChange={handleChange}
          label="Телефон"
		/>
        <Input
          value={form.company}
          name="company"
          onChange={handleChange}
          label="Название компании"
        />

        <Select
          options={['1-10', '11-50', '51-100', '101-500', '500+']}
          value={form.users}
          name="users"
          onChange={handleChange}
          label="Количество пользователей"
        />
      </div>

      <div className="form__box">
        <Checkbox
          label="Я согласен на обработку персональных данных"
          value={form.agree}
          name="agree"
          onChange={handleChange}
        />
        <Checkbox
          label="Подписаться на новостную рассылку"
          value={form.subscribe}
          name="subscribe"
          onChange={handleChange}
        />
      </div>

      <div className="form__footer">
        <button style = {{ display: status.formsButton }} 
		  type="submit" 
		  className="button button--default"
		  onMouseOver = {setAttribute}
		>
          Отправить заявку
        </button>
      </div>
    </form>
   </div>
  );
}
