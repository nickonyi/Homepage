import { projectData } from './data.js';

function createProjectTab(project) {
  const projectTab = document.createElement('div');
  projectTab.className = 'project-tab';

  projectTab.innerHTML = `
    <div class="project-tab-sc">${project.screenshot}</div>
    <div class="project-tab-content">
      <div class="project-tab-content-header-wrapper">
        <p class="project-tab-content-header">${project.name}</p>
        <div class="icons-wrap">
          ${
            project.githubIcon
              ? '<i class="devicon-github-original colored icon-rotate"></i>'
              : ''
          }
          <div class="pointer-wrapper">
            <svg class="pointer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>open-in-new</title>
              <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
            </svg>
          </div>
        </div>
      </div>
      <p class="project-tab-content-text">${project.description}</p>
    </div>
  `;

  return projectTab;
}

const container = document.querySelector('.main-content-body');

projectData.forEach((project) => {
  const projectElement = createProjectTab(project);
  container.append(projectElement);
});
