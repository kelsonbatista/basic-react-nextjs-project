import React from 'react';
import Link from 'next/link';

const fetchRepoContents = async (name) => {
  await new Promise(resolve => setTimeout(resolve, 3000)); // aguarda 3 segundos antes de acessar os dados - tempo do spinner
  
  const response = await fetch(`https://api.github.com/repos/kelsonbatista/${name}/contents`, {
    next: {
      revalidate: 60, // revalidate every 60 seconds
    },
  });

  const contents = await response.json();
  return contents;
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter(content => content.type === 'dir');

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map(dir => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>
              { dir.name }
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default RepoDirs
