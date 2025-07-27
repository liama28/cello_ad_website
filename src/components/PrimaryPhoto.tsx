'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function PrimaryPhoto() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only close if clicking on the backdrop itself, not on the image container
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative group cursor-pointer" onClick={openModal}>
          <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/IMG_01.jpeg"
              alt="Primary photo of cello"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 90vw, 400px"
              quality={75}
              priority
            />
            <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-4 text-sm">Click to enlarge</p>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={handleBackdropClick}
          >
            <div className="relative max-w-7xl max-h-full">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* High-resolution image */}
              <div className="relative">
                <Image
                  src="/IMG_01.jpeg"
                  alt="Primary photo of cello - enlarged view"
                  width={1200}
                  height={1600}
                  className="max-w-full max-h-[90vh] object-contain"
                  quality={100}
                  sizes="90vw"
                  unoptimized={false}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}