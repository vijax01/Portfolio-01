document.addEventListener("DOMContentLoaded", () => {
    let click = new Audio("./assets/click.mp3");
    click.volume = .1;
    setTimeout(() => {
        document.querySelector("header > ul").classList.add("show");
        document.querySelector(".ring1").classList.add("show");
        document.querySelector(".ring3").classList.add("show");
        document.querySelector(".ring4").classList.add("show");
        document.querySelector(".ring5").classList.add("show");
        document.querySelector(".ring6").classList.add("show");
        setTimeout(() => {
            updateElementConicGradient(document.querySelector(".ring5"), 0, 360, 1); //ring5 ke appear hone ka animation hai 
            document.querySelector(".monitor").classList.add("show");
            document.querySelector(".left-container").classList.add("show");
            document.querySelector(".ring7").classList.add("show");
        }, 3500);
    }, 100)



    //ring5 conic gradient update from 0 to 100%
    function updateElementConicGradient(element, start, end, speed) {
        let progress = setInterval(() => {
            start = start + 2;
            element.style.background = `conic-gradient( var(--text-color) ${start}deg, transparent 0deg )`;
            if (start >= end) clearInterval(progress);
        }, speed);
    }



    document.querySelectorAll("header > ul > li").forEach(navItem => {
        navItem.addEventListener("click", () => {
            document.querySelectorAll("header > ul > li").forEach(li => {
                li.classList.remove("active-nav");
            })
            navItem.classList.add("active-nav");
            click.currentTime = 0;
            click.play();
        })
    });



    document.querySelectorAll(".project-nav > .btn").forEach(navItem => {
        navItem.addEventListener("click", () => {
            document.querySelectorAll(".project-nav >.btn").forEach(btn => {
                btn.classList.remove("active-btn");
            })
            navItem.classList.add("active-btn");
            document.querySelectorAll(".project").forEach(project => {
                project.classList.add("d-none");
            });
            document.querySelector("#" + navItem.getAttribute("data-id")).classList.remove("d-none");
            click.currentTime = 0;
            click.play();
        })
    });



    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        document.querySelector("header > a > span").style.transform = `rotate(${scrollPosition}deg)`;
        if ((Math.round(scrollPosition) >= 0) && (Math.round(scrollPosition) < 700)) {
            document.querySelectorAll("header > ul > li").forEach(li => {
                li.classList.remove("active-nav");
            })
            document.querySelector("header > ul > li:nth-child(1)").classList.add("active-nav");
        } else if ((Math.round(scrollPosition) >= 700) && (Math.round(scrollPosition) < 1400)) {
            document.querySelectorAll("header > ul > li").forEach(li => {
                li.classList.remove("active-nav");
            })
            document.querySelector("header > ul > li:nth-child(2)").classList.add("active-nav");
        } else if ((Math.round(scrollPosition) >= 1400) && (Math.round(scrollPosition) < 2100)) {
            document.querySelectorAll("header > ul > li").forEach(li => {
                li.classList.remove("active-nav");
            })
            document.querySelector("header > ul > li:nth-child(3)").classList.add("active-nav");
        } else if ((Math.round(scrollPosition) >= 2100) && (Math.round(scrollPosition) < 2800)) {
            document.querySelectorAll("header > ul > li").forEach(li => {
                li.classList.remove("active-nav");
            })
            document.querySelector("header > ul > li:nth-child(4)").classList.add("active-nav");
        } else if ((Math.round(scrollPosition) >= 2800) && (Math.round(scrollPosition) < 3000)) {
            document.querySelectorAll("header > ul > li").forEach(li => {
                li.classList.remove("active-nav");
            })
            document.querySelector("header > ul > li:nth-child(5)").classList.add("active-nav");
        } else if ((Math.round(scrollPosition) >= 3000)) {
            document.querySelectorAll("header > ul > li").forEach(li => {
                li.classList.remove("active-nav");
            })
            document.querySelector("header > ul > li:nth-child(6)").classList.add("active-nav");
        }
    });



    let MiniProjects = document.querySelectorAll("#mini .box > span").length;
    let mini_prev = document.querySelector('#mini .btns > a:nth-child(1)');
    let mini_next = document.querySelector('#mini .btns > a:nth-child(3)');
    let mini_box = document.querySelector('#mini .box');
    let mini_url = document.querySelector("#mini .box > span > iframe").getAttribute("src");
    let mini_url_number = MiniProjects;
    let mini_degrees = 0;

    mini_prev.addEventListener('click', function () {
        mini_degrees += (360 / MiniProjects);
        mini_box.style = `transform: perspective(1000px) rotateY(${mini_degrees}deg)`;
        mini_url_number = (mini_url_number === 1) ? mini_url_number = MiniProjects : (--mini_url_number);
        let spanElement = document.querySelector(`#mini .box > span:nth-child(${mini_url_number})`);
        mini_url = spanElement.querySelector("iframe").getAttribute("src");
        document.querySelector("#mini > .btns > a:nth-child(2)").setAttribute("href", mini_url);
    })

    mini_next.addEventListener('click', function () {
        mini_degrees -= (360 / MiniProjects);
        mini_box.style = `transform: perspective(1000px) rotateY(${mini_degrees}deg)`;
        mini_url_number = (mini_url_number === MiniProjects) ? mini_url_number = 1 : (++mini_url_number);
        let spanElement = document.querySelector(`#mini .box > span:nth-child(${mini_url_number})`);
        mini_url = spanElement.querySelector("iframe").getAttribute("src");
        document.querySelector("#mini > .btns > a:nth-child(2)").setAttribute("href", mini_url);
    })



    setInterval(() => {
        document.querySelector("#mini .btns > a:nth-child(3)").click();
        document.querySelector('#frontend .btns > a:nth-child(3)').click();
        document.querySelector('#full .btns > a:nth-child(3)').click();
    }, 10000)



    let FrontendProjects = document.querySelectorAll("#frontend .box > span").length;
    let front_prev = document.querySelector('#frontend .btns > a:nth-child(1)');
    let front_next = document.querySelector('#frontend .btns > a:nth-child(3)');
    let front_box = document.querySelector('#frontend .box');
    let front_url = document.querySelector("#frontend .box > span > iframe").getAttribute("src");
    let front_url_number = FrontendProjects;
    let front_degrees = 0;

    front_prev.addEventListener('click', function () {
        front_degrees += (360 / FrontendProjects);
        front_box.style = `transform: perspective(1000px) rotateY(${front_degrees}deg)`;
        front_url_number = (front_url_number === 1) ? front_url_number = FrontendProjects : (--front_url_number);
        let spanElement = document.querySelector(`#frontend .box > span:nth-child(${front_url_number})`);
        front_url = spanElement.querySelector("iframe").getAttribute("src");
        document.querySelector("#frontend > .btns > a:nth-child(2)").setAttribute("href", front_url);
    });

    front_next.addEventListener('click', function () {
        front_degrees -= (360 / FrontendProjects);
        front_box.style = `transform: perspective(1000px) rotateY(${front_degrees}deg)`;
        front_url_number = (front_url_number === FrontendProjects) ? front_url_number = 1 : (++front_url_number);
        let spanElement = document.querySelector(`#frontend .box > span:nth-child(${front_url_number})`);
        front_url = spanElement.querySelector("iframe").getAttribute("src");
        document.querySelector("#frontend > .btns > a:nth-child(2)").setAttribute("href", front_url);
    });



    let FullStackProjects = document.querySelectorAll("#full .box > span").length;
    let full_prev = document.querySelector('#full .btns > a:nth-child(1)');
    let full_next = document.querySelector('#full .btns > a:nth-child(3)');
    let full_box = document.querySelector('#full .box');
    let full_url = document.querySelector("#full .box > span > iframe").getAttribute("src");
    let full_url_number = FullStackProjects;
    let full_degrees = 0;

    full_prev.addEventListener('click', function () {
        full_degrees += (360 / FullStackProjects);
        full_box.style = `transform: perspective(1000px) rotateY(${full_degrees}deg)`;
        full_url_number = (full_url_number === 1) ? full_url_number = FullStackProjects : (--full_url_number);
        let spanElement = document.querySelector(`#full .box > span:nth-child(${full_url_number})`);
        full_url = spanElement.querySelector("iframe").getAttribute("src");
        document.querySelector("#full > .btns > a:nth-child(2)").setAttribute("href", full_url);
    });

    full_next.addEventListener('click', function () {
        full_degrees -= (360 / FullStackProjects);
        full_box.style = `transform: perspective(1000px) rotateY(${full_degrees}deg)`;
        full_url_number = (full_url_number === FullStackProjects) ? full_url_number = 1 : (++full_url_number);
        let spanElement = document.querySelector(`#full .box > span:nth-child(${full_url_number})`);
        full_url = spanElement.querySelector("iframe").getAttribute("src");
        document.querySelector("#full > .btns > a:nth-child(2)").setAttribute("href", full_url);
    });



    const target = document.querySelector(".skills-container > .box1");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                // console.log("Visibility:", entry.isIntersecting); // Debugging log
                if (entry.isIntersecting == true) {
                    console.log("red")
                    target.classList.add("show");
                } else {
                    console.log("non red")
                    target.classList.remove("show");
                }
            });
        },
        { threshold: 0.5 }
    );
    observer.observe(target);



});