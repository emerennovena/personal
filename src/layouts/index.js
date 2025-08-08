import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import styled from 'styled-components';
import './index.css';
import { siteMeta } from '../data/Seo';
import favicon from '../assets/images/rash-favicon.png';
import whitebg from '../assets/images/white-bg.jpeg';

const Wrapper = styled.div`
    background-color: white;
    background-image: url(${whitebg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    width: 100%;
    min-height: 100vh;
    height: auto;
    padding: 5% 8%;
    position: relative;
    text-align: left;

    @media (max-width: 700px) {
        min-height: 100vh;
    }
`;



export default class Layout extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>{siteMeta.title}</title>
                    <link rel="icon" href={favicon} />
                    <meta name="description" content="Hello there, welcome to my portfolio." />
                </Helmet>
                <Header />
                <Wrapper>{this.props.children}</Wrapper>
                <Footer />
            </>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.node,
};
