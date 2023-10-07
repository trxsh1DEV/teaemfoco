// btn-objective
const redirectElements = (id) => {
  let redirectElement = document.getElementById(`${id}`);
  if (redirectElement) {
    redirectElement.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente
  }
}
