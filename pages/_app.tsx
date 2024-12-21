import { type AppProps } from "next/app";
import { Ubuntu } from "next/font/google";
import { ErrorBoundary } from "components/pages/ErrorBoundary";
import Metadata from "components/pages/Metadata";
import StyledApp from "components/pages/StyledApp";
import { FileSystemProvider } from "contexts/fileSystem";
import { MenuProvider } from "contexts/menu";
import { ProcessProvider } from "contexts/process";
import { SessionProvider } from "contexts/session";
import { ViewportProvider } from "contexts/viewport";

const ubuntu = Ubuntu({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const App = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <ViewportProvider>
    <ProcessProvider>
      <FileSystemProvider>
        <SessionProvider>
          <ErrorBoundary>
            <Metadata />
            <StyledApp className={ubuntu.className}>
              <MenuProvider>
                <Component {...pageProps} />
              </MenuProvider>
            </StyledApp>
          </ErrorBoundary>
        </SessionProvider>
      </FileSystemProvider>
    </ProcessProvider>
  </ViewportProvider>
);

export default App;
