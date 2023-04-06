// VALIDATION Student

export function isValStu() {
    let isValid = true;

    // Student ID:
    let id = document.querySelector("#studentId").value;

    if (!id.trim() || (!/\b[?=\d]{4,6}\b/.test(id))) {
        isValid = false;
        document.querySelector("#tbStudentId").innerHTML =
            "Mã học sinh không được để trống và phải chứa 4-6 kí tự";
        document.querySelector("#tbStudentId").style.display = "block"; 
    } else {
        document.querySelector("#tbStudentId").innerHTML = "";
        document.querySelector("#tbStudentId").style.display = "block";
    }

    // Student Name:
    let name = document.querySelector("#studentName").value;
    if (!name.trim() || (!/^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/.test(name))) {
        isValid = false;
        document.querySelector("#tbStudentName").innerHTML =
            "Tên học sinh không được để trống và phải là chữ";
        document.querySelector("#tbStudentName").style.display = "block";
    } else {
        document.querySelector("#tbStudentName").innerHTML = "";
        document.querySelector("#tbStudentName").style.display = "none";
    }

    // Student Email
    let email = document.querySelector("#studentEmail").value;
    if (!email.trim() || (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        isValid = false;
        document.querySelector("#tbStudentEmail").innerHTML = "Email không được để trống và phải đúng định dạng";
        document.querySelector("#tbStudentEmail").style.display = "block";
    } else {
        document.querySelector("#tbStudentEmail").innerHTML = "";
        document.querySelector("#tbStudentEmail").style.display = "none";
    }

    // Address, Math, Physics, Chemistry
    let isEmptyAddress = isCheckEmpty(
        "studentAddress",
        "tbStudentAddress",
        "Địa chỉ không được để trống"
    );
    let isEmptyMath = isCheckEmpty(
        "math",
        "tbMath",
        "Điểm toán không được để trống"
    );
    let isEmptyPhysics = isCheckEmpty(
        "physics",
        "tbPhysics",
        "Điểm vật lý không được để trống"
    );
    let isEmptyChemistry = isCheckEmpty(
        "chemistry",
        "tbChemistry",
        "Điểm hóa không được để trống"
    );

    if (
        isEmptyAddress ||
        isEmptyMath ||
        isEmptyPhysics ||
        isEmptyChemistry
    ) {
        isValid = false;
    }

    return isValid;
}


// VALIDATION Teacher

export function isValTea() {
    let isValid = true;

    // Teacher ID:
    let id = document.querySelector("#teacherId").value;

    if (!id.trim() || (!/\b[?=\d]{4,6}\b/.test(id))) {
        isValid = false;
        document.querySelector("#tbTeacherId").innerHTML =
            "Mã giáo viên không được để trống và phải chứa 4-6 kí tự";
        document.querySelector("#tbTeacherId").style.display = "block";
    } else {
        document.querySelector("#tbTeacherId").innerHTML = "";
        document.querySelector("#tbTeacherId").style.display = "none";
    }

    // Employee Name:
    let name = document.querySelector("#teacherName").value;
    if (!name.trim() || (!/^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/.test(name))) {
        isValid = false;
        document.querySelector("#tbTeacherName").innerHTML =
            "Tên giáo viên không được để trống và phải là chữ";
        document.querySelector("#tbTeacherName").style.display = "block";
    } else {
        document.querySelector("#tbTeacherName").innerHTML = "";
        document.querySelector("#tbTeacherName").style.display = "none";
    }

    // Employee Email
    let email = document.querySelector("#teacherEmail").value;
    if (!email.trim() || (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        isValid = false;
        document.querySelector("#tbTeacherEmail").innerHTML = "Email không được để trống và phải đúng định dạng";
        document.querySelector("#tbTeacherEmail").style.display = "block";
    } else {
        document.querySelector("#tbTeacherEmail").innerHTML = "";
        document.querySelector("#tbTeacherEmail").style.display = "none";
    }

    // Address, numberWorking, salaryByDay
    let isEmptyAddress = isCheckEmpty(
        "teacherAddress",
        "tbTeacherAddress",
        "Địa chỉ không được để trống"
    );
    let isEmptyNumberWorking = isCheckEmpty(
        "numberWorking",
        "tbNumberWorking",
        "Số ngày làm không được để trống"
    );
    let isEmptySalary = isCheckEmpty(
        "salary",
        "tbSalary",
        "Lương theo ngày không được để trống"
    );

    if (
        isEmptyAddress ||
        isEmptyNumberWorking ||
        isEmptySalary
    ) {
        isValid = false;
    }

    return isValid;
}

// VALIDATION Cusstomer

export function isValCus() {
    let isValid = true;

    // Customer ID:
    let id = document.querySelector("#customerId").value;

    if (!id.trim() || (!/\b[?=\d]{4,6}\b/.test(id))) {
        isValid = false;
        document.querySelector("#tbCustomerId").innerHTML =
            "Mã khách hàng không được để trống và phải chứa 4-6 kí tự";
        document.querySelector("#tbCustomerId").style.display = "block";
    } else {
        document.querySelector("#tbCustomerId").innerHTML = "";
        document.querySelector("#tbCustomerId").style.display = "none";
    }

    // Customer Name:
    let name = document.querySelector("#customerName").value;
    if (!name.trim() || (!/^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/.test(name))) {
        isValid = false;
        document.querySelector("#tbCustomerName").innerHTML =
            "Tên khách hàng không được để trống và phải là chữ";
        document.querySelector("#tbCustomerName").style.display = "block";
    } else {
        document.querySelector("#tbCustomerName").innerHTML = "";
        document.querySelector("#tbCustomerName").style.display = "none";
    }

    // Customer Email
    let email = document.querySelector("#customerEmail").value;
    if (!email.trim() || (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        isValid = false;
        document.querySelector("#tbCustomerEmail").innerHTML = "Email không được để trống và phải đúng định dạng";
        document.querySelector("#tbCustomerEmail").style.display = "block";
    } else {
        document.querySelector("#tbCustomerEmail").innerHTML = "";
        document.querySelector("#tbCustomerEmail").style.display = "none";
    }

    // Address, companyName, invoiceValue, evaluate
    let isEmptyAddress = isCheckEmpty(
        "customerAddress",
        "tbCustomerAddress",
        "Địa chỉ không được để trống"
    );
    let isEmptyCompanyName = isCheckEmpty(
        "companyName",
        "tbCompanyName",
        "Tên công ty không được để trống"
    );
    let isEmptyInvoiceValue = isCheckEmpty(
        "invoiceValue",
        "tbInvoiceValue",
        "Trị giá hóa đơn không được để trống"
    );
    let isEmptyRate = isCheckEmpty(
        "rate",
        "tbRate",
        "Vui lòng chọn đánh giá"
    );

    if (
        isEmptyAddress ||
        isEmptyCompanyName ||
        isEmptyInvoiceValue ||
        isEmptyRate
    ) {
        isValid = false;
    }

    return isValid;
}

function isCheckEmpty(idInput, idSpan, message) {
    let valueInput = document.querySelector(`#${idInput}`).value;

    if (!valueInput.trim()) {
        document.querySelector(`#${idSpan}`).innerHTML = message;
        document.querySelector(`#${idSpan}`).style.display = "block";
        return true;
    }
    
    document.querySelector(`#${idSpan}`).style.display = "none";
    return false;
}