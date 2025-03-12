'use client';

import { useState } from 'react';
import Image from 'next/image';
import { HiOutlineHeart, HiOutlineEye, HiOutlineStar } from 'react-icons/hi2';
import { calculateAverageRating } from '../utils/helper';

type Props = {
  title: string;
  image: string;
  price: number;
  sale: number;
  ratingCount: number;
  ratings: { [key: number]: number };
  showSale: boolean;
};

// function Card() {
function Card({
  title,
  image,
  price,
  sale,
  ratingCount,
  ratings,
  showSale,
}: Props) {
  const averageRating = calculateAverageRating(ratings, ratingCount);
  const [isHearted, setIsHearted] = useState(false);

  return (
    <div className="cart group relative flex-shrink-0 flex-[23.2%]">
      <div className="relative h-60 place-content-center bg-gray-300 mb-4">
        {showSale && (
          <p className="absolute top-2 left-2 text-xs bg-primary-700 px-2 py-1 rounded text-white">
            -{sale}%
          </p>
        )}
        <div className="absolute top-2 right-2 space-y-1">
          <button className="block p-1 bg-white rounded-full">
            <HiOutlineHeart
              className={isHearted ? 'fill-red-600 stroke-red-600' : ''}
              onClick={() => setIsHearted(!isHearted)}
            />
          </button>
          <button className="p-1 bg-white rounded-full">
            <HiOutlineEye />
          </button>
        </div>
        <button className="opacity-0 transition-all group-hover:opacity-100 absolute bottom-0 left-0 w-full bg-black text-white text-center p-2">
          Add To Cart
        </button>
        <Image
          src={image}
          alt={title}
          className="max-w-full h-full object-scale-down"
          width={280}
          height={280}
        />
      </div>
      <div className="space-y-1">
        <h4 className="font-semibold text-sm">{title}</h4>
        <p>
          <span className={`text-red-600 me-2 ${sale || 'hidden'}`}>
            ${price - (sale * price) / 100}
          </span>
          <span
            className={`${
              sale ? 'line-through text-gray-500' : 'text-red-600'
            }`}
          >
            ${price}
          </span>
        </p>
        <div className="star flex items-center gap-2">
          <ul className="flex">
            {[1, 2, 3, 4, 5].map((rate) => (
              <li key={rate}>
                <HiOutlineStar
                  className={`${
                    rate <= averageRating && 'stroke-yellow-600 fill-yellow-600'
                  }`}
                />
              </li>
            ))}
          </ul>
          <span className="text-gray-500 text-sm">({ratingCount})</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
