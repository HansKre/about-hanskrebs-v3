import StarContainerSm from './stars-background/StarContainerSm';
import StarContainerMd from './stars-background/StarContainerMd';
import StarContainerLg from './stars-background/StarContainerLg';

interface Props {
  id?: string;
  flowDown?: boolean;
}

export default function StarsBackground({ id, flowDown = false }: Props) {
  return (
    <>
      <StarContainerSm id={id} duration={60} flowDown={flowDown} />
      <StarContainerMd duration={45} flowDown={flowDown} />
      <StarContainerLg duration={30} flowDown={flowDown} />
      <StarContainerLg duration={10} flowDown={flowDown} />
    </>
  );
}
