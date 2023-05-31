
import Header from './Header'
import MainTitle from './MainTitle';
import FutureBlock from './FutureBlock';
import TransparentBlock from './TransparentBlock';
import WidespreadBlock from './WidespreadBlock';
import IndustryBlock from './IndustryBlock';
import FaqsBlock from './FaqsBlock';
import NewsBlock from './NewsBlock';
import FooterBlock from './FooterBlock';


function MainPage() {
  return (
    <div >
      <Header/>
      <MainTitle/>
      <FutureBlock/>
      <TransparentBlock/>
      <WidespreadBlock/>
      <IndustryBlock/>
      <FaqsBlock/>
      <NewsBlock/>
      <FooterBlock/>
    </div>
  );
}

export default MainPage;
