/**
 * Size Sorting Utility
 * Properly sorts clothing/product sizes in the correct order
 */

// Define standard size order
const SIZE_ORDER: Record<string, number> = {
  'XXS': 1,
  'XS': 2,
  'S': 3,
  'M': 4,
  'L': 5,
  'XL': 6,
  'XXL': 7,
  'XXXL': 8,
  '2XL': 6,
  '3XL': 8,
  '4XL': 9,
  '5XL': 10,
};

/**
 * Sort sizes in the correct order (XXS, XS, S, M, L, XL, XXL, etc.)
 * @param sizes - Array of size strings
 * @returns Sorted array of sizes
 */
export function sortSizes(sizes: string[]): string[] {
  return [...sizes].sort((a, b) => {
    const aUpper = a.toUpperCase().trim();
    const bUpper = b.toUpperCase().trim();

    const aOrder = SIZE_ORDER[aUpper] || 999;
    const bOrder = SIZE_ORDER[bUpper] || 999;

    // If both have defined orders, sort by order
    if (aOrder !== 999 && bOrder !== 999) {
      return aOrder - bOrder;
    }

    // If one has undefined order, it goes to the end
    if (aOrder === 999 && bOrder !== 999) return 1;
    if (aOrder !== 999 && bOrder === 999) return -1;

    // Both undefined, sort alphabetically
    return aUpper.localeCompare(bUpper);
  });
}

/**
 * Get the numeric order of a size
 * @param size - Size string
 * @returns Numeric order (lower = smaller size)
 */
export function getSizeOrder(size: string): number {
  const sizeUpper = size.toUpperCase().trim();
  return SIZE_ORDER[sizeUpper] || 999;
}

/**
 * Check if a size string is a valid standard size
 * @param size - Size string to validate
 * @returns True if the size is in the standard size list
 */
export function isStandardSize(size: string): boolean {
  const sizeUpper = size.toUpperCase().trim();
  return sizeUpper in SIZE_ORDER;
}

/**
 * Example usage in a component:
 *
 * const unsortedSizes = ['XL', 'M', 'S', 'XXL', 'L'];
 * const sortedSizes = sortSizes(unsortedSizes);
 * // Result: ['S', 'M', 'L', 'XL', 'XXL']
 *
 * // In your component:
 * const sizes = sortSizes(product.sizes);
 *
 * {sizes.map((size) => (
 *   <button key={size}>{size}</button>
 * ))}
 */
