import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryImage {
  id: string;
  url: string;
  hotelName: string;
  images: string[];
}

const galleryImages: GalleryImage[] = [
  {
    id: 'all',
    url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    hotelName: 'All Properties',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    ]
  },
  {
    id: 'hotel1',
    url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    hotelName: 'Luxury Hotel',
    images: [
      'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    ]
  },
  {
    id: 'hotel2',
    url: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    hotelName: 'Mountain Resort',
    images: [
      'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    ]
  },
  {
    id: 'hotel3',
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    hotelName: 'Beachfront Villa',
    images: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    ]
  },
  {
    id: 'hotel4',
    url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    hotelName: 'Urban Boutique',
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    ]
  },
  {
    id: 'hotel5',
    url: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    hotelName: 'Heritage Palace',
    images: [
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    ]
  }
];

export function GalleryPage() {
  const [selectedGallery, setSelectedGallery] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (gallery: GalleryImage) => {
    setSelectedGallery(gallery);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedGallery) {
      setCurrentImageIndex((prev) => 
        prev === selectedGallery.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const previousImage = () => {
    if (selectedGallery) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedGallery.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Properties</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((gallery) => (
            <motion.button
              key={gallery.id}
              onClick={() => openGallery(gallery)}
              className="relative group overflow-hidden rounded-xl shadow-lg aspect-w-16 aspect-h-9"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={gallery.url}
                alt={gallery.hotelName}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{gallery.hotelName}</h3>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Gallery Modal */}
        <AnimatePresence>
          {selectedGallery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            >
              <div className="relative w-full max-w-6xl">
                <button
                  onClick={closeGallery}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                >
                  <X className="h-8 w-8" />
                </button>

                <div className="relative">
                  <img
                    src={selectedGallery.images[currentImageIndex]}
                    alt={`${selectedGallery.hotelName} - Image ${currentImageIndex + 1}`}
                    className="w-full h-[80vh] object-contain"
                  />

                  {/* Navigation Buttons */}
                  <button
                    onClick={previousImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                  >
                    →
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
                    {currentImageIndex + 1} / {selectedGallery.images.length}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}