import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => <SignUp />;

export async function getStaticProps() {
  return {
    props: { title: 'Sign Up' },
  };
}

export default SignUpPage;
