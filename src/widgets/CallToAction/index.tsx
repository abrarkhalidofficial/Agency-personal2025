import { FC } from 'react';
import { useRouter } from 'next/navigation';

import Button from '@/components/ui/Button';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props {}

const Index: FC<Props> = () => {
  const router = useRouter();

  const handleFormToggle = () => {
    router.push('/book');
  };

  return (
    <SectionOpacity classes="flex flex-col justify-center h-screen">
      <div className=" mx-auto flex w-full max-w-[60vw] flex-1 flex-col items-center justify-center text-center md:max-w-[90%]">
        <h3 className="text-[4vw] font-medium md:text-[8vw]">LET&apos;S CONNECT</h3>
        <p className="mt-[0.6vw] text-[1.7vw] font-normal text-gray-300 md:text-[3.2vw] md:leading-[1.3]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consequatur ullam veniam omnis dolores cum.
        </p>
        <Button
          onClick={handleFormToggle}
          title="SUBMIT A REQUEST"
          classes="px-[1.8vw] py-[vw] w-[35vw] md:w-[45vw] min-h-[6vw] md:min-h-[8vw] text-[1.25vw] md:text-[2.25vw] bg-bg-1 hover:bg-bg-1/80"
          btnClasses="mt-[1.2vw]"
        />
      </div>

      <footer className="flex justify-between border-t border-t-gray-800 px-[5vw] py-[1.8vw] text-[1.6vw] md:px-[2vw] md:py-[2.4vw] md:text-[2vw] ">
        <div>
          © 2025.{' '}
          <a href="https://github.com/abrarkhalidofficial/Agency-personal2025" target="_blank" rel="norelopener">
            Source Code
          </a>
        </div>
        <div className="mt-4 flex space-x-4 md:mt-0">
          {['/linkedin.svg', '/twitter.svg', '/instagram.svg', '/youtube.svg'].map((icon, idx) => (
            <a key={idx} href="#" className="transition hover:text-green-700">
              <img src={icon} alt="social" className="h-10 w-10" style={{ filter: 'invert(1)' }} />
            </a>
          ))}
        </div>
      </footer>
    </SectionOpacity>
  );
};
export default Index;
