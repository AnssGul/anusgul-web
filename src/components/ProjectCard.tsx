import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { useInView } from 'react-intersection-observer';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="bg-white dark:bg-dark-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      <div className="h-48 overflow-hidden bg-gray-100 dark:bg-dark-700 relative">
        <div className="h-60 bg-gray-100 dark:bg-dark-700 flex items-center justify-center">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full mb-2">
            {project.tech}
          </span>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {project.description}
        </p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
        >
          View App <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;