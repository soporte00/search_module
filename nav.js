function navSearch(append=null,id=null,submitOnClean=false){

	let searchForm = document.createElement('FORM')
	searchForm.setAttribute('class','nav__search--container')
	if(id != null) searchForm.setAttribute('id', id)

	const input = document.createElement('input')
	input.setAttribute('type', 'text')
	input.setAttribute('class', 'nav__search--textInput')
	input.setAttribute('placeholder', 'Buscar')
	input.setAttribute('autocomplete', 'off')

	const clear = document.createElement('span')
	clear.setAttribute('class', 'nav__search--clearButton nav__search--hidde')
	clear.setAttribute('title', 'Limpiar el buscador')
	clear.textContent = 'x'

	const subtn = document.createElement('input')
	subtn.setAttribute('type','submit')
	subtn.setAttribute('class','nav__search--hidde')


	searchForm.appendChild(input)
	searchForm.appendChild(clear)
	searchForm.appendChild(subtn)

	if(append != null)append.appendChild(searchForm)


	clear.addEventListener('click',()=>{
		input.value=''
		input.classList.remove('nav__serach--inputFilled')
		clear.classList.add('nav__search--hidde')
		if(submitOnClean) subtn.click()
	})

	searchForm.addEventListener('submit', (e)=>{
		e.preventDefault()
		if( input.value.trim() > ''){
			input.classList.add('nav__serach--inputFilled')
			clear.classList.remove('nav__search--hidde')
		}
	})
	


	return [searchForm,input];
}