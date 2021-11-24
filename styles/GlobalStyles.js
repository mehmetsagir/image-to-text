import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	:root {
		--color-bg: #0E1117;
		--color-primary: #151922;
		--color-primary-hover: #191e26;
		--color-text: #8b949e;
	}
  * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font: inherit;
		color: inherit;
		outline: 0;
	}
	html, body {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 14px;
		height: 100%;
	}
	#__next {
		height: 100%;
	} 
	body {
		background: var(--color-bg);
		height: 100%;
	}
	a {
		text-decoration: none;
	}
	ul {
		list-style: none;
	}
	button {
		background: none;
		border: none;
	}
	img {
		width: 100%;
		height: 100%;
	}
`;

export default GlobalStyles;
