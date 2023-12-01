import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { CheckCircle } from "./CheckCircle";

export default function TimelineElement(props: ITimelineElement) {
  return (
    <div className="relative w-full">
      <CheckCircle />
      <div className="ml-6">
        <h4 className="font-bold text-blue-500 leading-3">{props.title}</h4>
        <p className="mt-2 max-w-screen-sm text-sm leading-3 text-gray-500">
          {props.company}
        </p>
        <p className="mt-5 max-w-screen-sm text-sm text-gray-500">
          {props.details}
        </p>
        <div className="py-4">
          <span className="mt-1 flex gap-2 text-sm items-center font-semibold text-blue-500">
            <CalendarDaysIcon height={20} width={20} />
            {props.yearRange}
          </span>
          <span className="mt-1 flex gap-2 items-center text-xs text-gray-400">
            <MapPinIcon height={20} width={20} />
            {props.location}
          </span>
        </div>
      </div>
    </div>
  );
}
