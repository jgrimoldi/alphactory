import { Container } from './Interface/index';

function Header ({ children, variant, className }) {
  const styles = 'font-normal text-base';
  const variants = {
    blackText: `${styles} text-black`,
    whiteText: `${styles} text-white`
  };

  return (
    <header className={`${variants[variant]} text-center`}>
      <Container styles={className}>
        {children}
      </Container>
    </header>
  );
}

export default Header;
