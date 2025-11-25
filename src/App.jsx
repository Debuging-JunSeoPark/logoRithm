import '@app/index.css';
import MainLayout from '@app/layouts/main-layout';

function App() {
  return (
    <MainLayout>
      <h1 className=" text-2xl font-bold">FSD + 전역 레이아웃 테스트</h1>
      <p className="mt-4">이 안쪽 박스만 파란 격자가 적용되는 영역이야.</p>
      <p className="font-pen text-3xl mt-6">나는 나눔펜스크립트야 ✍️</p>
    </MainLayout>
  );
}

export default App;
