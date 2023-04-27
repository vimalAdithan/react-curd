export function Dashboard() {
  return (
    <div>
      <div className="dash">
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <a href="/">Home</a>
          <a href="/user">User</a>
        </div>
        <div>
          <p>CURD Dashboard</p>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <p>Welcome to CURD Home</p>
      </div>
    </div>
  );
}
