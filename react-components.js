// React components for website

function Header({ pageTitle }) {
  const [darkMode, setDarkMode] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <header>
      <h1>{pageTitle}</h1>
      <nav>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="portfolio.html">Portfolio</a>
      </nav>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2025 Serpenlog</p>
    </footer>
  );
}

function GitHubProjects() {
  const [repos, setRepos] = React.useState([]);

  React.useEffect(() => {
    fetch('https://api.github.com/users/Serpenlog/repos')
      .then(res => res.json())
      .then(setRepos)
      .catch(err => console.error('Error fetching repos:', err));
  }, []);

  return (
    <ul>
      {repos.map(repo => (
        <li key={repo.id}>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
