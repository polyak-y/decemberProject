import Header                   from '../../components/Header';
import AllAboutCancer           from '../../components/AllAboutCancer';
import WhatNeedKnow             from '../../components/WhatNeedKnow';
import UsefulInformation        from '../../components/UsefulInformation';
import Specialists              from '../../components/Specialists';
import WhereToApply             from '../../components/WhereToApply';
import Footer                   from '../../components/Footer';

const Home = () => {
    return ( 
        <div>
            <Header />
            <AllAboutCancer />
            <WhatNeedKnow />
            <UsefulInformation />
            <Specialists />
            <WhereToApply />
            <Footer />
        </div>
   ) 
}

export default Home;