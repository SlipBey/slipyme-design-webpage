import { useState, type FC } from "react";
import { CONFIG } from "@/libs/config";
import { useLocaleParser } from "@/libs/localeParser";
import { toast } from "react-toastify";
import { CustomImage } from "@/components/Utils/CustomImage";
import { Modal } from "@/components/Utils/Modal";

export const Example: FC = () => {
  const parser = useLocaleParser();
  const [modal, setModal] = useState<boolean>();
  const [image, setImage] = useState("");

  return (
    <section className="container mx-auto text-center" id="ourexam">
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto my-5">
          <div className="mb-10 md:mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold">
              {parser.get("exams")}
            </h2>

            <p className="text-gray-800 text-lg md:text-xl font-semibold text-center mx-auto">
              {parser.get("exams_text")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {CONFIG.Exam.map(
              (example, idx) =>
                idx < 8 && (
                  <div
                    key={idx}
                    className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                    onClick={() => {
                      setModal(!modal), setImage(example.image);
                    }}
                  >
                    <CustomImage
                      src={example.image}
                      alt={`${example.title} Image`}
                      className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                    />

                    <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                    <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                      {example.title}
                    </span>
                  </div>
                ),
            )}
          </div>

          <div className="mt-5 float-left">
            {/*<Link href="/designs">*/}
            <button
              onClick={() => toast.info("Bu sayfa şuanda yapım aşamasındadır.")}
              className="bg-orange-500 text-white w-48 h-10 font-semibold rounded-lg hover:bg-orange-600 duration-200"
            >
              {parser.get("more_exams")}
            </button>
            {/*</Link>*/}
          </div>
        </div>
      </div>
      <Modal modal={modal} setModal={() => setModal(!modal)} images={image} />
    </section>
  );
};
