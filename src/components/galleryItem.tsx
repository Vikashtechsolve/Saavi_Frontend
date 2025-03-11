interface GalleryItemProps {
  text: string;
  onClick: () => void;
  isSelected?: boolean;
}

const GalleryItem = ({ text, onClick, isSelected }: GalleryItemProps) => {
  return (
    <button
      className={`px-4 py-2 rounded transition-all ${
        isSelected
          ? "bg-[#8B2B06] text-white border-[#8B2B06]"
          : "text-[#8B2B06] bg-white border-[#8B2B06]"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default GalleryItem;
