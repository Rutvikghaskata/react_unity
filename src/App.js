import "./App.css";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const CURRENT_WB_NAME = "rocket-doge";
  const { unityProvider} = useUnityContext({
    loaderUrl: `/${CURRENT_WB_NAME}/${CURRENT_WB_NAME}.loader.js`,
    dataUrl: `/${CURRENT_WB_NAME}/${CURRENT_WB_NAME}.data`,
    frameworkUrl: `/${CURRENT_WB_NAME}/${CURRENT_WB_NAME}.framework.js`,
    codeUrl: `/${CURRENT_WB_NAME}/${CURRENT_WB_NAME}.wasm`,
  });

  return (
    <div className="game-view">
      <Unity
        unityProvider={unityProvider}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "15px",
        }}
      />
    </div>
  );
}

export default App;
