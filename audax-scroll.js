document.addEventListener("DOMContentLoaded", function () {
  //very start
  /* map */
  const paths = document.querySelectorAll("path");
  const tooltip = document.querySelector(".tooltip");

  paths.forEach((path) => {
    path.addEventListener("mousemove", (e) => {
      tooltip.style.display = "block";
      const id = e.target.getAttribute("id");
      tooltip.innerHTML = id;
      tooltip.style.left = `${e.clientX + 15}px`;
      tooltip.style.top = `${e.clientY + 15}px`;
    });

    path.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  });

  //gsap
  // Set animations based on Webflow's screen breakpoints (Desktop | Tablet | Mobile Landscape | Mobile Portrait)
  ScrollTrigger.matchMedia({
    // Desktop
    "(min-width: 992px)": function () {
      // Set animations for screens on this breakpoint range.
      // Animation example for this breakpoint
      //Desktop  END
    },

    // Tablet
    "(min-width: 991px)": function () {
      // Set animations for screens on this breakpoint range.
      //home - map-outro
      gsap.to(".map_embed-wrapper", {
        y: "20%",
        autoAlpha: 0,
        ease: Power2.easeOut,
        scrollTrigger: {
          trigger: '[gsap-project="cta"]',
          start: "0% 50%",
          end: "100% 10%",
          scrub: true,
        },
      });

      //2023 august
      //new sGPT
      const startElement = document.querySelector("[gsap-project='start']");
      const initialX = startElement.getAttribute("map-from-x") || "0vw";
      const initialY = startElement.getAttribute("map-from-y") || "0vw";
      const initialScale =
        parseFloat(startElement.getAttribute("map-from-scale")) || 1;

      // Apply the initial values to the .map_layer
      gsap.set(".map_layer", {
        x: initialX,
        y: initialY,
        scale: initialScale,
      });

      let lastX = initialX;
      let lastY = initialY;
      let lastScale = initialScale;

      const createAnimation = (triggerElement) => {
        const toX = triggerElement.getAttribute("map-to-x");
        const toY = triggerElement.getAttribute("map-to-y");
        const toScale = parseFloat(triggerElement.getAttribute("map-to-scale"));

        const uniqueValue = triggerElement.getAttribute("gsap-project");
        const targetElement = document.querySelector(
          `[pin-target='${uniqueValue}']`
        );

        gsap.fromTo(
          ".map_layer",
          { x: lastX, y: lastY, scale: lastScale },
          {
            x: toX,
            y: toY,
            scale: toScale,
            scrollTrigger: {
              trigger: triggerElement,
              start: "10% 50%",
              end: "50% 40%",
              ease: Power2.easeOut,
              duration: 0.5,
              toggleActions: "play none none reverse",
              onEnter: () => {
                if (targetElement)
                  targetElement.classList.add("pulse-animation");
              }, // Add class when section enters
              onLeaveBack: () => {
                if (targetElement)
                  targetElement.classList.remove("pulse-animation");
              }, // Remove class when section leaves
            },
          }
        );

        // Save the last "to" values for the next animation
        lastX = toX;
        lastY = toY;
        lastScale = toScale;
      };

      // Get all the gsap-project elements except the 'start' one
      const projectElements = Array.from(
        document.querySelectorAll("[gsap-project]")
      ).filter((el) => el.getAttribute("gsap-project") !== "start");

      // Call createAnimation for each project
      projectElements.forEach(createAnimation);

      //gpt end

      //images intro
      gsap.to(".image_cover", {
        //autoAlpha: 0,
        y: "-100%",
        stagger: { each: 0.1 },
        scrollTrigger: {
          trigger: "[gsap-is='img-intro']",
          start: "10% 80%",
          ease: Power1.Out,
          duration: 0.2,
          //toggleActions: 'play none reverse none',
          toggleActions: "play none none reverse",
        },
      });
      // navigation animation
      $(".is-projekte .navbar_menu-tabs-toolbar").on("click", function () {
        gsap.from(".is-projekte .navbar_link-label", {
          autoAlpha: 0,
          x: "0.5rem",
          //y: "100%",
          stagger: 0.1,
          ease: Power2.easeOut,
        });
      });
      $(".is-kontakt .navbar_menu-tabs-toolbar").on("click", function () {
        gsap.from(".is-kontakt .navbar_link-label", {
          autoAlpha: 0,
          x: "1rem",
          //y: "100%",
          delay: 0.1,
          stagger: 0.1,
          ease: Power2.easeOut,
        });
      });

      //navigation kontakt
      // Play tl when scrolled into view (60% from top of screen)

      $(".is-kontakt .navbar_menu-tabs-toolbar").on("click", function () {
        gsap.from(".is-kontakt .word", {
          opacity: 0,
          delay: 0.3,
          x: "1em",
          duration: 0.6,
          ease: "power2.out",
          stagger: { amount: 0.2 },
        });
      });

      //Tablet END
    },

    // Mobile landscape
    "(max-width: 767px)": function () {
      // Set animations for screens on this breakpoint range.
      //landscape END
    },

    // Mobile portrait
    "(max-width: 479px)": function () {
      // Set animations for screens on this breakpoint range.
      //mobile End
    },

    // All breakpoints
    all: function () {
      // Animations created here are global and will run no matter the size of the canvas.
      //All end
    },
  });
  //map pins
  // Get all elements with the pin-trigger attribute
  const triggers = Array.from(document.querySelectorAll("[pin-trigger]"));

  triggers.forEach((triggerElement) => {
    // Get the unique value from pin-trigger
    const uniqueValue = triggerElement.getAttribute("pin-trigger");

    // Find the corresponding pin-target and pin-position elements using the unique value
    const targetElement = document.querySelector(
      `[pin-target='${uniqueValue}']`
    );
    const positionElement = document.querySelector(
      `[pin-position='${uniqueValue}']`
    );

    // Create an observer for each trigger
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (targetElement) targetElement.classList.add("pulse-animation");
            if (positionElement) positionElement.classList.add("is-active");
          } else {
            if (targetElement)
              targetElement.classList.remove("pulse-animation");
            if (positionElement) positionElement.classList.remove("is-active");
          }
        });
      },
      {
        // Configure the observer to trigger when 10% of the pin-trigger element is in the middle of the viewport
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    observer.observe(triggerElement);
  });

  //very end
});
