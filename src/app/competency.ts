import * as CONTENT from './content';

export enum Competency {
  ACADEMIC_CHAMPION             = 'Academic Champion',
  CRITICAL_AND_CREATIVE_THINKER = 'Critical and Creative Thinker',
  EFFECTIVE_COMMUNICATOR        = 'Effective Communicator',
  DETERMINED_LEARNER            = 'Determined Learner',
  THOUGHTFUL_PROBLEM_SOLVER     = 'Thoughtful Problem Solver',
  ENGAGED_COLLABORATOR          = 'Engaged Collaborator',
  CONTRIBUTING_CITIZEN          = 'Contributing Citizen',
}

export const COMPETENCIES = [
  Competency.ACADEMIC_CHAMPION,
  Competency.CRITICAL_AND_CREATIVE_THINKER,
  Competency.EFFECTIVE_COMMUNICATOR,
  Competency.DETERMINED_LEARNER,
  Competency.THOUGHTFUL_PROBLEM_SOLVER,
  Competency.ENGAGED_COLLABORATOR,
  Competency.CONTRIBUTING_CITIZEN,
];

const LAST_COMPETENCY_INDEX = COMPETENCIES.length - 1;

export const getIndexForCompetency = (competency?: Competency) => {
  return competency !== undefined
    ? COMPETENCIES.indexOf(competency)
    : undefined;
};

export const getPreviousCompetencyForCompetency = (competency: Competency) => {
  const index = COMPETENCIES.indexOf(competency) + 1;
  return COMPETENCIES[index > LAST_COMPETENCY_INDEX ? 0 : index];
};

export const getNextCompetencyForCompetency = (competency: Competency) => {
  const index = COMPETENCIES.indexOf(competency) - 1;
  return COMPETENCIES[index < 0 ? LAST_COMPETENCY_INDEX : index];
};

type CompetencyGradeKey =
  'Pre-K' |
  'Kindergarten' |
  'First Grade' |
  'Second Grade' |
  'Third Grade' |
  'Fourth Grade' |
  'Fifth Grade' |
  'Sixth Grade' |
  'Seventh Grade' |
  'Eighth Grade'

export type CompetencyContent = {
  qualities: {
    label: CompetencyGradeKey
    items: string[]
  }[]
}

export const COMPETENCY_CONTENT:
  { [key in Competency]: CompetencyContent } = {
    [Competency.ACADEMIC_CHAMPION]:
      CONTENT.ACADEMIC_CHAMPION,
    [Competency.CRITICAL_AND_CREATIVE_THINKER]:
      CONTENT.CRITICAL_AND_CREATIVE_THINKER,
    [Competency.EFFECTIVE_COMMUNICATOR]:
      CONTENT.EFFECTIVE_COMMUNICATOR,
    [Competency.DETERMINED_LEARNER]:
      CONTENT.DETERMINED_LEARNER,
    [Competency.THOUGHTFUL_PROBLEM_SOLVER]:
      CONTENT.THOUGHTFUL_PROBLEM_SOLVER,
    [Competency.ENGAGED_COLLABORATOR]:
      CONTENT.ENGAGED_COLLABORATOR,
    [Competency.CONTRIBUTING_CITIZEN]:
      CONTENT.CONTRIBUTING_CITIZEN,
  };
