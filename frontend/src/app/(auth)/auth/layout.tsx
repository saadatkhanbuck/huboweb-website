export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#070121] to-[#170080]">
      <main className="w-full max-w-md p-4  shadow-md rounded">{children}</main>
    </div>
  );
}
