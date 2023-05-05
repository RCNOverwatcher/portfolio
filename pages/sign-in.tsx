import { SignIn } from '@clerk/nextjs';

const SignInPage = () => <SignIn path="/sign-in" routing="path" />;

export async function getStaticProps() {
  return {
    props: { title: 'Sign In' },
  };
}
export default SignInPage;
