import NextImage from "next/image";

export default function Image(props) {
  let { src, alt, width = '600', height = '460', layout = "intrinsic" } = props;
  if (src.includes("?")) {
    const dimensions = src.split("?");
    const widthHeight = dimensions[1].split("x");
    width = widthHeight[0];
    height = widthHeight[1];
  }
  // Remove `../public` from src URL so that images can 
  // be displayed correctly in both Foam and deployment
  src = src.substring('../public'.length);
  if (layout === "fixed" || layout === "responsive") {
    return (
      <>
        <NextImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          layout={layout}
        />
      </>
    );
  } else {
    return (
      <>
        <NextImage src={src} alt={alt} width={width} height={height} />
      </>
    );
  }
}
