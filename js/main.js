

var formWrapper = document.getElementsByClassName("form-wrapper")[0],
	resultWrapper = document.getElementsByClassName("result-wrapper")[0];

var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", userFormChecker);

var username = document.getElementById("username"),
	surname = document.getElementById("surname"),
	age = document.getElementById("age"),
	nootBooks = document.getElementById("nootBooks"),
	wishes = document.getElementById("wishes");


function userFormChecker(event) {


	var sexValue = "Пол:" + document.querySelector('input[name="sex"]:checked').value,
		usernameValue = "Имя: " + username.value,
		surnameValue = "Фамилия: " + surname.value,
		ageValue = "Возраст: " + age.value,
		wishesValue = "Пожелания: " + wishes.value,
		nootBooksValue = getNootBooks(nootBooks).join(", ");

	var userNameDiv = document.createElement("div");
	userNameDiv.innerHTML = usernameValue;
	resultWrapper.appendChild(userNameDiv);

	var surnameNameDiv = document.createElement("div");
	surnameNameDiv.innerHTML = surnameValue;
	resultWrapper.appendChild(surnameNameDiv);

	var ageDiv = document.createElement("div");
	ageDiv.innerHTML = ageValue;
	resultWrapper.appendChild(ageDiv);

	var sexDiv = document.createElement("div");
	sexDiv.innerHTML = sexValue;
	resultWrapper.appendChild(sexDiv);

	var wishesDiv = document.createElement("div");
	wishesDiv.innerHTML = wishesValue;
	resultWrapper.appendChild(wishesDiv);

	var nootBooksDiv = document.createElement("div");
	nootBooksDiv.innerHTML =
		"Любимые ноутбуки: " + nootBooksValue;
	resultWrapper.appendChild(nootBooksDiv);

	formWrapper.style.display = "none";
	resultWrapper.style.display = "flex";
}

function getNootBooks(items) {
	var result = [];
	for (var i = 0; i < items.length; i++) {
		var smartphone = items[i];
		if (smartphone.selected) {
			result.push(smartphone.text);
		}
	}
	return result;
}
