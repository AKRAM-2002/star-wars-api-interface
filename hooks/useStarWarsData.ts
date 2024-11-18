'use client'
import { useState, useEffect } from 'react';
import { Film, Character, Planet, Species } from '@/types';

export const useStarWarsData = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [species, setSpecies] = useState<Species[]>([]);
  const [loading, setLoading] = useState(false);


  const baseUrl = 'https://swapi-api.alx-tools.com/api';

  const fetchFilms = async () => {
    try {
      const response = await fetch(`${baseUrl}/films/`);
      const data = await response.json();
      setFilms(data.results.sort((a: Film, b: Film) => a.episode_id - b.episode_id));
    } catch (error) {
      console.error('Error fetching films:', error);
    }
  };

  const fetchFilmDetails = async (film: Film) => {
    setLoading(true);
    try {
      // Fetch characters
      const characterPromises = film.characters.map(url => 
        fetch(url).then(res => res.json())
      );
      const characterData = await Promise.all(characterPromises);
      setCharacters(characterData);

      // Fetch planets
      const planetPromises = film.planets.map(url => 
        fetch(url).then(res => res.json())
      );
      const planetData = await Promise.all(planetPromises);
      setPlanets(planetData);

      // Fetch species
      const speciesPromises = film.species.map(url => 
        fetch(url).then(res => res.json())
      );
      const speciesData = await Promise.all(speciesPromises);
      setSpecies(speciesData);

      setSelectedFilm(film);
    } catch (error) {
      console.error('Error fetching film details:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  return {
    films,
    selectedFilm,
    characters,
    planets,
    species,
    loading,
    fetchFilmDetails
  };
};