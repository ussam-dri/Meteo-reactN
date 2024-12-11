/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	presets: [
		require("nativewind/preset"),
		["babel-preset-expo", { jsxImportSource: "nativewind" }],
		"nativewind/babel",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
