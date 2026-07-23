// =========================
// UI REDESIGN JAVASCRIPT
// =========================

// ---------- Dark Mode ----------

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML="☀";

    }else{

        themeBtn.innerHTML="🌙";

    }

});

// ---------- Smooth Scroll for Navigation ----------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ---------- Hero Button ----------

document.querySelector(".primary-btn").addEventListener("click",()=>{

    alert("Welcome to TechNova!");

});

document.querySelector(".secondary-btn").addEventListener("click",()=>{

    document.getElementById("services").scrollIntoView({

        behavior:"smooth"

    });

});

// ---------- Newsletter ----------

const newsletter=document.querySelector(".newsletter form");

newsletter.addEventListener("submit",(e)=>{

    e.preventDefault();

    const email=newsletter.querySelector("input").value;

    if(email===""){

        alert("Please enter your email.");

        return;

    }

    alert("Thank you for subscribing!");

    newsletter.reset();

});

// ---------- Contact Form ----------

const contact=document.querySelector(".contact-form");

contact.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name=contact.querySelector("input[type='text']").value;
    const email=contact.querySelector("input[type='email']").value;
    const message=contact.querySelector("textarea").value;

    if(name==="" || email==="" || message===""){

        alert("Please fill all fields.");

        return;

    }

    alert("Message Sent Successfully!");

    contact.reset();

});

// ---------- Card Hover Animation ----------

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px) scale(1)";

    });

});

// ---------- Portfolio Hover ----------

const portfolio=document.querySelectorAll(".portfolio-card");

portfolio.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        item.style.transform="scale(1.03)";

        item.style.transition=".3s";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.transform="scale(1)";

    });

});

// ---------- Scroll Animation ----------

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0px)";

        }

    });

});

document.querySelectorAll(".card,.portfolio-card,.testimonial,.stat").forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(50px)";

    item.style.transition=".8s";

    observer.observe(item);

});

// ---------- Back To Top Button ----------

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="20px";
topBtn.style.bottom="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#4f46e5";
topBtn.style.color="white";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.fontSize="22px";

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ---------- Navbar Shadow ----------

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        navbar.style.boxShadow="0 5px 20px rgba(0,0,0,.2)";

    }else{

        navbar.style.boxShadow="none";

    }

});

console.log("TechNova UI Redesign Loaded Successfully 🚀");