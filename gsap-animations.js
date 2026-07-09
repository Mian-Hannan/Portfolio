/*
  Scroll-reveal animations powered by GSAP + ScrollTrigger.
  Every element with class="scroll-animation" is animated in based on
  its data-animation attribute:

    fade_from_bottom  -> slides up while fading in
    fade_from_top     -> slides down while fading in
    fade_from_left    -> slides in from the left while fading in
    fade_from_right   -> slides in from the right while fading in
    rotate_up         -> fades in with a slight rotation + lift
                         (used for the round "scroll down" badge)

  Nothing here touches existing markup/classes — it only reads the
  data-animation attribute already present on each element.
*/

(function () {
    if (typeof gsap === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    document.addEventListener("DOMContentLoaded", function () {
        var animatedEls = document.querySelectorAll(".scroll-animation");

        animatedEls.forEach(function (el) {
            var type = el.getAttribute("data-animation") || "fade_from_bottom";
            var fromVars = { opacity: 0, duration: 0.9, ease: "power2.out" };

            switch (type) {
                case "fade_from_left":
                    fromVars.x = -60;
                    break;
                case "fade_from_right":
                    fromVars.x = 60;
                    break;
                case "fade_from_top":
                    fromVars.y = -50;
                    break;
                case "rotate_up":
                    fromVars.y = 40;
                    fromVars.rotation = -12;
                    fromVars.transformOrigin = "center center";
                    break;
                case "fade_from_bottom":
                default:
                    fromVars.y = 50;
                    break;
            }

            gsap.from(el, {
                opacity: fromVars.opacity,
                x: fromVars.x || 0,
                y: fromVars.y || 0,
                rotation: fromVars.rotation || 0,
                duration: fromVars.duration,
                ease: fromVars.ease,
                scrollTrigger: {
                    trigger: el,
                    start: "top 88%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    });
})();
