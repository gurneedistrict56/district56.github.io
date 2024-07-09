import {
  Competency,
  getNextCompetencyForCompetency,
  getPreviousCompetencyForCompetency,
} from './competency';

const PATH_HOME                           = '/';
const PATH_COLORS                         = '/colors';
const PATH_ACADEMIC_CHAMPION              = '/academic-champion';
const PATH_CRITICAL_AND_CREATIVE_THINKER  = '/critical-and-creative-thinker';
const PATH_EFFECTIVE_COMMUNICATOR         = '/effective-communicator';
const PATH_DETERMINED_LEARNER             = '/determined-learner';
const PATH_THOUGHTFUL_PROBLEM_SOLVER      = '/thoughtful-problem-solver';
const PATH_ENGAGED_COLLABORATOR           = '/engaged-collaborator';
const PATH_CONTRIBUTING_CITIZEN           = '/contributing-citizen';

export const COMPETENCY_PATHS = [
  PATH_ACADEMIC_CHAMPION,
  PATH_CRITICAL_AND_CREATIVE_THINKER,
  PATH_EFFECTIVE_COMMUNICATOR,
  PATH_DETERMINED_LEARNER,
  PATH_THOUGHTFUL_PROBLEM_SOLVER,
  PATH_ENGAGED_COLLABORATOR,
  PATH_CONTRIBUTING_CITIZEN,
];

export const pathForCompetency = (competency?: Competency) => {
  switch (competency) {
  case Competency.ACADEMIC_CHAMPION:
    return PATH_ACADEMIC_CHAMPION;
  case Competency.CRITICAL_AND_CREATIVE_THINKER:
    return PATH_CRITICAL_AND_CREATIVE_THINKER;
  case Competency.EFFECTIVE_COMMUNICATOR:
    return PATH_EFFECTIVE_COMMUNICATOR;
  case Competency.DETERMINED_LEARNER:
    return PATH_DETERMINED_LEARNER;
  case Competency.THOUGHTFUL_PROBLEM_SOLVER:
    return PATH_THOUGHTFUL_PROBLEM_SOLVER;
  case Competency.ENGAGED_COLLABORATOR:
    return PATH_ENGAGED_COLLABORATOR;
  case Competency.CONTRIBUTING_CITIZEN:
    return PATH_CONTRIBUTING_CITIZEN;
  default:
    return PATH_HOME;
  }
};

export const isPathHomePage = (path: string, competency?: Competency) =>
  !competency && path !== PATH_COLORS;

export const getCompetencyForPath = (path?: string): Competency | undefined => {
  switch (path) {
  case PATH_ACADEMIC_CHAMPION:
    return Competency.ACADEMIC_CHAMPION;
  case PATH_CRITICAL_AND_CREATIVE_THINKER:
    return Competency.CRITICAL_AND_CREATIVE_THINKER;
  case PATH_EFFECTIVE_COMMUNICATOR:
    return Competency.EFFECTIVE_COMMUNICATOR;
  case PATH_DETERMINED_LEARNER:
    return Competency.DETERMINED_LEARNER;
  case PATH_THOUGHTFUL_PROBLEM_SOLVER:
    return Competency.THOUGHTFUL_PROBLEM_SOLVER;
  case PATH_ENGAGED_COLLABORATOR:
    return Competency.ENGAGED_COLLABORATOR;
  case PATH_CONTRIBUTING_CITIZEN:
    return Competency.CONTRIBUTING_CITIZEN;
  }
};

export const getPreviousPathForCompetency = (competency: Competency) =>
  pathForCompetency(getPreviousCompetencyForCompetency(competency));

export const getNextPathForCompetency = (competency: Competency) =>
  pathForCompetency(getNextCompetencyForCompetency(competency));
