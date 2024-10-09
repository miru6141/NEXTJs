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
		animation: {
			spotlight: "spotlight 2s ease .75s 1 forwards",
		  },
		  keyframes: {
			spotlight: {
			  "0%": {
				opacity: "zero",
				transform: "translate(-72%, -62%) scale(0.5)",
			  },
			  "100%": {
				opacity: "one",
				transform: "translate(-50%,-40%) scale(1)",
			  },
			},
		  },
  		
  	}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate",)
  ],
};
export default config;



