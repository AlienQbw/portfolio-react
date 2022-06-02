import MinimalisticCover from '../assets/resources/project-covers/minimalistic.png';
import OldPortfolioCover from '../assets/resources/project-covers/portfolio-old.png';
import ImagesCompressor from '../assets/resources/project-covers/images-comperssor.png';
import Portfolio from '../assets/resources/project-covers/portfolio.png';
import Snake from '../assets/resources/project-covers/snake.png';

const projectsData = [
  {
    cover: Portfolio,
    title: 'React Portfolio',
    description:
      'My current portfolio, designed in Figma and build using React',
    github: 'google.com',
    liveversion: 'google.pl',
    technology: ['php 33.3%', 'css 25.9%', 'html 24.0%', 'javascript 16.8%'],
  },
  {
    cover: OldPortfolioCover,
    title: 'First portfolio',
    description:
      'My first portfolio, source code for this is private, since I have built my own CMS, login form and data base for it using MySQL (but I am happy to show it in private).',
    github: 'google.com',
    liveversion: 'google.pl',
    technology: ['php 33.3%', 'css 25.9%', 'html 24.0%', 'javascript 16.8%'],
  },
  {
    cover: MinimalisticCover,
    title: 'Minimalistic',
    description:
      'Minimalistic is a simple wallpaper app that allows you to upload images. It has builtin search enginee (manually written)',
    github: 'google.com',
    liveversion: 'google.pl',
    technology: ['html 44.2%', 'css 21.2%', 'javascript 18.1%', 'php 16.5%'],
  },
  {
    cover: ImagesCompressor,
    title: 'Images Compressor',
    description:
      'Application that converts images to lower quality in order to minimze the size. Algorithm was used in Minimalistic app for the thumbnails of wallpapers',
    github: 'google.com',
    liveversion: 'google.pl',
    technology: ['php 100%'],
  },
  {
    cover: Snake,
    title: 'Snake Game',
    description:
      'Application that converts images to lower quality in order to minimze the size. Algorithm was used in Minimalistic app for the thumbnails of wallpapers',
    github: 'google.com',
    liveversion: 'google.pl',
    technology: ['javascript 57.9%', 'php 27.7%', 'css 14.4%'],
  },
];
export default projectsData;