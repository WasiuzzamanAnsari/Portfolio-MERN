const projects = [
  {
    name: 'Todo List App',
    url: 'https://github.com/WasiuzzamanAnsari/Todo--MERN.git'
  },
  {
    name: 'Blog App',
    url: 'https://github.com/WasiuzzamanAnsari/BlogApp-MERN.git'
  },
  {
    name: 'Portfolio',
    url: 'https://github.com/WasiuzzamanAnsari/Portfolio-MERN.git'
  }
];

export default function Projects() {
  return (
    <section style={{ padding: '2rem' }}>
      <h2>Projects</h2>
      <ul>
        {projects.map((p, i) => (
          <li key={i}>
            <a href={p.url} target="_blank" rel="noreferrer">{p.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
