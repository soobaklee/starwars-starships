const base_URL = `https://swapi.co/api/starships/`;

export function getStarships() {
    return fetch(`${base_URL}`, { mode: 'cors' }).then(res => res.json());
}