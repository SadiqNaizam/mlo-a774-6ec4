import MediaCard from '@/components/MediaCard';

const LibraryPage = () => {
   const libraryItems = [
    { id: '1', title: 'Route 1 Remixes', subtitle: 'Playlist', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' },
    { id: '2', title: 'Champion\'s Anthem', subtitle: 'Playlist', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png' },
    { id: '3', title: 'Lavender Town Lullabies', subtitle: 'Playlist', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png' },
    { id: '4', title: 'Junichi Masuda', subtitle: 'Artist', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png' },
    { id: '5', title: 'Snorlax & Chill', subtitle: 'Playlist', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png' },
  ];
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Your Library</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        {libraryItems.map(item => (
          <MediaCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default LibraryPage;