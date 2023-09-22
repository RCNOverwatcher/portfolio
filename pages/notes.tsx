import { redirect } from 'next/navigation';
export default async function Home({ params }) {
  redirect('https://rcnoverwatcher.github.io/notes');
  // ...
}
