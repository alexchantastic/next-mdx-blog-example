import { type ComponentPropsWithoutRef } from "react";
import "./styles.css";

export function Heading(props: ComponentPropsWithoutRef<"h1">) {
	return <h1 className="heading" {...props} />;
}