import ModalWrapper from "@/components/wrapper/ModalWrapper";

export default async function Layout({
  children,
}: {
  children: React.JSX.Element;
}) {
  return <ModalWrapper>{children}</ModalWrapper>;
}
