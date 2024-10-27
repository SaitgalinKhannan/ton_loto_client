import './App.css'
import {Main} from "./pages/Main.tsx";
import LotteryProvider from "./provider/LotteryProvider.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import TonLoto from "./pages/TonLotoPage.tsx";
import WalletConnectPage from "./pages/WalletConnectPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
    }, {
        path: "/ton",
        element: <TonLoto/>
    }, {
        path: "/wallet",
        element: <WalletConnectPage/>
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
