export function sendStart(type) {
	return {
		type: 'SEND'+type
	}
}

export function sendSuccsess(type) {
	return {
		type: 'SEND'+type+'SUCCSESS'
	}
}

export function sendError(type) {
	return {
		type: 'SEND'+type+'ERROR'
	}
}

export function closeModalForm(event) {
	event.preventDefault();
	return {
		type: 'CLOSE_MODAL_FORM'
	}
}

export function cleanForm(event, type) {
	event.preventDefault();
	return {
		type: 'CLEAN'+type+'FORM'
	}
}