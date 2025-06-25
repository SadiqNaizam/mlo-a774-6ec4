import MediaCard from '@/components/MediaCard';

const HomePage = () => {
  const featuredPlaylists = [
    { id: '1', title: 'Route 1 Remixes', subtitle: 'Upbeat tracks for your journey.', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' },
    { id: '2', title: 'Champion\'s Anthem', subtitle: 'Music for the ultimate battle.', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png' },
    { id: '3', title: 'Lavender Town Lullabies', subtitle: 'Soothing and spooky tunes.', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png' },
    { id: '4', title: 'Eeveelution Electro', subtitle: 'High-energy electronic beats.', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png' },
    { id: '5', title: 'Snorlax & Chill', subtitle: 'The perfect playlist for a nap.', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png' },
    { id: '6', title: 'Mewtwo\'s Meditation', subtitle: 'Focus and concentration.', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Good Afternoon, Trainer</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        {featuredPlaylists.map(playlist => (
          <MediaCard key={playlist.id} {...playlist} />
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Your Top Gyms</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
           {featuredPlaylists.slice(0,4).reverse().map(playlist => (
            <MediaCard key={playlist.id} {...playlist} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;