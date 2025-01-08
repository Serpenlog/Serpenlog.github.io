// Fetch and display GitHub repositories
const githubProjectsList = document.getElementById('github-projects');

fetch('https://api.github.com/users/Serpenlog/repos')
    .then(response => response.json())
    .then(repos => {
        repos.forEach(repo => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
            githubProjectsList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching repos:', error));
