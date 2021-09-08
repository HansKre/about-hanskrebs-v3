/* eslint-disable global-require */
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core';
import ProgressiveImgWithFallback from '../components/ProgressiveImgWithFallback';
import { hoverable, imgBase } from '../styles/Styles';
import WorksCard from '../components/WorksCard';
import useWindowSize from '../hooks/useWindowResize';

const useStyles = makeStyles({
  imgDesktop: (props: { upMd: boolean; windowWidth: number }) => ({
    ...imgBase,
    ...hoverable,
    width: props.upMd ? '70vw' : `${props.windowWidth * 0.85}px`,
  }),
});

export default function FrontendWorks() {
  const { width: windowWidth } = useWindowSize();
  const theme = useTheme();
  const upMd = windowWidth >= theme.breakpoints.values.md;
  const downXs = windowWidth < theme.breakpoints.values.xs;
  const classes = useStyles({ upMd, windowWidth });

  function responsiveText(long: string, short: string): string {
    return windowWidth >= theme.breakpoints.values.sm ? long : short;
  }

  function Heading() {
    return (
      <div
        style={{
          display: 'flex',
          padding: downXs ? '0 7.5vw 0vw 7.5vw' : '0 7.5vw 0vw 7.5vw',
          justifyContent: 'center',
        }}
      >
        <h1
          id='works'
          style={{
            color: theme.palette.primary.main,
            margin: 0,
            width: upMd ? '80vw' : '100%',
          }}
        >
          Some Things I’ve Built 🔮
        </h1>
      </div>
    );
  }

  function PreviewCardDesktopImg() {
    const animShiftLandscape = { top: '35%', left: '42%' };
    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          marginTop: '1vw',
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
            className={classes.imgDesktop}
            animShift={animShiftLandscape}
          />
        </a>
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
        descriptionProps={{
          title: 'Order Summary Component',
          github: 'https://github.com/HansKre/fem-order-summary-component',
        }}
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
          <i>
            {responsiveText(
              'React.js | Material-ui | Netlify',
              'React.js | Material-ui'
            )}
          </i>
        </h3>
      </WorksCard>
      <WorksCard
        descriptionProps={{
          title: responsiveText('Calculator', 'Calc'),
          github: 'https://github.com/HansKre/react-calculator',
        }}
        marginTop='7.5vw'
        marginBottom='7.5vw'
        imgSide='left'
        backgroundColor={theme.palette.primary.light}
        href='https://calculator4711.s3.eu-central-1.amazonaws.com/index.html'
        imgProps={{
          src: require('../assets/works/calc.webp').default,
          srcFallback: require('../assets/works/calc.gif').default,
          placeholder: require('../assets/works/calc_lowres.webp').default,
          placeholderFallback: require('../assets/works/calc_lowres.gif')
            .default,
        }}
      >
        <h3 style={{ color: theme.palette.primary.main, paddingTop: 0 }}>
          My goal was to create an interactive UI to showcase React’s
          capabilities for passing data between child-ccomponents using props.
        </h3>
        <h3 style={{ color: theme.palette.primary.main }}>
          I found that creating the Calculator-Layout with CSS Flexbox was
          really tedious and required many div-wrappers so I ended up using CSS
          Grid instead.
        </h3>
        <h3 style={{ color: theme.palette.primary.main }}>
          <b>What I learned: CSS Grid Layout</b>
        </h3>
        <h3 style={{ color: theme.palette.primary.contrastText }}>
          <i>
            {responsiveText(
              'React.js | CSS Grid | AWS S3',
              'React.js | CSS Grid | S3'
            )}
          </i>
        </h3>
      </WorksCard>
      <WorksCard
        descriptionProps={{
          title: responsiveText(
            'Electricity to Carbon Emissions',
            'Carbon Emissions'
          ),
          github:
            'https://github.com/HansKre/carb-emissions-est-for-electricity',
        }}
        marginTop='7.5vw'
        marginBottom='7.5vw'
        imgSide='right'
        backgroundColor='white'
        href='https://hardcore-bhabha-ce15d5.netlify.app/'
        imgProps={{
          src: require('../assets/works/carbon-emissions.webp').default,
          srcFallback: require('../assets/works/carbon-emissions.gif').default,
          placeholder: require('../assets/works/carbon-emissions_lowres.webp')
            .default,
          placeholderFallback:
            require('../assets/works/carbon-emissions_lowres.gif').default,
        }}
      >
        <h3 style={{ color: theme.palette.primary.main, paddingTop: 0 }}>
          React-based frontend for{' '}
          <a
            href='https://www.carboninterface.com'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              color: theme.palette.primary.main,
              fontSize: 'inherit',
              textDecoration: 'underline',
              fontWeight: 'bold',
            }}
          >
            carboninterface.com
          </a>
          -API. You can enter your weekly electricity usage to receive estimates
          of your carbon emissions.
        </h3>
        <h3 style={{ color: theme.palette.primary.main }}>
          To avoid my API-key being exposed, I proxied all API-requests using
          Netlify-functions through Next.js.
        </h3>
        <h3 style={{ color: theme.palette.primary.main }}>
          <b>
            What I learned: CSS specificity and customizing Material-UI
            components
          </b>
        </h3>
        <h3 style={{ color: theme.palette.primary.contrastText }}>
          <i>
            {responsiveText(
              'Next.js | Material-UI | Node.js | Netlify',
              'Next.js | Material-UI'
            )}
          </i>
        </h3>
      </WorksCard>
      <WorksCard
        descriptionProps={{
          title: responsiveText('Greek Restaurant', 'Dionysos'),
          github: 'https://github.com/HansKre/dionysos-stuttgart-v3',
        }}
        marginTop='7.5vw'
        marginBottom='7.5vw'
        imgSide='left'
        backgroundColor={theme.palette.primary.light}
        href='https://reverent-benz-f8a629.netlify.app/'
        imgProps={{
          src: require('../assets/works/dionysos.webp').default,
          srcFallback: require('../assets/works/dionysos.png').default,
          placeholder: require('../assets/works/dionysos_lowres.webp').default,
          placeholderFallback: require('../assets/works/dionysos_lowres.png')
            .default,
        }}
      >
        <h3 style={{ color: theme.palette.primary.main, paddingTop: 0 }}>
          Responsive restaurant page with design inspiration from{' '}
          <a
            href='https://www.behance.net/'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              color: theme.palette.primary.main,
              fontSize: 'inherit',
              textDecoration: 'underline',
              fontWeight: 'bold',
            }}
          >
            Behance
          </a>
          .
        </h3>
        <h3 style={{ color: theme.palette.primary.main }}>
          The entire menu, prices and news section are dynamically loaded from{' '}
          <a
            href='https://www.sanity.io/'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              color: theme.palette.primary.main,
              fontSize: 'inherit',
              textDecoration: 'underline',
              fontWeight: 'bold',
            }}
          >
            sanity.io
          </a>
          , a headless CMS.
        </h3>
        <h3 style={{ color: theme.palette.primary.main }}>
          <b>
            What I learned: render content dynamically from CMS, recreate design
            from figma
          </b>
        </h3>
        <h3 style={{ color: theme.palette.primary.contrastText }}>
          <i>
            {responsiveText(
              'React.js | figma | sanity.io | Netlify',
              'React.js | figma | sanity.io'
            )}
          </i>
        </h3>
      </WorksCard>
      <WorksCard
        descriptionProps={{
          title: responsiveText(
            'Responsive Stats Preview Card',
            'Preview Card'
          ),
          github: 'https://github.com/HansKre/fem-stats-preview-component',
        }}
        marginTop='7.5vw'
        marginBottom='7.5vw'
        imgSide='right'
        backgroundColor='white'
        href='https://dazzling-roentgen-c2c3a7.netlify.app/'
        imgProps={{
          src: require('../assets/works/fem-stats-preview-card-mobile.webp')
            .default,
          srcFallback:
            require('../assets/works/fem-stats-preview-card-mobile.png')
              .default,
          placeholder:
            require('../assets/works/fem-stats-preview-card-mobile_lowres.webp')
              .default,
          placeholderFallback:
            require('../assets/works/fem-stats-preview-card-mobile_lowres.png')
              .default,
        }}
        featuredContent={<PreviewCardDesktopImg />}
      >
        <h3 style={{ color: theme.palette.primary.main, paddingTop: 0 }}>
          Another implementation-challenge from given images.
        </h3>
        <h3 style={{ color: theme.palette.primary.main }}>
          <b>
            What I learned: estimate implementation time, assess typography by
            eye
          </b>
        </h3>
        <h3 style={{ color: theme.palette.primary.contrastText }}>
          <i>
            {responsiveText(
              'React.js | Material-ui | Netlify',
              'React.js | Material-ui'
            )}
          </i>
        </h3>
      </WorksCard>
    </div>
  );
}
