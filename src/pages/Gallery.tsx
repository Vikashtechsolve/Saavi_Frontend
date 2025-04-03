import { useState, useEffect } from "react";
import GalleryItem from "../components/galleryItem";

const Gallery = () => {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [currentFolder, setCurrentFolder] = useState<string | null>(null);

  const components = [
    { id: 0, text: "ALL", folder: "ALL", imageCount: 0 },
    { id: 1, text: "Saavi Hotel Sector 43", folder: "Saavi Hotel Sector 43_output", imageCount: 24 },
    { id: 2, text: "Saavi Hotel Sector 45", folder: "Saavi Hotel Sector 45_output", imageCount: 33 },
    { id: 3, text: "Saavi Hotel Sector 46", folder: "Saavi Hotel Sector 46_output", imageCount: 34 },
    { id: 4, text: "Basai Road Sector 10", folder: "BASAI ROAD SECTOR 10_output", imageCount: 6 },
    { id: 5, text: "Saavi Hotel Jibhi", folder: "Saavi Hotel - Jibhi_output", imageCount: 50 },
  ];

  // Set default folder to "ALL" when the component mounts
  useEffect(() => {
    if (!selectedFolder) {
      setSelectedFolder("ALL");
    }
  }, [selectedFolder]);

  const handleComponentClick = (folder: string) => {
    setSelectedFolder(folder);
  };

  const getImageCount = (folder: string | null) => {
    if (!folder) return 0;
    const component = components.find((item) => item.folder === folder);
    return component ? component.imageCount : 0;
  };

  const openModal = (folder: string, index: number) => {
    setCurrentFolder(folder);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNextImage = () => {
    const imageCount = getImageCount(currentFolder);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageCount);
  };

  const goToPrevImage = () => {
    const imageCount = getImageCount(currentFolder);
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageCount) % imageCount);
  };

  const renderAllImages = () => {
    return components.map((component) => {
      if (component.folder !== "ALL") {
        return Array.from({ length: getImageCount(component.folder) }).map((_, index) => (
          <div
            key={`${component.folder}-image-${index}`}
            style={{ overflow: "hidden", borderRadius: "5px" }}
          >
            <img
              src={`../../hotels/${component.folder}/image${index + 1}.jpeg`}
              alt={`Image ${index + 1}`}
              style={{
                width: "300px",
                height: "300px",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              onClick={() => openModal(component.folder, index)}
            />
          </div>
        ));
      }
      return null;
    });
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 className="text-4xl font-bold text-[#8B2B06] text-center mb-16">OUR GALLERY</h1>
      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", justifyContent: "center", marginBottom: "30px" }}>
        {components.map((component) => (
          <GalleryItem
            key={component.id}
            text={component.text}
            onClick={() => handleComponentClick(component.folder)}
            isSelected={selectedFolder === component.folder}
          />
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
  {selectedFolder === "ALL"
    ? renderAllImages()
    : selectedFolder &&  // Check if selectedFolder is not null
      Array.from({ length: getImageCount(selectedFolder) }).map((_, index) => (
        <div key={index} style={{ overflow: "hidden", borderRadius: "5px" }}>
          <img
            src={`../../hotels/${selectedFolder}/image${index + 1}.jpeg`}
            alt={`Image ${index + 1}`}
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={() => openModal(selectedFolder, index)}
          />
        </div>
      ))}
</div>


      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
          <img
            src={`../../hotels/${currentFolder}/image${currentImageIndex + 1}.jpeg`}
            alt="Modal"
            style={{ maxHeight: "80%", maxWidth: "80%" }}
          />
          <button className="absolute top-10 right-10 text-white text-4xl" onClick={closeModal}>
            &times;
          </button>
          <button className="absolute left-10 text-white text-4xl" onClick={goToPrevImage}>
            &#8249;
          </button>
          <button className="absolute right-10 text-white text-4xl" onClick={goToNextImage}>
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
