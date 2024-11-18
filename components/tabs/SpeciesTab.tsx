'use client'
import { Card, CardContent } from '@/components/ui/card';
import { AirVent } from 'lucide-react';
import { Species } from '../../types';

export const SpeciesTab = ({ species }: { species: Species[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {species.map((spec, index) => (
        <Card key={index}>
          <CardContent className="p-4">
            <AirVent className="w-6 h-6 mb-2" />
            <h3 className="font-bold">{spec.name}</h3>
            <p className="text-sm text-gray-500">Classification: {spec.classification}</p>
            <p className="text-sm text-gray-500">Language: {spec.language}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};