import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const pagerIndicatorClasses = cva(
  'flex items-center justify-center gap-2',
  {
    variants: {
      variant: {
        default: 'space-x-2',
        compact: 'space-x-1',
        spaced: 'space-x-4',
      },
      size: {
        small: 'gap-1',
        medium: 'gap-2',
        large: 'gap-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const dotClasses = cva(
  'rounded-full transition-all duration-300 cursor-pointer',
  {
    variants: {
      state: {
        active: 'bg-red-600 scale-110',
        inactive: 'bg-gray-300 hover:bg-gray-400',
      },
      size: {
        small: 'w-2 h-2',
        medium: 'w-3 h-3',
        large: 'w-4 h-4',
      },
    },
    defaultVariants: {
      state: 'inactive',
      size: 'medium',
    },
  }
);

const PagerIndicator = ({
  // Optional parameters (no defaults)
  layout_width,
  margin,
  position,
  
  // Standard React props
  totalPages = 5,
  currentPage = 0,
  onPageChange,
  variant,
  size,
  className,
  dotClassName,
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Safe page change handler
  const handlePageChange = (pageIndex) => {
    if (typeof onPageChange === 'function') {
      onPageChange(pageIndex);
    }
  };

  // Generate dots array
  const dots = Array.from({ length: totalPages }, (_, index) => index);

  return (
    <div
      className={twMerge(
        pagerIndicatorClasses({ variant, size }),
        optionalClasses,
        className
      )}
      role="tablist"
      aria-label="Page indicator"
      {...props}
    >
      {dots?.map((pageIndex) => (
        <button
          key={pageIndex}
          type="button"
          role="tab"
          aria-selected={pageIndex === currentPage}
          aria-label={`Go to page ${pageIndex + 1}`}
          className={twMerge(
            dotClasses({ 
              state: pageIndex === currentPage ? 'active' : 'inactive',
              size 
            }),
            dotClassName
          )}
          onClick={() => handlePageChange(pageIndex)}
        />
      ))}
    </div>
  );
};

export default PagerIndicator;