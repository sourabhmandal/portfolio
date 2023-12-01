import { work } from "../data/work";
import { SectionTitle } from "./SectionTitle";
import TimelineElement from "./work/TimelineElement";
export function WorkSection() {
  return (
    <div className="bg-gray-50">
      <SectionTitle title="Work" />
      <div className="flex items-center justify-center px-6">
        <div className="space-y-6 border-l-2 border-dashed">
          {work.map((work: ITimelineElement, idx: number) => (
            <TimelineElement
              key={idx}
              title={work.title}
              company={work.company}
              details={work.details}
              yearRange={work.yearRange}
              location={work.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
