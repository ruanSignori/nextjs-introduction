// Exemplo de Static site generation
import { GetStaticProps } from "next";

export default function Home({ repositories, date }) {
  return (
    <div>  
      <div>Home</div>
      <ul>
        {repositories.map((repo) => (
          <li key={repo}>{repo}</li>
        ))}
      </ul>
      <p>{date}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/ruanSignori/repos');
  
  const data = await response.json();
  const repoName = data.map((item) => item.name);

  return {
    props: {
      repositories: repoName,
      date: new Date().toISOString() 
    },
    revalidate: 5
  }
}