export default function BucketLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div>{children}</div>
    </section>
  );
}
