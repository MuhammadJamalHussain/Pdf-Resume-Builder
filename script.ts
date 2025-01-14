// document.getElementById('form')?.addEventListener('submit', function(event){
//     event.preventDefault();


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











document.getElementById('form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const usernameElement = document.getElementById('username') as HTMLInputElement;

    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && usernameElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const username = usernameElement.value;

        const uniquePath = `resume/${username.replace(/\s+/g, '_')}_cv.html`;

        const output = `
            <h2>Resume</h2>
            <h3>Personal Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
        `;

        const outputElement = document.getElementById('output');
        if (outputElement) {
            outputElement.innerHTML = output;
            outputElement.classList.remove('hidden');

            const buttonContainer = document.createElement('div');
            buttonContainer.id = 'buttonContainer';
            outputElement.appendChild(buttonContainer);

            const downloadButton = document.createElement('button');
            downloadButton.textContent = 'Download PDF';
            downloadButton.addEventListener('click', () => {
                window.print();
            });
            buttonContainer.appendChild(downloadButton);

            const shareLinkButton = document.createElement('button');
            shareLinkButton.textContent = 'Copy Link';
            shareLinkButton.addEventListener('click', () => {
                const uniquePath = `${username.replace(/\s+/g, '_')}_cv.html`;
                const shareableLink = `https://yourdomain.com/resume/${uniquePath}`;
            
                // Fallback for unsupported Clipboard API
                const fallbackInput = document.createElement('input');
                document.body.appendChild(fallbackInput);
                fallbackInput.value = shareableLink;
                fallbackInput.select();
                document.execCommand('copy');
                document.body.removeChild(fallbackInput);
            
                alert('Shareable link copied to clipboard using fallback!');
            });
            
            
            buttonContainer.appendChild(shareLinkButton);
        } else {
            console.error('The Resume output element is missing.');
        }
    } else {
        console.error('One or more required elements are missing.');
    }
});
