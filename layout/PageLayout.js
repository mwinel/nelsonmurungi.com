import Container from "../components/Container";

const PageLayout = ({ children }) => {
  return (
    <>
      {/* Header */}
      <Container>
        <h1>Header</h1>
      </Container>
      {/* Main */}
      <Container>
        <main>{children}</main>
      </Container>
      {/* Footer */}
      <Container>
        <footer>footer</footer>
      </Container>
    </>
  );
};

export default PageLayout;
