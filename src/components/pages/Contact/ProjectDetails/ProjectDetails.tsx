import { Icon } from '@iconify/react';

import Button from '@/components/lib/Button';
import Input from '@/components/lib/Input';
import Select from '@/components/lib/Select';
import TextArea from '@/components/lib/TextArea';
import useToggle from '@/hooks/useToggle';

import {
  budgets,
  concerns,
  rangeOfPeople,
  referalls,
  roles,
  spaces,
  workType,
} from './data';

const ProjectDetails = () => {
  const [extended, toggleExtended] = useToggle(false);

  return (
    <section className="grid w-full place-items-center bg-[#EEEFCF] px-5 py-10 md:py-16 lg:py-20 lg:px-10">
      <div className="container flex w-full flex-col gap-10 md:gap-14">
        <div className="flex w-full flex-col gap-5 md:flex-row md:gap-14 lg:gap-32">
          <div className="flex flex-1 flex-col gap-10">
            <h1 className="max-w-[24ch] font-garamond text-3xl font-semibold md:text-4xl lg:text-5xl">
              What may we help <br /> you with?
            </h1>
            <p className="max-w-[35ch] lg:text-lg">
              We are excited to know more about your project. Kindly fill this
              form to help us with the details of your project.
            </p>
          </div>

          <div className="flex-1">
            <form className="flex w-full max-w-[500px] flex-col gap-7">
              <Input
                label="Name"
                placeholder="What is your name?"
                name="name"
              />
              <Input
                label="Company"
                placeholder="Where do you work?"
                name="company"
              />
              <Input
                label="Email"
                placeholder="Kindly enter your work email"
                name="email"
              />
              <TextArea
                label="Project Details"
                placeholder="Briefly tell us about your project"
                rows={6}
                className="resize-none"
              />

              <button
                type="button"
                className="flex w-full items-center gap-2"
                onClick={toggleExtended}
              >
                <Icon
                  icon={extended ? 'bi:dash-circle' : 'gg:chevron-down-o'}
                  className="text-2xl text-tertiary-main"
                />
                <span className="text-left text-xs font-medium md:text-sm lg:text-base">
                  Do you mind telling us more about your project?
                </span>
              </button>

              {extended && (
                <>
                  <Select
                    label="What kind of space do you need?"
                    options={spaces}
                  />
                  <Select
                    label="What range of people will regularly occupy this space?"
                    options={rangeOfPeople}
                  />
                  <Select
                    label="What type of work are you looking at?"
                    options={workType}
                  />
                  <Select label="What is your role?" options={roles} />
                  <Select
                    label="What is your anticipated budget?"
                    options={budgets}
                  />

                  <div className="flex w-full flex-col gap-5">
                    <span>What are your concerns about your project?</span>
                    {concerns.map((concern, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          id={concern.value}
                          type="checkbox"
                          value=""
                          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-main focus:ring-2 focus:ring-primary-main"
                        />
                        <label
                          htmlFor={concern.value}
                          className="ml-2 font-medium text-tertiary-main"
                        >
                          {concern.label}
                        </label>
                      </div>
                    ))}
                  </div>

                  <TextArea
                    label="Where is your proposed project located?"
                    placeholder="Please give us a specific address"
                    rows={6}
                    className="resize-none"
                  />
                  <Select
                    label="How did you hear about De ‘La Roi Limited?"
                    options={referalls}
                  />
                  <Input
                    label="What number can we reach you on?"
                    placeholder="Your phone number"
                    name="phoneNumber"
                  />
                </>
              )}

              <Button
                type="submit"
                className="mt-5 w-full border border-primary-main !bg-transparent !text-tertiary-main"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
