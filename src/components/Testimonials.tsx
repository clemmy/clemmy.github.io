import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    message:
      'Clement was a tremendous help to me ramping up to a tech lead role on my team. I was able to learn a lot about web and front-end system design from him, and applied the knowledge in my team to get the big promotion.',
    author: 'Software Engineer at Fintech Unicorn',
  },
  {
    message:
      "I am very impressed by Clement's experience. He shared with me deep insights and learnings for me to fast forward my own career.",
    author: 'Software Engineer at Productivity Startup',
  },
  {
    message:
      'Clement carefully listened to my problems and concerns and helped me navigate my struggling internship into a successful full-time offer! Thank you!',
    author: 'Software Engineering Intern at Fintech Unicorn',
  },
  {
    message:
      'Clement gave me critical insights on my resume that helped me go from hardly any interviews to having too many interviews!',
    author: 'Software Engineer at Tesla',
  },
  {
    message:
      'I felt like I was in a very safe space when discussing salary expectations in the industry with Clement. We had a very transparent conversation about what I should target given my accomplishments and in the end, I am very satisfied with the results at my new job.',
    author: 'Senior Software Engineer at LinkedIn',
  },
  {
    message:
      'Interviewing has historically been very stressful for me, but Clement supported me along my entire job-hunting process and really helped to build up my confidence. I am now happily employed.',
    author: 'Software Engineer at Microsoft',
  },
  {
    message:
      'Clement showed a deep understanding towards our project goals and mission, and helped us make key decisions to build a solid foundation for our business. As a bonus, he also helped with the execution. I am very impressed with his capabilities.',
    author: 'CEO of E-Commerce Startup',
  },
];

export function Testimonials() {
  return (
    <div className="pt-10 border-t border-surface">
      <p className="text-xs uppercase tracking-widest text-muted mb-6">What people say</p>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full pb-10"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="text-center px-8">
              <p className="text-base leading-relaxed text-ink mb-4 max-w-md mx-auto">
                &ldquo;{t.message}&rdquo;
              </p>
              <p className="text-sm text-muted">&mdash; {t.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
