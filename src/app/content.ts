/* eslint-disable quotes */

import { Competency, CompetencyContent } from './competency';

export const SITE_NAME = 'D56 Portrait of a Graduate';
export const SITE_DESCRIPTION =
  'Competencies a District 56 graduate possesses when leaving for high school';

export const pageTitleForCompetency = (competency?: Competency) =>
  `${SITE_NAME}${competency ? `: ${competency}` : ''}`;

export const ACADEMIC_CHAMPION: CompetencyContent = {
  qualities: [{
    label: 'Pre-K',
    items: [
      `Exhibiting a readiness to learn`,
      `Demonstrating positive classroom behavior`,
      `Showing curiosity`,
      `Having a positive attitude`,
      `Possessing a growth mindset`,
    ],
  }, {
    label: 'Kindergarten',
    items: [
      `Exhibiting a readiness to learn`,
      `Demonstrating positive classroom behavior`,
      `Showing curiosity`,
      `Having a positive attitude`,
      `Possessing a growth mindset`,
      `Mastering kindergarten learning standards`,
    ],
  }, {
    label: 'First Grade',
    items: [
      `Exhibiting a readiness to learn`,
      `Demonstrating positive classroom behavior`,
      `Showing curiosity`,
      `Having a positive attitude`,
      `Possessing a growth mindset`,
      `Mastering first grade learning standards`,
    ],
  }, {
    label: 'Second Grade',
    items: [
      `Exhibiting a readiness to learn`,
      `Demonstrating positive classroom behavior`,
      `Showing curiosity`,
      `Having a positive attitude`,
      `Possessing a growth mindset`,
      `Mastering second grade learning standards`,
    ],
  }, {
    label: 'Third Grade',
    items: [
      `Exhibiting a readiness to learn`,
      `Demonstrating positive classroom behavior`,
      `Displaying appropriate social skills`,
      `Showing curiosity`,
      `Having a positive attitude`,
      `Possessing a growth mindset`,
      `Mastering third grade learning standards`,
    ],
  }, {
    label: 'Fourth Grade',
    items: [
      `Exhibiting enthusiasm for learning`,
      `Demonstrating positive classroom behavior`,
      `Displaying appropriate social skills`,
      `Showing curiosity`,
      `Having a positive and productive attitude`,
      `Possessing a growth mindset`,
      `Mastering fourth grade learning standards`,
    ],
  }, {
    label: 'Fifth Grade',
    items: [
      `Exhibiting enthusiasm for learning`,
      `Demonstrating positive classroom behavior`,
      `Displaying appropriate social skills`,
      `Showing curiosity`,
      `Having a positive and productive attitude`,
      `Possessing a growth mindset`,
      `Mastering fifth grade learning standards`,
    ],
  }, {
    label: 'Sixth Grade',
    items: [
      `Exhibiting enthusiasm for learning`,
      `Demonstrating positive classroom behavior`,
      `Displaying appropriate social skills`,
      `Showing curiosity`,
      `Having a positive and productive attitude`,
      `Possessing a growth mindset`,
      `Mastering sixth grade learning standards`,
      `Demonstrating knowledge of and familiarity with available technology`,
      `Understands deadlines and develops strategies for meeting them`,
    ],
  }, {
    label: 'Seventh Grade',
    items: [
      `Exhibiting enthusiasm for learning`,
      `Demonstrating positive classroom behavior`,
      `Displaying appropriate social skills`,
      `Showing curiosity`,
      `Having a positive and productive attitude`,
      `Possessing a growth mindset`,
      `Mastering seventh grade learning standards`,
      `Productively using available technology`,
      `Anticipating their own needs and planning accordingly`,
      `Consistently working to the best of their ability`,
      `Meeting deadlines`,
    ],
  }, {
    label: 'Eighth Grade',
    items: [
      `Exhibiting enthusiasm for learning and helping others to do the same`,
      `Demonstrating positive classroom behavior and helping others to do
       the same`,
      `Displaying appropriate social skills and helping others to do the same`,
      `Showing curiosity and helping others to do the same`,
      `Having a positive and productive attitude and helping others to do
       the same`,
      `Possessing a growth mindset and helping others to do the same`,
      `Mastering eighth grade learning standards and helping others to do
       the same`,
      `Maximizing productivity through available technology and helping others
       to do the same`,
      `Anticipating their own needs and planning accordingly and helping others
       to do the same`,
      `Consistently working to the best of their ability and helping others
       to do the same`,
      `Meeting deadlines and helping others to do the same`,
      `Demonstrates strong organizational skills and helping others to do
       the same`,
      `Intrinsically motivated and helping others to develop intrinsic
       motivation skills`,
      `Developing an awareness of college and career opportunities and helping
       others to do the same`,
    ],
  }],
};

export const CRITICAL_AND_CREATIVE_THINKER: CompetencyContent = {
  qualities: [{
    label: 'Pre-K',
    items: [
      `Building/expanding on their thoughts`,
      `Understanding that mistakes are a part of learning`,
      `Using a trial and error approach`,
    ],
  }, {
    label: 'Kindergarten',
    items: [
      `Building/expanding on their thoughts`,
      `Understanding that mistakes are a part of learning`,
      `Using a trial and error approach`,
      `Sharing ideas`,
    ],
  }, {
    label: 'First Grade',
    items: [
      `Building/expanding on their thoughts`,
      `Understanding that mistakes are a part of learning`,
      `Using a trial and error approach`,
      `Sharing ideas`,
    ],
  }, {
    label: 'Second Grade',
    items: [
      `Building/expanding on their thoughts`,
      `Understanding that mistakes are a part of learning`,
      `Using a trial and error approach`,
      `Sharing ideas`,
    ],
  }, {
    label: 'Third Grade',
    items: [
      `Building and expanding upon thoughts`,
      `Using a trial and error approach`,
      `Demonstrating a willingness to share ideas`,
      `Seeking out necessary information to complete tasks`,
      `Understanding multiple ways to complete tasks`,
      `Understanding multiple points of view`,
    ],
  }, {
    label: 'Fourth Grade',
    items: [
      `Building and expanding upon thoughts`,
      `Using a trial and error approach`,
      `Demonstrating a willingness to share ideas`,
      `Seeking out necessary information to complete tasks`,
      `Understanding multiple ways to complete tasks`,
      `Understanding multiple points of view`,
      `Creating products that are unique`,
    ],
  }, {
    label: 'Fifth Grade',
    items: [
      `Building and expanding upon thoughts`,
      `Using a trial and error approach`,
      `Demonstrating a willingness to share ideas`,
      `Seeking out necessary information to complete tasks`,
      `Understanding multiple ways to complete tasks`,
      `Understanding multiple points of view`,
      `Asking questions in order to analyze a problem`,
      `Creating products that are unique`,
    ],
  }, {
    label: 'Sixth Grade',
    items: [
      `Making inferences and drawing logical conclusions`,
      `Building on and making connections to thoughts and ideas`,
      `Asking high-level questions when solving problems and able to to answer
       high-level questions when proposing solutions`,
      `Developing innovative ideas and applying them to real-world problems`,
      `Using a trial and error approach`,
      `Demonstrating a willingness to share ideas`,
      `Analyzing information necessary to complete tasks`,
      `Incorporating multiple points of view into their proposed solutions`,
      `Creating products that are unique`,
    ],
  }, {
    label: 'Seventh Grade',
    items: [
      `Making inferences and drawing logical conclusions`,
      `Building on and making connections to thoughts and ideas`,
      `Asking high-level questions when solving problems and able to to answer
       high-level questions when proposing solutions`,
      `Developing innovative ideas and applying them to real-world problems`,
      `Using a trial and error approach`,
      `Demonstrating a willingness to share ideas`,
      `Analyzing information necessary to complete tasks`,
      `Incorporating multiple points of view into proposed solutions`,
      `Creating products that are unique`,
    ],
  }, {
    label: 'Eighth Grade',
    items: [
      `Helping others to make inferences and draw logical conclusions`,
      `Helping others to build on and making connections to thoughts and ideas`,
      `Helping others to ask high-level questions when solving problems and
       answer high-level questions when proposing solutions`,
      `Leading others to develop innovative ideas and helping them to apply
       those ideas to real-world problems`,
      `Leading others in a trial and error approach to problem solving`,
      `Sharing ideas and helping others to do the same`,
      `Analyzing information necessary to complete tasks`,
      `Incorporating multiple points of view into proposed solutions`,
      `Creating products that are unique and helping others to do the same`,
    ],
  }],
};

export const EFFECTIVE_COMMUNICATOR: CompetencyContent = {
  qualities: [{
    label: 'Pre-K',
    items: [
      `Using words to express themselves`,
      `Giving and understanding feedback`,
      `Reading non-verbal cues`,
      `Speaking in a respectful manner`,
    ],
  }, {
    label: 'Kindergarten',
    items: [
      `Using words to express themselves`,
      `Giving and understanding feedback`,
      `Reading non-verbal cues`,
      `Speaking in a respectful manner`,
      `Listening to, responding to, and questioning others`,
    ],
  }, {
    label: 'First Grade',
    items: [
      `Using words to express themselves`,
      `Giving and understanding feedback`,
      `Reading non-verbal cues`,
      `Speaking in a respectful manner`,
      `Listening to, responding to, and questioning others`,
    ],
  }, {
    label: 'Second Grade',
    items: [
      `Using words to express themselves`,
      `Giving and understanding feedback`,
      `Reading non-verbal cues`,
      `Speaking in a respectful manner`,
      `Listening to, responding to, and questioning others`,
    ],
  }, {
    label: 'Third Grade',
    items: [
      `Offering feedback to and receiving feedback from others`,
      `Demonstrating effective non-verbal communication skills`,
      `Interacting with others respectfully`,
      `Communicating on topic`,
      `Responding to and developing questions for others`,
      `Using I statements to express needs`,
    ],
  }, {
    label: 'Fourth Grade',
    items: [
      `Offering feedback to and receiving feedback from others`,
      `Demonstrating effective non-verbal communication skills`,
      `Interacting with others respectfully`,
      `Communicating on topic`,
      `Responding to and developing questions for others`,
      `Communicating needs in a respectful manner`,
      `Participating in classroom discussions`,
      `Listening to and considering others' points of view`,
      `Communicating effectively to a group`,
    ],
  }, {
    label: 'Fifth Grade',
    items: [
      `Offering feedback to and receiving feedback from others`,
      `Demonstrating effective non-verbal communication skills`,
      `Interacting with others respectfully`,
      `Communicating on topic`,
      `Responding to and developing questions for others`,
      `Communicating needs in a respectful manner`,
      `Participating in classroom discussions`,
      `Listening to and considering others' points of view`,
      `Communicating effectively to a group`,
    ],
  }, {
    label: 'Sixth Grade',
    items: [
      `Expressing themselves clearly and effectively in a variety
       of circumstances`,
      `Offering feedback to and receiving feedback from others`,
      `Demonstrating effective non-verbal communication skills`,
      `Interacting with others respectfully`,
      `Communicating on topic`,
      `Responding to and developing questions for others`,
      `Communicating needs in a respectful manner`,
      `Participating in classroom discussions`,
      `Listening to and considering others' points of view`,
    ],
  }, {
    label: 'Seventh Grade',
    items: [
      `Expressing themselves clearly and effectively in a variety
       of circumstances and through a variety of media`,
      `Offering feedback to and receiving feedback from others`,
      `Demonstrating effective non-verbal communication skills`,
      `Interacting with others respectfully`,
      `Communicating on topic`,
      `Responding to and developing questions for others`,
      `Communicating needs in a respectful manner`,
      `Participating in classroom discussions`,
      `Listening to and considering others' points of view`,
    ],
  }, {
    label: 'Eighth Grade',
    items: [
      `Expressing themselves clearly and effectively in a variety
       of circumstances and through a variety of media and helping others
       to do the same`,
      `Offering feedback to and receiving feedback from others and helping
       others to do the same`,
      `Demonstrating effective non-verbal communication skills and helping
       others to do the same`,
      `Interacting with others respectfully and helping others to do the same`,
      `Communicating on topic and helping others to do the same`,
      `Responding to and developing questions for others and helping
       others to do the same`,
      `Communicating needs in a respectful manner and helping others
       to do the same`,
      `Leading classroom discussions`,
      `Taking a leadership role in listening to and considering
       others' points of view`,
    ],
  }],
};

export const DETERMINED_LEARNER: CompetencyContent = {
  qualities: [{
    label: 'Pre-K',
    items: [
      `Being willing to try difficult/novel tasks`,
      `Demonstrating perseverance`,
    ],
  }, {
    label: 'Kindergarten',
    items: [
      `Being willing to try difficult/novel tasks`,
      `Demonstrating perseverance`,
      `Showing that they are hard working`,
    ],
  }, {
    label: 'First Grade',
    items: [
      `Being willing to try difficult/novel tasks`,
      `Demonstrating perseverance`,
      `Showing that they are hard working`,
    ],
  }, {
    label: 'Second Grade',
    items: [
      `Being willing to try difficult/novel tasks`,
      `Demonstrating perseverance`,
      `Showing that they are hard working`,
    ],
  }, {
    label: 'Third Grade',
    items: [
      `Being willing to try difficult/novel tasks`,
      `Demonstrating perseverance`,
      `Exhibiting a desire to learn`,
      `Showing a positive attitude when experiencing setbacks`,
      `Setting goals and working to achieve them`,
    ],
  }, {
    label: 'Fourth Grade',
    items: [
      `Being willing to try difficult/novel tasks`,
      `Demonstrating perseverance`,
      `Exhibiting a desire to learn`,
      `Showing a positive attitude when experiencing setbacks`,
      `Setting goals and working to achieve them`,
    ],
  }, {
    label: 'Fifth Grade',
    items: [
      `Being willing to try difficult/novel tasks`,
      `Demonstrating perseverance`,
      `Exhibiting a desire to learn`,
      `Showing a positive attitude when experiencing setbacks`,
      `Setting goals and working to achieve them`,
      `Self-advocating as needed`,
      `Taking initiative and assuming a leadership role in their learning`,
    ],
  }, {
    label: 'Sixth Grade',
    items: [
      `Being willing to persevere through difficult tasks`,
      `Exhibiting a desire to learn`,
      `Showing a positive attitude when experiencing setbacks`,
      `Setting goals and working to achieve them`,
      `Self-advocating as needed`,
      `Taking initiative and assuming a leadership role in their learning`,
      `Demonstrating the ability to self-advocate`,
    ],
  }, {
    label: 'Seventh Grade',
    items: [
      `Persevering through difficult tasks`,
      `Exhibiting a desire to learn`,
      `Exerting necessary effort to learn and grow`,
      `Showing a positive attitude when experiencing setbacks`,
      `Setting goals and working to achieve them`,
      `Being a self-advocate`,
      `Taking initiative and assuming a leadership role in their learning`,
    ],
  }, {
    label: 'Eighth Grade',
    items: [
      `Persevering through difficult tasks and helping others to do the same`,
      `Exhibiting a desire to learn and helping others to do the same`,
      `Exerting necessary effort to learn and grow and helping others
       to do the same`,
      `Showing a positive attitude when experiencing setbacks and helping
       others to do the same`,
      `Setting goals and working to achieve them and helping others to
       do the same`,
      `Being a self-advocate and helping others to do the same`,
      `Taking initiative and assuming a leadership role in their learning`,
      `Supporting others in as they initiate their own learning process`,
    ],
  }],
};

export const THOUGHTFUL_PROBLEM_SOLVER: CompetencyContent = {
  qualities: [{
    label: 'Pre-K',
    items: [
      `Understanding their choices`,
      `Exploring new ways to learn and grow`,
      `Seeking help when needed`,
      `Using the tools/resources available`,
      `Developing self-regulation techniques`,
    ],
  }, {
    label: 'Kindergarten',
    items: [
      `Understanding their choices`,
      `Exploring new ways to learn and grow`,
      `Seeking help when needed`,
      `Using the tools/resources available`,
      `Developing self-regulation techniques`,
      `Asking and answering questions`,
    ],
  }, {
    label: 'First Grade',
    items: [
      `Understanding their choices`,
      `Exploring new ways to learn and grow`,
      `Seeking help when needed`,
      `Using the tools/resources available`,
      `Developing self-regulation techniques`,
      `Asking and answering questions`,
    ],
  }, {
    label: 'Second Grade',
    items: [
      `Understanding their choices`,
      `Exploring new ways to learn and grow`,
      `Seeking help when needed`,
      `Using the tools/resources available`,
      `Developing self-regulation techniques`,
      `Asking and answering questions`,
    ],
  }, {
    label: 'Third Grade',
    items: [
      `Developing self-regulation techniques`,
      `Exploring new ways to learn and grow`,
      `Working towards independence`,
      `Using available tools and resource`,
      `Asking and answering questions`,
      `Demonstrating persistent`,
      `Reflecting on processes and decisions`,
    ],
  }, {
    label: 'Fourth Grade',
    items: [
      `Developing self-regulation techniques`,
      `Exploring new ways to learn and grow`,
      `Working towards independence`,
      `Using available tools and resources`,
      `Asking and answering appropriate questions when working
       toward a solution`,
      `Demonstrating persistence`,
      `Taking time to reflect on processes and decisions`,
      `Seeing problems as opportunities for growth`,
    ],
  }, {
    label: 'Fifth Grade',
    items: [
      `Demonstrating self-regulation techniques`,
      `Exploring new ways to learn and grow`,
      `Developing educational independence`,
      `Using available tools and resources`,
      `Asking and answering appropriate questions when working
       toward a solution`,
      `Demonstrating persistence`,
      `Taking time to reflect on processes and decisions`,
      `Seeing problems as opportunities for growth`,
    ],
  }, {
    label: 'Sixth Grade',
    items: [
      `Demonstrating self-regulation techniques`,
      `Exploring new ways to learn and grow`,
      `Demonstrating educational independence`,
      `Using available tools and resources`,
      `Asking and answering appropriate questions when working
       toward a solution`,
      `Understanding that completing some tasks takes multiple attempts`,
      `Taking time to reflect on processes and decisions`,
      `Seeing problems as opportunities for growth`,
      `Focusing on the problems to be solved`,
      `Maintaining flexibility and respecting others' ideas`,
      `Considering and proposing alternative solutions to a problem`,
    ],
  }, {
    label: 'Seventh Grade',
    items: [
      `Demonstrating self-regulation`,
      `Exploring new ways to learn and grow`,
      `Demonstrating educational independence`,
      `Using available tools and resources`,
      `Asking and answering appropriate questions when working
       toward a solution`,
      `Understanding that completing tasks often takes multiple attempts`,
      `Taking time to reflect on processes and decisions`,
      `Seeing problems as opportunities for growth`,
      `Focusing on the problems to be solved`,
      `Maintaining flexibility and respecting others' ideas`,
      `Considering and proposing alternative solutions when coming up with
       the best way to solve a problem`,
    ],
  }, {
    label: 'Eighth Grade',
    items: [
      `Demonstrating self-regulation and helping others to do the same`,
      `Exploring new ways to learn and grow and helping others to do the same`,
      `Demonstrating educational independence and helping others to do
       the same`,
      `Using available tools and resources and helping others to do the same`,
      `Helping others to ask and answer appropriate questions when working
       toward a solution`,
      `Helping others to understand that completing tasks often takes
       multiple attempts`,
      `Helping others to take time to reflect on processes and decisions`,
      `Helping others to see problems as opportunities for growth`,
      `Helping others to focus on the problems to be solved`,
      `Helping others to maintain flexibility and respect others' ideas`,
      `Helping others to consider and propose alternative solutions when
       coming up with the best way to solve a problem`,
      `Helping others to realize it may take multiple attempts to
       complete a task`,
    ],
  }],
};

export const ENGAGED_COLLABORATOR: CompetencyContent = {
  qualities: [{
    label: 'Pre-K',
    items: [
      `Being willing to share ideas and materials`,
      `Participating in turn taking`,
      `Encouraging and appreciating others`,
      `Contributing to group goals`,
    ],
  }, {
    label: 'Kindergarten',
    items: [
      `Being willing to share ideas and materials`,
      `Participating in turn taking`,
      `Encouraging and appreciating others`,
      `Contributing to group goals`,
      `Listening to others`,
    ],
  }, {
    label: 'First Grade',
    items: [
      `Being willing to share ideas and materials`,
      `Participating in turn taking`,
      `Encouraging and appreciating others`,
      `Contributing to group goals`,
      `Listening to others`,
    ],
  }, {
    label: 'Second Grade',
    items: [
      `Being willing to share ideas and materials`,
      `Participating in turn taking`,
      `Encouraging and appreciating others`,
      `Contributing to group goals`,
      `Listening to others`,
    ],
  }, {
    label: 'Third Grade',
    items: [
      `Being willing to share ideas and resources`,
      `Learning to compromise with others to reach common goals`,
      `Demonstrating active listening skills`,
      `Contributing to group goals`,
    ],
  }, {
    label: 'Fourth Grade',
    items: [
      `Being willing to share ideas and resources`,
      `Learning to compromise with others to reach common goals`,
      `Demonstrating active listening skills`,
      `Contributing to group goals`,
    ],
  }, {
    label: 'Fifth Grade',
    items: [
      `Being willing to share ideas and resources`,
      `Having an open mind and being able to see the value in
       others' contributions`,
      `Learning to compromise with others to reach common goals`,
      `Demonstrating active listening skills`,
      `Contributing to group goals`,
      `Sharing the workload and taking responsibility for their part in
       relationship to the success of the group`,
    ],
  }, {
    label: 'Sixth Grade',
    items: [
      `Participating in groups, sharing ideas and resources, and allowing
       others to share as well`,
      `Having an open mind and being able to see the value in
       others' contributions`,
      `Taking on various roles to contribute to the success of the group`,
      `Respectfully compromising with others to reach common goals`,
      `Demonstrating active listening skills`,
      `Contributing to group goals`,
      `Sharing the workload and taking responsibility for their part in
       relationship to the success of the group`,
      `Positively interacting with their school and community`,
    ],
  }, {
    label: 'Seventh Grade',
    items: [
      `Participating in groups, sharing ideas and resources, and allowing
       others to share as well`,
      `Having an open mind and being able to see the value in
       others' contributions`,
      `Taking on various roles to contribute to the success of the group`,
      `Respectfully compromising with others to reach common goals`,
      `Demonstrating active listening skills`,
      `Contributing to group goals`,
      `Sharing the workload and taking responsibility for their part
       in relationship to the success of the group`,
      `Positively interacting with their school and community`,
    ],
  }, {
    label: 'Eighth Grade',
    items: [
      `Leading groups and helping others to share ideas and resources`,
      `Fostering open-mindedness so others are able to see the value
       in others' contributions`,
      `Helping groups compromise to reach common goals`,
      `Helping groups to actively listen to one another`,
      `Helping all members of groups contribute goals`,
      `Helping groups to share the workload and take responsibility
       for success`,
      `Leading positive interactions within their school and community`,
    ],
  }],
};

export const CONTRIBUTING_CITIZEN: CompetencyContent = {
  qualities: [{
    label: 'Pre-K',
    items: [
      `Being empathetic`,
      `Showing positive friendship skills`,
      `Participating in roles`,
      `Respecting their environment`,
    ],
  }, {
    label: 'Kindergarten',
    items: [
      `Being empathetic`,
      `Showing positive friendship skills`,
      `Participating in roles`,
      `Respecting their environment`,
      `Taking pride in themselves and school`,
      `Acting as a responsible digital citizen`,
    ],
  }, {
    label: 'First Grade',
    items: [
      `Being empathetic`,
      `Showing positive friendship skills`,
      `Participating in roles`,
      `Respecting their environment`,
      `Taking pride in themselves and school`,
      `Acting as a responsible digital citizen`,
    ],
  }, {
    label: 'Second Grade',
    items: [
      `Being empathetic`,
      `Showing positive friendship skills`,
      `Participating in roles`,
      `Respecting their environment`,
      `Taking pride in themselves and school`,
      `Acting as a responsible digital citizen`,
    ],
  }, {
    label: 'Third Grade',
    items: [
      `Showing kindness and empathy towards others`,
      `Actively participating in group work and classroom roles`,
      `Being a positive role model in the classroom and within the
       school community`,
      `Demonstrating the ability to help yourself and others`,
      `Respecting their environment`,
      `Taking pride in themselves and school`,
      `Acting as a responsible digital citizen`,
    ],
  }, {
    label: 'Fourth Grade',
    items: [
      `Showing kindness and empathy towards others`,
      `Actively participating in group work, classroom, and grade-level roles`,
      `Being a positive role model in the classroom, within the school
       community, and beyond`,
      `Demonstrating the ability to help yourself and others`,
      `Taking pride in yourself and your school`,
      `Acting as a responsible digital citizen`,
      `Demonstrating an awareness of current events and their relevance
       to the community`,
    ],
  }, {
    label: 'Fifth Grade',
    items: [
      `Showing kindness and empathy towards others`,
      `Actively participating in group work, classroom, and grade-level roles`,
      `Being a positive role model in the classroom, within the school
       community, and beyond`,
      `Demonstrating the ability to help yourself and others`,
      `Taking pride in yourself and your school`,
      `Acting as a responsible digital citizen`,
      `Demonstrating an awareness of local/state/regional/national/world
       issues and their impact`,
    ],
  }, {
    label: 'Sixth Grade',
    items: [
      `Showing kindness and empathy towards others`,
      `Actively participating in group work, classroom, and grade-level roles`,
      `Being a positive role model in the classroom, within the school
       community, and beyond`,
      `Demonstrating the ability to help yourself and others`,
      `Taking pride in yourself and your school`,
      `Acting as a responsible digital citizen`,
      `Demonstrating an awareness of local/state/regional/national/world
       issues and their impact`,
      `Identifying possible solutions to classroom, school, community, state,
       and national issues`,
      `Positively adding to the community within the building`,
      `Positively impacting the greater community (Gurnee and beyond)`,
    ],
  }, {
    label: 'Seventh Grade',
    items: [
      `Showing kindness and empathy towards others`,
      `Actively participating in group work, classroom, and grade-level roles`,
      `Being a positive role model in the classroom, within the school
       community, and beyond`,
      `Demonstrating the ability to help yourself and others`,
      `Taking pride in yourself and your school`,
      `Acting as a responsible digital citizen`,
      `Demonstrating an awareness of local/state/regional/national/world issues
       and their impact`,
      `Working toward solutions to classroom, school, community, state,
       and national issues`,
      `Positively impacting the community within the building`,
      `Positively impacting the greater community (Gurnee and beyond)`,
    ],
  }, {
    label: 'Eighth Grade',
    items: [
      `Showing kindness and empathy towards others and helping others
       to do the same`,
      `Actively participating in group work, classroom, and grade-level roles
       and helping others to do the same`,
      `Being a positive role model in the classroom, within the school
       community, and beyond and helping others to do the same`,
      `Demonstrating the ability to help yourself and others`,
      `Taking pride in yourself and your school and helping others to
       do the same`,
      `Acting as a responsible digital citizen and helping others to
       do the same`,
      `Demonstrating an awareness of local/state/regional/national/world
       issues and their impact and helping others to do the same`,
      `Inspiring other to work toward solutions to classroom, school,
       community, state, and national issues`,
      `Positively leading in the community within the building`,
      `Positively leading in the greater community (Gurnee and beyond)`,
      `Inspiring others to action of
       local/state/regional/national/world issues`,
      `Leading by example`,
      `Committed to helping others`,
    ],
  }],
};
