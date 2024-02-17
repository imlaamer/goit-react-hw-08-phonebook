export function Container({ children }) {
  return (
    <div
      style={{
        fontSize: 40,
        color: '#010101',
        paddingTop: 'calc(100vh / 2 - 210px)',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          width: 680,
          padding: 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'baseline',
          gap: 30,
          borderRadius: 20,
          boxShadow:
            'rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px',
        }}
      >
        {children}
      </div>
    </div>
  );
}
