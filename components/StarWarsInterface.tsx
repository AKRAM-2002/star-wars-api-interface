'use client'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Film, Users, Globe, AirVent, Search, Loader } from 'lucide-react';
import { FilmGrid } from './film/FilmGrid';
import { OverviewTab } from './tabs/OverviewTab';
import { CharactersTab } from './tabs/CharactersTab';
import { PlanetsTab } from './tabs/PlanetsTab';
import { SpeciesTab } from './tabs/SpeciesTab';
import { SearchTab } from './tabs/SearchTab';
import { useStarWarsData } from '@/hooks/useStarWarsData';

const StarWarsInterface = () => {
  const {
    films,
    selectedFilm,
    characters,
    planets,
    species,
    loading,
    fetchFilmDetails
  } = useStarWarsData();

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Star Wars Universe Explorer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FilmGrid
            films={films}
            selectedFilm={selectedFilm}
            onSelectFilm={fetchFilmDetails}
          />

          {selectedFilm && (
            <Card className="mt-6">
              <CardContent className="p-6">
                <Tabs defaultValue="overview">
                  <TabsList className="grid grid-cols-5 gap-4 mb-6">
                    <TabsTrigger value="overview" className="flex items-center gap-2">
                      <Film className="w-4 h-4" /> Overview
                    </TabsTrigger>
                    <TabsTrigger value="characters" className="flex items-center gap-2">
                      <Users className="w-4 h-4" /> Characters
                    </TabsTrigger>
                    <TabsTrigger value="planets" className="flex items-center gap-2">
                      <Globe className="w-4 h-4" /> Planets
                    </TabsTrigger>
                    <TabsTrigger value="species" className="flex items-center gap-2">
                      <AirVent className="w-4 h-4" /> Species
                    </TabsTrigger>
                    <TabsTrigger value="search" className="flex items-center gap-2">
                      <Search className="w-4 h-4" /> Search
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview">
                    <OverviewTab film={selectedFilm} />
                  </TabsContent>

                  <TabsContent value="characters">
                    <CharactersTab characters={characters} />
                  </TabsContent>

                  <TabsContent value="planets">
                    <PlanetsTab planets={planets} />
                  </TabsContent>

                  <TabsContent value="species">
                    <SpeciesTab species={species} />
                  </TabsContent>

                  <TabsContent value="search">
                    <SearchTab />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          )}

          {loading && (
            <div className="flex justify-center items-center p-8">
              <Loader className="w-8 h-8 animate-spin" />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default StarWarsInterface;