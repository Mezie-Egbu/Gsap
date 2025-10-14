import { useGSAP } from "@gsap/react";
import { navLinks } from "../Constants/index";
import gsap from "gsap";

export default function Navbar() {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top 10",
        toggleActions: "play none reverse",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#0000000050",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <nav>
      <div className="md:flex justify-around md:m-auto">
        <a
          href="#home"
          className="flex justify-center font-bold items-center gap-2"
        >
          <img src="/images/logo.png" alt="logo" />
          <p className="text-2xl">Velvet Pour</p>
        </a>

        <ul className="flex 1 md:justify-around md:gap-10 font-bold">
          {navLinks.map((link) => (
            <li className="m-auto" key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
