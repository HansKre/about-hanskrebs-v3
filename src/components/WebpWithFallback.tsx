type Props = {
  src: string;
  fallback: string;
  type?: string;
  alt: string;
  className?: string;
};

export default function WebpWithFallback({
  src,
  fallback,
  type = 'image/webp',
  alt,
  className,
}: Props) {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} alt={alt} className={className} />
    </picture>
  );
}
