import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, PenTool } from 'lucide-react';

const ContactItem = ({
  icon,
  title,
  value,
  href,
  delay
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
  delay: number;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start p-6 bg-white dark:bg-dark-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="mr-4 text-primary-500 dark:text-primary-400">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{value}</p>
      </div>
    </motion.a>
  );
};

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-dark-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Have a project in mind or want to discuss potential collaborations?
            Feel free to reach out through any of these channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContactItem
            icon={<Mail size={24} />}
            title="Email"
            value="Muhammad Anus Gul"
            href="muhammadanssguljalal@gmail.com"
            delay={0}
          />

          <ContactItem
            icon={<Linkedin size={24} />}
            title="LinkedIn"
            value="Muhammad Anus Gul"
            href="https://www.linkedin.com/in/muhammadanusgull/"
            delay={0.1}
          />

          <ContactItem
            icon={<Github size={24} />}
            title="GitHub"
            value="github.com/AnssGul"
            href="https://github.com/AnssGul"
            delay={0.2}
          />

          <ContactItem
            icon={<PenTool size={24} />}
            title="Portfolio"
            value="Muhammad Anus Gul"
            href="https://wakatime.com/@Anusgul"
            delay={0.3}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Build Something Amazing Together
          </h3>
          <a
            href="mailto:muhammadanssguljalal@gmail.com"
            className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;