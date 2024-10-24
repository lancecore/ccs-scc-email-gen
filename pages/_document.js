import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel="icon"
						href="/favicon.png"
						type="image/png"
					/>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0, user-scalable=yes"
					/>
					{/* You can add other meta tags or links here */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
