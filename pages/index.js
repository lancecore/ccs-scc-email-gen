import Image from "next/image";
import localFont from "next/font/local";
import { useState } from "react";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export default function Home() {
	const [name, setName] = useState(""); // State for user name
	const [positions, setPositions] = useState(""); // State for user positions

	// Function to generate the email signature HTML
	const generateSignature = () => {
		return `
			<table width="600px" style="border-top:1px solid #ccc; font-family: Arial, sans-serif;background:transparent;">
				<tr>
					<td><br/>
						<p style="font-weight:bold;">${name}</p>
					</td>
				</tr>
				<tr>
					<td>
						<p>${positions
							.split(",")
							.join(
								' <span style="vertical-align:middle;font-size:10px;">|</span> '
							)}</p>
					</td>
				</tr>
				<tr>
					<td>
						<p><img src="https://covidsociety.ca/ccs-scc-logo.png" alt="CCS Logo" style="pointer-events: none;"/></p>
					</td>
				</tr>
				<tr>
					<td>
						<p>
							<a href="https://covidsociety.ca/" style="color: blue; text-decoration: underline;">covidsociety.ca</a> 
							<span style="vertical-align:middle;font-size:10px;">|</span> 
							<a href="https://societecovid.ca/" style="color: blue; text-decoration: underline;">societecovid.ca</a>
						</p>
					</td>
				</tr>
			</table>
		`;
	};

	return (
		<div
			className={`${geistSans.variable} ${geistMono.variable} flex items-center justify-center min-h-screen bg-slate-50`}
		>
			<main className="flex flex-col gap-8 max-w-full w-full md:max-w-[700px] p-2">
				<section className="grid grid-cols-2 items-center justify-center bg-white rounded border border-gray-300 overflow-hidden text-center">
					<img
						src="/ccs-scc-logo.png"
						alt="CCS-SCC Logo"
						className="block ml-4 -mt-2"
					/>
					<h1 className="text-2xl">Email Signature Generator</h1>
				</section>
				<section>
					<p className="text-base mb-4">
						This tool allows you to create a professional email
						signature quickly and easily.
					</p>
					<p className="text-base mb-4">
						Simply enter your name and any positions you hold
						(separated by commas) in the fields below.
					</p>
					<p className="text-base mb-4">
						Once you fill in the information, you will see a preview
						of your email signature. You can click on the preview to
						select the entire signature, and then you can copy and
						paste it into your email client.
					</p>
					<p className="text-base mb-4">
						You can also copy and paste the HTML version of the
						signature into your email client if your client supports
						it.
					</p>
					<p className="text-base mb-4 italic">
						<strong>Please note:</strong> This tool works best on a
						desktop or laptop computer. You may have issues
						copying/pasting your signature on a touch screen device.
					</p>
				</section>
				<div>
					<label className="mt-4 font-semibold">Your Name</label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="border border-gray-500 p-2 w-full mb-4 rounded"
						placeholder="First Last"
					/>
				</div>
				<div>
					<label className="font-semibold">
						Your Positions (separated by commas)
					</label>
					<input
						type="text"
						value={positions}
						onChange={(e) => setPositions(e.target.value)}
						className="border border-gray-500 p-2 w-full mb-4 rounded"
						placeholder="One Committee Chair, Another Position, Third Position"
					/>
				</div>
				<section>
					<h2 className="text-lg font-semibold">
						Email Signature Preview:
					</h2>
					<div
						className="border border-gray-500 p-4 overflow-x-hidden bg-white rounded"
						onClick={(e) => e.stopPropagation()}
					>
						<div
							style={{ userSelect: "all" }}
							dangerouslySetInnerHTML={{
								__html: generateSignature(),
							}}
						/>
					</div>
				</section>
				<section>
					<h2 className="text-lg font-semibold">HTML Signature:</h2>
					<textarea
						readOnly
						value={generateSignature().trim()}
						className="border border-gray-500 p-2 w-full h-96 rounded"
						onClick={(e) => e.target.select()}
					/>
				</section>
			</main>
		</div>
	);
}
