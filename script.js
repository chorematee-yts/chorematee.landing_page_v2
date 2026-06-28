// Smooth fade-in animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".card").forEach(card=>{
    observer.observe(card);
});

// Button animation

document.querySelectorAll("button, .primary-btn, .btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-3px) scale(1.02)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0px) scale(1)";

    });

});

// Waitlist Form

const form = document.querySelector("form");

form.addEventListener("submit",function(e){

    e.preventDefault();

    alert("🎉 Thanks for joining the ChoreMate waitlist!");

    form.reset();

});