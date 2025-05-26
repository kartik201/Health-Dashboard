/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#F8FAFC',
          100: '#F1F5F9',
          600: '#4F46E5',
          700: '#4338CA',
        },
        'secondary': {
          100: '#E0F2FE',
          400: '#38BDF8',
          500: '#0EA5E9',
        },
        'gray': {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
        },
        'success': {
          100: '#DCFCE7',
          500: '#22C55E',
        },
        'warning': {
          100: '#FEF3C7',
          500: '#F59E0B',
        },
        'danger': {
          100: '#FEE2E2',
          500: '#EF4444',
        }
      },
      boxShadow: {
        'card': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'dropdown': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'xl': '1rem',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 