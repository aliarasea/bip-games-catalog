import bip_fancy_logo from "./assets/bip-fancy-logo.png";

import "./App.css";
import { Link } from "react-router";

function App() {
	return (
		<main className="flex items-center justify-center pt-16 pb-4">
			<div className="flex-1 flex flex-col items-center gap-16 min-h-0">
				<header className="flex flex-row items-center gap-6">
					<img
						src={bip_fancy_logo}
						alt="BiP Games Logo"
						className="h-12 w-auto"
					/>
					<h1 className="app-header">BiP Games</h1>
				</header>
				<div className="max-w-[300px] w-full space-y-6 px-4">
					<nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
						<Link
							to="https://bip-sudoku.netlify.app/"
							className="block w-full rounded-lg px-4 py-2 text-center text-sm font-semibold app-link focus:outline-none focus:ring-2 focus:ring-offset-2"
						>
							Sudoku
						</Link>
						<Link
							to="https://bip-wordle.netlify.app/"
							className="block w-full rounded-lg px-4 py-2 text-center text-sm font-semibold app-link focus:outline-none focus:ring-2 focus:ring-offset-2"
						>
							Wordle
						</Link>
						<Link
							to="https://bip-hangman.netlify.app/"
							className="block w-full rounded-lg px-4 py-2 text-center text-sm font-semibold app-link focus:outline-none focus:ring-2 focus:ring-offset-2"
						>
							Hangman
						</Link>
						<Link
							to="https://bip-dortlu.netlify.app/"
							className="block w-full rounded-lg px-4 py-2 text-center text-sm font-semibold app-link focus:outline-none focus:ring-2 focus:ring-offset-2"
						>
							Dörtlu
						</Link>
					</nav>
				</div>
			</div>
		</main>
	);
}

export default App;
