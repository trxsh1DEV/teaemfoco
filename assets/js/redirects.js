// btn-objective
const redirectElements = (id) => {
  let redirectElement = document.getElementById(`${id}`);
  if (redirectElement) {
    redirectElement.scrollIntoView({ behavior: "smooth" }); // Rola suavemente
  }
};

const redirectPage = (page) => {
  // const myBtn = document.getElementById(id);
  // window.location.href = `./assets/pages/carousel/${page}.html`;
  window.open(`./assets/pages/carousel/${page}.html`, "_blank");
};
