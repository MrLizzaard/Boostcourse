import Highway from "@dogstudio/highway";
import { gsap } from "gsap";

class Fade extends Highway.Transition {
  out({ from, done }) {
    const tl = gsap.timeline();

    tl.to(from, {
      duration: 0.3,
      opacity: 0,
      onComplete: function () {
        done();
      },
    });
  }

  in({ from, to, done }) {
    const tl = gsap.timeline();

    tl.fromTo(to, { left: "-100%", top: "50%" }, { duration: 0.2, left: "0%" }) //
      .fromTo(
        to,
        { height: "2vh" },
        {
          duration: 0.5,
          height: "90vh",
          top: "10%",
          onComplete: function () {
            from.remove();
            done();
          },
        }
      )
      .fromTo(to.children[0], { opacity: 0 }, { duration: 2, opacity: 1 });
  }
}

export default Fade;
