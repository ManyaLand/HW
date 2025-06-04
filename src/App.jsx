const now = new Date();

export const App = () => {
	return (
		<div>
			<main>
				<h1>Hello</h1>
			</main>
			<footer>{now.getFullYear()}</footer>
		</div>
	);
};
