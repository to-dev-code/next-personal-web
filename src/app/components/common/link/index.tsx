import Link from "next/link";
import { PropsWithChildren } from "react";

const LinkNewTab = ({
    href,
    children,
    className,
  }: PropsWithChildren<LinkNewTabProps>) => {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </Link>
    );
  };

export default LinkNewTab