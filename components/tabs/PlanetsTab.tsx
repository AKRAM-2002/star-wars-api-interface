'use client'
import { Card, CardContent } from '@/components/ui/card';
import { Globe } from 'lucide-react';
import { Planet } from '../../types';

export const PlanetsTab = ({ planets }: { planets: Planet[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {planets.map((planet, index) => (
        <Card key={index}>
          <CardContent className="p-4">
            <Globe className="w-6 h-6 mb-2" />
            <h3 className="font-bold">{planet.name}</h3>
            <p className="text-sm text-gray-500">Climate: {planet.climate}</p>
            <p className="text-sm text-gray-500">Terrain: {planet.terrain}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};