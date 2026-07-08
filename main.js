// Contact Form Validation

const form =
document.getElementById("contactForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name =
document.getElementById("name").value.trim();

const email =
document.getElementById("email").value.trim();

const message =
document.getElementById("message").value.trim();

if(name.length < 3){
alert("Name must contain at least 3 characters");
return;
}

const emailPattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
alert("Enter valid email");
return;
}

if(message.length < 10){
alert("Message should be at least 10 characters");
return;
}

alert("Form Submitted Successfully");

form.reset();

});

// Active Navigation

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const top =
section.offsetTop - 150;

if(window.scrollY >= top){
current = section.id;
}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){
link.classList.add("active");
}

});

});

// Dark Mode

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

localStorage.setItem(
"theme",
document.body.classList.contains("dark")
? "dark"
: "light"
);

});

if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark");
}


const now = new Date();

    // Get the full year (e.g., 2026)
    const currentYear = now.getFullYear();

    // Insert the year into the HTML element
    document.getElementById("current_year").textContent = currentYear;

