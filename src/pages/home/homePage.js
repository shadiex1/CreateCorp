import React from "react";
import NavBar from "../../components/nav bar/navBar"
import Showcase from "../../sections/showcase/showcase"
import Icons from "../../sections/icons section/icons"
import CompanyOverview from "../../sections/company overview/companyOverview"
import Gallery from "../../sections/Gallery/gallery"
import LatestPost from "../../sections/latestpost/latestPost"
import StaffCarousel from "../../sections/staff carousel/staffCarousel"
import PricePlan from "../../sections/pricePlan/pricePlan"
import WhyChooseUs from "../../sections/why choose us/whyChooseUs"
import Counter from "../../sections/counter/counter"
import Banner from "../../sections/banner/banner"
import Footer from "../../components/footer/footer";

const homePage = props =>(
    <div>
        <NavBar/>
        <Showcase/>
        <Icons/>
        <CompanyOverview/>
        <Gallery/>
        <LatestPost/>
        <StaffCarousel/>
        <PricePlan/>
        <WhyChooseUs/>
        <Counter/>
        <Banner/>
        <Footer/>
    </div>
)


export default homePage;