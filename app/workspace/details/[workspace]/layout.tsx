export default function DetailsLayout({
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
  