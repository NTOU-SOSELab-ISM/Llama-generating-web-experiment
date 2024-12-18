我要使用React和Vite框架實作一個網頁出來，以下是我的使用者需求:

參考```requirement.md```

以下是我的專案環境配置，依照此配置生成出所有符合需求的程式碼:

## Vite 配置設定
```
project name: vite-project
framework select: React
variant select: JavaScript + SWC
```
## src分層架構
```
./src/components //存放jsx的react component檔案
./src/styles //存放component 的 CSS 檔案
./src/pages //存放routing 分頁的jsx檔案
./src/App.jsx //注意App.jsx 和 main.jsx不會放在components資料夾裡面
./src/main.jsx 
./src/index.css //index.css和App.css不會放在styles資料夾裡面
./src/App.css
./index.html
```
## main.jsx
```
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```



style 使用CSS去撰寫
變數名稱使用小駝峰命名、函式名稱使用大駝峰命名，元件名稱使用大駝峰命名
盡量用低耦合的方式撰寫react component
善用useRef、useMemo、useEffect、useState、memo、useContext等等的React 函式
page的routing要用react-router library去實作
注意CSS和jsx是分開放在不同層的資料夾裡，所以components資料夾裡面的jsx要import css的時候的path要是 `/src/styles/{filename}`，注意要從style資料夾找，而不是直接從components資料夾裡面找，但是App.css會是放在和App.jsx同一層，所以App.jsx要import css的時候的path要是`/src/App.css`

給我符合使用者需求並遵照專案環境配置敘述給我所有的完整程式碼
