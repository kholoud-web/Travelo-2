export function AuthContainer({ children }) {
  return (
    <div className="min-h-screen flex items-center">
      <div className="container px-6 mx-auto">{children}</div>
    </div>
  );
}
