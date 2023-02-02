import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Router from "./routes/Router";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Layout>
					<Router />
				</Layout>
			</BrowserRouter>
		</div>
	);
}

export default App;
