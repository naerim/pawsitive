/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_KAKAO_MAP_API_KEY: string
  // 다른 환경 변수들에 대한 타입 정의...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// import.meta.env. 로 접근하면 됩니다.
