// document.getElementById('form')?.addEventListener('submit', function(event){
//     event.preventDefault();
var _a;
//     const nameElement = document.getElementById('name') as HTMLInputElement;
//     const emailElement = document.getElementById('email') as HTMLInputElement;
//     const phoneElement = document.getElementById('phone') as HTMLInputElement;
//     const educationElement = document.getElementById('education') as HTMLInputElement;
//     const experienceElement = document.getElementById('experience') as HTMLInputElement;
//     const usernameElement = document.getElementById("username") as HTMLInputElement;
//     if(nameElement && emailElement && phoneElement && educationElement && experienceElement && usernameElement){
//         const name = nameElement.value;
//         const email = emailElement.value;
//         const phone = phoneElement.value;
//         const education = educationElement.value;
//         const experience = experienceElement.value;
//         const username = usernameElement.value;
//         const uniqurPath = `resume/${username.replace(/\s+/g, '_')}_cv.html`
//         const output = `
//         <h2>Resume</h2>
//         <h3>Personal Information</h3>
//         <p><strong>Name:</strong> ${name} </p>
//         <p><strong>Email:</strong> ${email} </p>
//         <p><strong>Phone:</strong> ${phone} </p>
//         <h3>Education</h3>
//         <p>${education}</p>
//         <h3>Experience</h3>
//         <p>${experience}</p>
//         `;
//         const outputElement = document.getElementById("output");
//         if(outputElement){
//             outputElement.innerHTML = output;
//             outputElement.classList.remove("hidden");
//             const buttonContainer = document.createElement("div");
//             buttonContainer.id = "buttonContainer"
//             outputElement.appendChild(buttonContainer)
//             const downloadButton = document.createElement("button");
//             downloadButton.textContent = "Downlaod PDF"
//             downloadButton.addEventListener("click", () => {
//                 window.print()
//             });
//             buttonContainer.appendChild(downloadButton);
//             const shareLinkButton = document.createElement("button");
//             shareLinkButton.textContent = "Copy Link";
//             shareLinkButton.addEventListener("click", async() =>{
//                 try{
//                     const shareableLink = `https:yourdomain.com/resume/${name.replace(/\s+/g, "_")}_cv.html`
//                 await navigator.clipboard.writeText(shareableLink);
//                 alert("shareable link copied to clipboard!");   
//                 } catch(err){
//                     console.error("Failed to cop link:", err);
//                     alert("Failed to copy link to clipboard, Try Again")
//                 }
//             });
//             buttonContainer.appendChild(shareLinkButton);
//         // const downloadLink = document.createElement('a')
//         // downloadLink.href = `data:text/html;charset=utf-8,` + encodeURIComponent(output)
//         // downloadLink.download = uniqurPath
//         // downloadLink.textContent = "Download Resume"
//         // const outputElement = document.getElementById('output')
//         // if(outputElement){
//         //     outputElement.innerHTML = output
//         //     outputElement.appendChild(downloadLink)
//         }
//         else{
//             console.error('The Resume output elements are missing')
//         }
//     }
//     else{
//         console.error('More than one element is missing')
//     }
// })
(_a = document.getElementById('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var usernameElement = document.getElementById('username');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var username_1 = usernameElement.value;
        var uniquePath = "resume/".concat(username_1.replace(/\s+/g, '_'), "_cv.html");
        var output = "\n            <h2>Resume</h2>\n            <h3>Personal Information</h3>\n            <p><strong>Name:</strong> ".concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n        ");
        var outputElement = document.getElementById('output');
        if (outputElement) {
            outputElement.innerHTML = output;
            outputElement.classList.remove('hidden');
            var buttonContainer = document.createElement('div');
            buttonContainer.id = 'buttonContainer';
            outputElement.appendChild(buttonContainer);
            var downloadButton = document.createElement('button');
            downloadButton.textContent = 'Download PDF';
            downloadButton.addEventListener('click', function () {
                window.print();
            });
            buttonContainer.appendChild(downloadButton);
            var shareLinkButton = document.createElement('button');
            shareLinkButton.textContent = 'Copy Link';
            shareLinkButton.addEventListener('click', function () {
                var uniquePath = "".concat(username_1.replace(/\s+/g, '_'), "_cv.html");
                var shareableLink = "https://yourdomain.com/resume/".concat(uniquePath);
                // Fallback for unsupported Clipboard API
                var fallbackInput = document.createElement('input');
                document.body.appendChild(fallbackInput);
                fallbackInput.value = shareableLink;
                fallbackInput.select();
                document.execCommand('copy');
                document.body.removeChild(fallbackInput);
                alert('Shareable link copied to clipboard using fallback!');
            });
            buttonContainer.appendChild(shareLinkButton);
        }
        else {
            console.error('The Resume output element is missing.');
        }
    }
    else {
        console.error('One or more required elements are missing.');
    }
});
