// Projects array
const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal website to showcase my work.',
    link: '#'
  },
  {
    title: 'Weather App',
    description: 'A simple app to check the weather.',
    link: '#'
  },
  {
    title: 'Todo List',
    description: 'A task management tool.',
    link: '#'
  }
];

// Render projects
const renderProjects = () => {
  const projectsList = document.querySelector('#projects-list');
  projectsList.innerHTML = projects.map(project => `
    <div class="project">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>
    </div>
  `).join('');
};
renderProjects();

// Light/Dark mode toggle
const toggleBtn = document.querySelector('#toggle-mode');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Experience calculation
const calcBtn = document.querySelector('#calc-experience');
calcBtn.addEventListener('click', () => {
  const startYear = parseInt(document.querySelector('#start-year').value, 10);
  const currentYear = new Date().getFullYear();
  const years = currentYear - startYear;
  const result = document.querySelector('#experience-result');
  if (!isNaN(years) && years >= 0) {
    result.textContent = `You have ${years} year${years !== 1 ? 's' : ''} of coding experience.`;
  } else {
    result.textContent = 'Please enter a valid start year.';
  }
});

// Contact form validation
const form = document.querySelector('#contact-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const nameError = document.querySelector('#name-error');
  const emailError = document.querySelector('#email-error');
  const successMsg = document.querySelector('#form-success');
  nameError.textContent = '';
  emailError.textContent = '';
  successMsg.textContent = '';
  if (!name.value.trim()) {
    nameError.textContent = 'Name is required.';
    valid = false;
  }
  if (!email.value.trim()) {
    emailError.textContent = 'Email is required.';
    valid = false;
  } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
    emailError.textContent = 'Enter a valid email.';
    valid = false;
  }
  if (valid) {
    successMsg.textContent = 'Message sent successfully!';
    form.reset();
  }
}); 