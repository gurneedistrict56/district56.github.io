import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import CompetencyContent from '../src/app/CompetencyContent';
import { COMPETENCY_PATHS, getCompetencyForPath } from '../src/app/path';

interface Props {
  competencyPath: string
}

const CompetencyPage: NextPage<Props> = ({ competencyPath }) => {
  const competency = getCompetencyForPath(competencyPath);
  return <CompetencyContent competency={competency!} />;
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: COMPETENCY_PATHS,
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const competencyPath = `/${params?.competency}`;
  const competency = getCompetencyForPath(competencyPath);
  return {
    props: { competencyPath },
    ...!competency && {
      redirect: { destination: '/' },
    },
  };
};

export default CompetencyPage;
