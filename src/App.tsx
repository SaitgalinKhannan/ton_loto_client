import './App.css'
import {Main} from "./components/Main.tsx";
import LotteryProvider from "./provider/LotteryProvider.tsx";

function App() {
    return (
        <LotteryProvider>
            <Main/>
        </LotteryProvider>
    );
}

export default App
