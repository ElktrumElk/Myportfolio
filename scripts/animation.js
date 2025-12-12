const skillLists = document.querySelectorAll(".skills_holder");
const projDiv = document.querySelector(".proj_cont");




const observer1 = new IntersectionObserver((ent) => {
    ent.forEach(entry => {
        if (entry.isIntersecting) {
            skillLists[0].style.transform = "translate(0%)";
            skillLists[0].style.opacity = "1";
        }
        else {
            skillLists[0].style.transform = "translate(-60%)";
            skillLists[0].style.opacity = "0";
        }
    });
}, {
    threshold: .1
});
observer1.observe(skillLists[0]);

const observer2 = new IntersectionObserver((ent) => {
    ent.forEach(entry => {
        if (entry.isIntersecting) {
            skillLists[1].style.transform = "translate(0%)";
            skillLists[1].style.opacity = "1";
        }
        else {
            skillLists[1].style.transform = "translate(-60%)";
            skillLists[1].style.opacity = "0";
        }
    });
}, {
    threshold: .1
});
observer2.observe(skillLists[1]);

const observer3 = new IntersectionObserver((ent) => {
    ent.forEach(entry => {
        if (entry.isIntersecting) {
            skillLists[2].style.transform = "translate(0%)";
            skillLists[2].style.opacity = "1";
        }
        else {
            skillLists[2].style.transform = "translate(-60%)";
            skillLists[2].style.opacity = "0";
        }
    });
}, {
    threshold: .1
});
observer3.observe(skillLists[2]);