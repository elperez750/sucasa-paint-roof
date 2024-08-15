import Button from "@/components/ui/button";
import TextHeader from "@/components/ui/text-header";
import Image from "next/image";

interface ServiceBlockProps {
  image: string;
  headerText: string;
  additionalText?: string;
  children: React.ReactNode;
  order?: "left" | "right";
}

export default function ServiceBlock({
  image,
  headerText,
  additionalText,
  children,
  order = "left",
}: ServiceBlockProps) {
  return (
    <div className="flex flex-col bg-blue w-full">

    <div className={`container mx-auto flex flex-wrap items-center my-10 ${order === "right" ? "flex-row-reverse" : "flex-row"}`}>
      {/* Text Section */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-start md:px-12">
        <TextHeader
          headerText={headerText}
          headerTextColor="white"
          additionalTextColor="red"
          additionalText={additionalText}
        />
        <p className="text-white font-poppins text-sm lg:text-lg mt-4">
          {children}
        </p>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 mt-20 lg:mt-0 w-full flex justify-center md:justify-end px-6 md:px-12">
        <Image src={image} alt="Service image" width={800} height={800} className="rounded-lg shadow-lg" />
      </div>
    </div>
  
      </div>
  );
}
