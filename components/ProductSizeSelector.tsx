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
  const [internalSelectedSize, setInternalSelectedSize] = useState<
    string | undefined
  >(selectedSize);

  // Sort sizes properly
  const sortedSizes = sortSizes(sizes);

  const handleSizeClick = (size: string) => {
    if (disabled) return;

    setInternalSelectedSize(size);
    if (onSizeSelect) {
      onSizeSelect(size);
    }
  };

  const currentSelected =
    selectedSize !== undefined ? selectedSize : internalSelectedSize;

  return (
    <div className="paper-size-selector">
      <label className="paper-size-selector__label">
        Select Size
      </label>

      <div className="paper-size-selector__options">
        {sortedSizes.map((size) => {
          const isSelected = currentSelected === size;

          return (
            <button
              key={size}
              onClick={() => handleSizeClick(size)}
              disabled={disabled}
              className={`paper-size-selector__button ${
                isSelected ? "is-selected" : ""
              } ${disabled ? "is-disabled" : ""}`}
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