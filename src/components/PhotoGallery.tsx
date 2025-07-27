'use client';

import { useState } from 'react';
import Image from 'next/image';

const sampleImages = [
  { src: '/IMG_02.jpeg', alt: 'Front view of cello', id: 1 },
  { src: '/IMG_03.jpeg', alt: 'Scroll view', id: 2 },
  { src: '/IMG_04.jpeg', alt: 'Front view of cello from above', id: 3 },
  { src: '/IMG_05.jpeg', alt: 'Front view of cello from above', id: 4 },
  { src: '/IMG_06.jpeg', alt: 'Side view of cello', id: 5 },
  { src: '/IMG_07.jpeg', alt: 'Side view of cello', id: 6 },
  { src: '/IMG_08.jpeg', alt: 'Scroll view from the side', id: 7 },
  { src: '/IMG_09.jpeg', alt: 'Back view of cello', id: 8 },
  { src: '/IMG_10.jpeg', alt: 'Back view of cello', id: 9 },
  { src: '/IMG_11.jpeg', alt: 'Scroll view from back', id: 10 },
  { src: '/IMG_12.jpeg', alt: 'Scroll view from back', id: 11 },
  { src: '/IMG_13.jpeg', alt: 'Back of the cello', id: 12 },
  { src: '/IMG_14.jpeg', alt: 'Back of the cello', id: 13 },
  { src: '/IMG_15.jpeg', alt: 'Side view of cello', id: 14 },
  { src: '/IMG_16.jpeg', alt: 'Cello Stand', id: 15 },
  { src: '/IMG_17.jpeg', alt: 'Cello Stand collapsed', id: 16 },
  { src: '/IMG_18.jpeg', alt: 'Cello case', id: 17 },
  { src: '/IMG_19.jpeg', alt: 'Cello case', id: 18 },
  { src: '/IMG_20.jpeg', alt: 'Cello case open', id: 19 },
  { src: '/IMG_21.jpeg', alt: 'Cello case moister meter', id: 20 },
  { src: '/IMG_22.jpeg', alt: 'Complete setup', id: 21 },
  { src: '/IMG_23.jpeg', alt: 'Complete setup', id: 22 },
  { src: '/IMG_24.jpeg', alt: 'Cello case', id: 23 },
  { src: '/IMG_25.jpeg', alt: 'Cello case', id: 24 },
  { src: '/IMG_26.jpeg', alt: 'Cello case', id: 25 },
];

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const openModal = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsZoomed(false);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only close if clicking on the backdrop itself, not on the image container
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = sampleImages.findIndex(img => img.id === selectedImage);
      const nextIndex = (currentIndex + 1) % sampleImages.length;
      setSelectedImage(sampleImages[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = sampleImages.findIndex(img => img.id === selectedImage);
      const prevIndex = (currentIndex - 1 + sampleImages.length) % sampleImages.length;
      setSelectedImage(sampleImages[prevIndex].id);
    }
  };

  const selectedImageData = sampleImages.find(img => img.id === selectedImage);

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">Gallery</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {sampleImages.map((image) => (
            <div 
              key={image.id}
              className="relative aspect-[3/4] cursor-pointer group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
              onClick={() => openModal(image.id)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
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
            <div className="relative max-w-4xl max-h-full">
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
              <div 
                className={`relative ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <Image
                  src={selectedImageData.src}
                  alt={selectedImageData.alt}
                  width={800}
                  height={1000}
                  className={`max-w-full max-h-full object-contain transition-transform duration-300 ${
                    isZoomed ? 'scale-150' : 'scale-100'
                  }`}
                />
              </div>

              {/* Caption */}
              <p className="text-white text-center mt-4 text-lg">
                {selectedImageData.alt}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}