
// Function for smooth scrolling to sections
document.querySelectorAll('.nav-link, .btn-1, .btn-2').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1); // Remove #
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const educationLink = document.getElementById("education-link");
    const experienceLink = document.getElementById("experience-link");
    const dynamicContent = document.getElementById("dynamic-content");
  
    // Education Content
    const educationHTML = `
    <h4>2020</h4>
    <p>Matric from The Education City School</p>
    <h4>2022</h4>
    <p>FSC in Pre-Engineering from Nims College</p>
    `;

     // Experience Content
     const experienceHTML =`
     <h4>2+ years</h4>
     <p>Frontend Development</p>
     `
 ;
    // Event Listeners
    educationLink.addEventListener("click", () => {
        dynamicContent.innerHTML = educationHTML;
    });

    skillsLink.addEventListener("click", () => {
        dynamicContent.innerHTML = skillsHTML;
    });
     
    experienceLink.addEventListener("click", () => {
        dynamicContent.innerHTML = experienceHTML;
    });
});