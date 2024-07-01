import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
        {session ? (
          <>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/members">Find Members</Link></li>
            <li><button onClick={() => signOut()}>Logout</button></li>
          </>
        ) : (
          <li><button onClick={() => signIn()}>Login</button></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
