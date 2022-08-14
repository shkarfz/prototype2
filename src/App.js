import './App.css';
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "contract/Build/contract.loader.js",
    dataUrl: "contract/Build/contract.data",
    frameworkUrl: "contract/Build/contract.framework.js",
    codeUrl: "contract/Build/contract.wasm",
  });
  return (
    <div className="App">
      <h1>React Unity Moralis SDK Test</h1>
      <Unity unityProvider={unityProvider} style={{
        width: "970px",
        height: "700px"
      }}/>
    </div>
  );
}

export default App;
