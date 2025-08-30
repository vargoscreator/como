gsap.registerPlugin(ScrollTrigger);
const mainTl = gsap.timeline();
mainTl.to(".hero__title span span", { 
        opacity: 1,
        y: 0,
        rotateX: 0,
        transformPerspective: 1000,
        stagger: 0.075,
        duration: 0.6
});
gsap.utils.toArray(".hero__icons img").forEach((icon, i) => {
  gsap.fromTo(icon,
    {
      opacity: 0,
      scale: 0,
      yPercent: gsap.utils.random(10, 100)
    },
    {
      opacity: 1,
      scale: 1,
      yPercent: 0,
      duration: 1,
      delay: i * 0.15,
      ease: "back.out(1.7)",
      onComplete: () => {
        gsap.to(icon, {
          yPercent: gsap.utils.random(-10, 30),
          duration: gsap.utils.random(2, 4),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }
    }
  );
});


gsap.from(".hero__right", {
    opacity: 0,
    y: 100,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".hero__right",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});
gsap.fromTo([".hero__name", ".hero__btn", ".hero__bottom"],
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", stagger: 0.25, clearProps: "all" }
);
gsap.utils.toArray(".title").forEach(title => {
    gsap.from(title, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: title,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
});
gsap.utils.toArray(".hero__btn, .createpost__btn, .banner__btn, .reviews__btn").forEach(btn => {
  if (btn.classList.contains("hero__btn")) {
    gsap.from(btn, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });
  } else {
    gsap.from(btn, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: btn,
        start: "top 95%",
        toggleActions: "play none none reverse"
      }
    });
  }
});

gsap.utils.toArray(".tools__item").forEach((item) => {
  gsap.from(item, {
    opacity: 0,
    y: 50,
    scale: 0.95,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: item,
      start: "top 80%", 
      toggleActions: "play none none reverse"
    }
  });
});

gsap.utils.toArray(".whoit__item").forEach((item) => {
  gsap.from(item, {
    opacity: 0,
    y: 50,
    scale: 0.95,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: item,
      start: "top 70%",
      toggleActions: "play none none reverse"
    }
  });
});

gsap.from(".assistant__descr", {
    opacity: 0,
    y: 50,
    scale: 0.95,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".assistant__inner",
        start: "top 70%",
        toggleActions: "play none none reverse"
    }
});
gsap.from(".assistant__left", {
    opacity: 0,
    y: 50,
    scale: 0.95,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".assistant__content",
        start: "top 70%",
        toggleActions: "play none none reverse"
    }
});
gsap.utils.toArray(".assistant__icons img").forEach((icon, i) => {
  gsap.fromTo(icon,
    {
      opacity: 0,
      scale: 0,
      y: gsap.utils.random(10, 100)
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1,
      delay: i * 0.15,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".assistant__content",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
      },
      onComplete: () => {
        gsap.to(icon, {
          y: gsap.utils.random(-10, 30),
          duration: gsap.utils.random(2, 4),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }
    }
  );
});


gsap.from(".assistant__info-item", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    stagger: 0.25,
    scrollTrigger: {
        trigger: ".assistant__info",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }
});
gsap.from(".assistant__item", {
    opacity: 0,
    y: 50,
    scale: 0.95,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".assistant__block",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }
});
gsap.from(".pricing__descr", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".pricing__descr",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }
});
gsap.utils.toArray(".pricing__item").forEach((item) => {
  gsap.from(item, {
    opacity: 0,
    y: 50,
    scale: 0.95,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});
gsap.from(".includes__list li", {
    opacity: 0,
    y: 50,
    scale: 0.95,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".includes__list",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }
});
gsap.from(".texts__descr", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".texts__inner",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }
});
gsap.from(".texts__item", {
    opacity: 0,
    y: 50,
    scale: 0.95,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".texts__block",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }
});
const faqItems = document.querySelectorAll(".faq__item");
faqItems.forEach(item => {
    const title = item.querySelector(".faq__item-title");
    title.addEventListener("click", () => {
        if(item.classList.contains("active")) {
            item.classList.remove("active");
        } else {
            faqItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
        }
    });
});
gsap.utils.toArray(".faq__item").forEach(item => {
    gsap.from(item, {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 1.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: item,
            start: "top 95%",
            toggleActions: "play reverse play reverse"
        }
    });
});
gsap.utils.toArray(".reviews__item").forEach(item => {
    gsap.from(item, {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
        }
    });
});

gsap.to(".createpost__bg img", {
  y: "-20%",
  ease: "none",
  scrollTrigger: {
    trigger: ".createpost",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
