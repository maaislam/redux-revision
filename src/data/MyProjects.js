import moviebear from '../images/project-image/moviebear.png';
import shipmentRecord from '../images/project-image/shipment-record.png';
import imageSearch from '../images/project-image/image-search.jpg';

const projects = [
  {
    title: 'Shipment Record',
    excerpt:
      'A react app allow user to view his/her shipment record at a glance.',
    detail:
      'This is a book-keeping app which let users view their shipment information at a glance. Users can search for shipment, sort shipment, edit shipment name and also view each shipment record in a new window.',
    clientName: 'Pristine Ltd.',
    projectImage: shipmentRecord,
    techStack: ['React', 'RESTapi', 'semantic ui'],
    liveDemoLink: 'https://shipmentrecord-98c34.web.app',
    sourceCodeLink: 'https://github.com/maaislam/shipmentRecord',
  },
  {
    title: 'Moviebear',
    excerpt:
      'A web application for keeping track of your favorite TV shows & movies',
    detail:
      'React movies app. The app features signIn and SignUp using email as well as social sites. The app also lets user mark favourite movies. The application is hosted using forebase and user data stored using heroku',
    clientName: '',
    projectImage: moviebear,
    techStack: ['React', 'Redux', 'Semantic ui'],
    sourceCodeLink: 'https://github.com/maaislam/moviebear',
    liveDemoLink: 'https://moviebear.netlify.app/',
  },
  {
    title: 'Image Search',
    detail: 'Image search App built using React and unsplash api',
    excerpt: 'Image search App built using React and unsplash api',
    clientName: '',
    projectImage: imageSearch,
    techStack: ['react', 'html5', 'ccs3', 'firebase-hosting', 'unsplash-api'],
    sourceCodeLink: 'https://github.com/maaislam/PhoenixImageSearch',
    liveDemoLink: 'https://phoenix-image-search.web.app/',
  },
];

export default projects;
