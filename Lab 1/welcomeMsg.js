exports.getAge = function (name, DOB) {

    if (DOB.getFullYear() < 2023) // YYYY-MM-DD
    {
	    return `Hello ${name} your age now is ${calcAge(DOB)} years old`;
    }
    else 
    {
        return "Unacceptable Year";
    }
};

function calcAge(birthDate) {

    var today = new Date();

    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}