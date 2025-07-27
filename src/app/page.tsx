'use client';

import TitleSection from '@/components/TitleSection';
import PriceLocationSection from '@/components/PriceLocationSection';
import PrimaryPhoto from '@/components/PrimaryPhoto';
import DescriptionSection from '@/components/DescriptionSection';
import PhotoGallery from '@/components/PhotoGallery';
import DamagePhotos from '@/components/DamagePhotos';
import ContactSection from '@/components/ContactSection';
import MapSection from '@/components/MapSection';
import BackToTopButton from '@/components/BackToTopButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Title Section */}
      <TitleSection />
      
      {/* Price and Location */}
      <PriceLocationSection />
      
      {/* Primary Photo */}
      <PrimaryPhoto />
      
      {/* Description */}
      <DescriptionSection />
      
      {/* Photo Gallery */}
      <PhotoGallery />
      
      {/* Damage Photos */}
      <DamagePhotos />
      
      {/* Contact Information */}
      <ContactSection />
      
      {/* Map */}
      <MapSection />
      
      {/* Back to Top Button */}
      <BackToTopButton />
    </main>
  );
}