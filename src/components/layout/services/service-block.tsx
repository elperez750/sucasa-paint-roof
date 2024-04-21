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
    <div className={`container mx-auto flex flex-wrap items-center my-10 ${order === "right" ? "flex-row-reverse" : "flex-row"}`}>
      {/* Text Section */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-start px-6 md:px-12">
        <TextHeader
          headerText={headerText}
          textColor="white"
          additionalText={additionalText}
        />
        <p className="text-white text-sm lg:text-lg mt-4">
          {children}
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 w-full flex justify-center md:justify-end px-6 md:px-12">
        <Image src={image} alt="Service image" width={700} height={700} className="rounded-lg shadow-lg" />
      </div>
    </div>
  );
}
