
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ReactPlayer from 'react-player';
import HeadBodyGrid from './components/ContentLoaderComponent';
import AllCompoentLoader from './components/AllCompoentLoader';
import HistoriesLoader from './components/video';


const App = () => {
  const url = 'https://plus.unsplash.com/premium_photo-1674676471380-1258cb31b3ac?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  const imges = " "
  const defaultimg = "https://us.123rf.com/450wm/wasiliyg/wasiliyg1702/wasiliyg170200583/71886379-snapshot-vecteur-ic%C3%B4ne-image-vecteur-ic%C3%B4ne.jpg?ver=6"


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
  const defaultPlaseholder = {
    src: defaultimg,
    alt: 'image',
    width: 600,
    height: 450
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
        alt={defaultPlaseholder.alt}
        height={img.height}
        effect="blur"
        placeholderSrc={defaultPlaseholder.src}
        src={defaultPlaseholder.src}
        width={img.width} />
      {/* 
      <HeadBodyGrid>

      </HeadBodyGrid> */}
      <AllCompoentLoader />
      <HistoriesLoader />
    </div>

    // default img //! placeholderSrc={defaultPlaseholder.src} 
    //? lezyload component  zo'r ekan.


  )
}

export default App
