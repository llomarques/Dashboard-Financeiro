export function Heading({ children }) {
  function definirCor() {
    const texto = children?.toString() || '';

    if (texto.includes('Lucro')) return 'blue';
    if (texto.includes('Prejuízo')) return 'red';
    return 'inherit';
  }

  return (
    <h1 style={{ color: definirCor() }}>
      {children}
    </h1>
  );
}