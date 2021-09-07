/* eslint-disable global-require */
import { useState, useLayoutEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useTheme } from '@material-ui/core';
import { CSSStyle } from '../types/types';
import ProgressiveImgWithFallback from '../components/ProgressiveImgWithFallback';
import { hoverable } from '../styles/Styles';
import WorksCard from '../components/WorksCard';
import useWindowSize from '../hooks/useWindowResize';

const MARGINS_TOP = 200;
const MARGINS_LEFT_RIGHT = 60;

type StyleProps = {
  parentRowWidth: number;
};

const imgBase: CSSStyle = {
  borderRadius: '10px',
  position: 'relative',
};

const hoverableScaled: CSSStyle = {
  ...hoverable,
  '&:hover': {
    transform: 'scale(1.29)',
  },
};

const animShiftPortraitRight = { top: '35%', left: '25%' };
const animShiftPortraitLeft = { top: '35%', left: '47%' };
const animShiftLandscape = { top: '35%', left: '49%' };

const useStyles = makeStyles({
  imgWorks: {
    ...imgBase,
    ...hoverable,
  },
  imgWorksScaled: {
    ...imgBase,
    ...hoverableScaled,
    transform: 'scale(1.25)',
  },
  landscapeImg: (props: StyleProps) => ({
    width: `${(props.parentRowWidth - 2 * MARGINS_LEFT_RIGHT) / 1.5}px`,
  }),
  portraitSideImg: (props: StyleProps) => ({
    height: `${
      ((props.parentRowWidth - 2 * MARGINS_LEFT_RIGHT) / 2.6) * 0.59
    }px`,
  }),
  portraitImg: {
    height: `${window.visualViewport.height * 0.6}px`,
  },
  marginRight: {
    marginRight: `${MARGINS_LEFT_RIGHT}px`,
  },
  marginLeft: {
    marginLeft: `${MARGINS_LEFT_RIGHT}px`,
  },
});

export default function FrontendWorks() {
  const parentRowRef = useRef<HTMLDivElement>(null);
  const [parentRowWidth, setWidth] = useState(0);
  const classes = useStyles({ parentRowWidth });
  const theme = useTheme();
  const { width: windowWidth } = useWindowSize();

  useLayoutEffect(() => {
    setWidth(parentRowRef.current?.offsetWidth || 0);
  }, [parentRowRef]);

  function Heading() {
    return (
      <div
        style={{
          display: 'flex',
          padding: '0 7.5vw 7.5vw 7.5vw',
          justifyContent: 'center',
        }}
      >
        <h1
          id='works'
          style={{
            color: 'rgb(12, 18, 72)',
            margin: 0,
            paddingBottom: '0 7.5vw',
            width: windowWidth >= theme.breakpoints.values.md ? '80vw' : '100%',
          }}
        >
          Some Things I’ve Built 🔮
        </h1>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        padding: '7.5vw 0',
        flexDirection: 'column',
      }}
    >
      <Heading />
      <WorksCard
        parentWidth={parentRowWidth}
        marginBottom='7.5vw'
        imgSide='right'
        href='https://vigorous-wright-d3c341.netlify.app/'
        imgProps={{
          src: require('../assets/works/fem-order-summary.webp').default,
          srcFallback: require('../assets/works/fem-order-summary.png').default,
          placeholder: require('../assets/works/fem-order-summary_lowres.webp')
            .default,
          placeholderFallback:
            require('../assets/works/fem-order-summary_lowres.png').default,
        }}
        descriptionProps={{
          title: 'Order Summary Component',
          github: 'https://github.com/HansKre/fem-order-summary-component',
        }}
      >
        <h3 style={{ color: theme.palette.primary.main, paddingTop: 0 }}>
          My goal was to implement a design pixel-perfectly with only an image
          of it and the font-family given. Result was this beautiful and
          reuseable order summary component.
        </h3>
        <h3 style={{ color: theme.palette.primary.main }}>
          <b>
            What I learned: estimate distance between UI elements, positioning
            and aligning items with CSS, improved my eye for detail
          </b>
        </h3>
        <h3 style={{ color: theme.palette.primary.contrastText }}>
          <i>React.js | Material-ui | CSS | Netlify</i>
        </h3>
      </WorksCard>
      <div
        ref={parentRowRef}
        style={{
          display: 'flex',
          padding: '0 7.5vw',
          justifyContent: 'center',
          flexWrap: 'wrap',
          backgroundColor: 'rgb(178, 178, 178)',
        }}
      >
        {parentRowWidth && (
          <div
            style={{
              display: 'flex',
              flex: '1 1 100%',
              marginTop: `${MARGINS_TOP}px`,
              padding: '10vw 0vw 10vw 0vw',
            }}
          >
            <Paper elevation={12} style={{ display: 'flex', flex: '1 1 100%' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flex: '0 1 50%',
                  alignItems: 'flex-end',
                  height: '100%',
                  justifyContent: 'center',
                }}
              >
                <h1 style={{ textAlign: 'end' }}>React Calculator</h1>
                <h3
                  style={{
                    textAlign: 'end',
                    paddingLeft: '70px',
                    paddingTop: 0,
                  }}
                >
                  Showcase for passing data between components using{' '}
                  <span>props</span>, <span>grid layout</span> and hand-picked
                  fonts to get that digital look.
                </h3>
              </div>
              <div
                style={{
                  display: 'flex',
                  flex: '0 1 50%',
                  justifyContent: 'flex-start',
                }}
              >
                <a
                  style={{ marginBottom: '-5px' }}
                  href='https://calculator4711.s3.eu-central-1.amazonaws.com/index.html'
                  target='_blank'
                  rel='noreferrer'
                >
                  <ProgressiveImgWithFallback
                    src={require('../assets/works/calc.webp').default}
                    srcFallback={require('../assets/works/calc.gif').default}
                    placeholder={
                      require('../assets/works/calc_lowres.webp').default
                    }
                    placeholderFallback={
                      require('../assets/works/calc_lowres.gif').default
                    }
                    className={`${classes.imgWorksScaled} ${classes.portraitImg} ${classes.marginLeft}`}
                    animShift={animShiftPortraitLeft}
                  />
                </a>
              </div>
            </Paper>
          </div>
        )}
        {parentRowWidth && (
          <div
            style={{
              display: 'flex',
              flex: '1 1 100%',
              marginTop: `${MARGINS_TOP}px`,
            }}
          >
            <Paper elevation={12} style={{ display: 'flex', flex: '1 1 100%' }}>
              <div
                style={{
                  display: 'flex',
                  flex: '0 1 50%',
                  justifyContent: 'flex-end',
                }}
              >
                <a
                  style={{ marginBottom: '-5px' }}
                  href='https://hardcore-bhabha-ce15d5.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <ProgressiveImgWithFallback
                    src={
                      require('../assets/works/carbon-emissions.webp').default
                    }
                    srcFallback={
                      require('../assets/works/carbon-emissions.gif').default
                    }
                    placeholder={
                      require('../assets/works/carbon-emissions_lowres.webp')
                        .default
                    }
                    placeholderFallback={
                      require('../assets/works/carbon-emissions_lowres.gif')
                        .default
                    }
                    className={`${classes.imgWorksScaled} ${classes.portraitImg} ${classes.marginRight}`}
                    animShift={animShiftPortraitRight}
                  />
                </a>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flex: '0 1 50%',
                  height: '100%',
                  justifyContent: 'center',
                }}
              >
                <h1>Electricity to Carbon Emissions</h1>
                <h3 style={{ paddingTop: 0 }}>
                  Showcase for interactive <span>3rd party API</span> usage.
                </h3>
              </div>
            </Paper>
          </div>
        )}
        {parentRowWidth && (
          <div
            style={{
              display: 'flex',
              flex: '1 1 100%',
              marginTop: `${MARGINS_TOP}px`,
            }}
          >
            <Paper elevation={12} style={{ display: 'flex', flex: '1 1 100%' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flex: '0 1 50%',
                  alignItems: 'flex-end',
                  height: '100%',
                  justifyContent: 'center',
                }}
              >
                <h1 style={{ textAlign: 'end' }}>Greek Restaurant</h1>
                <h3
                  style={{
                    textAlign: 'end',
                    paddingLeft: '70px',
                    paddingTop: 0,
                  }}
                >
                  Responsive page for Dionysos Restaurant with design
                  inspiration from <span>Behance</span>.
                </h3>
              </div>
              <div
                style={{
                  display: 'flex',
                  flex: '0 1 50%',
                  justifyContent: 'flex-start',
                }}
              >
                <a
                  style={{ marginBottom: '-5px' }}
                  href='https://reverent-benz-f8a629.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <ProgressiveImgWithFallback
                    src={require('../assets/works/dionysos.webp').default}
                    srcFallback={
                      require('../assets/works/dionysos.png').default
                    }
                    placeholder={
                      require('../assets/works/dionysos_lowres.webp').default
                    }
                    placeholderFallback={
                      require('../assets/works/dionysos_lowres.png').default
                    }
                    className={`${classes.imgWorksScaled} ${classes.portraitImg} ${classes.marginLeft}`}
                    animShift={animShiftPortraitLeft}
                  />
                </a>
              </div>
            </Paper>
          </div>
        )}
        {parentRowWidth && (
          <div
            style={{
              display: 'flex',
              flex: '1 1 100%',
              marginTop: `${MARGINS_TOP}px`,
            }}
          >
            <Paper elevation={12} style={{ display: 'flex', flex: '1 1 100%' }}>
              <div
                style={{
                  display: 'flex',
                  flex: '0 1 50%',
                  justifyContent: 'flex-end',
                }}
              >
                <a
                  style={{ marginBottom: '-5px' }}
                  href='https://pomodoro4711.s3.eu-central-1.amazonaws.com/index.html'
                  target='_blank'
                  rel='noreferrer'
                >
                  <ProgressiveImgWithFallback
                    src={require('../assets/works/pomodoro.webp').default}
                    srcFallback={
                      require('../assets/works/pomodoro.gif').default
                    }
                    placeholder={
                      require('../assets/works/pomodoro_lowres.webp').default
                    }
                    placeholderFallback={
                      require('../assets/works/pomodoro_lowres.gif').default
                    }
                    className={`${classes.imgWorksScaled} ${classes.portraitImg} ${classes.marginRight}`}
                    animShift={animShiftPortraitRight}
                  />
                </a>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flex: '0 1 50%',
                  height: '100%',
                  justifyContent: 'center',
                }}
              >
                <h1>React Pomodoro Click</h1>
                <h3 style={{ paddingTop: 0 }}>
                  Another showcase for passing data between components using{' '}
                  <span>props</span> for interactivity.
                </h3>
              </div>
            </Paper>
          </div>
        )}
        {parentRowWidth && (
          <div
            style={{
              display: 'flex',
              flex: '1 1 100%',
              marginTop: `${MARGINS_TOP}px`,
            }}
          >
            <Paper
              elevation={12}
              style={{
                display: 'flex',
                flex: '1 1 100%',
                flexDirection: 'column',
              }}
            >
              <h1 style={{ textAlign: 'center', marginBottom: '70px' }}>
                Stats Preview Card
              </h1>
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '0 1 50%',
                    alignItems: 'flex-end',
                    height: '100%',
                    justifyContent: 'center',
                  }}
                >
                  <h3
                    style={{
                      textAlign: 'end',
                      paddingLeft: '70px',
                      paddingTop: 0,
                    }}
                  >
                    Yet another beautiful, responsive & reuseable react
                    component.
                  </h3>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flex: '0 1 50%',
                    justifyContent: 'flex-start',
                  }}
                >
                  <a
                    style={{ marginBottom: '-5px' }}
                    href='https://dazzling-roentgen-c2c3a7.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <ProgressiveImgWithFallback
                      src={
                        require('../assets/works/fem-stats-preview-card-mobile.webp')
                          .default
                      }
                      srcFallback={
                        require('../assets/works/fem-stats-preview-card-mobile.png')
                          .default
                      }
                      placeholder={
                        require('../assets/works/fem-stats-preview-card-mobile_lowres.webp')
                          .default
                      }
                      placeholderFallback={
                        require('../assets/works/fem-stats-preview-card-mobile_lowres.png')
                          .default
                      }
                      className={`${classes.imgWorks} ${classes.portraitImg} ${classes.marginLeft}`}
                      animShift={animShiftPortraitLeft}
                    />
                  </a>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: `${MARGINS_TOP * 0.4}px`,
                  marginBottom: '70px',
                }}
              >
                <a
                  style={{ marginBottom: '-5px' }}
                  href='https://dazzling-roentgen-c2c3a7.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <ProgressiveImgWithFallback
                    src={
                      require('../assets/works/fem-stats-preview-card-desktop.webp')
                        .default
                    }
                    srcFallback={
                      require('../assets/works/fem-stats-preview-card-desktop.png')
                        .default
                    }
                    placeholder={
                      require('../assets/works/fem-stats-preview-card-desktop_lowres.webp')
                        .default
                    }
                    placeholderFallback={
                      require('../assets/works/fem-stats-preview-card-desktop_lowres.png')
                        .default
                    }
                    className={`${classes.imgWorks} ${classes.landscapeImg} ${classes.marginLeft}`}
                    animShift={animShiftLandscape}
                  />
                </a>
              </div>
            </Paper>
          </div>
        )}
      </div>
    </div>
  );
}
