/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: '#091a2b',
  			main: '#005163',
  			secondary: '#f1f3f4',
  		},
		backGroundColor: {
			primary: '#f1f3f4',
			main: '#005163',
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
