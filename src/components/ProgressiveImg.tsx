/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-shadow */
import ProgressiveImage from 'react-progressive-image';
import LoadingAnim from './loading-anim/LoadingAnim';

type Props = {
  src: string;
  placeholder: string;
  className?: string;
  animShift?: {
    top: string;
    left: string;
  };
};
export default function ProgressiveImg(props: Props) {
  // eslint-disable-next-line object-curly-newline
  const { src, placeholder, className, animShift } = props;
  return (
    <div
      style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
    >
      <ProgressiveImage src={src} placeholder={placeholder}>
        {(src: string | undefined, loading: boolean) => (
          <>
            {loading ? <LoadingAnim absolute {...animShift} /> : ''}
            <img src={src} alt={src} className={className} />
          </>
        )}
      </ProgressiveImage>
    </div>
  );
}
