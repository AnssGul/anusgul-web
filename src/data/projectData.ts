import { Project } from '../types';

export const projectData: Project[] = [
  {
    title: 'Wineish',
    tech: 'Flutter (Bloc)',
    description: 'Developed an app offering job listings, event details, wine pairing suggestions, and chat features for users.',
    link: 'https://play.google.com/store/apps/details?id=com.wineish.app&pcampaignid=web_share',
    thumbnail: '/svg/wineish.svg'
  },
  {
    title: 'Quraan e Mubeen',
    tech: 'Flutter (Bloc)',
    description: 'Discover Quran recitations, prayer times, daily duas, and Hadith collections in our Islamic app.',
    link: 'https://play.google.com/store/apps/details?id=com.quraanemubeen.app&pcampaignid=web_share',
    thumbnail: '/png/quran.png'
  },
  {
    title: 'Read Maududi',
    tech: 'Flutter (Bloc)',
    description: 'Developed an app offering access to content related to Maulana Maududi, allowing users to read, listen to audio, and watch videos, providing a comprehensive platform for exploring his work. Stay connected to your faith with reminders and spiritual insights.',
    link: 'https://apps.apple.com/us/app/read-maududi/id6711342459',
    thumbnail: '/svg/read_maududi.svg'
  },
  {
    title: 'IPassenger',
    tech: 'Flutter (GETx)',
    description: 'A ride-sharing app providing seamless, secure, and reliable transportation services with user-friendly features.',
    link: 'https://play.google.com/store/apps/details?id=com.ustf.ipassengerapp',
    thumbnail: '/svg/ipassenger.svg'
  },
  {
    title: 'Side of the Road',
    tech: 'Flutter (GETx)',
    description: 'Side of the Road is your neighborhood\'s digital hub. Discover free stuff, explore local businesses and vendors, and find upcoming events. Join our vibrant community and participate in monthly contests for a chance to win exciting prizes, just by signing up.',
    link: 'https://play.google.com/store/apps/details?id=com.sideoftheroads.android',
    thumbnail: '/svg/sotr.svg'
  },
  {
    title: 'Nairobi Professional',
    tech: 'Flutter (GETx)',
    description: 'Nairobi Professional connects stylists, brands & YOU!',
    link: 'https://play.google.com/store/apps/details?id=com.nairobi.professional&pcampaignid=web_share',
    thumbnail: '/svg/nairobi.svg'
  },
  {
    title: 'Swipe Lover',
    tech: 'Flutter (Bloc)',
    description: 'Swipe Lover is a dating app that connects you with like-minded individuals.',
    link: 'https://play.google.com/store/apps/details?id=com.swipelover.app',
    thumbnail: '/svg/swipe.svg'
  }
];

export const skills = {
  mobile: ['Flutter', 'Bloc', 'GetX', 'Firebase', 'REST APIs', 'State Management', 'UI/UX Design'],
  backend: ['NestJS', 'Express', 'TypeScript', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 'GraphQL'],
  others: ['Git', 'CI/CD', 'Agile', 'Unit Testing', 'App Store Deployment', 'Play Store Deployment']
};