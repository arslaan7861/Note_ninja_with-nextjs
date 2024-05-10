import ModalWrapper from "@/components/wrapper/ModalWrapper";

export const metadata = {
  title: "VIEWING NOTE",
  description: "",
};

export default async function Layout({
  children,
}: {
  children: React.JSX.Element;
}) {
  return <ModalWrapper>{children}</ModalWrapper>;
}
