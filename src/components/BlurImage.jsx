import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const BlurImage = ({ height, width, src, className, alt, ...rest }) => {
  const [isLoading, setLoading] = useState(true);
  
  // Convert the src to Cloudinary URL with optimization parameters
  const optimizedSrc = src.includes('cloudinary') 
    ? `${src}/c_scale,w_${width || 'auto'},q_auto,f_auto`
    : src;

  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={optimizedSrc}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof optimizedSrc === "string" ? optimizedSrc : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};

export default BlurImage;