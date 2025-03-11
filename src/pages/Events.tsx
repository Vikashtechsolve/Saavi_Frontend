export default function Events() {
  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-16">Banquet & Events</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Corporate Events</h2>
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800"
              alt="Corporate Event"
              className="rounded-lg shadow-md"
            />
            <p className="text-gray-600">
              Host your next corporate event in our state-of-the-art conference facilities.
              From board meetings to large conferences, we provide the perfect setting for
              your business needs.
            </p>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Weddings</h2>
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800"
              alt="Wedding Venue"
              className="rounded-lg shadow-md"
            />
            <p className="text-gray-600">
              Create unforgettable memories with our elegant wedding venues. Our dedicated
              team will ensure every detail is perfect for your special day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}