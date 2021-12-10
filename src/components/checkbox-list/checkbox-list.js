const listDropList = document.querySelector('.checkbox-list');

listDropList.addEventListener("click", dropList);


function dropList(event) {
	if (event.target.closest('.checkbox-list__input')) {
		listDropList.classList.toggle('dropdown-list_active');
	}
	if (!event.target.closest('.checkbox-list')) {
		listDropList.classList.remove('dropdown-list_active');
	}
}
