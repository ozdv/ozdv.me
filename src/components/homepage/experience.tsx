import { Icons } from "@/components/ui/icons";
import { CAREER_EXPERIENCE } from "@/lib/constants";

export const Experience = () => {
  return (
    <section className="relative bg-accent h-screen px-4 py-10 ">
      <div className="max-w-5xl mx-auto flex flex-col">
        <div className="gap-1 flex flex-col">
          <h2 className="text-3xl font-bold text-primary">Experience</h2>
          <div className="text-muted-foreground">
            Overall I have{" "}
            <span className="font-bold">20+ years of experience</span> in the
            software industry.
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {CAREER_EXPERIENCE.map((experience, idx) => (
            <div
              key={`${experience.jobTitle} - ${experience.company.name} - ${idx}`}
              className="flex flex-col bg-background p-4 rounded-md shadow-md"
            >
              <div className="flex flex-col gap-1 sm:flex-row justify-between ">
                <div className="flex flex-row items-center gap-1">
                  <h3 className="text-lg font-medium">{experience.jobTitle}</h3>
                  <span className="text-muted-foreground"> @ </span>
                  <div className="text-muted-foreground">
                    {experience.company.name}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-1">
                  <div className="text-muted-foreground text-xs">
                    {experience.from} - {experience.to}
                  </div>
                </div>
              </div>

              <div className="text-muted-foreground">{experience.location}</div>
              <ul className="list-disc list-inside">
                {experience.points?.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Icons.squigglyLine className="absolute -bottom-px left-0 w-full rotate-180 text-background" />
    </section>
  );
};
