import Header from "@/components/Header";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div>
      <Header />
      <Card className="container mx-auto my-8 bg-orange-50 px-4 py-8">
        <h1 className="mb-4 text-center text-4xl font-bold">
          About ReviewHive
        </h1>
        <h2 className="mb-2 mt-6 text-2xl font-semibold">Our Mission</h2>
        <p>
          ReviewHive was created to help students make informed decisions about
          their lecturers. Throughout my degree, I struggled with choosing the
          right lecturers for each course. Often, I only found out who was a
          good or bad lecturer long{" "}
          <em>
            <strong>after</strong>
          </em>{" "}
          the change period had already ended — when it was too late to switch.
        </p>
        <p>
          While there was an existing Excel sheet for lecturer reviews, it was
          cluttered, and outdated. I wanted to provide a modern, and clean
          solution where students could easily view and share reviews, helping
          future students make better choices.
        </p>

        <h2 className="mb-2 mt-6 text-2xl font-semibold">
          What ReviewHive Offers
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>A Clean & Accessible Interface</strong> – Unlike outdated
            spreadsheets, ReviewHive is designed for ease of use, allowing
            students to quickly find relevant reviews.
          </li>
          <li>
            <strong>Anonymous Reviews</strong> – Students can freely share their
            experiences without worrying about being identified.
          </li>
        </ul>

        <h2 className="mb-2 mt-6 text-2xl font-semibold">Learning & Growth</h2>
        <p>
          Beyond solving a real problem, this project was also a{" "}
          <strong>learning experience</strong>. Developing ReviewHive allowed me
          to explore <strong>Next.js</strong>, improve my understanding of both{" "}
          <strong>frontend development</strong> and{" "}
          <strong>backend development</strong>, and gain hands-on experience
          with real-world challenges like{" "}
          <strong>
            UI design, performance optimization, and user experience
          </strong>
          .
        </p>

        <h2 className="mb-2 mt-6 text-2xl font-semibold">Looking Ahead</h2>
        <p>
          ReviewHive is a continuous work in progress, and I&apos;m always open
          to
          <strong> feedback and improvements</strong>. My goal is to refine the
          platform further and ensure students always have access to
          <strong> reliable</strong>, and <strong>up-to-date</strong> lecturer
          reviews.
        </p>
        <p>
          If you have any suggestions or feedback, feel free to email me at{" "}
          <a
            href="mailto:fredi1574@gmail.com"
            className="text-orange-400 underline"
          >
            fredi1574@gmail.com
          </a>
        </p>

        <p className="mt-6 font-semibold">
          Thank you for visiting ReviewHive. I hope it helps make your academic
          experience better!
        </p>
      </Card>
    </div>
  );
};

export default About;
