import { useEffect, useRef, useState } from 'react';

const ColoredLogo = ({ src, color = '#74256f', className, alt }) => {
  const canvasRef = useRef(null);
  const [dataUrl, setDataUrl] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous'; // avoid CORS issues if external
    img.src = src;

    img.onload = () => {
      const canvas = canvasRef.current;
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Convert each pixel to the target color while preserving alpha
      for (let i = 0; i < data.length; i += 4) {
        const alpha = data[i + 3] / 255; // preserve transparency
        data[i] = parseInt(color.slice(1, 3), 16) * alpha; // red
        data[i + 1] = parseInt(color.slice(3, 5), 16) * alpha; // green
        data[i + 2] = parseInt(color.slice(5, 7), 16) * alpha; // blue
        // alpha stays the same
      }

      ctx.putImageData(imageData, 0, 0);
      setDataUrl(canvas.toDataURL());
    };
  }, [src, color]);

  return (
    <>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      {dataUrl && <img src={dataUrl} alt={alt} className={className} />}
    </>
  );
};

export default ColoredLogo;
