import React from 'react';
import { CLPEDIAAPIClient } from './APIClient';

interface IState {}
interface IProps {
    productRawData: any;
}

const PAGE_SECTION_ID = {
    BANNER: 'banner',
    TATTOO_STUDIO: 'tattoo_studio',
    TATTOO_ARTIST: 'tattoo_artist',
    TATTOO_FLASH: 'tattoo_flash'
};

const PAGE_SECTION_TITLE = {
    HOME: 'Home',
    TATTOO_STUDIO: 'Tattoo Studio',
    TATTOO_ARTIST: 'Tattoo Artist',
    TATTOO_FLASH: 'Tattoo Flash'
};

class CLPEDIA extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        CLPEDIAAPIClient.stripePublishKey();
    }

    renderHeader() {
        const pageNavigator = (target: string, name: string) => {
            return (
                <li>
                    <a href={target} className="page-scroll">
                        {name}
                    </a>
                </li>
            );
        };

        return (
            <nav id="header" className="navbar navbar-default navbar-fixed-top on">
                <div className="container">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"
                        >
                            <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span>
                            <span className="icon-bar"></span> <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand page-scroll" href={`#${PAGE_SECTION_ID.BANNER}`}>
                            <i className="fa fa-angellist fa-rotate-90"></i> CLPEDIA
                        </a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            {pageNavigator(`#${PAGE_SECTION_ID.BANNER}`, PAGE_SECTION_TITLE.HOME)}
                            {pageNavigator(`#${PAGE_SECTION_ID.TATTOO_STUDIO}`, PAGE_SECTION_TITLE.TATTOO_STUDIO)}
                            {pageNavigator(`#${PAGE_SECTION_ID.TATTOO_ARTIST}`, PAGE_SECTION_TITLE.TATTOO_ARTIST)}
                            {pageNavigator(`#${PAGE_SECTION_ID.TATTOO_FLASH}`, PAGE_SECTION_TITLE.TATTOO_FLASH)}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

    renderBanner() {
        return (
            <header id={PAGE_SECTION_ID.BANNER}>
                <div className="intro text-center">
                    <div className="overlay">
                        <div className="container">
                            <div className="row">
                                <div className="intro-text">
                                    <h1>WELCOME TO CLPEDIA TATTOO WEB</h1>
                                    <p>TATTOO SHOWCASE ACROSS MALAYSIA.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }

    renderTattooStudio() {
        const studioInfo = (imageLink: string, studioName: string, hrefFacebook: string, hrefInstagram: string) => {
            return (
                <div className="col-xs-6 col-md-3">
                    <img src={imageLink} alt="..." className="img-circle team-img" />
                    <h4>{studioName}</h4>
                    <div className="social">
                        <ul className="social-media-icon">
                            <a href={hrefFacebook} target="_blank" className="social-media-icon-margin">
                                <div className="fa fa-facebook"></div>
                            </a>
                            <a href={hrefInstagram} target="_blank" className="social-media-icon-margin">
                                <div className="fa fa-instagram"></div>
                            </a>
                        </ul>
                    </div>
                </div>
            );
        };

        return (
            <div id={PAGE_SECTION_ID.TATTOO_STUDIO} className="text-center">
                <div className="tattoo_studio">
                    <div className="overlay">
                        <div className="container">
                            <div className="col-md-8 col-md-offset-2 section-title">
                                <h2>{PAGE_SECTION_TITLE.TATTOO_STUDIO}</h2>
                                <p>Tattoo Studio Across Malaysia.</p>
                                <p>Personal Favourite, Do Check Them Out!</p>
                            </div>
                            <div className="row">
                                {studioInfo(
                                    'img/studio/cheerink.jpg',
                                    'Cheer Ink Tattoo Studio',
                                    'https://www.facebook.com/cheerinktattoo/',
                                    'https://www.instagram.com/cheerinktattoo/'
                                )}
                                {studioInfo(
                                    'img/studio/october.jpg',
                                    'October Tattoo Studio',
                                    'https://www.facebook.com/octobertattoostudio/',
                                    'https://www.instagram.com/october.tattoo/'
                                )}
                                {studioInfo(
                                    'img/studio/drink.jpg',
                                    'Dr.Ink Tattoo Studio',
                                    'https://www.facebook.com/thedrinktattoobar/',
                                    'https://www.instagram.com/dr.inktattoostudio/'
                                )}
                                {studioInfo(
                                    'img/studio/inktime.jpg',
                                    'Inktime Tattoo Studio',
                                    'https://www.facebook.com/inktimestudio/',
                                    'https://www.instagram.com/inktime_studio/'
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderTattooArtist() {
        const artistInfo = (hrefInstagram: string, imageLink: string, artistName: string, studioName: string) => {
            return (
                <div className="col-md-3 col-sm-6 team">
                    <div className="thumbnail">
                        <a href={hrefInstagram} target="_blank">
                            <img src={imageLink} alt="..." className="img-circle team-img" />
                        </a>
                        <div className="caption">
                            <h4>{artistName}</h4>
                            <p>{studioName}</p>
                        </div>
                    </div>
                </div>
            );
        };

        return (
            <div id={PAGE_SECTION_ID.TATTOO_ARTIST} className="text-center">
                <div className="tattoo_artist">
                    <div className="overlay">
                        <div className="container">
                            <div className="col-md-8 col-md-offset-2 section-title">
                                <h2>{PAGE_SECTION_TITLE.TATTOO_ARTIST}</h2>
                                <p>Tattoo Artist Across Malaysia.</p>
                                <p>Personal Favourite, Do Check Them Out!</p>
                            </div>
                            <div className="row">
                                {artistInfo(
                                    'https://www.instagram.com/kcamlow_tattoo/',
                                    'img/artist/kcam.jpg',
                                    'Kcam',
                                    'Cheer Ink Tattoo Studio'
                                )}
                                {artistInfo(
                                    'https://www.instagram.com/yee_tattooist/',
                                    'img/artist/yee.jpg',
                                    'Yee',
                                    'October Tattoo Studio'
                                )}
                                {artistInfo(
                                    'https://www.instagram.com/rui_tattooist/',
                                    'img/artist/rui.jpg',
                                    'Rui',
                                    'Dr.Ink Tattoo Studio'
                                )}
                                {artistInfo(
                                    'https://www.instagram.com/tattooist_raice/',
                                    'img/artist/raice.jpg',
                                    'Raice',
                                    'Inktime Tattoo Studio'
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderTattooFlash() {
        const flashInfo = (id: string, imageLink: string, flashName: string, flashPrice: string) => {
            return (
                <div className="col-sm-6 col-md-3 col-lg-3 web">
                    <div className="portfolio-item">
                        <div className="hover-bg">
                            <a href={imageLink}>
                                <div className="hover-text">
                                    <h4>{flashName}</h4>
                                    <small>{flashPrice}</small>
                                </div>
                                <img src={imageLink} className="img-responsive" />
                            </a>
                        </div>
                    </div>
                    <div
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                            CLPEDIAAPIClient.stripePayment(id);
                        }}
                    >
                        <a>Buy Now</a>
                    </div>
                </div>
            );
        };

        return (
            <div id={PAGE_SECTION_ID.TATTOO_FLASH}>
                <div className="tattoo_flash">
                    <div className="overlay">
                        <div className="container">
                            <div className="col-md-8 col-md-offset-2 section-title text-center">
                                <h2>{PAGE_SECTION_TITLE.TATTOO_FLASH}</h2>
                                <p>Tattoo Flash Available From Artist.</p>
                                <p>Grab Them Now, Every Tattoo Is Unique!</p>
                            </div>
                            <div className="row">
                                <div className="portfolio-items">
                                    {Object.keys(this.props.productRawData).map((e: any, i) =>
                                        flashInfo(
                                            e,
                                            this.props.productRawData[e].image,
                                            this.props.productRawData[e].name,
                                            this.props.productRawData[e].description
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderFooter() {
        return (
            <nav id="footer" className="navbar navbar-fixed-bottom">
                <div className="container">
                    <div className="navbar-header">
                        <div className="container text-center">
                            <p>
                                Copyright &copy; 2021 Clpedia. All rights reserved. Disclaimer: All graphic assets
                                weren't mine.
                            </p>
                            <div
                                className="fb-like"
                                data-href="https://developers.facebook.com/docs/plugins/"
                                data-width=""
                                data-layout="button"
                                data-action="like"
                                data-size="small"
                                data-share="true"
                            ></div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

    render() {
        return (
            <div>
                {this.renderHeader()}
                {this.renderBanner()}
                {this.renderTattooStudio()}
                {this.renderTattooArtist()}
                {this.renderTattooFlash()}
                {this.renderFooter()}
            </div>
        );
    }
}

export default CLPEDIA;
