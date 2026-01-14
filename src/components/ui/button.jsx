import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'hover:opacity-90 focus:ring-red-500',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
        outline: 'border-2 bg-transparent hover:bg-opacity-10 focus:ring-red-500',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const Button = ({
  // Required parameters with defaults
  text = "Enroll Now",
  text_font_size = "18",
  text_font_family = "Inter",
  text_font_weight = "500",
  text_line_height = "22px",
  text_text_align = "left",
  text_color = "#ffffff",
  border_border_radius = "10px",
  fill_background = "linear-gradient(90deg",
  
  // Optional parameters (no defaults)
  fill_background_color,
  border_border,
  layout_align_self,
  effect_box_shadow,
  layout_width,
  padding,
  position,
  margin,
  layout_gap,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = "button",
  leftImage,
  rightImage,
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';
  const hasValidAlignSelf = layout_align_self && typeof layout_align_self === 'string' && layout_align_self?.trim() !== '';
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap?.trim() !== '';
  const hasValidBorder = border_border && typeof border_border === 'string' && border_border?.trim() !== '';
  const hasValidBoxShadow = effect_box_shadow && typeof effect_box_shadow === 'string' && effect_box_shadow?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
    hasValidAlignSelf ? `self-${layout_align_self}` : '',
    hasValidGap ? `gap-[${layout_gap}]` : '',
    hasValidBorder ? `border-[${border_border}]` : '',
    hasValidBoxShadow ? `shadow-[${effect_box_shadow}]` : '',
  ]?.filter(Boolean)?.join(' ');

  // Build inline styles for required parameters
  const buttonStyles = {
    fontSize: text_font_size ? `${text_font_size}px` : '18px',
    fontFamily: text_font_family || 'Inter',
    fontWeight: text_font_weight || '500',
    lineHeight: text_line_height || '22px',
    textAlign: text_text_align || 'center',
    color: text_color || '#ffffff',
    background: fill_background_color || fill_background || 'linear-gradient(90deg, #a81717 0%, #d83434 100%)',
    borderRadius: border_border_radius || '10px',
  };

  // Safe click handler
  const handleClick = (event) => {
    if (disabled) return;
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={buttonStyles}
      className={twMerge(
        buttonClasses({ variant, size }),
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {leftImage && (
        <img 
          src={leftImage?.src} 
          alt="" 
          className="mr-2"
          style={{ width: leftImage?.width, height: leftImage?.height }}
        />
      )}
      {children || text}
      {rightImage && (
        <img 
          src={rightImage?.src} 
          alt="" 
          className="ml-2"
          style={{ width: rightImage?.width, height: rightImage?.height }}
        />
      )}
    </button>
  );
};

export default Button;