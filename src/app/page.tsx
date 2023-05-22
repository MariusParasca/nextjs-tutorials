import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex gap-4'>
      <Link href='posts'>Posts</Link>
      <Link href='customers'>Customers</Link>
    </div>
  );
}
