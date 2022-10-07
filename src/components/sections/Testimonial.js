import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

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
    title: 'Prediction for the next 4 days',
    paragraph: 'PM 2.5 is for the amount of contamination in the air. AQI is for the overall quality of air'
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
                <div className="testimonial-item-content">
                  <div className="text-sm mb-0">
                      <p><b>PM 2.5:</b> 210.752738</p>
                      <p><b>AQI:</b> 80</p>
                  </div>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Oct 7th</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">2022</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <div className="text-sm mb-0">
                      <p><b>PM 2.5:</b> 170.624330</p>
                      <p><b>AQI:</b> 67</p>
                  </div>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Oct 8th</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">2022</a>
                  </span>
                </div>
              </div>
            </div>

              <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <div className="text-sm mb-0">
                      <p><b>PM 2.5:</b> 158.324234</p>
                      <p><b>AQI:</b> 91</p>
                  </div>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Oct 9th</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">2022</a>
                  </span>
                </div>
              </div>
            </div>

              <div className="tiles-item reveal-from-bottom">
                  <div className="tiles-item-inner">
                      <div className="testimonial-item-content">
                          <div className="text-sm mb-0">
                              <p><b>PM 2.5:</b> 190.252732</p>
                              <p><b>AQI:</b> 103</p>
                          </div>
                      </div>
                      <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                          <span className="testimonial-item-name text-color-high">Oct 10th</span>
                          <span className="text-color-low"> / </span>
                          <span className="testimonial-item-link">
                              <a href="#0">2022</a>
                          </span>
                      </div>
                  </div>
              </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <div className="text-sm mb-0">
                      <p><b>PM 2.5:</b> 225.435437</p>
                      <p><b>AQI:</b> 113</p>
                  </div>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Oct 11th</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">2022</a>
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
