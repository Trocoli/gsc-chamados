import "@/styles/globals.css";
import { QueryClientProvider, QueryClient, } from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools'
import type { AppProps } from "next/app";

const queryClient: any = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'}/>
      </QueryClientProvider>
  );
}
