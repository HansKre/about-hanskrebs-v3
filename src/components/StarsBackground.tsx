import StarContainerSm from './stars-background/StarContainerSm';
import StarContainerMd from './stars-background/StarContainerMd';
import StarContainerLg from './stars-background/StarContainerLg';

interface Props {
  id?: string;
}

export default function StarsBackground({ id }: Props) {
  return (
    <>
      <StarContainerSm id={id} duration={60} />
      <StarContainerMd duration={45} />
      <StarContainerLg duration={30} />
      <StarContainerLg duration={10} />
    </>
  );
}
