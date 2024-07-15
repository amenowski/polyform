import { useEffect, useState } from "react";

type ProductGalleryProps = {
  images: string[];
  name: string;
};

function ProductGallery({ name, images }: ProductGalleryProps) {
  const [bigImage, setBigImage] = useState(images[0]);

  useEffect(
    function () {
      setBigImage(images[0]);
    },
    [setBigImage, images],
  );

  function handleSetBigImage(image: string) {
    setBigImage(image);
  }
  return (
    <div className="flex flex-col gap-4">
      <img src={bigImage} alt={name} />
      <div className={`grid grid-cols-3 gap-3 overflow-hidden`}>
        {images.map((img, idx) => (
          <img
            src={img}
            key={idx}
            alt={`Product ${idx}`}
            className="cursor-pointer object-cover object-center"
            onClick={() => handleSetBigImage(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
