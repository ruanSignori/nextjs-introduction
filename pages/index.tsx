// Exemplo de Server side render
import { GetServerSideProps } from "next";

export default function Home({ repositories }) {
  return (
    <div>  
      <div>Home</div>
      <ul>
        {repositories.map((repo) => (
          <li key={repo}>{repo}</li>
        ))}
      </ul>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://api.github.com/users/ruanSignori/repos');
  
  const data = await response.json();
  const repoName = data.map((item) => item.name);

  return {
    props: {
      repositories: repoName
    }
  }
}