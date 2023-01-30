//fetch a random word from server
export async function getRandonWord(): Promise<string> {
  const word = fetch(`http://localhost:3333/word`).then((response) =>
    response.json()
  );
  return word;
}

export async function getGuessSolution(wordIndex: string, guess: string):Promise<(string|object)>{
  const solution = fetch(`http://localhost:3333/${wordIndex}/${guess}`).then((response) =>
    response.json()
  );
  return solution;
}

export async function getWordByID(wordIndex: string):Promise<string>{
  const solution = fetch(`http://localhost:3333/${wordIndex}`).then((response) =>
    response.json()
  );
  return solution;
}
