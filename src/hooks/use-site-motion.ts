import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EASE = "power3.out";

/** Wrap every word of an element in a masked span pair so it can slide up. */
function splitWords(el: HTMLElement) {
  if (el.dataset["split"] === "done") return [] as HTMLElement[];
  const source = el.textContent ?? "";
  el.textContent = "";
  const targets: HTMLElement[] = [];

  source.split(/(\s+)/).forEach((chunk) => {
    if (!chunk.trim()) {
      el.appendChild(document.createTextNode(" "));
      return;
    }
    const mask = document.createElement("span");
    mask.style.display = "inline-block";
    mask.style.overflow = "hidden";
    mask.style.verticalAlign = "top";
    mask.style.paddingBottom = "0.12em";

    const inner = document.createElement("span");
    inner.style.display = "inline-block";
    inner.style.willChange = "transform";
    inner.textContent = chunk;

    mask.appendChild(inner);
    el.appendChild(mask);
    targets.push(inner);
  });

  el.dataset["split"] = "done";
  return targets;
}

export function useSiteMotion() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      /* ---------- headline word reveals ---------- */
      document.querySelectorAll<HTMLElement>("[data-words]").forEach((el) => {
        const words = splitWords(el);
        if (!words.length) return;
        if (reduce) {
          gsap.set(words, { yPercent: 0, opacity: 1 });
          return;
        }
        const hero = el.dataset["words"] === "hero";
        gsap.set(words, { yPercent: 115, opacity: 0 });
        gsap.to(words, {
          yPercent: 0,
          opacity: 1,
          duration: 1.15,
          ease: EASE,
          stagger: 0.055,
          delay: hero ? 0.25 : 0,
          ...(hero
            ? {}
            : {
                scrollTrigger: { trigger: el, start: "top 85%", once: true },
              }),
        });
      });

      if (reduce) {
        gsap.set("[data-fade], [data-mask-reveal]", { opacity: 1, clearProps: "all" });
        return;
      }

      /* ---------- hero furniture ---------- */
      gsap.from("[data-hero-fade]", {
        opacity: 0,
        y: 34,
        duration: 1.1,
        ease: EASE,
        stagger: 0.12,
        delay: 0.7,
      });

      gsap.fromTo(
        "[data-hero-portrait]",
        { clipPath: "inset(100% 0% 0% 0%)", scale: 1.25 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1.8,
          ease: "expo.out",
          delay: 0.15,
        },
      );

      gsap.to("[data-hero-shift]", {
        yPercent: 18,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: { trigger: "#top", start: "top top", end: "bottom top", scrub: true },
      });

      /* ---------- generic fade-up batches ---------- */
      ScrollTrigger.batch("[data-fade]", {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { opacity: 0, y: 42 },
            { opacity: 1, y: 0, duration: 1, ease: EASE, stagger: 0.09, overwrite: true },
          ),
      });

      /* ---------- image mask reveals ---------- */
      document.querySelectorAll<HTMLElement>("[data-mask-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(0% 0% 100% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        );
      });

      /* ---------- parallax ---------- */
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const amount = Number(el.dataset["parallax"] ?? 12);
        gsap.fromTo(
          el,
          { yPercent: -amount },
          {
            yPercent: amount,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });

      /* ---------- pinned horizontal rail ---------- */
      const rail = document.querySelector<HTMLElement>("[data-rail]");
      const railTrack = document.querySelector<HTMLElement>("[data-rail-track]");
      if (rail && railTrack && window.innerWidth >= 1024) {
        const distance = () => railTrack.scrollWidth - window.innerWidth + 96;
        gsap.to(railTrack, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: rail,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      }

      /* ---------- counters ---------- */
      document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset["count"] ?? 0);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
          onUpdate: () => {
            el.textContent = Math.round(obj.v).toLocaleString("en-US");
          },
        });
      });

      /* ---------- ticker ---------- */
      document.querySelectorAll<HTMLElement>("[data-ticker]").forEach((track) => {
        const dir = track.dataset["ticker"] === "reverse" ? 1 : -1;
        gsap.to(track, {
          xPercent: 50 * dir,
          duration: 38,
          ease: "none",
          repeat: -1,
          modifiers: {
            xPercent: (value) => {
              const v = parseFloat(value) % 50;
              return `${dir === -1 ? v : v - 50}`;
            },
          },
        });
      });

      /* ---------- scroll progress ---------- */
      gsap.to("[data-progress]", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
      });
    });

    /* ---------- magnetic pointer buttons ---------- */
    const magnets = Array.from(document.querySelectorAll<HTMLElement>("[data-magnet]"));
    const detachers = magnets.map((el) => {
      const move = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        gsap.to(el, {
          x: (e.clientX - (r.left + r.width / 2)) * 0.28,
          y: (e.clientY - (r.top + r.height / 2)) * 0.35,
          duration: 0.6,
          ease: "power3.out",
        });
      };
      const reset = () => gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1,0.4)" });
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", reset);
      return () => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", reset);
      };
    });

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 400);

    return () => {
      window.clearTimeout(refresh);
      detachers.forEach((fn) => fn());
      ctx.revert();
    };
  }, []);
}
