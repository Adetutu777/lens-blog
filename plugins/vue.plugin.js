
import Vue from 'vue'

import { configureChains, createClient,defaultChains,} from 'vagmi';
  import { publicProvider } from 'vagmi/providers/public';
  const { chain, provider, webSocketProvider } = configureChains(
    [chain.mainnet, chain.polygon],
    [publicProvider()],
  );
  const client = createClient({
    autoConnect: true,
    provider,
    webSocketProvider,
  });
  
  Vue.use(VagmiPlugin(client));