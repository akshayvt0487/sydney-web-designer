"use client";

import { useState } from "react";
import { sortSizes } from "@/lib/utils/size-sorting";

interface ProductSizeSelectorProps {
  sizes: string[];
  selectedSize?: string;
  onSizeSelect?: (size: string) => void;
  disabled?: boolean;
}

/**
 * Product Size Selector Component
 * Displays sizes in correct order: S, M, L, XL, XXL, etc.
 *
 * Example usage:
 * <ProductSizeSelector
 *   sizes={['XL', 'M', 'S', 'XXL', 'L']}
 *   selectedSize={selectedSize}
 *   onSizeSelect={setSelectedSize}
 * />
 */
export default function ProductSizeSelector({
  sizes,
  selectedSize,
  onSizeSelect,
  disabled = false,
}: ProductSizeSelectorProps) {
  const [internalSelectedSize, setInternalSelectedSize] = useState<string | undefined>(selectedSize);

  // Sort sizes properly
  const sortedSizes = sortSizes(sizes);

  const handleSizeClick = (size: string) => {
    if (disabled) return;

    setInternalSelectedSize(size);
    if (onSizeSelect) {
      onSizeSelect(size);
    }
  };

  const currentSelected = selectedSize !== undefined ? selectedSize : internalSelectedSize;

  return (
    <div className="space-y-3">
      <label className="text-sm font-semibold text-gray-700">
        Select Size
      </label>
      <div className="flex flex-wrap gap-3">
        {sortedSizes.map((size) => {
          const isSelected = currentSelected === size;

          return (
            <button
              key={size}
              onClick={() => handleSizeClick(size)}
              disabled={disabled}
              className={`
                min-w-[60px] px-5 py-3 rounded-lg font-semibold text-base
                border-2 transition-all duration-200
                ${
                  isSelected
                    ? 'border-primary-orange bg-primary-orange text-white shadow-md scale-105'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-primary-orange hover:bg-orange-50'
                }
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2
              `}
              aria-pressed={isSelected}
              aria-label={`Size ${size}`}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
}
