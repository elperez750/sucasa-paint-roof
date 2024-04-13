import TextHeader from "@/components/ui/text-header";
import Image from "next/image";

interface ServiceBlockProps {
  image: string;
  headerText: string;
  additionalText?: string;
  children: React.ReactNode;
  order?: string;
}

export default function ServiceBlock({
    image,
    headerText,
    additionalText,
    children,
    order="left",
}: ServiceBlockProps) {
    return (
        <div className={`flex justify-evenly ${order === "right" ? "flex-row-reverse" : ""}`}>
        <div className="flex flex-col">
            <TextHeader
                headerText={headerText}
                textColor="white"
                additionalText={additionalText}
            />
            <p className="font-poppins font-italic text-white text-lg p-6">
                {children}
            </p>
        </div>
        <div className="relative w-full h-96">

            <Image src={image} alt="Service image" layout="fill" objectFit="cover"/>
        </div>
    </div>
        
    );
}
