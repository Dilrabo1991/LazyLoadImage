
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ReactPlayer from 'react-player';
import Video from './components/video';

const App = () => {
  const url = 'https://plus.unsplash.com/premium_photo-1674676471380-1258cb31b3ac?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  const imges = " "
  const error = "https://www.istockphoto.com/photo/404-error-isolated-on-white-background-page-not-found-gm1481759725-508976803?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2F404&utm_medium=affiliate&utm_source=unsplash&utm_term=404%3A%3A%3A"

  const urlv = "https://www.youtube.com/watch?v=NpEaa2P7qZI"
  const video = "https://www.youtube.com/watch?v=Xc3rOhoAGtc "
  const plaseholder = {
    src: video,
    alt: 'video',
    width: 1000,
    height: 500
  }
  const videos = {
    src: urlv,
    alt: 'video',
    width: 1500,
    height: 700
  }

  const image = {
    src: url,
    alt: 'image',
    width: 600,
    height: 700
  }
  const img = {
    src: imges,
    alt: 'image',
    width: 600,
    height: 700
  }
  const errorimg = {
    src: error,
    alt: 'image',
    width: 600,
    height: 700
  }
  if (imges === error) {
    return (
      <LazyLoadImage
        alt={errorimg.alt}
        height={errorimg.height}
        effect="blur"
        placeholderSrc={errorimg.src}
        src={errorimg.src}
        width={errorimg.width} />
    )
  }
  return (
    <div className="App">
      <LazyLoadImage
        alt={image.alt}
        height={image.height}
        effect="blur"
        placeholderSrc={image.src}
        src={image.src}
        width={image.width} />
      <LazyLoadImage
        alt={img.alt}
        height={img.height}
        effect="blur"
        placeholderSrc={image.src}
        src={img.src}
        width={img.width} />
      <ReactPlayer
        className="reactplayer"
        alt={videos.alt}
        bgColor="black"
        placeholderSrc={videos.src}
        url={plaseholder.src}
        playing={true}
        width={plaseholder.width}
        controller
        loop
        height={plaseholder.height}
      />
      <Video />

    </div>



  )
}

export default App
