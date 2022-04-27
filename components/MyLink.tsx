import Link, { LinkProps } from "next/link";
import getConfig from "next/config";
import { UrlObject } from "url";
declare type Url = string | UrlObject;

const getAs = (url: Url) => {
  const { publicRuntimeConfig } = getConfig();
  return `${publicRuntimeConfig.basePath ? "/" + publicRuntimeConfig.basePath : ""}${url}`;
};

const MyLink = (props: React.PropsWithChildren<LinkProps>) => {
  const newProps = { ...props, as: getAs(props.href) };

  return <Link {...newProps}></Link>;
};

export { getAs, MyLink };
