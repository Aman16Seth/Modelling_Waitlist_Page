import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { X } from "lucide-react";

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { url: "src/components/Gallery/Img1.jpeg", alt: "Landing Page" },
    { url: "src/components/Gallery/Img2.jpeg", alt: "The Home Section" },
    { url: "src/components/Gallery/Img3.jpeg", alt: "The Jobs Section" },
    {
      url: "src/components/Gallery/Img4.jpeg",
      alt: "Other Model Profile View",
    },
    { url: "src/components/Gallery/Img5.jpeg", alt: "Other Model Details" },
    { url: "src/components/Gallery/Img6.jpeg", alt: "In App Messaging" },
  ];

  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center mb-16">Sneak Peaks</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedImage(index)}
                style={{
                  width: "100%",
                  height: "300px", // Set the fixed height for all boxes
                }}
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Screen Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>

          <div className="max-w-7xl max-h-full">
            <ImageWithFallback
              src={images[selectedImage].url}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
