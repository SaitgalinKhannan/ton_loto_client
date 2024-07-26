import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {TonConnectUIProvider} from "@tonconnect/ui-react";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

export const API_URL = "https://bc33-80-244-32-198.ngrok-free.app" //"https://tonloto.online:8443"
export const ContractAddress = "EQATF1nJayq2dEW7MRL6NS8S5Tq3MLBbENGDHQYURExWMzBX"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <TonConnectUIProvider
        actionsConfiguration={{
            twaReturnUrl: 'https://t.me/<YOUR_APP_NAME>'
        }}
        manifestUrl={`${API_URL}/tonConnect`}
    >
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <App/>
        </DevSupport>
    </TonConnectUIProvider>
)
