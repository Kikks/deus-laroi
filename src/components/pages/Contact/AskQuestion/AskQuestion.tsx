import Button from '@/components/lib/Button';
import Input from '@/components/lib/Input/Input';
import TextArea from '@/components/lib/TextArea';

const AskQuestion = () => {
  return (
    <section className="icon-pattern-bg grid w-full place-items-center px-5 py-10 md:py-16 lg:py-20 lg:px-10">
      <div className="container flex w-full flex-col gap-10 md:gap-14">
        <div className="flex w-full flex-col gap-5 md:flex-row md:gap-14 lg:gap-32">
          <div className="flex flex-1 flex-col gap-10">
            <h1 className="max-w-[24ch] font-garamond text-3xl font-semibold md:text-4xl lg:text-5xl">
              I just want to ask <br /> a{' '}
              <span className="text-secondary-dark">question</span>?
            </h1>
            <p className="max-w-[35ch] lg:text-lg">
              If you would like to discuss your project, kindly use the form
              above. You just want to make an enquiry? we’ve got you! You can
              fill this form.
            </p>
          </div>

          <div className="flex-1">
            <form className="flex w-full max-w-[500px] flex-col gap-7">
              <Input
                label="Name"
                placeholder="What is your name?"
                name="name"
                variant="dark"
              />
              <Input
                label="Company"
                placeholder="Where do you work?"
                name="company"
                variant="dark"
              />
              <Input
                label="Email"
                placeholder="Kindly enter your work email"
                name="email"
                variant="dark"
              />
              <TextArea
                label="Message"
                placeholder="Message"
                rows={6}
                className="resize-none"
                variant="dark"
              />
              <Button
                type="submit"
                className="mt-5 w-full border border-primary-main !bg-transparent !text-tertiary-main"
              >
                Get in touch
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskQuestion;
