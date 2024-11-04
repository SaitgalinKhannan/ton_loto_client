import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {TonConnectUIProvider} from "@tonconnect/ui-react";

export const API_URL = "https://tonloto.online:8443"
export const ContractAddress = "EQDK4SJS-KSgpTPPYUj86nRnRmgYIQUtWn0xG_rUwXkw6luD"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <TonConnectUIProvider
        actionsConfiguration={{
            twaReturnUrl: 'https://t.me/<YOUR_APP_NAME>'
        }}
        manifestUrl={`${API_URL}/tonConnect`}
    >
        <App/>
    </TonConnectUIProvider>
)
