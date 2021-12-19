import Link from "next/link";

const AnchorTag = (props) => {
  const { href, target, children } = props;
  if (target) {
    return <a {...props}>{children}</a>;
  }
  if (children.includes("|")) {
    const [, alias] = children.split("|");
    return (
      <Link href={`/${href}`}>
        <a>{alias}</a>
      </Link>
    );
  }
  return (
    <Link href={`/${href}`}>
      <a>{href || children}</a>
    </Link>
  );
};

export default AnchorTag;
