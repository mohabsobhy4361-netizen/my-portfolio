document.documentElement.classList.add("js");

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "✕" : "☰";
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
    });
  });
}

const yearElement = document.getElementById("current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

const experiences = {
  swimming: {
    category: "SPORTS & COACHING",
    title: "Swimming <span>& Coaching.</span>",
    intro:
      "Swimming instructor and coach with 6+ years of experience supporting children, adults, teams and swimmers with different learning needs.",
    overview:
      "My swimming career combines practical poolside coaching, technical skill development, swimmer confidence and water safety. I have worked across clubs, academies, schools and hotels in Egypt.",
    highlights: [
      "6+ years of swimming instruction and coaching experience.",
      "More than 7,200 training and teaching hours.",
      "Experience across more than 25 academies and clubs in Egypt.",
      "Swim America experience, including more than 1,400 hours.",
      "Experience with children, adults, teams and swimmers with special learning needs.",
      "Recognized as Coach of the Year at Club S Alegria.",
    ],
    roles: [
      "Club S Alegria and Club S SODIC — swimming coaching experience since April 2024.",
      "LNH International School, Hadayek El Ahram — PE Teacher, September 2023 to March 2024.",
      "Sport City, Zamalek and Dolphin academies — coaching experience during 2021–2023.",
      "Blue Sharks — part-time coaching and instruction during 2023–2025.",
      "Adult Academy at PSE British School, Sheikh Zayed, and Smart Vision — January 2025 onward.",
      "Additional experience across clubs, hotels and swimming facilities.",
    ],
    skills: [
      "Swimming Instruction",
      "Technical Skill Development",
      "Training Plans",
      "Water Safety",
      "Children & Adults",
      "Team Coaching",
      "Progress Assessment",
      "Swimmer Confidence",
    ],
    note: "Some roles were part-time or overlapped. Exact dates and job titles should be confirmed before submitting a formal CV.",
  },

  tourism: {
    category: "TOURISM & OPERATIONS",
    title: "Tourism <span>& Operations.</span>",
    intro:
      "Experience supporting trips, outdoor activities and organized events for international schools and companies through Wander Factory.",
    overview:
      "My tourism and operations experience includes coordinating activities, supporting trip execution and helping create organized experiences for school and company groups.",
    highlights: [
      "Part-time experience with Wander Factory during 2023–2026.",
      "Trip and activity operations for international schools and companies.",
      "Experience with beach activities and water-safety considerations.",
      "Coordination and communication with different stakeholders.",
      "Support for planning and delivering organized group activities.",
    ],
    roles: [
      "Wander Factory — Part-time operations and business development, 2023–2026.",
      "School and company activity support.",
      "Beach activity coordination and water-safety support.",
    ],
    skills: [
      "Trip Operations",
      "Activity Coordination",
      "Customer Communication",
      "School Activities",
      "Company Events",
      "Water Safety",
      "Planning",
      "Problem Solving",
    ],
    note: "The listed dates reflect the latest information provided and should be verified before formal submission.",
  },

  "business-development": {
    category: "BUSINESS & PARTNERSHIPS",
    title: "Business <span>Development.</span>",
    intro:
      "Experience researching potential clients, contacting schools and companies, presenting services and supporting partnership development.",
    overview:
      "Through work associated with Wander Factory and my own academy, I have developed practical experience in outreach, service communication and relationship building.",
    highlights: [
      "Researching school and company contact data.",
      "Making outreach calls and following up with potential clients.",
      "Arranging meetings and presenting services.",
      "Supporting discussions and contract opportunities.",
      "Communicating service value to prospective partners.",
    ],
    roles: [
      "Wander Factory — school and company research, outreach, meetings and contract support.",
      "Premium Academy — supporting the positioning and promotion of private swimming programs.",
    ],
    skills: [
      "Lead Research",
      "Cold Outreach",
      "Client Communication",
      "Meeting Coordination",
      "Service Presentation",
      "Relationship Building",
      "Follow-up",
      "Google Sheets",
    ],
    note: "This page describes responsibilities shared in the supplied background, not independently verified sales figures.",
  },

  "social-media": {
    category: "DIGITAL CONTENT",
    title: "Social Media <span>Management.</span>",
    intro:
      "Social media content planning, creative campaign support, captions and account-management work for sports and swimming brands.",
    overview:
      "My content experience connects sports knowledge with creative communication. I have worked on content for Premium Academy, Titan Swimming Academy and Sport City Club.",
    highlights: [
      "Planning and writing social media content.",
      "Creating captions in Arabic with relevant English terminology.",
      "Supporting campaigns and promotional content for swimming programs.",
      "Developing ideas for parent testimonials and audience engagement.",
      "Coordinating visual content with brand identity and target audiences.",
    ],
    roles: [
      "Premium Swimming Academy — brand content and promotional communication.",
      "Titan Swimming Academy — swimming-related social content.",
      "Sport City Club — sports and club content support.",
    ],
    skills: [
      "Content Planning",
      "Caption Writing",
      "Social Media Management",
      "Campaign Ideas",
      "Creative Briefs",
      "Audience Communication",
      "Brand Consistency",
      "Video Content",
    ],
    note: "Specific account-management dates, platforms and campaign performance figures can be added when confirmed.",
  },

  photography: {
    category: "VISUAL STORYTELLING",
    title: "Photography <span>& Videography.</span>",
    intro:
      "Visual content creation for sports, activities and digital media, combining an understanding of people, movement and storytelling.",
    overview:
      "My experience across swimming and sports provides a practical foundation for capturing action, training moments and activity-based content.",
    highlights: [
      "Photography and video shooting for visual content.",
      "Understanding of sports movement and action moments.",
      "Creating footage that can be used for social media and promotional content.",
      "Working with creative editing tools to prepare content for publication.",
    ],
    roles: [
      "Visual content creation connected to swimming and sports activities.",
      "Content support for swimming brands and social media projects.",
    ],
    skills: [
      "Photography",
      "Video Shooting",
      "Action Capture",
      "Visual Storytelling",
      "Framing",
      "Content Planning",
      "Premiere Pro",
      "CapCut",
    ],
    note: "Add selected photographs, video links and a portfolio gallery here before sending this page to employers.",
  },

  underwater: {
    category: "SPECIALIZED VIDEO",
    title: "Underwater <span>Videography.</span>",
    intro:
      "Underwater shooting informed by practical swimming experience and familiarity with pool environments.",
    overview:
      "My swimming background gives me useful awareness of water movement, swimmer technique and poolside safety when planning underwater visual content.",
    highlights: [
      "Underwater shooting as a specialized visual skill.",
      "Familiarity with swimming environments and swimmer movement.",
      "Understanding of how technique and body position appear in the water.",
      "Creative use of underwater visuals in swimming-related content.",
    ],
    roles: ["Underwater visual content connected to swimming and sports."],
    skills: [
      "Underwater Shooting",
      "Swimming Technique Awareness",
      "Visual Storytelling",
      "Sports Content",
      "Video Editing",
      "Water Awareness",
    ],
    note: "Camera models, underwater housing, technical equipment and published samples have not been specified yet.",
  },

  "graphic-design": {
    category: "VISUAL DESIGN",
    title: "Graphic <span>Design.</span>",
    intro:
      "Digital design and promotional visuals using creative tools to support social media content and brand communication.",
    overview:
      "My graphic-design work complements social media and video production, helping turn campaign ideas into clear visual assets.",
    highlights: [
      "Creating digital and promotional visual content.",
      "Supporting brand communication for sports and swimming projects.",
      "Preparing graphics for social media use.",
      "Using design tools alongside photography and video workflows.",
    ],
    roles: [
      "Design and content support for Premium Academy, Titan Swimming Academy and related sports projects.",
    ],
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Canva",
      "Visual Layout",
      "Typography",
      "Social Media Graphics",
      "Brand Consistency",
    ],
    note: "The portfolio should include selected design samples and project links. Only include tools you can confidently use in a practical test.",
  },

  "video-editing": {
    category: "POST-PRODUCTION",
    title: "Junior Video <span>Editor.</span>",
    intro:
      "Junior video editor focused on social media content, pacing, sound effects and clear visual storytelling.",
    overview:
      "I combine editing practice with experience in sports content and digital communication. I am developing my skills through practical projects and creative workflows.",
    highlights: [
      "Editing videos for digital and social media formats.",
      "Using cuts, pacing and sound effects to support the action.",
      "Working with footage and preparing content for publication.",
      "Building practical editing experience and continuing to develop professionally.",
    ],
    roles: [
      "Video editing and content production for personal and sports-related projects.",
      "Practical creative projects using Premiere Pro and CapCut.",
    ],
    skills: [
      "Adobe Premiere Pro",
      "CapCut",
      "Video Editing",
      "Sound Effects",
      "Pacing",
      "Social Media Formats",
      "Photoshop",
      "Creative Storytelling",
    ],
    note: "This is a junior-level profile. Add showreel links, before-and-after edits and examples of published work when available.",
  },

  academy: {
    category: "ENTREPRENEURSHIP",
    title: "Premium <span>Swimming Academy.</span>",
    intro:
      "Founder and program director of Premium Swimming Academy, focused on personalized swimming instruction and a premium learning experience.",
    overview:
      "Premium Academy is built around private swimming lessons, personalized learning plans and consistent follow-up, with an emphasis on confidence, discipline, responsibility and technical progress.",
    highlights: [
      "Founded and manage Premium Swimming Academy.",
      "Program Director Captain Mohab El Gendy.",
      "Focus on private swimming instruction and personalized learning.",
      "Progress assessments and customized plans.",
      "A learning experience built around quality, confidence and swimmer development.",
    ],
    roles: [
      "Founder / Owner — Premium Swimming Academy.",
      "Program Director — program planning and learning experience.",
      "Content and brand development for academy promotion.",
    ],
    skills: [
      "Entrepreneurship",
      "Program Planning",
      "Swimming Education",
      "Customer Communication",
      "Brand Positioning",
      "Content Planning",
      "Quality Follow-up",
      "Team Coordination",
    ],
    note: "Academy services and operating details may change. Confirm current locations, schedules and offers before publishing them.",
  },

  programming: {
    category: "TECHNOLOGY & LEARNING",
    title: "Programming <span>& Projects.</span>",
    intro:
      "Beginner programmer building practical projects while learning Python, Java, web fundamentals and Git/GitHub workflows.",
    overview:
      "I learn programming by building small projects, understanding the logic step by step and improving the code through practice.",
    highlights: [
      "Learning Python and building GUI projects.",
      "Practicing Java fundamentals and object-oriented programming.",
      "Learning HTML, CSS and JavaScript fundamentals.",
      "Using Git and GitHub to organize and publish projects.",
      "Working with project ideas related to calculators, games and reminders.",
    ],
    roles: [
      "Independent programming learner and personal-project developer.",
      "Programming diploma coursework through AlMadrasa website.",
    ],
    skills: [
      "Python",
      "Java",
      "HTML",
      "CSS",
      "JavaScript Fundamentals",
      "Git",
      "GitHub",
      "Tkinter",
      "Problem Solving",
    ],
    note: "Programming is a learning and project-development area. It should not be presented as professional software-engineering employment.",
  },

  cv: {
    category: "PROFESSIONAL PROFILE",
    title: "Mohab Elgendy <span>— CV.</span>",
    intro:
      "Multidisciplinary professional with experience across swimming coaching, tourism operations, business development and creative media.",
    overview:
      "I bring together sports instruction, customer-facing work, operations and digital content. My current creative career direction includes junior video editing and continued development through practical projects.",
    highlights: [
      "Swimming instruction and coaching: 6+ years and 7,200+ training/teaching hours.",
      "Tourism and activity operations through part-time work with Wander Factory.",
      "Business development tasks including outreach, meetings and service presentation.",
      "Social media and creative content work for swimming and sports brands.",
      "Founder and program director of Premium Swimming Academy.",
      "Education: High Institute of Specific Studies, Tourism and Hotels, class of 2026.",
    ],
    roles: [
      "Premium Swimming Academy — Founder / Program Director.",
      "Wander Factory — Part-time tourism operations and business development, 2023–2026.",
      "Club S Alegria and Club S SODIC — swimming coaching experience since April 2024.",
      "LNH International School — PE Teacher, September 2023 to March 2024.",
      "Other swimming roles across academies, clubs, schools and facilities.",
    ],
    skills: [
      "Swimming Coaching",
      "Tourism Operations",
      "Business Development",
      "Social Media",
      "Premiere Pro",
      "CapCut",
      "Photoshop",
      "Illustrator",
      "Python & Java Learning",
      "GitHub",
    ],
    note: "This is a portfolio CV summary, not a substitute for verifying exact employment dates, qualifications, contact details and references.",
  },
};

const pageKey = document.body.dataset.page;
const pageData = experiences[pageKey];
const detailRoot = document.getElementById("detail-root");

function createList(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function createTags(items) {
  return items.map((item) => `<span>${item}</span>`).join("");
}

if (pageData && detailRoot) {
  detailRoot.innerHTML = `
    <section class="section detail-hero">
      <div class="breadcrumb">
        <a href="index.html">Home</a>
        <span>/</span>
        <span>${pageData.category}</span>
      </div>
      <p class="eyebrow">${pageData.category}</p>
      <h1>${pageData.title}</h1>
      <p class="detail-intro">${pageData.intro}</p>
      <a class="back-link" href="index.html#experience">← Back to all experience</a>
    </section>

    <section class="section" style="padding-top: 0;">
      <div class="detail-layout">
        <div class="detail-content">
          <article class="glass-card detail-panel reveal">
            <h2>Overview</h2>
            <p>${pageData.overview}</p>
          </article>

          <article class="glass-card detail-panel reveal">
            <h2>Experience & Highlights</h2>
            <ul>${createList(pageData.highlights)}</ul>
          </article>

          <article class="glass-card detail-panel reveal">
            <h2>Roles & Projects</h2>
            <ul>${createList(pageData.roles)}</ul>
          </article>

          <article class="glass-card detail-panel reveal">
            <h2>Skills & Tools</h2>
            <div class="skill-tags">${createTags(pageData.skills)}</div>
          </article>

          <article class="glass-card detail-panel reveal">
            <h2>Profile Note</h2>
            <p>${pageData.note}</p>
          </article>
        </div>

        <aside class="detail-sidebar">
          <article class="glass-card detail-panel reveal">
            <h2>Connect with me</h2>
            <p>For professional opportunities and relevant collaborations, use one of the links below.</p>
            <a class="button button-primary" href="tel:01010612246">Call 01010612246</a>
            <a class="button button-secondary"
               href="https://github.com/mohabsobhy4361-netizen"
               target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a class="button button-secondary"
               href="https://www.instagram.com/mohab_el_gendy_/"
               target="_blank" rel="noopener noreferrer">Personal Instagram ↗</a>
            <a class="button button-secondary"
               href="https://web.facebook.com/mohab.sbhy.5/?locale=ar_AR"
               target="_blank" rel="noopener noreferrer">Personal Facebook ↗</a>
            <p class="detail-note">WhatsApp link was not supplied, so it is not included.</p>
          </article>

          <article class="glass-card detail-panel reveal">
            <h2>Explore more</h2>
            <p>Return to the main portfolio to explore the other experience areas.</p>
            <a class="button button-secondary" href="index.html#experience">All Experience Areas ↗</a>
            <a class="button button-secondary" href="cv.html">View CV ↗</a>
          </article>
        </aside>
      </div>
    </section>

    <footer class="footer">
      <a class="logo" href="index.html">ME<span>.</span></a>
      <p>Mohab Elgendy · Portfolio</p>
      <p>© <span id="current-year"></span></p>
    </footer>
  `;

  const generatedYear = document.querySelector("#current-year");
  if (generatedYear) {
    generatedYear.textContent = new Date().getFullYear();
  }

  const generatedReveals = detailRoot.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const detailObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    generatedReveals.forEach((element) => detailObserver.observe(element));
  } else {
    generatedReveals.forEach((element) => element.classList.add("visible"));
  }
}
