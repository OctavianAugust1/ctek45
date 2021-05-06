document.addEventListener('DOMContentLoaded', () => {
	
	function sendRequest(method, url, body = null) {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest()
			xhr.open(method, url)
			xhr.responseType = 'json'
			xhr.setRequestHeader('Accept', 'application/json')
			xhr.onload = () => {
				if (xhr.status >= 400) {
					reject(xhr.response)
				} else {
					resolve(xhr.response)
				}
			}
			xhr.onerror = () => {
				reject(xhr.response)
			}
			xhr.send(body)
		})
	}
	
	const request = 'http://localhost:3000/api/upload_patent'
	const form = document.querySelectorAll('#upload_patent')
	form.forEach(event => {
		const btn = event.querySelector('button')
		btn.addEventListener('click', e => {
			e.preventDefault()
			const body = new FormData(event)
			sendRequest('POST', request, body)
				.then(data => console.log(data))
				.catch(err => console.log(err))
		})
	})
})