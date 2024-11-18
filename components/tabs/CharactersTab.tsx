'use client'
import { Card, CardContent } from '@/components/ui/card';
import { User } from 'lucide-react';
import { Character } from '../../types';

export const CharactersTab = ({ characters }: { characters: Character[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {characters.map((character, index) => (
        <Card key={index}>
          <CardContent className="p-4">
            <User className="w-6 h-6 mb-2" />
            <h3 className="font-bold">{character.name}</h3>
            <p className="text-sm text-gray-500">Gender: {character.gender}</p>
            <p className="text-sm text-gray-500">Birth Year: {character.birth_year}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};