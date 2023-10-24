const APIURL = 'https://api.github.com/users/' // florinpop17
const main = document.getElementById('main')
const input = document.getElementById('input')
const form = document.getElementById('form')

async function getUser(user) {
	const resp = await fetch(APIURL + user)
	const respData = await resp.json()

	createUserCard(respData)
}

function createUserCard(user) {
	const cardHTML = `
	<div class="card">
		<div>
			<img class="avatar" src="${user.avatar_url}">
		</div>
		<div>
			<h2>${user.name}</h2>
			<p>${user.bio}</p>
			<ul class="info">
				<li>${user.followers}</li>
				<li>${user.following}</li>
				<li>${user.public_repos}</li>
			</ul>
		</div>
	</div>
	`
	main.innerHTML = cardHTML
	return cardHTML
}
form.addEventListener('submit', e => {
	e.preventDefault()
	const user = input.value
	if (user) {
		getUser(user)
		input.value
	}
})