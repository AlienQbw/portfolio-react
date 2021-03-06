import MinimalisticCover from '../assets/resources/project-covers/minimalistic.png';
import OldPortfolioCover from '../assets/resources/project-covers/portfolio-old.png';
import ImagesCompressor from '../assets/resources/project-covers/images-comperssor.png';
import Portfolio from '../assets/resources/project-covers/portfolio.png';
import Snake from '../assets/resources/project-covers/snake.png';

const projectsData = [
  {
    cover: MinimalisticCover,
    title: 'Minimalistic',
    subtitle: 'wallpaper app',
    description:
      'Minimalistic is a simple wallpaper app that allows you to upload images. It has a built-in search engine (coded by me). It uses a compressing algorithm from the "Images compressor" project, to create small-sized thumbnails in order to minimize load time and size of the resources to download',
    github: 'google.com',
    liveversion: 'google.pl',
    technology: ['html 44.2%', 'css 21.2%', 'javascript 18.1%', 'php 16.5%'],
  },
  {
    cover: Portfolio,
    title: 'React Portfolio',
    subtitle: 'personal Website',
    description:
      'My current portfolio, designed in Figma and built using React',
    github: 'google.com',
    liveversion: 'google.pl',
    technology: ['php 33.3%', 'css 25.9%', 'html 24.0%', 'javascript 16.8%'],
  },
  {
    cover: OldPortfolioCover,
    title: 'Portfolio',
    subtitle: 'first personal website',
    description:
      'My first portfolio. The source code is private, since I have built my own CMS, login form and data base for it using MySQL (but I am happy to show it in private). CMS has been created in order to be able to add or remove projects from the website. Login to access the admin panel from which I can perform certain operations.',
    github: 'google.com',
    liveversion: 'google.pl',
    technology: ['php 33.3%', 'css 25.9%', 'html 24.0%', 'javascript 16.8%'],
  },
  {
    cover: ImagesCompressor,
    title: 'Images Compressor',
    subtitle: 'image compressing app',
    description:
      'Application that converts images to lower quality in order to minimize the size. Algorithm was used in Minimalistic app for the thumbnails of wallpapers. The app takes the picture, reads the pixels, and then returns a new one by drawing it again with less amount of pixels',
    github: 'google.com',
    liveversion: 'google.pl',
    technology: ['php 100%'],
  },
  {
    cover: Snake,
    title: 'Snake',
    subtitle: 'snake game',
    description:
      'Simple snake game, written in JavaScrip using canvas. It uses cookies to save the score in a text file on the server',
    github: 'google.com',
    liveversion: 'google.pl',
    technology: ['javascript 57.9%', 'php 27.7%', 'css 14.4%'],
  },
];
export default projectsData;
