export default function RawLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <div>{children}</div>
    </section>
  );
}
