import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Divine theme colors
				divine: {
					"deep": "#0F0A1A",
					"dark": "#1A0F2E", 
					"purple": "#4A1A5C",
					"gold": "#FFD700",
					"pearl": "#F8F8FF",
					"light": "#E6E6FA",
					"celestial": "#191970",
					"ethereal": "#DDA0DD",
					"radiant": "#FFFACD",
					"luminous": "#F0F8FF",
					"sacred": "#9370DB"
				},
				// Keep existing cyberpunk colors for compatibility
				cyberpunk: {
					"dark": "#1A1F2C",
					"darker": "#141821",
					"purple": "#8B5CF6",
					"blue": "#1EAEDB",
					"pink": "#D946EF",
					"light-purple": "#D6BCFA",
					"neon-blue": "#00F0FF",
					"neon-pink": "#FF00FF",
					"neon-yellow": "#FFE600",
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'divine-glow': {
					'0%, 100%': { 
						textShadow: '0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.4)'
					},
					'50%': { 
						textShadow: '0 0 30px rgba(255, 215, 0, 1), 0 0 60px rgba(255, 215, 0, 0.6)'
					}
				},
				'heavenly-float': {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'33%': { transform: 'translateY(-15px) rotate(1deg)' },
					'66%': { transform: 'translateY(-8px) rotate(-1deg)' }
				},
				'divine-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(255, 215, 0, 0.6), 0 0 40px rgba(147, 112, 219, 0.4)'
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(255, 215, 0, 0.9), 0 0 80px rgba(147, 112, 219, 0.6)'
					}
				},
				'sacred-shimmer': {
					'0%': { backgroundPosition: '200% 0' },
					'100%': { backgroundPosition: '-200% 0' }
				},
				'ethereal-wave': {
					'0%, 100%': { 
						transform: 'translateX(0) scale(1)',
						opacity: '0.8'
					},
					'50%': { 
						transform: 'translateX(10px) scale(1.05)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'divine-glow': 'divine-glow 3s ease-in-out infinite',
				'heavenly-float': 'heavenly-float 8s ease-in-out infinite',
				'divine-pulse': 'divine-pulse 4s ease-in-out infinite',
				'sacred-shimmer': 'sacred-shimmer 3s linear infinite',
				'ethereal-wave': 'ethereal-wave 6s ease-in-out infinite',
				// Keep existing animations
				'glow': 'glow 2s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
