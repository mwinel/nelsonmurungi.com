const SkillsList = ({ skills, start, end }) => {
  return (
    <div className="my-4">
      {skills.slice(start, end).map((skill) => (
        <ul className="list-disc list-inside" key={skill.id}>
          <li className="text-base lg:text-lg text-gray-800 dark:text-gray-100 lg:leading-9">
            {skill.name}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default SkillsList;
