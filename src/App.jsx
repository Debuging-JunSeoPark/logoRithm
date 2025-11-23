import '@app/index.css';
import Header from '@widgets/header';

function App() {
  return (
    <div className="min-h-screen bg-[var(--background-base)] flex justify-center">
  <div className="layout bg-grid">

        <Header />
        <main className="py-6 ">
          <h1 className="text-2xl font-bold">FSD + 전역 레이아웃 테스트</h1>
          <p className="mt-4">
            이 안쪽 박스만 파란 격자가 적용되는 영역이야.
          </p>
          <p className="font-pen text-3xl mt-6">나는 나눔펜스크립트야 ✍️</p>
        </main>
      </div>
    </div>
  );
}

export default App;
