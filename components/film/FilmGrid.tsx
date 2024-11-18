'use client'
import { Film } from '../../types';
import { FilmCard } from './FilmCard';

interface FilmGridProps {
  films: Film[];
  selectedFilm: Film | null;
  onSelectFilm: (film: Film) => void;
}

export const FilmGrid = ({ films, selectedFilm, onSelectFilm }: FilmGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {films.map((film) => (
        <FilmCard
          key={film.episode_id}
          film={film}
          isSelected={selectedFilm?.episode_id === film.episode_id}
          onClick={() => onSelectFilm(film)}
        />
      ))}
    </div>
  );
};