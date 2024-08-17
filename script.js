function addheader() {
	const header = document.querySelector("header");
	const logo = document.createElement("a");
		logo.classList.add("logo");
		logo.href = "/";
		header.appendChild(logo);
}

document.addEventListener("DOMContentLoaded", addheader);