// First name, Middle name, Last name, email, phone number, role, address
data = [
	{ id: "1", fname: "Aniket", mname: "Pratap", lname: "Suresh", email: "anikelsuresh@gmail.com", pno: "8582803048", role: "Full Stack Engineer", address: "38697 Dortha Village" },
	{ id: "2", fname: "Rajesh", mname: "Deepak", lname: "Grewal", email: "rajeshgrewal@gmail.com", pno: "5855544316", role: "Trainee", address: "38846 Jerrell Unions" },
	{ id: "3", fname: "Rani", mname: "Ayush", lname: "Bedi", email: "ranibedi@gmail.com", pno: "3797197883", role: "Network Engineer", address: "435 Prosacco Station" },
    { id: "4", fname: "Amit", mname: "Siddharth", lname: "Kothari", email: "amitkothari@gmail.com", pno: "5233239902", role: "Accountant", address: "620 Peyton Vista" },
    { id: "5", fname: "Apurva", mname: "Vihaan", lname: "Chauhan", email: "apurvachauhan@gmail.com", pno: "5954109588", role: "HR", address: "120 Erdman Islands" }
];

let editRowElement;

const fillTable = () => {
	for (let i = 0; i < data.length; i++) {
		const id = data[i].id;
		document.getElementById("tableBody").innerHTML += `<tr id="row${id}">
            <td><div class="row${id}">${data[i].fname}</div></td>
            <td><div class="row${id}">${data[i].mname}</div></td>
            <td><div class="row${id}">${data[i].lname}</div></td>
            <td><div class="row${id}">${data[i].email}</div></td>
            <td><div class="row${id}">${data[i].pno}</div></td>
            <td><div class="row${id}">${data[i].role}</div></td>
            <td><div class="row${id}">${data[i].address}</div></td>
            <td><button id="editRow${id}" type="button" onclick="editRow(${id})" class="btn btn-success">Edit</button></td>
            <td><button id="deleteRow${id}" type="button" onclick="deleteData(${id})" class="btn btn-danger delete${id}">Delete</button></td>
        </tr>`;
	}
};

const editRow = (rowID) => {
	const row = document.getElementsByClassName("row" + rowID);
	editRowElement = [];
	for (let i = 0; i < row.length; i++) {
		row[i].contentEditable = true;
		editRowElement.push(row[i].innerHTML);
	}

	const editButton = document.getElementById("editRow" + rowID);
	editButton.innerHTML = "Save";
	editButton.setAttribute("onclick", "saveRow(" + rowID + ")");

	const deleteButton = document.getElementById("deleteRow" + rowID);
	deleteButton.innerHTML = "Cancel";
	deleteButton.setAttribute("onclick", "cancelRowEdit(" + rowID + ")");
};

const cancelRowEdit = (id) => {
	let row = document.getElementsByClassName("row" + id);
	for (let i = 0; i < 7; i++) {
		row[i].innerHTML = editRowElement[i];
		row[i].contentEditable = false;
	}

	const editButton = document.getElementById("editRow" + id);
	editButton.innerHTML = "Edit";
	editButton.setAttribute("onclick", "editRow(" + id + ")");

	const deleteButton = document.getElementById("deleteRow" + id);
	deleteButton.innerHTML = "Delete";
	deleteButton.setAttribute("onclick", "deleteData(" + id + ")");
};

const saveRow = (id) => {
	const row = document.getElementsByClassName("row" + id);
	for (let i = 0; i < row.length; i++) {
		row[i].contentEditable = false;
	}

	const editButton = document.getElementById("editRow" + id);
	editButton.innerHTML = "Edit";
	editButton.setAttribute("onclick", "editRow(" + id + ")");

	const deleteButton = document.getElementById("deleteRow" + id);
	deleteButton.innerHTML = "Delete";
	deleteButton.setAttribute("onclick", "deleteData(" + id + ")");
};

const deleteData = (id) => {
	const rowID = document.getElementById("row" + id);
	rowID.remove();
};

const loadData = () => {
	fillTable();
	document.getElementById("loadData").innerHTML = "Refresh Data";
	document.getElementById("loadData").id = "refreshData";
	document
		.getElementById("refreshData")
		.setAttribute("onclick", "refreshData()");
};

const refreshData = () => {
	document.getElementById("tableBody").innerHTML = "";
	fillTable();
};
