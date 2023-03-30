interface HeadingInterface {
  id: string;
  title: string;
}

interface HeadingsInterface {
  headings: HeadingInterface[];
}

const TopList: React.FC<HeadingsInterface> = ({ headings }) => {
  if (!headings) return <></>;

  if (headings)
    return (
      <>
        {headings.map((heading) => {
          return (
            <li key={heading.id} className="space-y-1">
              <a
                href={`#${heading.id}`}
                className="text-gray-900 dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-100"
              >
                {heading.title}
              </a>
            </li>
          );
        })}
      </>
    );
};

export default TopList;
