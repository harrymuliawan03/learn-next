import Link from "next/link";

export default function HeaderComponent() {
  return (
    <div>
      <h1>Header</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
