import { HiArrowRight, HiArrowLeft } from 'react-icons/hi2';

function ButtonPagination({ containerRef }: { containerRef: HTMLDivElement }) {
  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 310, behavior: 'smooth' });
    }
  };

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -310, behavior: 'smooth' });
    }
  };

  return (
    <div className="buttons flex gap-2 w-fit ml-auto">
      <button
        className="p-3 bg-gray-200 rounded-full"
        onClick={handleScrollLeft}
      >
        <HiArrowLeft size={18} />
      </button>
      <button
        className="p-3 bg-gray-200 rounded-full"
        onClick={handleScrollRight}
      >
        <HiArrowRight size={18} />
      </button>
    </div>
  );
}

export default ButtonPagination;
