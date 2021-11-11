const LoadingPage = () => {
  const container = {
    height: "100vh",
    display: "flex",
    fontSize: "2rem",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={container}>
      <div style={{ width: "50%", textAlign: "center" }}>
        <h1>Loading...</h1>
      </div>
    </div>
  );
};
export default LoadingPage;
