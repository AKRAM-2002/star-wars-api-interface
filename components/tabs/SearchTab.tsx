'use client'
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';
import { Character } from '../../types';
import { useState } from 'react';

export const SearchTab = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Character[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);

  const searchCharacters = async () => {
    if (!searchTerm) return;
    setLoading(true);
    try {
      const response = await fetch(`/api/people/?search=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error searching characters:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <Input
          placeholder="Search characters..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={searchCharacters}>Search</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchResults.map((character, index) => (
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
    </div>
  );
};
