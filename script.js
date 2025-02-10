// TypeScript code to generate resume
document.getElementById("submit").onclick = function () {
    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var masters = document.getElementById("masters").value;
    var bachelors = document.getElementById("bachelours").value;
    var skill = document.getElementById("skill").value;
    var exp = document.getElementById("exp").value;
    var resume = "\n        <h2>Your Resume</h2>\n        <h3>Personal Information:</h3>\n        <p><strong>Name:</strong> ".concat(fname, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h3>Education:</h3>\n        <p><strong>Masters:</strong> ").concat(masters, "</p>\n        <p><strong>Bachelors:</strong> ").concat(bachelors, "</p>\n        <h3>Skills:</h3>\n        <p>").concat(skill, "</p>\n        <h3>Experience:</h3>\n        <p>").concat(exp, "</p>\n    ");
    document.getElementById("resdis").innerHTML = resume;
};
