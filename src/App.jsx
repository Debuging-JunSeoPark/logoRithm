import '@app/index.css';
import Header from '@widgets/header';
import Footer from '@widgets/footer';

function App() {
  return (
    <div className="min-h-screen bg-[var(--background-base)] flex justify-center relative">

      {/* 600px 중앙 고정된 래퍼 */}
      <div className="w-full max-w-[600px] relative">

        {/* layout: grid 적용된 흰 박스 */}
        <div className="layout bg-grid min-h-screen">
          <Header />

          <main className="py-6 pb-24">  {/* pb-24은 Footer 가리지 말라고 추가 */}
            <h1 className="text-2xl font-bold">FSD + 전역 레이아웃 테스트</h1>
            <p className="mt-4">이 안쪽 박스만 파란 격자가 적용되는 영역이야.</p>
            <p className="font-pen text-3xl mt-6">나는 나눔펜스크립트야 ✍️</p>
          </main>
        </div>

        {/* 레이아웃 너비에 딱 맞는 glass footer */}
        <Footer />
      </div>

    </div>
  );
}

export default App;
