import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Meet the Team',
    paragraph: 'The Galaxy Fighter Kongz team is dedicated to producing a unique NFT experince enriching the space and providing an enjoyable community environment to the project holders.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
              <Image
                className="has-shadow"
                src={require('./../../assets/images/teamimage1.jpg')}
                alt="Hero"
                width={896}
                height={504} />
                <p className='mb-0' style={{fontSize:'15px', lineHeight:'110%'}} > A crypto investor since 2020 I became hooked on NFTs immediately upon entering the space. Inspired by the strong communities of cryptomories and kaiju kingz I am commited to contributing to the space. I purchased this project admist abandonment from the original founder in order to save the great community found here. I'm excited and optimistic beginning this endavour to provide value & memories to all supporters who share our vision. </p>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Kyle B</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Owner-Community Manager</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
              <Image
                className="has-shadow"
                src={require('./../../assets/images/teamimage2.jpg')}
                alt="Hero"
                width={896}
                height={504} />
                                <p className='mb-0' style={{fontSize:'15px', lineHeight:'110%'}} > Utilizing strong sales and marketing skills acquried during my time obtaining a Bachelors Degree in Management & a Masters Degree in Legal Studies I strive to transform this project into a brand. Expanding my skillset as a top performer of a Fortune 500 SaaS company I enjoy marketing, making connections, and staying in touch with industry trends.</p>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Jbala</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Project Manager-Marketing</a>
                  </span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;