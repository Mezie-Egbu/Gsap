import { useGSAP } from "@gsap/react";
import { cocktailLists } from "../Constants";
import gsap from "gsap";

export default function Cocktails() {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#cocktails",
          start: "top top",
          scrub: true,
          end: "bottom top",
        },
      })
      .to("#c-leaft-leaf", { y: -300 }, 0)
      .to("#c-right-leaf", { y: -300 }, 0);
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
