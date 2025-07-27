'use client';

import { useState } from 'react';
import Image from 'next/image';

const damageImages = [
  { src: '/IMG_27.jpeg', alt: 'Minor dents and scratches on varnish', id: 1, description: 'Small surface scratch and dents on varnish throughout the body of the cello' },
  { src: '/IMG_28.jpeg', alt: 'Small chip', id: 2, description: '' },
  { src: '/IMG_29.jpeg', alt: 'Light scratches', id: 3, description: 'Light scratches can be seen at specific light angles' },
  { src: '/IMG_30.jpeg', alt: 'Small chip', id: 4, description: '' },
  { src: '/IMG_31.jpeg', alt: 'Small chip', id: 5, description: '' },
  { src: '/IMG_32.jpeg', alt: 'Light dent', id: 6, description: '' },
  { src: '/IMG_33.jpeg', alt: 'Small chip', id: 7, description: '' },
  { src: '/IMG_34.jpeg', alt: 'Wear inside the case from the cello bridge', id: 8, description: '' },
  { src: '/IMG_35.jpeg', alt: 'Wear inside the case from cello bow', id: 9, description: '' },
];

export default function DamagePhotos() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only close if clicking on the backdrop itself, not on the image container
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = damageImages.findIndex(img => img.id === selectedImage);
      const nextIndex = (currentIndex + 1) % damageImages.length;
      setSelectedImage(damageImages[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = damageImages.findIndex(img => img.id === selectedImage);
      const prevIndex = (currentIndex - 1 + damageImages.length) % damageImages.length;
      setSelectedImage(damageImages[prevIndex].id);
    }
  };

  const selectedImageData = damageImages.find(img => img.id === selectedImage);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-gray-900 mb-4 text-center">Condition Details</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          For complete transparency, here are detailed photos of any cosmetic wear. 
          These minor imperfections do not affect the instrument&apos;s playability or sound quality.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {damageImages.map((image) => (
            <div key={image.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div 
                className="relative aspect-[4/3] cursor-pointer group"
                onClick={() => openModal(image.id)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-2">{image.alt}</h3>
                <p className="text-sm text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && selectedImageData && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={handleBackdropClick}
          >
            <div className="relative max-w-2xl max-h-full">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Previous button */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image */}
              <div className="relative">
                <Image
                  src={selectedImageData.src}
                  alt={selectedImageData.alt}
                  width={600}
                  height={450}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Caption */}
              <div className="text-white text-center mt-4">
                <h3 className="text-lg font-medium mb-2">{selectedImageData.alt}</h3>
                <p className="text-gray-300">{selectedImageData.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}