// module.exports = {
//   content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
//   darkMode: "class",
//   theme: {
//     screens: {
//       sm: '640px',   
//       md: '768px',    
//       lg: '1024px',   
//       xl: '1280px',
//       '2xl': '1536px'
//     },
//     extend: {
//       colors: {
//         // Primary Brand Colors
//         primary: {
//           background: "var(--primary-background)",
//           foreground: "var(--primary-foreground)",
//           light: "var(--primary-light)",
//           dark: "var(--primary-dark)",
//           darker: "var(--primary-darker)"
//         },
//         // Secondary Colors
//         secondary: {
//           background: "var(--secondary-background)",
//           foreground: "var(--secondary-foreground)",
//           muted: "var(--secondary-muted)",
//           light: "var(--secondary-light)"
//         },
//         // Background Colors
//         background: {
//           main: "var(--bg-main)",
//           overlay: {
//             light: "var(--bg-overlay-light)",
//             medium: "var(--bg-overlay-medium)",
//             dark: "var(--bg-overlay-dark)"
//           },
//           accent: {
//             light: "var(--bg-accent-light)",
//             medium: "var(--bg-accent-medium)"
//           },
//           neutral: "var(--bg-neutral)"
//         },
//         // Text Colors
//         text: {
//           primary: "var(--text-primary)",
//           secondary: "var(--text-secondary)",
//           muted: "var(--text-muted)",
//           accent: "var(--text-accent)",
//           inverse: "var(--text-inverse)"
//         },
//         // Border Colors
//         border: {
//           primary: "var(--border-primary)",
//           accent: "var(--border-accent)",
//           neutral: "var(--border-neutral)"
//         },
//         // Component-specific Colors
//         header: {
//           text: "var(--header-text)"
//         },
//         button: {
//           primary: {
//             background: "var(--button-primary-bg)",
//             text: "var(--button-primary-text)"
//           },
//           secondary: {
//             background: "var(--button-secondary-bg)",
//             text: "var(--button-secondary-text)"
//           },
//           muted: {
//             text: "var(--button-muted-text)"
//           }
//         },
//         footer: {
//           link: "var(--footer-link-text)"
//         },
//         line: {
//           accent: "var(--line-accent-bg)"
//         }
//       },
//       fontSize: {
//         'xs': 'var(--font-size-xs)',
//         'sm': 'var(--font-size-sm)',
//         'base': 'var(--font-size-base)',
//         'md': 'var(--font-size-md)',
//         'lg': 'var(--font-size-lg)',
//         'xl': 'var(--font-size-xl)',
//         '2xl': 'var(--font-size-2xl)',
//         '3xl': 'var(--font-size-3xl)'
//       },
//       fontWeight: {
//         'normal': 'var(--font-weight-normal)',
//         'medium': 'var(--font-weight-medium)',
//         'semibold': 'var(--font-weight-semibold)',
//         'bold': 'var(--font-weight-bold)'
//       },
//       lineHeight: {
//         'xs': 'var(--line-height-xs)',
//         'sm': 'var(--line-height-sm)',
//         'base': 'var(--line-height-base)',
//         'md': 'var(--line-height-md)',
//         'lg': 'var(--line-height-lg)',
//         'xl': 'var(--line-height-xl)',
//         '2xl': 'var(--line-height-2xl)',
//         '3xl': 'var(--line-height-3xl)',
//         '4xl': 'var(--line-height-4xl)',
//         '5xl': 'var(--line-height-5xl)',
//         '6xl': 'var(--line-height-6xl)',
//         '7xl': 'var(--line-height-7xl)',
//         '8xl': 'var(--line-height-8xl)'
//       },
//       spacing: {
//         'xs': 'var(--spacing-xs)',
//         'sm': 'var(--spacing-sm)',
//         'base': 'var(--spacing-base)',
//         'md': 'var(--spacing-md)',
//         'lg': 'var(--spacing-lg)',
//         'xl': 'var(--spacing-xl)',
//         '2xl': 'var(--spacing-2xl)',
//         '3xl': 'var(--spacing-3xl)',
//         '4xl': 'var(--spacing-4xl)',
//         '5xl': 'var(--spacing-5xl)',
//         '6xl': 'var(--spacing-6xl)',
//         '7xl': 'var(--spacing-7xl)',
//         '8xl': 'var(--spacing-8xl)',
//         '9xl': 'var(--spacing-9xl)',
//         '10xl': 'var(--spacing-10xl)'
//       },
//       borderRadius: {
//         'sm': 'var(--radius-sm)',
//         'base': 'var(--radius-base)',
//         'md': 'var(--radius-md)',
//         'lg': 'var(--radius-lg)',
//         'xl': 'var(--radius-xl)',
//         '2xl': 'var(--radius-2xl)',
//         '3xl': 'var(--radius-3xl)',
//         '4xl': 'var(--radius-4xl)',
//         '5xl': 'var(--radius-5xl)',
//         '6xl': 'var(--radius-6xl)',
//         '7xl': 'var(--radius-7xl)'
//       },
//       // **Fade In/Out Animation**
//       keyframes: {
//         fadeInOut: {
//           '0%, 100%': { opacity: '0' },
//           '50%': { opacity: '1' },
//         },
//       },
//       animation: {
//         'fade-in-out': 'fadeInOut 3s ease-in-out infinite',
//       },
//     }
//   },
//   plugins: [],
// };

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        // Primary Brand Colors
        primary: {
          background: "var(--primary-background)",
          foreground: "var(--primary-foreground)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
          darker: "var(--primary-darker)",
        },
        // Secondary Colors
        secondary: {
          background: "var(--secondary-background)",
          foreground: "var(--secondary-foreground)",
          muted: "var(--secondary-muted)",
          light: "var(--secondary-light)",
        },
        // Background Colors
        background: {
          main: "var(--bg-main)",
          overlay: {
            light: "var(--bg-overlay-light)",
            medium: "var(--bg-overlay-medium)",
            dark: "var(--bg-overlay-dark)",
          },
          accent: {
            light: "var(--bg-accent-light)",
            medium: "var(--bg-accent-medium)",
          },
          neutral: "var(--bg-neutral)",
        },
        // Text Colors
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          accent: "var(--text-accent)",
          inverse: "var(--text-inverse)",
        },
        // Border Colors
        border: {
          primary: "var(--border-primary)",
          accent: "var(--border-accent)",
          neutral: "var(--border-neutral)",
        },
        // Component-specific Colors
        header: {
          text: "var(--header-text)",
        },
        button: {
          primary: {
            background: "var(--button-primary-bg)",
            text: "var(--button-primary-text)",
          },
          secondary: {
            background: "var(--button-secondary-bg)",
            text: "var(--button-secondary-text)",
          },
          muted: {
            text: "var(--button-muted-text)",
          },
        },
        footer: {
          link: "var(--footer-link-text)",
        },
        line: {
          accent: "var(--line-accent-bg)",
        },
      },
      fontSize: {
        xs: "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        base: "var(--font-size-base)",
        md: "var(--font-size-md)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
        "2xl": "var(--font-size-2xl)",
        "3xl": "var(--font-size-3xl)",
      },
      fontWeight: {
        normal: "var(--font-weight-normal)",
        medium: "var(--font-weight-medium)",
        semibold: "var(--font-weight-semibold)",
        bold: "var(--font-weight-bold)",
      },
      lineHeight: {
        xs: "var(--line-height-xs)",
        sm: "var(--line-height-sm)",
        base: "var(--line-height-base)",
        md: "var(--line-height-md)",
        lg: "var(--line-height-lg)",
        xl: "var(--line-height-xl)",
        "2xl": "var(--line-height-2xl)",
        "3xl": "var(--line-height-3xl)",
        "4xl": "var(--line-height-4xl)",
        "5xl": "var(--line-height-5xl)",
        "6xl": "var(--line-height-6xl)",
        "7xl": "var(--line-height-7xl)",
        "8xl": "var(--line-height-8xl)",
      },
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        base: "var(--spacing-base)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        "2xl": "var(--spacing-2xl)",
        "3xl": "var(--spacing-3xl)",
        "4xl": "var(--spacing-4xl)",
        "5xl": "var(--spacing-5xl)",
        "6xl": "var(--spacing-6xl)",
        "7xl": "var(--spacing-7xl)",
        "8xl": "var(--spacing-8xl)",
        "9xl": "var(--spacing-9xl)",
        "10xl": "var(--spacing-10xl)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        base: "var(--radius-base)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        "3xl": "var(--radius-3xl)",
        "4xl": "var(--radius-4xl)",
        "5xl": "var(--radius-5xl)",
        "6xl": "var(--radius-6xl)",
        "7xl": "var(--radius-7xl)",
      },
      // Animations
      keyframes: {
        fadeInOut: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-in-out": "fadeInOut 3s ease-in-out infinite",
        "spin-slow": "spinSlow 20s linear infinite", // NEW animation
      },
    },
  },
  plugins: [],
};



