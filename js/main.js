(function () {
  const D = window.DATA, $ = (id) => document.getElementById(id);
  const showError = (msg) => { const b = document.createElement("div"); b.className = "errbox"; b.textContent = msg; document.body.prepend(b); };
  if (!window.DATA) { showError("⚠ data.js n'a pas pu être chargé (virgule, guillemet ou accolade manquant ?). Détail : " + (window.__errs || []).join(" | ")); return; }
  const UI = {
    en: { skip: "Skip to content", hello: "Hello, I'm", welcome: "Welcome", engineering: "Engineering", mobility: "Mobility", engagement: "Civic engagement", engineeringT: "Engineering courses & projects", careerT: "Career development",
      activities: "Sport & interests", career: "Career", contact: "Contact", other: "FR", otherLabel: "Version française",
      engineeringSub: "Projects and skills from my engineering course.", mobilitySub: "Languages and international aspirations.",
      engagementSub: "Sustainability, community and civic involvement.", activitiesSub: "Sport and passions outside engineering.",
      careerSub: "Professional documents, goals and sources of inspiration.", contactSub: "Get in touch for an internship, a project or a simple chat.",
      skills: "Skills", projects: "Projects", experiences: "Stays abroad", mobGoal: "Mobility project", cvEn: "Download CV (English)",
      cvFr: "Download CV (French)", linkedin: "My LinkedIn profile", pastExp: "Professional experience", roleModels: "Role models",
      roleModelsSub: "Analysis of 3 inspiring profiles and 3 potential mobility projects.", mobProjects: "Potential mobility projects",
      aligned: "Aligned with", pitch: "Elevator pitch", pitchSub: "2–3 minutes in English: present, brief past, future.",
      result: "Result", learned: "What I learned", email: "Email", phone: "Phone", portrait: "Portrait of ", docs: "Documents", pPresent: "Present", pPast: "Brief past", pFuture: "Future", videoSoon: "Video coming soon", videoSoonSub: "My 2–3 minute elevator pitch will appear here.", report: "Internship report (PDF)", close: "Close", prev: "Previous", next: "Next" },
    fr: { skip: "Aller au contenu", hello: "Bonjour, je suis", welcome: "Accueil", engineering: "Ingénierie", mobility: "Mobilité", engagement: "Engagement citoyen", engineeringT: "Parcours & projets d'ingénieur", careerT: "Développement de carrière",
      activities: "Sport & centres d'intérêt", career: "Carrière", contact: "Contact", other: "EN", otherLabel: "English version",
      engineeringSub: "Projets et compétences de mon cursus ingénieur.", mobilitySub: "Langues et aspirations à l'international.",
      engagementSub: "Développement durable, vie associative et citoyenne.", activitiesSub: "Sport et passions en dehors de l'ingénierie.",
      careerSub: "Documents professionnels, objectifs et sources d'inspiration.", contactSub: "Écris-moi pour un stage, un projet ou un simple échange.",
      skills: "Compétences", projects: "Projets", experiences: "Séjours à l'étranger", mobGoal: "Projet de mobilité", cvEn: "Télécharger le CV (anglais)",
      cvFr: "Télécharger le CV (français)", linkedin: "Mon profil LinkedIn", pastExp: "Expériences professionnelles", roleModels: "Modèles inspirants",
      roleModelsSub: "Analyse de 3 profils inspirants et de 3 projets de mobilité potentiels.", mobProjects: "Projets de mobilité potentiels",
      aligned: "Aligné avec", pitch: "Elevator pitch", pitchSub: "2–3 minutes en anglais : présent, passé très bref, futur.",
      result: "Résultat", learned: "Ce que j'ai appris", email: "E-mail", phone: "Téléphone", portrait: "Portrait de ", docs: "Documents", pPresent: "Présent", pPast: "Passé (bref)", pFuture: "Futur", videoSoon: "Vidéo bientôt disponible", videoSoonSub: "Mon elevator pitch de 2 à 3 minutes apparaîtra ici.", report: "Rapport de stage (PDF)", close: "Fermer", prev: "Précédente", next: "Suivante" }
  };
  let lang = "en";
  try { lang = localStorage.getItem("lang") || (navigator.language || "en").slice(0, 2); } catch (e) { lang = (navigator.language || "en").slice(0, 2); }
  if (lang !== "fr") lang = "en";

  const t = (v) => v && typeof v === "object" && !Array.isArray(v) ? (v[lang] ?? v.en ?? "") : (v ?? "");
  const u = (k) => UI[lang][k];
  const el = (tag, attrs = {}, kids = []) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) if (v !== "" && v != null) n.setAttribute(k, v);
    [].concat(kids).forEach((c) => c != null && c !== "" && n.append(c));
    return n;
  };
  const a = (href, text, cls) => !href ? null : el("a", /^(mailto|tel):/.test(href) ? { href, class: cls } : { href, class: cls, target: "_blank", rel: "noopener" }, text);
  const tags = (arr) => (arr && arr.length) ? el("ul", { class: "tags" }, arr.map((x) => el("li", {}, t(x)))) : null;
  const list = (arr) => (arr && arr.length) ? el("ul", { class: "bullets" }, arr.map((x) => el("li", {}, t(x)))) : null;
  const paras = (v) => v ? [].concat(v).map((x) => el("p", {}, t(x))) : [];
  const head = (k) => [el("h2", { class: "title" }, u(k + "T") || u(k)), el("p", { class: "sub" }, u(k + "Sub"))];
  const sub = (txt) => el("h3", { class: "h3" }, txt);
  const grid = (cls, kids) => el("div", { class: cls + " tg" }, kids);
  const card = (kids, cls = "card") => el("article", { class: cls }, kids);
  const item = (x) => el("article", { class: "item" }, [el("h4", {}, t(x.title)), ...paras(x.text)]);
  const body = (id, kids) => $(id).replaceChildren(...kids.flat().filter(Boolean));
  const embed = (url) => { const m = String(url || "").match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/); return m ? "https://www.youtube.com/embed/" + m[1] : url; };
  const gallery = (list) => (list && list.length) ? el("div", { class: "gallery" }, list.map((ph) => {
    const o = typeof ph === "string" ? { src: ph } : ph, cap = t(o.caption || "");
    const img = el("img", { src: o.src, alt: cap, loading: "lazy" });
    img.onerror = () => btn.remove();
    const btn = el("button", { type: "button", class: "thumb", "data-cap": cap, "aria-label": cap || "Photo" }, [img, cap ? el("span", { class: "cap" }, cap) : null]);
    return btn;
  })) : null;
  const actions = (x) => {
    const items = [];
    if (x.report) {
      const r = a(x.report, u("report"), "btn solid"); items.push(r);
      if (typeof fetch === "function" && !/^https?:/.test(x.report)) fetch(x.report, { method: "HEAD" }).then((res) => { if (res.status === 404) r.remove(); }).catch(() => {});
    }
    (x.links || []).forEach((l) => items.push(a(l.href, t(l.label), "btn")));
    return items.length ? el("p", { class: "actions" }, items) : null;
  };
  const projMedia = (x) => {
    const tile = () => el("div", { class: "tilecap" }, [el("span", {}, t(x.period)), el("span", {}, t(x.type))]);
    if (!x.image) return tile();
    const img = el("img", { src: x.image, alt: t(x.title), class: "shot", loading: "lazy" });
    img.onerror = () => img.replaceWith(tile());   // si l'image est introuvable, on garde la tuile colorée
    return img;
  };
  const initials = (s) => s.replace(/[\[\]]/g, "").split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

  function render() {
    try { renderInner(); } catch (e) { showError("⚠ Erreur dans le site : " + e.message + " " + (window.__errs || []).join(" | ")); }
  }
  function renderInner() {
    requestAnimationFrame(reveal);
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((n) => (n.textContent = u(n.dataset.i18n)));
    const L = $("langbtn"); L.textContent = u("other"); L.setAttribute("aria-label", u("otherLabel"));
    const p = D.profile, c = D.career, e = D.engineering, m = D.mobility, k = D.contact;
    document.title = p.name + " – Portfolio";
    $("brand").textContent = p.name; $("hello").textContent = u("hello"); $("pitch").textContent = t(p.pitch);
    const [first, ...rest] = p.name.split(" ");
    $("name").replaceChildren(el("span", {}, first), el("span", {}, rest.join(" ")));
    $("highlights").replaceChildren(...p.highlights.map((h) => el("li", {}, t(h))));
    $("links").replaceChildren(a(c.cv[lang], u(lang === "fr" ? "cvFr" : "cvEn"), "btn solid"), a(p.linkedin, "LinkedIn", "btn");
    const img = el("img", { src: p.photo, alt: u("portrait") + p.name, class: "photo" });
    img.onerror = () => $("photo-wrap").replaceChildren(el("div", { class: "photo avatar", "aria-hidden": "true" }, initials(p.name)));
    $("photo-wrap").replaceChildren(img);
    $("foot").textContent = "© " + new Date().getFullYear() + " " + p.name;

    body("engineering-body", [head("engineering"), sub(u("skills")),
      grid("grid3", e.skills.map((s) => card([el("h4", {}, t(s.group)), tags(s.items)]))), sub(u("projects")),
      grid("stack", e.projects.map((x) => card([el("div", { class: "proj" }, [
        projMedia(x),
        el("div", { class: "pad" }, [el("p", { class: "meta" }, [t(x.type), t(x.period)].filter(Boolean).join(" · ")),
          el("h4", {}, t(x.title)), ...paras(x.text),
          x.result ? el("p", {}, [el("strong", {}, u("result") + ": "), t(x.result)]) : null,
          x.learned ? el("p", {}, [el("strong", {}, u("learned") + ": "), t(x.learned)]) : null,
          tags(x.tools), a(x.link, t(x.linkLabel), "btn")])])], "card projcard")))]);

    body("mobility-body", [head("mobility"),
      grid("langs", m.languages.map((l) => el("span", { class: "chip" }, [el("strong", {}, t(l.name)), " " + t(l.level)]))),
      sub(u("experiences")), ...m.experiences.map((x) => card([el("h4", {}, t(x.title)), el("p", { class: "meta" }, t(x.period)), ...paras(x.text), gallery(x.photos)], "card xpcard"))]);

    body("engagement-body", [head("engagement"), grid("grid2", D.engagement.map(item))]);
    body("activities-body", [head("activities"), ...D.activities.map((g) => [sub(t(g.category)), grid("grid2", g.items.map(item))])]);

    // Attention : el() ignore les attributs vides (""), donc on écrit controls="controls", etc.
    let media;
    if (c.videoFile) {
      const vid = el("video", { src: c.videoFile, controls: "controls", preload: "metadata", playsinline: "playsinline" });
      media = el("div", { class: "video" }, vid);
      // Diagnostic : si la vidéo échoue, on affiche la vraie cause sous le lecteur
      vid.addEventListener("error", () => {
        const note = el("p", { class: "video-error" }, "Vidéo non chargée : " + c.videoFile);
        media.after(note);
        fetch(c.videoFile, { method: "HEAD" }).then((r) => {
          note.textContent = r.ok
            ? "Le fichier existe (" + c.videoFile + ") mais le navigateur ne peut pas le lire : format/codec à convertir en H.264 + AAC."
            : "Fichier introuvable (erreur " + r.status + ") : " + c.videoFile;
        }).catch(() => {});
      }, { once: true });
    }
    else if (c.video && !c.video.includes("[")) media = el("div", { class: "video" }, el("iframe", { src: embed(c.video), title: "Elevator pitch", allowfullscreen: "allowfullscreen", loading: "lazy" }));
    else media = el("div", { class: "video vidph" }, [el("strong", {}, u("videoSoon")), el("span", {}, u("videoSoonSub"))]);

    body("career-body", [head("career"),
      sub(u("docs")),
      el("p", { class: "cta" }, [a(c.cv.en, u("cvEn"), "btn solid"), a(c.cv.fr, u("cvFr"), "btn sky"), a(p.linkedin, u("linkedin"), "btn")]),
      sub(u("pitch")), media,

      // 1. Passé : expériences professionnelles
      sub(u("pastExp")),
      ...c.experiences.map((x) => card([el("div", { class: "xp" }, [
        x.logo ? el("img", { src: x.logo, alt: "", class: "logo-img" }) : el("span", { class: "logo-img ph" }, initials(x.org || t(x.title))),
        el("div", {}, [el("div", { class: "xp-top" }, [el("h4", {}, t(x.title)), el("span", { class: "meta" }, t(x.period))]),
          el("p", { class: "org" }, t(x.org)), ...paras(x.text), list(x.bullets), tags(x.tools), actions(x), gallery(x.photos)])])], "card xpcard")),

      // 2. Inspirations : modèles professionnels
      sub(u("roleModels")), el("p", { class: "sub tight" }, u("roleModelsSub")),
      grid("grid3", c.roleModels.map((r) => card([
        r.photo ? el("img", { src: r.photo, alt: r.name, class: "avatar-sm" }) : el("span", { class: "avatar-sm ph" }, initials(r.name)),
        el("h4", { class: "center" }, r.name), el("p", { class: "meta center" }, t(r.job)), list(r.points)]))),

      // 3. Futur : phrase d'intro + projets de mobilité
      sub(u("mobProjects")),
      c.mobilityIntro ? grid("prose", paras(c.mobilityIntro)) : null,
      grid("grid3", c.mobilityProjects.map((x) => card([el("h4", {}, t(x.title)), el("p", { class: "meta" }, t(x.place)),
        x.roleModel ? el("p", {}, [el("strong", {}, u("aligned") + ": "), x.roleModel]) : null, ...paras(x.text)])))]);

    body("contact-body", [head("contact"), grid("grid3", [
      card([el("h4", {}, u("email")), el("p", {}, a("mailto:" + k.email, k.email))], "item"),
      k.phone ? card([el("h4", {}, u("phone")), el("p", {}, a("tel:" + k.phone.replace(/\s/g, ""), k.phone))], "item") : null,
      card([el("h4", {}, "LinkedIn"), el("p", {}, a(k.linkedin, u("linkedin")))], "item")])]);
  }

  $("langbtn").addEventListener("click", () => { lang = lang === "fr" ? "en" : "fr"; try { localStorage.setItem("lang", lang); } catch (e) {} render(); });
  render();
  const links = [...document.querySelectorAll("#nav a")];
  const io = new IntersectionObserver((es) => es.forEach((s) => s.isIntersecting &&
    links.forEach((l) => l.setAttribute("aria-current", String(l.hash === "#" + s.target.id)))), { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll("main section").forEach((s) => io.observe(s));

  /* ---- animations ---- */
  function reveal() {
    if (!("IntersectionObserver" in window)) return;
    const rio = reveal.io || (reveal.io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); rio.unobserve(e.target); }
    }), { threshold: 0.06, rootMargin: "0px 0px -6% 0px" }));
    document.querySelectorAll(".wrap > *").forEach((n) => { if (!n.classList.contains("reveal")) { n.classList.add("reveal"); rio.observe(n); } });
  }
  document.addEventListener("pointerdown", (e) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const host = e.target.closest(".btn,.pill,#nav a,.tile,.card,.item,.chip,.logo");
    if (!host) return;
    const r = host.getBoundingClientRect(), size = Math.max(r.width, r.height) * 2.2;
    const dot = document.createElement("span");
    dot.className = "ripple";
    dot.style.cssText = "left:" + (e.clientX - r.left) + "px;top:" + (e.clientY - r.top) + "px;width:" + size + "px;height:" + size + "px";
    host.append(dot);
    dot.addEventListener("animationend", () => dot.remove());
  });
  document.querySelectorAll("#nav a, .logo").forEach((l) => l.addEventListener("click", () => {
    setTimeout(() => {
      const ti = document.querySelector(l.hash + " .title");
      if (ti) { ti.classList.remove("pulse"); void ti.offsetWidth; ti.classList.add("pulse"); }
    }, 450);
  }));

  /* ---- photo lightbox ---- */
  const lb = el("div", { class: "lb" }, [
    el("button", { type: "button", class: "lb-btn lb-x" }, "×"),
    el("button", { type: "button", class: "lb-btn lb-prev" }, "‹"),
    el("figure", {}, [el("img", { alt: "" }), el("figcaption", {})]),
    el("button", { type: "button", class: "lb-btn lb-next" }, "›")]);
  lb.hidden = true; document.body.append(lb);
  let shots = [], cur = 0;
  const show = (i) => {
    cur = (i + shots.length) % shots.length;
    const im = lb.querySelector("img"); im.src = shots[cur].src; im.alt = shots[cur].cap;
    lb.querySelector("figcaption").textContent = shots[cur].cap;
    lb.querySelector(".lb-x").setAttribute("aria-label", u("close"));
    lb.querySelector(".lb-prev").setAttribute("aria-label", u("prev"));
    lb.querySelector(".lb-next").setAttribute("aria-label", u("next"));
    lb.classList.toggle("single", shots.length < 2);
  };
  const closeLb = () => { lb.hidden = true; document.body.style.overflow = ""; };
  document.addEventListener("click", (e) => {
    const th = e.target.closest(".thumb");
    if (th) {
      const all = [...th.parentElement.querySelectorAll(".thumb")];
      shots = all.map((b) => ({ src: b.querySelector("img").src, cap: b.dataset.cap }));
      lb.hidden = false; document.body.style.overflow = "hidden"; show(all.indexOf(th)); return;
    }
    if (lb.hidden) return;
    if (e.target.closest(".lb-prev")) show(cur - 1);
    else if (e.target.closest(".lb-next")) show(cur + 1);
    else if (!e.target.closest("figure") || e.target.closest(".lb-x")) closeLb();
  });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLb(); else if (e.key === "ArrowLeft") show(cur - 1); else if (e.key === "ArrowRight") show(cur + 1);
  });
})();
