import Link from "next/link";

function Header() {
  return (
    <div className="flex gap-20 justify-center bg-amber-200 p-4 rounded-full m-8">
      <h1>SASHAY</h1>
      <Link href="/feed" className="text-blue-500">
        Feed
      </Link>
      <Link href="/profile" className="text-blue-500">
        Profile
      </Link>
    </div>
  );
}

export default Header;
