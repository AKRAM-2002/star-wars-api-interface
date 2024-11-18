'use client'
import { Card, CardContent } from '@/components/ui/card';
import { Film } from '../../types';

interface FilmCardProps {
  film: Film;
  isSelected: boolean;
  onClick: () => void;
}

export const FilmCard = ({ film, isSelected, onClick }: FilmCardProps) => {
  return (
    <Card 
      className={`cursor-pointer transition-all hover:shadow-lg ${
        isSelected ? 'ring-2 ring-blue-500' : ''
      }`}
      onClick={onClick}
    >
      <CardContent className="p-4">
        <h3 className="font-bold mb-2">Episode {film.episode_id}</h3>
        <h4 className="text-lg">{film.title}</h4>
        <p className="text-sm text-gray-500">{film.release_date}</p>
      </CardContent>
    </Card>
  )
};