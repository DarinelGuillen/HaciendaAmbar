
import RecuerdosParaSiempre from "../components/molecules/RecuerdosParaSiempre";
import CarruselImagenes from "../components/molecules/CarruselImagenes";
import Footer from "../components/molecules/Footer";
import Header from "../components/molecules/Header";
import Main from "../components/organism/Main";
import Slider from "../components/atoms/Slider";

function Landing() {
  const mockImagenes = [
		'https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/279867919_400251142107021_3419976306744714578_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEA9z6msgCldV8J8C7UShRKQmy3n_yzyGVCbLef_LPIZWhSuy1x744eRihlJq2qCdWFxIiictrj4YdWj0BTSKSW&_nc_ohc=DJcWE4ZtiuQAX9nrDJM&_nc_ht=scontent.ftgz3-1.fna&oh=00_AfCKXWHz7z6mY9X0TdXHwjyjXNvKHAHZqSfL0FxXffDGeQ&oe=63FBF5D5',
		'https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/278063702_382406983891437_1717211546658058726_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGfBJSnxk6FQpzAvrqkBa33wZSJjPEi2g_BlImM8SLaD86uvN4L12HOIz9r7yHTzxacDRYjipEShPlKRs281P6L&_nc_ohc=mCR-p2VykVQAX8j4zPV&_nc_ht=scontent.ftgz3-1.fna&oh=00_AfCl4yIWOIPSxxM9iXvL3rD7WGtf8j7cZjNv9_2OfRVknQ&oe=63FD5AF3',
		'https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/319878546_555515809342753_1207406271417015108_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE7fGUWosP2X9-5z8f8nWQ7N7ifKGG_1wU3uJ8oYb_XBRVhigHnMceGDJ5JXuHg5nZCvCYS6yRYyBwBnlz3FeVa&_nc_ohc=lUgaC8hHq78AX_cUu93&_nc_ht=scontent.ftgz3-1.fna&oh=00_AfDlwLMxNn1JYv5N1OGhWOjSBEnBvt2ibgQZj2LLE9zYGw&oe=63FC47A5',
	];
  return (
    <>
    <Header></Header>
    <Main/>
    <Slider imagenes={mockImagenes}/>
    <RecuerdosParaSiempre></RecuerdosParaSiempre>
    
    <Footer></Footer>
</>
  );
}
export default Landing;
