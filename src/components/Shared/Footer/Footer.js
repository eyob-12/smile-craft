import React from 'react';
import FooterDetail from './FooterDetail';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const noNamed = [
        { name: "Emergency Dental Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
        { name: "Check Up", link: "/checkup" },
    ]
    const ourAddress = [
        { name: "Bole, Addis Abeba", link: "//google.com/map" },
        { name: "pissa, Addis Abeba", link: "//google.com/map" },

    ]
    const oralHealth = [
        { name: "Emergency Dental Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" }
    ]
    const services = [
        { name: "Emergency Dental Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" }
    ]

    return (
        <footer className="footer-area clear-both sm-pe-5 footerBg">
            <div className="container pt-5">
                <div className="row md-py-5 footer-content">
                    {/* <FooterDetail key={1} menuTitle={"."} menuItems={noNamed} /> */}
                    <FooterDetail key={2} menuTitle="Services" menuItems={services} />
                    <FooterDetail key={3} menuTitle="Oral Health" menuItems={oralHealth} />
                    <FooterDetail key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="!#"></a></li>
                            <li className="list-inline-item"><a href="!#"></a></li>
                            <li className="list-inline-item"><a href="!#"></a></li>
                        </ul>
                        <div className="md-mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">+251 953 226 886</button>
                        </div>
                    </FooterDetail>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                    <h6>Crafted by ❤️ <Link to="https://eyob-12.vercel.app" className='text-danger'>eyob-12</Link></h6>
                </div>
            </div>
        </footer>
    );
};

export default Footer;