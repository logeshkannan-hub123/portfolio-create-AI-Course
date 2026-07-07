function openCertModal(imgSrc, title, issuer) {
  const modal = document.getElementById("certModal");
  const img = document.getElementById("certModalImg");
  const titleEl = document.getElementById("certModalTitle");
  const issuerEl = document.getElementById("certModalIssuer");

  img.src = imgSrc;
  img.alt = title;
  titleEl.textContent = title;
  issuerEl.innerHTML = issuer;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCertModal() {
  const modal = document.getElementById("certModal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeCertModal();
});

const projects = [
  {
    title: "Portfolio web page",
    description: "I am doing a quiz project in full-stack.",
    contant: [
      "In full-stack web development and I will build both the client-side (frontend) and server-side (backend) of a web application, requiring </ul> knowledge of technologies like HTML, CSS, JavaScript, and various backend languages like Node.js,Express Js and various Database language like MYSQL.",
    ],
  },
  {
    title: "Sample web page",
    description:
      "I am doing a sample web page in full stack that include Home,courses,contact us,about pages.",
    contant: [
      "In full-stack web development and I will build both the client-side (frontend) and server-side (backend) of a web application, requiring knowledge of technologies like HTML, CSS, JavaScript, and various backend languages like Node.js,Express Js and various Database language like MYSQL.",
    ],
  },
  {
    title: "Shop Expenses web page",
    description:
      "I am creating a web page in full stack that includes a loginpage that has Google and faceBook authentication, then the user login field and also the registration page.",
    contant: [
      "I am creating a web page in full stack that includes a login page that has Google and faceBook authentication, then the user login field and also the registration page. Once logged in, go to the home page including Vonder Bills, Data Management, LogOut. The Vondoe Bills have created a Bill and viewed the Vonder Bills. The Data Management page has material, vonder. The material and vendor page has to view, edit, update, and delete the items it has used only the adim and manager. Ect...",
      "In full-stack web development, I will build both the client-side (frontend) and server-side (backend) of a web application, requiring Knowledge of technologies like HTML, CSS, JavaScript, and various Backend languages like Node.js,Express.js and various databases languages like MYSQL and MongoDB. MYSQL has been fetched the data from the client, then MongoDB has been store the request/response the recode.",
    ],
  },
  {
    title: "Portfolio web page",
    description:
      "I am creating a portfolio web page in full stack that includes Home, About, Education, Skills, Projects, Contact pages.",
    contant: [
      "I am creating a portfolio web page in full stack that includes Home, About, Education, Skills, Projects, Contact pages. The Home page has a profile picture and a brief introduction about myself. The About page has a detailed description of my skills and experience. The Education page has a list of my academic qualifications. The Skills page has a list of my technical and professional skills. The Projects page has a list of my projects with descriptions. The Contact page has a form to contact me.",
      "In full-stack web development, I will build both the client-side (frontend) and server-side (backend) of a web application, requiring Knowledge of technologies like HTML, CSS, JavaScript.",
    ],
  },
  {
    title: "AI Chatbot",
    description:
      "I am creating an AI chatbot in full stack that includes a login page that has Google and faceBook authentication",
    contant: [
      "I am creating an AI chatbot in full stack that includes a login page that has Google and faceBook authentication, then the user login field and also the registration page. Once logged in, go to the home page including Chatbot, Data Management, LogOut. The Chatbot has created a Chatbot and viewed the Chatbot. The Data Management page has material, vonder. The material and vendor page has to view, edit, update, and delete the items it has used only the adim and manager. Ect...",
      "In full-stack web development, I will build both the client-side (frontend) and server-side (backend) of a web application, requiring Knowledge of technologies like HTML, CSS, JavaScript, and various Backend languages like Node.js,Express.js and various databases languages like MYSQL and MongoDB. MYSQL has been fetched the data from the client, then MongoDB has been store the request/response the recode.",
    ],
  },
  {
    title: "AI Image Generator",
    description:
      "I am creating an AI image generator in full stack that includes a login page that has Google and faceBook authentication",
    contant: [
      "I am creating an AI image generator in full stack that includes a login page that has Google and faceBook authentication, then the user login field and also the registration page. Once logged in, go to the home page including Image Generator, Data Management, LogOut. The Image Generator has created an image and viewed the image. The Data Management page has material, vonder. The material and vendor page has to view, edit, update, and delete the items it has used only the adim and manager. Ect...",
      "In full-stack web development, I will build both the client-side (frontend) > and server-side (backend) of a web application, requiring Knowledge of technologies like HTML, CSS, JavaScript, and various Backend languages like Node.js,Express.js and various databases languages like MYSQL and MongoDB. MYSQL has been fetched the data from the client, then MongoDB has been store the request/response the recode.",
    ],
  },
];

const grid = document.querySelector("#projects-grid");

projects.forEach((project, index) => {
  const projectCard = document.createElement("article");
  projectCard.innerHTML = `
     <h3>${project.title}</h3>
            <ul>
              <li>${project.description}</li>
              <li>${project.contant.map((topic) => `<p>${topic}</p>`).join("")}</li>
            </ul>`;
  grid.appendChild(projectCard);
});
