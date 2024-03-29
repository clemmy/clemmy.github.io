import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { ButtonWithIcon } from '../components/ButtonWithIcon';
import { Avatar } from '../components/Avatar';
import { Layout } from '../components/Layout';
import { VenmoButton } from '../components/VenmoButton';
import { trackLinkClick } from '../utils/tracking';

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Clement Hoang</title>
        <meta
          name="description"
          content="Where you can find a map of Clement's online footprint."
        />
      </Helmet>
      <Avatar />
      <div className="text-center lg:w-2/5 md:w-4/6 w-full">
        <h1 className="text-5xl mb-4 font-semibold leading-tight text-sky-400">
          Clement Hoang
        </h1>
        <p className="mb-8 leading-relaxed">
          A software engineer with a wide experience from early-stage startups
          to large-scale engineering organizations. I am passionate about
          designing and creating delightful product experiences. In my free
          time, I love{' '}
          <a
            className="underline"
            href="https://medium.com/@clemmmy"
            target='_blank'
            onClick={() => {
              trackLinkClick({
                text: 'writing',
                href: 'https://medium.com/@clemmmy',
              });
            }}
          >
            writing
          </a>
          ,{' '}
          <a
            className="underline"
            href="https://instagram.com/professor.pan"
            target='_blank'
            onClick={() => {
              trackLinkClick({
                text: 'cooking',
                href: 'https://instagram.com/professor.pan',
              });
            }}
          >
            cooking
          </a>
          , and playing badminton. I also provide{' '}
          <Link
            className="underline"
            to="/consulting"
            target="_blank"
            onClick={() => {
              trackLinkClick({
                text: 'consulting and mentorship',
                href: '/consulting',
              });
            }}
          >
            consulting and mentorship
          </Link>
          .
        </p>

        <div className="flex flex-col justify-center">
          <ButtonWithIcon
            text="See my open source"
            href="https://github.com/clemmy"
            iconName="logo-github"
            className="bg-zinc-800 border border-white"
          />
          <ButtonWithIcon
            text="Read my articles"
            href="https://medium.com/@clemmmy"
            iconName="logo-medium"
            className="bg-zinc-800"
          />
          {/* Re-add resume once it's updated */}
          {/* <ButtonWithIcon
            text="View my resume"
            href="/resume.pdf"
            iconName="briefcase"
            className="bg-red-900"
          /> */}
          <ButtonWithIcon
            text="Cook with my recipes"
            href="https://instagram.com/professor.pan"
            iconName="restaurant"
            className="bg-orange-800"
          />
          <VenmoButton />
          <ButtonWithIcon
            text="Connect with me"
            href="https://ca.linkedin.com/in/clementhoang"
            iconName="logo-linkedin"
            className="bg-blue-800"
          />
          <ButtonWithIcon
            text="Follow my tweets"
            href="https://twitter.com/c8hoang"
            iconName="logo-twitter"
            className="bg-blue-600"
          />
          <ButtonWithIcon
            text="Schedule a consultation"
            href="/consulting"
            isInternal={true}
            iconName="chatbubbles"
            className="bg-teal-700"
          />
          <ButtonWithIcon
            text="Let's chat"
            href="mailto:me@clemmy.ninja"
            iconName="paper-plane"
            className="bg-green-700"
            shouldAnimate
          />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
