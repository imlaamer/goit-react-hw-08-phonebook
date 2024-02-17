import { ThreeDots } from 'react-loader-spinner';

export function Loader() {
  return (
    <div
      className="loadingBox" //
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      }}
    >
      <ThreeDots
        visible={true}
        height="100"
        width="100"
        color="#3F51B5"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
