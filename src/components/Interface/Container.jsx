export function Container ({ children, styles }) {
  return (
    <div className={`mx-auto w-full 2xl:max-w-[1920px] max-w-screen-xl 2xl:px-[75px] md:px-[50px] px-[20px] ${styles}`}>
      {children}
    </div>
  );
}
