'use client'
import { Film } from '../../types';

export const OverviewTab = ({ film }: { film: Film }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{film.title}</h2>
      <p className="text-gray-600 mb-4">Director: {film.director}</p>
      <p className="text-gray-600 mb-4">Release Date: {film.release_date}</p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="italic">{film.opening_crawl}</p>
      </div>
    </div>
  );
};
