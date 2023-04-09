import { Student } from "../models/Student.js";
import { Teacher } from "../models/Teacher.js";
import { Customer } from "../models/Customer.js";
import Validation from "../models/Validation.js";

let personList = getLocalStorage();
renderPerson(personList);

function getElement(selector) {
    return document.querySelector(selector);
}

// Add student
window.createStudent = () => {
    let id = getElement("#studentId").value;
    let name = getElement("#studentName").value;
    let address = getElement("#studentAddress").value;
    let email = getElement("#studentEmail").value;
    let mathScore = getElement("#math").value;
    let physicScore = getElement("#physics").value;
    let chemisScore = getElement("#chemistry").value;

    let isValid = true;

    isValid &= Validation.checkEmpty(id, "tbStudentId", "Thông tin không được để trống!") && Validation.checkIdExist(id, "tbStudentId", "ID đã tồn tại", personList) && Validation.checkId(id, "tbStudentId", "ID phải là số chứa 4-6 kí tự");
    isValid &= Validation.checkEmpty(name, "tbStudentName", "Thông tin không được để trống!") && Validation.checkName(name, "tbStudentName", "Tên phải là kí tự chữ!");
    isValid &= Validation.checkEmpty(address, "tbStudentAddress", "Thông tin không được để trống!");
    isValid &= Validation.checkEmpty(email, "tbStudentEmail", "Thông tin không được để trống!") && Validation.checkEmail(email, "tbStudentEmail", "Email chưa đúng định dạng!");
    isValid &= Validation.checkEmpty(mathScore, "tbMath", "Thông tin không được để trống!") && Validation.checkScore(mathScore, "tbMath", "Điểm không hợp lệ!");
    isValid &= Validation.checkEmpty(physicScore, "tbPhysics", "Thông tin không được để trống!") && Validation.checkScore(physicScore, "tbPhysics", "Điểm không hợp lệ!");
    isValid &= Validation.checkEmpty(chemisScore, "tbChemistry", "Thông tin không được để trống!") && Validation.checkScore(chemisScore, "tbChemistry", "Điểm không hợp lệ!");

    if (isValid) {
        const student = new Student(
            id,
            name,
            address,
            email,
            mathScore,
            physicScore,
            chemisScore
        );

        personList.push(student);
        setLocalStorage();
        renderPerson(personList);
        alert("Thêm Thành Công");
    }

}

getElement("#btnAddStudent").onclick = () => {

    getElement("#studentId").disabled = false;
    getElement(".footer__Student").innerHTML = `
        <button type="button" class="btn" onclick="createStudent()">Add Student</button>
        <button type="button" class="btn" data-bs-dismiss="modal" onclick="resetStudent()">Close</button>
     `;
}

// Add Teacher
window.createTeacher = () => {
    let id = getElement("#teacherId").value;
    let name = getElement("#teacherName").value;
    let address = getElement("#teacherAddress").value;
    let email = getElement("#teacherEmail").value;
    let workDay = getElement("#numberWorking").value;
    let basicSalary = getElement("#salary").value;

    let isValid = true;

    isValid &= Validation.checkEmpty(id, "tbTeacherId", "Thông tin không được để trống!") && Validation.checkIdExist(id, "tbTeacherId", "ID đã tồn tại", personList) && Validation.checkId(id, "tbTeacherId", "ID phải là số chứa 4-6 kí tự");
    isValid &= Validation.checkEmpty(name, "tbTeacherName", "Thông tin không được để trống!") && Validation.checkName(name, "tbTeacherName", "Tên phải là kí tự chữ!");
    isValid &= Validation.checkEmpty(address, "tbTeacherAddress", "Thông tin không được để trống!");
    isValid &= Validation.checkEmpty(email, "tbTeacherEmail", "Thông tin không được để trống!") && Validation.checkEmail(email, "tbTeacherEmail", "Email chưa đúng định dạng!");
    isValid &= Validation.checkEmpty(workDay, "tbNumberWorking", "Thông tin không được để trống!") && Validation.checkDays(workDay, "tbNumberWorking", "Số ngày làm việc phải lớn hơn 0!");
    isValid &= Validation.checkEmpty(basicSalary, "tbSalary", "Thông tin không được để trống!") && Validation.checkSalary(basicSalary, "tbSalary", "Lương cơ bản phải lớn hơn 0!");

    if (isValid) {
        const teacher = new Teacher(
            id,
            name,
            address,
            email,
            workDay,
            basicSalary
        );
        
        personList.push(teacher);
        setLocalStorage();
        renderPerson(personList);
        alert("Thêm Thành Công");
    }

}

getElement("#btnAddTeacher").onclick = () => {

    getElement("#teacherId").disabled = false;
    getElement(".footer__Teacher").innerHTML = `
        <button type="button" class="btn" onclick="createTeacher()">Add Teacher</button>
        <button type="button" class="btn" data-bs-dismiss="modal" onclick="resetTeacher()">Close</button>
    `;
}

// Add Customer
window.createCustomer = () => {
    let id = getElement("#customerId").value;
    let name = getElement("#customerName").value;
    let address = getElement("#customerAddress").value;
    let email = getElement("#customerEmail").value;
    let company = getElement("#companyName").value;
    let orderValue = getElement("#invoiceValue").value;
    let rate = getElement("#rate").value;

    let isValid = true;

    isValid &= Validation.checkEmpty(id, "tbCustomerId", "Thông tin không được để trống!") && Validation.checkIdExist(id, "tbCustomerId", "ID đã tồn tại", personList) && Validation.checkId(id, "tbCustomerId", "ID phải là số chứa 4-6 kí tự");
    isValid &= Validation.checkEmpty(name, "tbCustomerName", "Thông tin không được để trống!") && Validation.checkName(name, "tbCustomerName", "Tên phải là kí tự chữ!");
    isValid &= Validation.checkEmpty(address, "tbCustomerAddress", "Thông tin không được để trống!");
    isValid &= Validation.checkEmpty(email, "tbCustomerEmail", "Thông tin không được để trống!") && Validation.checkEmail(email, "tbCustomerEmail", "Email chưa đúng định dạng!");
    isValid &= Validation.checkEmpty(company, "tbCompanyName", "Thông tin không được để trống!");
    isValid &= Validation.checkEmpty(orderValue, "tbInvoiceValue", "Thông tin không được để trống!") && Validation.checkInvoiceValue(orderValue, "tbInvoiceValue", "Trị giá hóa đơn phải lớn hơn 0!");
    isValid &= Validation.checkRate("rate", "tbRate", "Thông tin chưa hợp lệ!");

    if (isValid) {
        const customer = new Customer(
            id,
            name,
            address,
            email,
            company,
            orderValue,
            rate
        );
        
        personList.push(customer);
        setLocalStorage();
        renderPerson(personList);
        alert("Thêm Thành Công");
    }

}

getElement("#btnAddCustomer").onclick = () => {

    getElement("#customerId").disabled = false;
    getElement(".footer__Customer").innerHTML = `
        <button type="button" class="btn" onclick="createCustomer()">Add Customer</button>
        <button type="button" class="btn" data-bs-dismiss="modal" onclick="resetCustomer()">Close</button>
    `;
}

// Edit Person
window.editPerson = (personId) => {
    let person = personList.find(person => person.id === personId);

    switch (person.constructor.name) {
        case 'Student': {
            getElement("#studentId").value = person.id;
            getElement("#studentName").value = person.name;
            getElement("#studentAddress").value = person.address;
            getElement("#studentEmail").value = person.email;
            getElement("#math").value = person.mathScore;
            getElement("#physics").value = person.physicScore;
            getElement("#chemistry").value = person.chemisScore;
            getElement("#studentId").disabled = true;
            getElement(".footer__Student").innerHTML = `
                <button type="button" class="btn" onclick="updateStudent('${person.id}')">Update Student</button>
                <button type="button" class="btn" data-bs-dismiss="modal" onclick="resetStudent()">Close</button>
            `;
            $("#modalStudent").modal("show");
        }
            break;

        case 'Teacher': {
            getElement("#teacherId").value = person.id;
            getElement("#teacherName").value = person.name;
            getElement("#teacherAddress").value = person.address;
            getElement("#teacherEmail").value = person.email;
            getElement("#numberWorking").value = person.workDay;
            getElement("#salary").value = person.basicSalary;
            getElement("#teacherId").disabled = true;
            getElement(".footer__Teacher").innerHTML = `
                <button type="button" class="btn" onclick="updateTeacher('${person.id}')">Update Teacher</button>
                <button type="button" class="btn" data-bs-dismiss="modal" onclick="resetTeacher()">Close</button>
            `;
            $("#modalTeacher").modal("show");
        }
            break;

        case 'Customer': {
            getElement("#customerId").value = person.id;
            getElement("#customerName").value = person.name;
            getElement("#customerAddress").value = person.address;
            getElement("#customerEmail").value = person.email;
            getElement("#companyName").value = person.company;
            getElement("#invoiceValue").value = person.orderValue;
            getElement("#rate").value = person.rate;
            getElement("#customerId").disabled = true;
            getElement(".footer__Customer").innerHTML = `
                <button type="button" class="btn" onclick="updateCustomer('${person.id}')">Update Customer</button>
                <button type="button" class="btn" data-bs-dismiss="modal" onclick="resetCustomer()">Close</button>
            `;
            $("#modalCustomer").modal("show");
        }
            break;
    }
}

// Update Student
window.updateStudent = (personId) => {
    let id = getElement("#studentId").value;
    let name = getElement("#studentName").value;
    let address = getElement("#studentAddress").value;
    let email = getElement("#studentEmail").value;
    let mathScore = getElement("#math").value;
    let physicScore = getElement("#physics").value;
    let chemisScore = getElement("#chemistry").value;

    let isValid = true;

    isValid &= Validation.checkEmpty(name, "tbStudentName", "Thông tin không được để trống!") && Validation.checkName(name, "tbStudentName", "Tên phải là kí tự chữ!");
    isValid &= Validation.checkEmpty(address, "tbStudentAddress", "Thông tin không được để trống!");
    isValid &= Validation.checkEmpty(email, "tbStudentEmail", "Thông tin không được để trống!") && Validation.checkEmail(email, "tbStudentEmail", "Email chưa đúng định dạng!");
    isValid &= Validation.checkEmpty(mathScore, "tbMath", "Thông tin không được để trống!") && Validation.checkScore(mathScore, "tbMath", "Điểm không hợp lệ!");
    isValid &= Validation.checkEmpty(physicScore, "tbPhysics", "Thông tin không được để trống!") && Validation.checkScore(physicScore, "tbPhysics", "Điểm không hợp lệ!");
    isValid &= Validation.checkEmpty(chemisScore, "tbChemistry", "Thông tin không được để trống!") && Validation.checkScore(chemisScore, "tbChemistry", "Điểm không hợp lệ!");

    if (isValid) {
        const student = new Student(
            id,
            name,
            address,
            email,
            mathScore,
            physicScore,
            chemisScore
        );

        let index = personList.findIndex((student) => {
            return student.id === id;
        });
    
        personList[index] = student;
        renderPerson(personList);
        setLocalStorage();
        alert("Cập Nhập Thành Công");
    }

}

// Update Teacher
window.updateTeacher = (personId) => {
    let id = getElement("#teacherId").value;
    let name = getElement("#teacherName").value;
    let address = getElement("#teacherAddress").value;
    let email = getElement("#teacherEmail").value;
    let workDay = getElement("#numberWorking").value;
    let basicSalary = getElement("#salary").value;

    let isValid = true;

    isValid &= Validation.checkEmpty(name, "tbTeacherName", "Thông tin không được để trống!") && Validation.checkName(name, "tbTeacherName", "Tên phải là kí tự chữ!");
    isValid &= Validation.checkEmpty(address, "tbTeacherAddress", "Thông tin không được để trống!");
    isValid &= Validation.checkEmpty(email, "tbTeacherEmail", "Thông tin không được để trống!") && Validation.checkEmail(email, "tbTeacherEmail", "Email chưa đúng định dạng!");
    isValid &= Validation.checkEmpty(workDay, "tbNumberWorking", "Thông tin không được để trống!") && Validation.checkDays(workDay, "tbNumberWorking", "Số ngày làm việc phải lớn hơn 0!");
    isValid &= Validation.checkEmpty(basicSalary, "tbSalary", "Thông tin không được để trống!") && Validation.checkSalary(basicSalary, "tbSalary", "Lương cơ bản phải lớn hơn 0!");

    if (isValid) {
        const teacher = new Teacher(
            id,
            name,
            address,
            email,
            workDay,
            basicSalary
        );

        let index = personList.findIndex((teacher) => {
            return teacher.id === id;
        });
    
        personList[index] = teacher;
        renderPerson(personList);
        setLocalStorage();
        alert("Cập Nhập Thành Công");
    }
 
}

// Update Customer
window.updateCustomer = (personId) => {
    let id = getElement("#customerId").value;
    let name = getElement("#customerName").value;
    let address = getElement("#customerAddress").value;
    let email = getElement("#customerEmail").value;
    let company = getElement("#companyName").value;
    let orderValue = getElement("#invoiceValue").value;
    let rate = getElement("#rate").value;

    let isValid = true;

    isValid &= Validation.checkEmpty(name, "tbCustomerName", "Thông tin không được để trống!") && Validation.checkName(name, "tbCustomerName", "Tên phải là kí tự chữ!");
    isValid &= Validation.checkEmpty(address, "tbCustomerAddress", "Thông tin không được để trống!");
    isValid &= Validation.checkEmpty(email, "tbCustomerEmail", "Thông tin không được để trống!") && Validation.checkEmail(email, "tbCustomerEmail", "Email chưa đúng định dạng!");
    isValid &= Validation.checkEmpty(company, "tbCompanyName", "Thông tin không được để trống!");
    isValid &= Validation.checkEmpty(orderValue, "tbInvoiceValue", "Thông tin không được để trống!") && Validation.checkInvoiceValue(orderValue, "tbInvoiceValue", "Trị giá hóa đơn phải lớn hơn 0!");
    isValid &= Validation.checkRate("rate", "tbRate", "Thông tin chưa hợp lệ!");

    if (isValid) {
        const customer = new Customer(
            id,
            name,
            address,
            email,
            company,
            orderValue,
            rate
        );
    
        let index = personList.findIndex((customer) => {
            return customer.id === id;
        });
    
        personList[index] = customer;
        renderPerson(personList);
        setLocalStorage();
        alert("Cập Nhập Thành Công");
    }
  
}

// Delete Person
window.deletePerson = (personId) => {
    personList = personList.filter((person) => {
        return person.id !== personId;
    });

    setLocalStorage();
    renderPerson(personList);
}

// Filt by type
getElement("#typePerson").onchange = sortPersonList;
function sortPersonList() {
    let typePerson = getElement("#typePerson").value;
    let tempList;
    switch (typePerson) {
        case '1': {
            tempList = personList.filter(person => person.constructor.name === "Student");
        }
            break;

        case '2': {
            tempList = personList.filter(person => person.constructor.name === "Teacher");
        }
            break;

        case '3': {
            tempList = personList.filter(person => person.constructor.name === "Customer");
        }
            break;

        default: {
            tempList = personList;
        }
    }
    renderPerson(tempList);
}

// Sort by name
getElement("#arrangeName").onchange = arrangeName;
function arrangeName() {
    let tempList;
    let arrange = getElement("#arrangeName").value;
    if (arrange === "1") {
        tempList = personList.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            } else { 
                return 1;
            }

        })
    } else if (arrange === "2") {
        tempList = personList.sort((a, b) => {
            if (a.name > b.name) {
                return -1;
            } else { 
                return 1;
            }

        })
    }
    renderPerson(tempList);
}

// showInfo
window.showInfo = (personId) => {
    let person = personList.find(person => person.id === personId);

    getElement("#detailsHeader").innerHTML = person.constructor.name + " - " + person.name;

    let html = `
        <label class='fw-bold'>ID: </label>
        <span>${person.id}</span><br>
        <label class='fw-bold'>Name: </label>
        <span>${person.name}</span><br>
        <label class='fw-bold'>Address: </label>
        <span>${person.address}</span><br>
        <label class='fw-bold'>Email: </label>
        <span>${person.email}</span><br>
    `;

    switch(person.constructor.name){
        case 'Student': {
            html += `
            <label class='fw-bold'>Math: </label>
            <span>${person.mathScore}</span><br>
            <label class='fw-bold'>Physics: </label>
            <span>${person.physicScore}</span><br>
            <label class='fw-bold'>Chemistry: </label>
            <span>${person.chemisScore}</span><br>
            <label class='fw-bold'>Average score: </label>
            <span>${person.calcAverage()}</span>
            `
        }
        break;

        case 'Teacher': {
            html += `
            <label class='fw-bold'>Number of working days: </label>
            <span>${person.workDay}</span><br>
            <label class='fw-bold'>Basic salary: </label>
            <span>${new Intl.NumberFormat('vn-VN').format(person.basicSalary)}VND</span><br>
            <label class='fw-bold'>Total salary: </label>
            <span>${new Intl.NumberFormat('vn-VN').format(person.calcSalary())}VND</span>
            `
        }
        break;

        case 'Customer': {
            html += `
            <label class='fw-bold'>Name of company: </label>
            <span>${person.company}</span><br>
            <label class='fw-bold'>Bill: </label>
            <span>${person.orderValue}</span><br>
            <label class='fw-bold'>Feedback: </label>
            <span>${person.rate}</span>
            `
        }
    }
    getElement('#detailsBody').innerHTML = html;
}

// Reset Person
window.resetStudent = () => {
    getElement("#studentId").value = "";
    getElement("#studentName").value = "";
    getElement("#studentAddress").value = "";
    getElement("#studentEmail").value = "";
    getElement("#math").value = "";
    getElement("#physics").value = "";
    getElement("#chemistry").value = "";

    getElement("#tbStudentId").style.display = "none";
    getElement("#tbStudentName").style.display = "none";
    getElement("#tbStudentAddress").style.display = "none";
    getElement("#tbStudentEmail").style.display = "none";
    getElement("#tbMath").style.display = "none";
    getElement("#tbPhysics").style.display = "none";
    getElement("#tbChemistry").style.display = "none";
}

window.resetTeacher = () => {
    getElement("#teacherId").value = "";
    getElement("#teacherName").value = "";
    getElement("#teacherAddress").value = "";
    getElement("#teacherEmail").value = "";
    getElement("#numberWorking").value = "";
    getElement("#salary").value = "";

    
    getElement("#tbTeacherId").style.display = "none";
    getElement("#tbTeacherName").style.display = "none";
    getElement("#tbTeacherAddress").style.display = "none";
    getElement("#tbTeacherEmail").style.display = "none";
    getElement("#tbNumberWorking").style.display = "none";
    getElement("#tbSalary").style.display = "none";
}

window.resetCustomer = () => {
    getElement("#customerId").value = "";
    getElement("#customerName").value = "";
    getElement("#customerAddress").value = "";
    getElement("#customerEmail").value = "";
    getElement("#companyName").value = "";
    getElement("#invoiceValue").value = "";
    getElement("#rate").value = "";

    
    getElement("#tbCustomerId").style.display = "none";
    getElement("#tbCustomerName").style.display = "none";
    getElement("#tbCustomerAddress").style.display = "none";
    getElement("#tbCustomerEmail").style.display = "none";
    getElement("#tbCompanyName").style.display = "none";
    getElement("#tbInvoiceValue").style.display = "none";
    getElement("#tbRate").style.display = "none";
}

// Render
function renderPerson(personList) {
    let html = personList.reduce((result, person) => {
        return (result += `
            <tr>
                <td>${person.id}</td>
                <td>${person.name}</td>
                <td>${person.address}</td>
                <td>${person.email}</td>
                <td>${person.constructor.name}</td>        
                <td>
                    <button type="button" class="btn" onclick="editPerson('${person.id}')">Edit</button>
                    <button class="btn" onclick="deletePerson('${person.id}')">Delete</button>
                    <button class="btn" onclick="showInfo('${person.id}')" data-bs-toggle="modal" data-bs-target="#detailsModal">Show Info</button>
                </td>
            </tr>
        `
        );
    }, "");
    getElement('#tblListInfo').innerHTML = html;
}

// Set local storage
function setLocalStorage() {
    const list = [...personList];
    list.forEach((person) => {
        person['type'] = person.constructor.name;
    })
    const json = JSON.stringify(personList);
    localStorage.setItem('personList', json);
}

// Get local storage
function getLocalStorage() {
    const json = localStorage.getItem('personList');
    if (!json) {
        return [];
    };
    const personList = JSON.parse(json);
    for (let i = 0; i < personList.length; i++) {
        const person = personList[i];
        switch (person.type) {
            case "Student":
                person[i] = new Student(
                    person.id, 
                    person.name, 
                    person.address, 
                    person.email, 
                    person.mathScore, 
                    person.physicScore, 
                    person.chemisScore
                );
                break;

            case "Teacher":
                person[i] = new Teacher(
                    person.id, 
                    person.name, 
                    person.address, 
                    person.email, 
                    person.workDay, 
                    person.basicSalary
                );
                break;

            case "Customer":
                person[i] = new Customer(
                    person.id, 
                    person.name, 
                    person.address, 
                    person.email, 
                    person.company, 
                    person.orderValue, 
                    person.rate
                );
                break;

            default: break;
        }
        personList[i] = person[i];
    }
    return personList;
}