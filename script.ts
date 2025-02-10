
// TypeScript code to generate resume
document.getElementById("submit")!.onclick = () => {
    const fname = (document.getElementById("fname") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const masters = (document.getElementById("masters") as HTMLInputElement).value;
    const bachelors = (document.getElementById("bachelours") as HTMLInputElement).value;
    const skill = (document.getElementById("skill") as HTMLInputElement).value;
    const exp = (document.getElementById("exp") as HTMLInputElement).value;

    const resume = `
        <h2>Your Resume</h2>
        <h3>Personal Information:</h3>
        <p><strong>Name:</strong> ${fname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education:</h3>
        <p><strong>Masters:</strong> ${masters}</p>
        <p><strong>Bachelors:</strong> ${bachelors}</p>
        <h3>Skills:</h3>
        <p>${skill}</p>
        <h3>Experience:</h3>
        <p>${exp}</p>
    `;

    document.getElementById("resdis")!.innerHTML = resume;
};