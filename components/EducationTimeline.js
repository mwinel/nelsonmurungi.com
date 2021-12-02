import BrandLogo from "./BrandLogo";

const EducationTimeline = ({ education }) => {
  return (
    <div className="flow-root">
      <ul className="mt-8 -mb-10">
        {education.map((educationItem, educationItemIdx) => (
          <li key={educationItem.id}>
            <div className="relative pb-10">
              {educationItemIdx !== education.length - 1 ? (
                <span
                  className="absolute top-5 left-6 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex items-start space-x-3">
                {educationItem.type === "present" ? (
                  <>
                    <div className="relative mr-2">
                      <BrandLogo src={educationItem.schoolLogo} brandInitials={educationItem.school[0]} />
                      {educationItem.isCurrent ? (
                        <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-400 rounded-full ring-2 ring-white" />
                      ) : null}
                    </div>
                    <div className="flex-1 min-w-0 -mt-1 lg:-mt-2">
                      <div>
                        <p className="text-base text-gray-800 lg:text-lg dark:text-gray-100 lg:leading-9">
                          {educationItem.title},{" "}
                          <span>{educationItem.school}</span>
                        </p>

                        <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-300">
                          {educationItem.startDate} - {educationItem.endDate}
                        </p>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationTimeline;
