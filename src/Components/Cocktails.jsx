import { useGSAP } from "@gsap/react";
import { cocktailLists } from "../Constants";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

export default function Cocktails() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const mobile = isMobile ? "#cocktails" : null;

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#cocktails",
          start: "top bottom",
          scrub: true,
          end: "bottom top",
        },
      })
      .from("#c-left-leaf", { x: -100, y: 100 })
      .to("#c-right-leaf", { x: 100, y: 100 });
  }, []);

  return (
    <section id="cocktails" className="noisy">
      <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="r-leaf"
        id="c-right-leaf"
      />

      <div className="list">
        <div className="popular">
          <h2>Most popular Cocktails</h2>

          <ul>
            {cocktailLists.map((d) => (
              <li key={d.name}>
                <div className="">
                  <h3>{d.name}</h3>
                  <p>{d.country | d.detail}</p>
                </div>
                <span>- {d.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
