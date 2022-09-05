import { createRoot } from "react-dom/client";
import App from "./pages/App";

const element = document.getElementById("root") as HTMLDivElement;
const root = createRoot(element);

root.render(<App />);
