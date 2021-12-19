import { useRouter } from "next/router";

export default function Heading(props) {
  const router = useRouter();
  const { children } = props;

  /** @param {String} heading */
  const encodeHeading = (heading) => {
    return heading.replace(/ /g, "-").toLowerCase();
  };

  const encodedHeading = encodeHeading(children);
  return (
    <h2>
      <a
        href={router.pathname + "#" + encodedHeading}
        id={encodedHeading}
      >
        {children}
      </a>
    </h2>
  );
}
