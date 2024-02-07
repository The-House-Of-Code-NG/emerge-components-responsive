import { ReactElement } from 'react';

interface IProps {
    children: ReactElement | string
}
function Container({ children }: IProps) {

  return (
    <div className="w-full lg:px-[6.87rem] px-[1.68rem]">
      {children}
    </div>
  );
}

export default Container;
