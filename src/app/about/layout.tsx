import Link from "next/link";

export default function AboutLayout({
  children,
  price,
}: {
  children: React.ReactNode;
  price: React.ReactNode;
}) {
  console.log(price);
  return (
    <>
      <nav className="fixed left-0 top-20 z-10 h-screen w-60">
        <ul>
          <Link href={"/home"}>
            <li>Home</li>
          </Link>
          <li>About</li>
          <li>Profile</li>
          <li>Login</li>
          <li>Chart</li>
        </ul>
      </nav>
      <div>{price}</div>
      <div>{children}</div>
    </>
  );
}
