import PageHeader from "@components/Common/PageHeader";
import Breadcrumb from "@components/Common/Breadcrumb";

const page = () => {
  return (
    <section className="relative z-10 overflow-hidden pb-16 md:pb-[120px] xl:pb-[140px] 2xl:pb-[160px]">
      <PageHeader
        title="Gallery"
        imgPath="/images/contact/bg-contact.avif"
      />

      <div className="container px-5 md:px-10 pt-5 ">
        <Breadcrumb paths={["gallery"]} />
        <div className="flex flex-col lg:flex-row gap-10">
          gallery
        </div>
      </div>
    </section>
  );
};

export default page;