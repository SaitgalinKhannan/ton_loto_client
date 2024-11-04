import './App.css'
import {Main} from "./pages/Main.tsx";
import LotteryProvider from "./provider/LotteryProvider.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import TonLottery from "./pages/TonLotoPage.tsx";
import WalletConnectPage from "./pages/WalletConnectPage.tsx";
import HoldTonLottery from "./pages/HoldTonLottery.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
    }, {
        path: "/ton",
        element: <TonLottery/>
    }, {
        path: "/wallet",
        element: <WalletConnectPage/>
    }, {
        path: "/ton/admin",
        element: <HoldTonLottery/>
    }
]);

function App() {
    return (
        <LotteryProvider>
            <RouterProvider router={router}/>
        </LotteryProvider>
    );
}

export default App
