import react from 'react';
import Svg from '../ui/svg';
import Star from "../../../public/images/star.svg";

interface testimonalProps {
    paragraph: string;
    name:string;
}

export default function Testimonal({paragraph, name}: testimonalProps){
    return (
        <div className="flex flex-col 2xl:w-96 2xl:h-56 xl:w-80 xl:h-40 justify-center items-center mt-48">
            <div className="flex justify-center items-center ">
            <Svg
                svgComponent={Star}
                width={8}
                height={8}
              />
                <Svg
                svgComponent={Star}
                width={8}
                height={8}
              />
                <Svg
                svgComponent={Star}
                width={8}
                height={8}
              />
                <Svg
                svgComponent={Star}
                width={8}
                height={8}
              />
                <Svg
                svgComponent={Star}
                width={8}
                height={8}
              />
              </div>
            <p className="font-poppins text-justify hyphens-auto text-md lg:text-lg xl:pt-6 2xl:text-xl ">{paragraph}</p>
            <h1 className="font-poppins text-center mt-6 text-red text-2xl">{name}</h1>
        </div>
    );
}