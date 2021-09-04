import React, {useState, useEffect} from 'react';
import ProgressiveImage from 'react-progressive-image';
import LoadingAnim from './loading-anim/LoadingAnim';
import WebpWithFallback from './WebpWithFallback';

type Props = {
    src: string;
    srcFallback?: string;
    placeholder: string;
    placeholderFallback?: string;
    className?: string;
    animShift?: {
        top: string;
        left: string;
    }
}

export default function ProgressiveImgWithFallback(props: Props) {
    const {src, placeholder, className, animShift, srcFallback, placeholderFallback} = props;
    const [supportsWebp, setSupportsWebp] = useState(false);
    const [webpSupportDetected, setWebpSupportDetected] = useState(false);

    useEffect(() => {
        (async () => {
            const isSupported = await isWebpSupported();
            setSupportsWebp(isSupported);
            setWebpSupportDetected(true);
        })();
    }, [setSupportsWebp])

    return (
        <div style={{position: 'relative', display: 'flex', alignItems: 'center'}}>
            {webpSupportDetected && <ProgressiveImage src={src} placeholder={supportsWebp ? placeholder : placeholderFallback || placeholder}>
                {(src: string | undefined, loading: boolean) => (
                    <>
                        {loading ? <LoadingAnim absolute {...animShift} /> : ''}
                        {srcFallback
                            ? <WebpWithFallback
                                src={src || ''}
                                fallback={srcFallback || ''}
                                alt={src || ''}
                                className={className}
                            />
                            : <img src={src} alt={src} className={className} />
                        }
                    </>
                )
                }
            </ProgressiveImage>}
        </div>
    )
}

async function isWebpSupported() {
    // If the browser doesn't has the method createImageBitmap, you can't display webp format
    if (!window.createImageBitmap) return false;

    // Base64 representation of a white point image
    const webpData = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=';

    // Retrieve the Image in Blob Format
    const blob = await fetch(webpData).then(r => r.blob());

    // If the createImageBitmap method succeeds, return true, otherwise false
    return createImageBitmap(blob).then(() => true, () => false);
}