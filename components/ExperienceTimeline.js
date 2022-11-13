import { Fragment } from "react";
import BrandLogo from "./BrandLogo";
import ExternalLink from "./ExternalLink";

const ExperienceTimeline = ({ experience }) => {
  return (
    <div className="flow-root">
      <ul className="mt-8 -mb-10">
        {experience.map((experienceItem, experienceItemIdx) => (
          <li key={experienceItem.id}>
            <div className="relative pb-10">
              {experienceItemIdx !== experience.length - 1 ? (
                <span
                  className="absolute top-5 left-6 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex items-start space-x-3">
                {experienceItem.type === "fulltime" ? (
                  <>
                    <div className="relative mr-2">
                      {experienceItem.company.logo ? (
                        <BrandLogo
                          src={experienceItem.company.logo}
                          brandInitials={experienceItem.company.name[0]}
                        />
                      ) : (
                        <div className="flex items-center justify-center w-12 h-12 bg-gray-200 border rounded-full ring-1 ring-gray-200" />
                      )}

                      {experienceItem.isCurrent ? (
                        <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-400 rounded-full ring-2 ring-white" />
                      ) : null}
                    </div>
                    <div className="flex-1 min-w-0 -mt-1 lg:-mt-2">
                      <div>
                        <p className="text-base text-gray-800 lg:text-lg dark:text-gray-100 lg:leading-9">
                          {experienceItem.jobTitle}{" "}
                          <span>
                            <a href={experienceItem.company.href}>
                              {experienceItem.company.name}
                            </a>
                          </span>
                        </p>

                        <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-300">
                          {experienceItem.company.location} -{" "}
                          {experienceItem.startDate} -{" "}
                          <>{experienceItem.isCurrent ? "Present" : experienceItem.endDate}</>
                        </p>
                        {/* Tags */}
                        <div className="my-3">
                          <span className="mr-0.5">
                            {experienceItem.tags.map((tag) => (
                              <Fragment key={tag.id}>
                                <span className="relative mr-1 mt-1.5 inline-flex items-center rounded-full bg-gray-200 dark:bg-gray-800 focus:outline-none px-3 py-0.5 text-xs">
                                  <ExternalLink href={tag.href}>
                                    {" "}
                                    {tag.name}
                                  </ExternalLink>
                                </span>
                              </Fragment>
                            ))}
                          </span>
                        </div>
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

export default ExperienceTimeline;
