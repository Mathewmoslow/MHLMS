// src/data/questions.js - Complete Quiz Questions for Mental Health LMS
export const questions = [
  // Module 1: Therapeutic Relationship and Communication (Questions 1-10)
  {
    id: 1,
    moduleId: 1,
    type: "multiple-choice",
    question: "Which of the following best describes the primary difference between a therapeutic relationship and a social relationship?",
    options: [
      "Therapeutic relationships last longer than social relationships",
      "Social relationships are more structured than therapeutic relationships", 
      "Therapeutic relationships are patient-centered and goal-oriented",
      "Social relationships require more professional boundaries"
    ],
    correctAnswer: 2,
    rationale: "Therapeutic relationships are patient-centered, goal-oriented, and focused solely on the patient's needs, unlike social relationships which are mutual."
  },
  {
    id: 2,
    moduleId: 1,
    type: "multiple-choice",
    question: "During which phase of the nurse-client relationship is trust primarily established?",
    options: [
      "Pre-orientation phase",
      "Orientation phase", 
      "Working phase",
      "Termination phase"
    ],
    correctAnswer: 1,
    rationale: "The orientation phase is when the nurse and client first meet, establish trust, set goals, and clarify expectations for the relationship."
  },
  {
    id: 3,
    moduleId: 1,
    type: "matching",
    question: "Match the therapeutic communication technique with its correct example:",
    pairs: [
      {
        technique: "Active Listening",
        example: "Maintaining eye contact, leaning forward, and nodding during client interaction"
      },
      {
        technique: "Open-ended Questions", 
        example: "Can you tell me more about what makes you feel anxious?"
      },
      {
        technique: "Clarification",
        example: "Can you explain what you mean by feeling 'weird'?"
      },
      {
        technique: "Reflection",
        example: "You said you're feeling frustrated about your family situation"
      }
    ],
    rationale: "Each technique serves a specific purpose: Active listening shows engagement, open-ended questions encourage elaboration, clarification ensures understanding, and reflection demonstrates comprehension of the client's feelings."
  },
  {
    id: 4,
    moduleId: 1,
    type: "multiple-choice",
    question: "Which of the following is a nontherapeutic communication technique?",
    options: [
      "Reflecting feelings",
      "Giving false reassurance",
      "Using open-ended questions",
      "Maintaining eye contact"
    ],
    correctAnswer: 1,
    rationale: "Giving false reassurance (like 'Everything will be fine') dismisses the client's concerns and blocks further communication."
  },
  {
    id: 5,
    moduleId: 1,
    type: "multiple-choice",
    question: "What is transference in the therapeutic relationship?",
    options: [
      "The nurse's emotional response to the client",
      "Moving the client to a different unit",
      "The client's unconscious redirection of feelings toward the nurse",
      "Sharing personal information with the client"
    ],
    correctAnswer: 2,
    rationale: "Transference occurs when clients unconsciously redirect feelings from past relationships onto the nurse, often based on previous experiences with authority figures."
  },
  {
    id: 6,
    moduleId: 1,
    type: "multiple-choice",
    question: "What is countertransference?",
    options: [
      "The client's feelings toward the nurse",
      "The nurse's emotional reaction to the client",
      "Transferring a client to another unit",
      "The therapeutic relationship ending"
    ],
    correctAnswer: 1,
    rationale: "Countertransference is the nurse's emotional reaction to the patient, often triggered by the nurse's own past experiences."
  },
  {
    id: 7,
    moduleId: 1,
    type: "multiple-choice",
    question: "Which statement demonstrates empathy?",
    options: [
      "I know exactly how you feel",
      "Don't worry, everything will be fine",
      "It sounds like this situation is really difficult for you",
      "You shouldn't feel that way"
    ],
    correctAnswer: 2,
    rationale: "Empathy involves understanding and acknowledging the patient's feelings without judgment or false reassurance."
  },
  {
    id: 8,
    moduleId: 1,
    type: "multiple-choice",
    question: "In the working phase of the therapeutic relationship, the nurse primarily:",
    options: [
      "Establishes trust and rapport",
      "Helps the client work toward identified goals",
      "Terminates the relationship",
      "Conducts initial assessment"
    ],
    correctAnswer: 1,
    rationale: "The working phase focuses on helping the client develop new skills and work toward therapeutic goals."
  },
  {
    id: 9,
    moduleId: 1,
    type: "multiple-choice",
    question: "Which response demonstrates active listening?",
    options: [
      "Let me tell you what you should do",
      "I understand you're saying you feel overwhelmed by work deadlines",
      "Why do you feel that way?",
      "Everyone feels that way sometimes"
    ],
    correctAnswer: 1,
    rationale: "Active listening involves paraphrasing and reflecting what the client has said to demonstrate understanding."
  },
  {
    id: 10,
    moduleId: 1,
    type: "multiple-choice",
    question: "Professional boundaries in therapeutic relationships include:",
    options: [
      "Sharing personal problems with clients",
      "Accepting gifts from clients",
      "Maintaining confidentiality and professional distance",
      "Becoming friends with clients after discharge"
    ],
    correctAnswer: 2,
    rationale: "Professional boundaries include maintaining confidentiality, appropriate physical and emotional distance, and focusing on the client's needs."
  },

  // Module 2: Psychotropic Medications and Neurotransmitters (Questions 11-20)
  {
    id: 11,
    moduleId: 2,
    type: "multiple-choice",
    question: "Which neurotransmitter is primarily associated with mood regulation?",
    options: [
      "Dopamine",
      "Serotonin",
      "GABA",
      "Acetylcholine"
    ],
    correctAnswer: 1,
    rationale: "Serotonin is the primary neurotransmitter involved in mood regulation, and many antidepressants work by affecting serotonin levels."
  },
  {
    id: 12,
    moduleId: 2,
    type: "multiple-choice",
    question: "SSRIs work by:",
    options: [
      "Blocking dopamine receptors",
      "Increasing GABA production",
      "Preventing serotonin reuptake",
      "Stimulating acetylcholine release"
    ],
    correctAnswer: 2,
    rationale: "SSRIs (Selective Serotonin Reuptake Inhibitors) block the reuptake of serotonin, increasing its availability in the synaptic cleft."
  },
  {
    id: 13,
    moduleId: 2,
    type: "multiple-choice",
    question: "The black box warning for antidepressants indicates:",
    options: [
      "Risk of liver damage",
      "Increased suicide risk in patients under 25",
      "Potential for addiction",
      "Risk of heart problems"
    ],
    correctAnswer: 1,
    rationale: "The FDA black box warning for antidepressants highlights the increased risk of suicidal thoughts and behaviors in patients under 25."
  },
  {
    id: 14,
    moduleId: 2,
    type: "multiple-choice",
    question: "Which medication class is first-line treatment for anxiety disorders?",
    options: [
      "Benzodiazepines",
      "Antipsychotics",
      "SSRIs",
      "Mood stabilizers"
    ],
    correctAnswer: 2,
    rationale: "SSRIs are considered first-line treatment for most anxiety disorders due to their efficacy and better side effect profile compared to benzodiazepines."
  },
  {
    id: 15,
    moduleId: 2,
    type: "multiple-choice",
    question: "A major concern with long-term benzodiazepine use is:",
    options: [
      "Weight gain",
      "Dependence and tolerance",
      "Hair loss",
      "Skin rash"
    ],
    correctAnswer: 1,
    rationale: "Benzodiazepines have high potential for dependence and tolerance, requiring careful monitoring and gradual tapering when discontinuing."
  },
  {
    id: 16,
    moduleId: 2,
    type: "multiple-choice",
    question: "Lithium levels should be monitored because:",
    options: [
      "The therapeutic window is narrow",
      "It causes liver damage",
      "It affects blood sugar",
      "It changes blood pressure"
    ],
    correctAnswer: 0,
    rationale: "Lithium has a narrow therapeutic window, and levels that are too high can cause toxicity while levels too low are ineffective."
  },
  {
    id: 17,
    moduleId: 2,
    type: "multiple-choice",
    question: "Extrapyramidal side effects are most commonly associated with:",
    options: [
      "Antidepressants",
      "Anxiolytics",
      "Typical antipsychotics",
      "Mood stabilizers"
    ],
    correctAnswer: 2,
    rationale: "Typical (first-generation) antipsychotics have a high risk of extrapyramidal side effects due to dopamine receptor blockade."
  },
  {
    id: 18,
    moduleId: 2,
    type: "multiple-choice",
    question: "Which side effect is most concerning with atypical antipsychotics?",
    options: [
      "Dry mouth",
      "Metabolic syndrome",
      "Headache",
      "Insomnia"
    ],
    correctAnswer: 1,
    rationale: "Atypical antipsychotics carry significant risk for metabolic syndrome, including weight gain, diabetes, and cardiovascular disease."
  },
  {
    id: 19,
    moduleId: 2,
    type: "multiple-choice",
    question: "Patient education for antidepressants should include:",
    options: [
      "Effects are immediate",
      "Can be stopped abruptly",
      "May take 2-4 weeks for full effect",
      "Should be taken only when feeling depressed"
    ],
    correctAnswer: 2,
    rationale: "Antidepressants typically take 2-4 weeks to reach full therapeutic effect, and patients need to understand this to maintain adherence."
  },
  {
    id: 20,
    moduleId: 2,
    type: "multiple-choice",
    question: "Which assessment is priority before administering lithium?",
    options: [
      "Blood pressure",
      "Kidney function",
      "Liver function",
      "Blood glucose"
    ],
    correctAnswer: 1,
    rationale: "Lithium is primarily excreted by the kidneys, so kidney function must be assessed before starting therapy and monitored regularly."
  },

  // Module 3: Therapeutic Groups (Questions 21-30)
  {
    id: 21,
    moduleId: 3,
    type: "multiple-choice",
    question: "What is the primary difference between group therapy and therapeutic groups?",
    options: [
      "Group therapy is always longer in duration",
      "Therapeutic groups focus on education and support rather than formal psychotherapy",
      "Group therapy can only be led by psychiatrists",
      "Therapeutic groups require more participants"
    ],
    correctAnswer: 1,
    rationale: "Therapeutic groups focus on group interaction, education, and support, while group therapy involves formal psychotherapeutic interventions based on specific theoretical frameworks."
  },
  {
    id: 22,
    moduleId: 3,
    type: "multiple-choice",
    question: "According to Yalom's therapeutic factors, what does 'universality' refer to?",
    options: [
      "The group's acceptance of all members",
      "Learning that others share similar problems and feelings",
      "The leader's ability to help everyone equally", 
      "Using techniques that work for all group members"
    ],
    correctAnswer: 1,
    rationale: "Universality is the therapeutic factor where group members realize they are not alone in their struggles and that others share similar experiences and feelings."
  },
  {
    id: 23,
    moduleId: 3,
    type: "multiple-choice",
    question: "During which phase of group development does the most therapeutic work typically occur?",
    options: [
      "Forming",
      "Storming",
      "Norming", 
      "Performing"
    ],
    correctAnswer: 3,
    rationale: "The performing phase is when the group focuses on problem-solving, goal achievement, and addressing the primary therapeutic objectives."
  },
  {
    id: 24,
    moduleId: 3,
    type: "multiple-choice",
    question: "How should a nurse handle a group member who monopolizes discussion time?",
    options: [
      "Ignore the behavior and continue with the agenda",
      "Address the entire group about equal participation",
      "Remove the member from the group immediately",
      "Allow them to continue to avoid conflict"
    ],
    correctAnswer: 1,
    rationale: "The best approach is to address the group as a whole about the importance of equal participation, which redirects behavior without singling out the individual."
  },
  {
    id: 25,
    moduleId: 3,
    type: "multiple-choice",
    question: "What characterizes a 'closed group' format?",
    options: [
      "Members can join or leave at any time",
      "The group meets indefinitely",
      "Fixed membership for a predetermined number of sessions",
      "Only family members can participate"
    ],
    correctAnswer: 2,
    rationale: "Closed groups have fixed membership and a predetermined duration, with the same individuals attending for a specific number of sessions."
  },
  {
    id: 26,
    moduleId: 3,
    type: "multiple-choice",
    question: "The therapeutic factor of 'instillation of hope' occurs when:",
    options: [
      "Group members see others improve",
      "The leader provides encouragement",
      "Medications start working",
      "Family members visit"
    ],
    correctAnswer: 0,
    rationale: "Instillation of hope occurs when group members witness others' progress and improvement, giving them hope for their own recovery."
  },
  {
    id: 27,
    moduleId: 3,
    type: "multiple-choice",
    question: "Which response is most appropriate for a silent group member?",
    options: [
      "Force them to speak by asking direct questions",
      "Ignore them completely",
      "Gently encourage participation without pressure",
      "Remove them from the group"
    ],
    correctAnswer: 2,
    rationale: "Silent members should be gently encouraged to participate while respecting their comfort level and not forcing participation."
  },
  {
    id: 28,
    moduleId: 3,
    type: "multiple-choice",
    question: "In psychoeducational groups, the nurse's primary role is:",
    options: [
      "Therapist",
      "Educator",
      "Observer",
      "Participant"
    ],
    correctAnswer: 1,
    rationale: "In psychoeducational groups, the nurse primarily serves as an educator, providing information and teaching skills to group members."
  },
  {
    id: 29,
    moduleId: 3,
    type: "multiple-choice",
    question: "Group cohesion is best achieved when:",
    options: [
      "All members think alike",
      "There is no conflict",
      "Members feel accepted and valued",
      "The leader controls all discussions"
    ],
    correctAnswer: 2,
    rationale: "Group cohesion develops when members feel accepted, valued, and safe to express themselves within the group."
  },
  {
    id: 30,
    moduleId: 3,
    type: "multiple-choice",
    question: "The termination phase of group therapy should include:",
    options: [
      "Abrupt ending without discussion",
      "Summary of accomplishments and future planning",
      "Introduction of new members",
      "Changing the group's focus"
    ],
    correctAnswer: 1,
    rationale: "The termination phase should include reflection on accomplishments, processing of feelings about ending, and planning for the future."
  },

  // Module 4: Introduction to Mental Health (Questions 31-40)
  {
    id: 31,
    moduleId: 4,
    type: "multiple-choice",
    question: "Which of the following best describes a mental health crisis?",
    options: [
      "Any stressful life event",
      "A normal response to everyday problems",
      "A significant disruption to homeostasis that exceeds usual coping mechanisms",
      "A chronic mental health condition"
    ],
    correctAnswer: 2,
    rationale: "A crisis is defined as a significant disruption to homeostasis caused by stress that exceeds a person's usual coping mechanisms and is typically self-limiting (4-6 weeks)."
  },
  {
    id: 32,
    moduleId: 4,
    type: "multiple-choice",
    question: "What are the three criteria for involuntary psychiatric commitment?",
    options: [
      "Mental illness, substance abuse, and homelessness",
      "Danger to self, danger to others, or gravely disabled",
      "Psychosis, depression, and anxiety",
      "Medication non-compliance, family request, and previous hospitalization"
    ],
    correctAnswer: 1,
    rationale: "The three criteria for involuntary commitment are: danger to self, danger to others, or being gravely disabled (unable to care for basic needs due to mental illness)."
  },
  {
    id: 33,
    moduleId: 4,
    type: "multiple-choice",
    question: "What is the primary goal of crisis intervention?",
    options: [
      "To provide long-term therapy",
      "To cure the underlying mental illness",
      "To stabilize symptoms and prevent relapse requiring hospitalization",
      "To eliminate all sources of stress"
    ],
    correctAnswer: 2,
    rationale: "Crisis intervention is immediate, short-term, goal-directed therapy focused on stabilizing symptoms, reducing immediate distress, and preventing the need for hospitalization."
  },
  {
    id: 34,
    moduleId: 4,
    type: "multiple-choice",
    question: "The DSM-5 is primarily used for:",
    options: [
      "Treatment planning and interventions",
      "Diagnosing mental health disorders",
      "Medication management",
      "Nursing care plans"
    ],
    correctAnswer: 1,
    rationale: "The DSM-5 provides specific diagnostic criteria for mental health disorders but does not include treatment guidelines, medications, or nursing interventions."
  },
  {
    id: 35,
    moduleId: 4,
    type: "multiple-choice",
    question: "Which is an example of active listening during a crisis intervention?",
    options: [
      "Giving advice on how to solve the problem",
      "Maintaining eye contact, nodding, and reflecting what you hear",
      "Asking multiple questions rapidly",
      "Reassuring the person that everything will be fine"
    ],
    correctAnswer: 1,
    rationale: "Active listening involves being fully present, maintaining eye contact, using body language to show engagement, and reflecting back what you hear to demonstrate understanding."
  },
  {
    id: 36,
    moduleId: 4,
    type: "multiple-choice",
    question: "A situational crisis is characterized by:",
    options: [
      "Predictable life transitions",
      "Unexpected external events",
      "Chronic mental illness",
      "Personality disorders"
    ],
    correctAnswer: 1,
    rationale: "Situational crises are caused by unexpected external events such as natural disasters, job loss, or death of a loved one."
  },
  {
    id: 37,
    moduleId: 4,
    type: "multiple-choice",
    question: "The typical duration of a crisis is:",
    options: [
      "1-2 weeks",
      "4-6 weeks",
      "2-3 months",
      "6 months to 1 year"
    ],
    correctAnswer: 1,
    rationale: "Crises are typically self-limiting and last approximately 4-6 weeks before resolution occurs."
  },
  {
    id: 38,
    moduleId: 4,
    type: "multiple-choice",
    question: "Which nursing diagnosis is most appropriate for a patient in crisis?",
    options: [
      "Knowledge deficit",
      "Ineffective coping",
      "Social isolation",
      "Chronic pain"
    ],
    correctAnswer: 1,
    rationale: "Ineffective coping is the most appropriate nursing diagnosis for a patient in crisis, as the crisis occurs when usual coping mechanisms are inadequate."
  },
  {
    id: 39,
    moduleId: 4,
    type: "multiple-choice",
    question: "What is the nurse's priority when working with a patient in crisis?",
    options: [
      "Gathering detailed history",
      "Ensuring safety",
      "Medication administration",
      "Family notification"
    ],
    correctAnswer: 1,
    rationale: "Safety is always the priority when working with patients in crisis, as they may be at risk for self-harm or harm to others."
  },
  {
    id: 40,
    moduleId: 4,
    type: "multiple-choice",
    question: "A developmental crisis is most likely to occur during:",
    options: [
      "Natural disasters",
      "Job loss",
      "Adolescence",
      "Acute illness"
    ],
    correctAnswer: 2,
    rationale: "Developmental crises occur during normal life transitions such as adolescence, when individuals may struggle to adapt to developmental challenges."
  },

  // Module 5: Conceptual Models and Therapeutic Approaches (Questions 41-50)
  {
    id: 41,
    moduleId: 5,
    type: "multiple-choice",
    question: "According to Peplau's theory, the nurse serves in multiple roles. Which role involves helping the patient understand their experience?",
    options: [
      "Stranger",
      "Resource person",
      "Counselor",
      "Technical expert"
    ],
    correctAnswer: 2,
    rationale: "In the counselor role, the nurse helps the patient understand and cope with their experiences through therapeutic communication."
  },
  {
    id: 42,
    moduleId: 5,
    type: "multiple-choice",
    question: "The basic principle of cognitive-behavioral therapy is:",
    options: [
      "Unconscious conflicts cause symptoms",
      "Thoughts affect feelings and behaviors",
      "Behavior is learned through reinforcement",
      "Self-actualization is the goal"
    ],
    correctAnswer: 1,
    rationale: "CBT is based on the principle that thoughts, feelings, and behaviors are interconnected, and changing thoughts can change feelings and behaviors."
  },
  {
    id: 43,
    moduleId: 5,
    type: "multiple-choice",
    question: "Which therapeutic approach emphasizes unconditional positive regard?",
    options: [
      "Psychoanalytic therapy",
      "Behavioral therapy",
      "Humanistic therapy",
      "Cognitive therapy"
    ],
    correctAnswer: 2,
    rationale: "Humanistic therapy, developed by Carl Rogers, emphasizes unconditional positive regard, empathy, and genuineness."
  },
  {
    id: 44,
    moduleId: 5,
    type: "multiple-choice",
    question: "In milieu therapy, the therapeutic environment should provide:",
    options: [
      "Complete freedom with no structure",
      "Rigid rules and strict control",
      "Democratic participation and clear expectations",
      "Isolation from other patients"
    ],
    correctAnswer: 2,
    rationale: "Milieu therapy creates a therapeutic environment with democratic participation, clear expectations, and opportunities for learning and growth."
  },
  {
    id: 45,
    moduleId: 5,
    type: "multiple-choice",
    question: "Which defense mechanism involves unconsciously taking on characteristics of another person?",
    options: [
      "Projection",
      "Displacement",
      "Identification",
      "Rationalization"
    ],
    correctAnswer: 2,
    rationale: "Identification involves unconsciously taking on the characteristics, behaviors, or attitudes of another person."
  },
  {
    id: 46,
    moduleId: 5,
    type: "multiple-choice",
    question: "Systematic desensitization is based on principles of:",
    options: [
      "Classical conditioning",
      "Operant conditioning",
      "Cognitive restructuring",
      "Psychodynamic theory"
    ],
    correctAnswer: 0,
    rationale: "Systematic desensitization uses classical conditioning principles to gradually reduce anxiety responses to feared stimuli."
  },
  {
    id: 47,
    moduleId: 5,
    type: "multiple-choice",
    question: "The defense mechanism of projection involves:",
    options: [
      "Denying reality",
      "Attributing one's own feelings to others",
      "Reverting to earlier behaviors",
      "Creating logical explanations"
    ],
    correctAnswer: 1,
    rationale: "Projection involves attributing one's own unacceptable thoughts, feelings, or impulses to another person."
  },
  {
    id: 48,
    moduleId: 5,
    type: "multiple-choice",
    question: "In behavioral therapy, positive reinforcement:",
    options: [
      "Decreases the likelihood of a behavior",
      "Increases the likelihood of a behavior",
      "Has no effect on behavior",
      "Eliminates all behaviors"
    ],
    correctAnswer: 1,
    rationale: "Positive reinforcement increases the likelihood that a behavior will occur again by providing a pleasant consequence."
  },
  {
    id: 49,
    moduleId: 5,
    type: "multiple-choice",
    question: "Which statement best describes milieu therapy?",
    options: [
      "Individual therapy in a private setting",
      "Medication management only",
      "Therapeutic use of the environment",
      "Family therapy sessions"
    ],
    correctAnswer: 2,
    rationale: "Milieu therapy involves the therapeutic use of the environment to promote healing, growth, and positive behavioral change."
  },
  {
    id: 50,
    moduleId: 5,
    type: "multiple-choice",
    question: "The cognitive distortion 'all-or-nothing thinking' involves:",
    options: [
      "Seeing situations in extremes",
      "Predicting the worst outcome",
      "Blaming oneself for everything",
      "Reading others' minds"
    ],
    correctAnswer: 0,
    rationale: "All-or-nothing thinking is a cognitive distortion where situations are viewed in absolute terms without recognizing middle ground."
  },

  // Module 6: Substance Use and Abuse (Questions 51-60)
  {
    id: 51,
    moduleId: 6,
    type: "multiple-choice",
    question: "According to DSM-5, substance use disorder is diagnosed when a person meets how many criteria?",
    options: [
      "1 or more",
      "2 or more",
      "4 or more",
      "6 or more"
    ],
    correctAnswer: 1,
    rationale: "DSM-5 requires 2 or more criteria within a 12-month period for a substance use disorder diagnosis, with severity based on the number of criteria met."
  },
  {
    id: 52,
    moduleId: 6,
    type: "multiple-choice",
    question: "A CIWA-Ar score of 18 indicates:",
    options: [
      "No withdrawal symptoms",
      "Mild withdrawal symptoms",
      "Moderate withdrawal symptoms",
      "Severe withdrawal symptoms requiring immediate intervention"
    ],
    correctAnswer: 3,
    rationale: "CIWA-Ar scores of 16 or higher indicate severe withdrawal symptoms requiring immediate medical intervention and likely hospitalization."
  },
  {
    id: 53,
    moduleId: 6,
    type: "multiple-choice",
    question: "Delirium tremens typically occurs:",
    options: [
      "6-12 hours after last drink",
      "12-24 hours after last drink",
      "3-5 days after last drink",
      "1-2 weeks after last drink"
    ],
    correctAnswer: 2,
    rationale: "Delirium tremens typically occurs 3-5 days after the last drink and represents a medical emergency requiring immediate treatment."
  },
  {
    id: 54,
    moduleId: 6,
    type: "multiple-choice",
    question: "Which medication is commonly used for alcohol withdrawal?",
    options: [
      "Haloperidol",
      "Lorazepam",
      "Fluoxetine",
      "Lithium"
    ],
    correctAnswer: 1,
    rationale: "Benzodiazepines like lorazepam are first-line treatment for alcohol withdrawal because they prevent seizures and reduce symptoms."
  },
  {
    id: 55,
    moduleId: 6,
    type: "multiple-choice",
    question: "Tolerance is defined as:",
    options: [
      "Physical dependence on a substance",
      "Psychological craving for a substance",
      "Need for increased amounts to achieve the same effect",
      "Withdrawal symptoms when stopping use"
    ],
    correctAnswer: 2,
    rationale: "Tolerance occurs when the body adapts to a substance, requiring increased amounts to achieve the same desired effect."
  },
  {
    id: 56,
    moduleId: 6,
    type: "multiple-choice",
    question: "Which behavior is an example of enabling?",
    options: [
      "Setting clear boundaries with the user",
      "Calling in sick for the user when they're hungover",
      "Refusing to give money to the user",
      "Attending Al-Anon meetings"
    ],
    correctAnswer: 1,
    rationale: "Enabling behaviors protect the substance user from consequences of their use, such as calling in sick for them, which prevents them from experiencing natural consequences."
  },
  {
    id: 57,
    moduleId: 6,
    type: "multiple-choice",
    question: "Wernicke-Korsakoff syndrome is caused by deficiency of:",
    options: [
      "Vitamin B1 (thiamine)",
      "Vitamin B12",
      "Folate",
      "Vitamin D"
    ],
    correctAnswer: 0,
    rationale: "Wernicke-Korsakoff syndrome is caused by thiamine (vitamin B1) deficiency, commonly seen in chronic alcoholism."
  },
  {
    id: 58,
    moduleId: 6,
    type: "multiple-choice",
    question: "The first step in Alcoholics Anonymous is:",
    options: [
      "Making amends to those harmed",
      "Helping other alcoholics",
      "Admitting powerlessness over alcohol",
      "Turning to a higher power"
    ],
    correctAnswer: 2,
    rationale: "Step 1 of AA involves admitting powerlessness over alcohol and that life has become unmanageable."
  },
  {
    id: 59,
    moduleId: 6,
    type: "multiple-choice",
    question: "Which assessment finding suggests opioid intoxication?",
    options: [
      "Dilated pupils",
      "Constricted pupils",
      "Hypervigilance",
      "Increased energy"
    ],
    correctAnswer: 1,
    rationale: "Opioid intoxication typically causes constricted (pinpoint) pupils, along with sedation and respiratory depression."
  },
  {
    id: 60,
    moduleId: 6,
    type: "multiple-choice",
    question: "Codependency is characterized by:",
    options: [
      "Using substances together",
      "Excessive focus on controlling others' behavior",
      "Physical dependence on drugs",
      "Tolerance to alcohol"
    ],
    correctAnswer: 1,
    rationale: "Codependency involves excessive focus on controlling others' behavior, often at the expense of one's own needs and well-being."
  },

  // Module 7: Stressors Affecting Thought Processes (Questions 61-70)
  {
    id: 61,
    moduleId: 7,
    type: "multiple-choice",
    question: "Which symptom is considered a positive symptom of schizophrenia?",
    options: [
      "Avolition",
      "Alogia",
      "Hallucinations",
      "Flat affect"
    ],
    correctAnswer: 2,
    rationale: "Positive symptoms are additions to normal experience. Hallucinations are positive symptoms, while avolition, alogia, and flat affect are negative symptoms."
  },
  {
    id: 62,
    moduleId: 7,
    type: "multiple-choice",
    question: "The most common type of hallucination in schizophrenia is:",
    options: [
      "Visual",
      "Auditory",
      "Tactile",
      "Olfactory"
    ],
    correctAnswer: 1,
    rationale: "Auditory hallucinations, particularly hearing voices, are the most common type of hallucination in schizophrenia."
  },
  {
    id: 63,
    moduleId: 7,
    type: "multiple-choice",
    question: "When a patient reports hearing voices that tell them to harm someone, this is called:",
    options: [
      "Auditory hallucination",
      "Command hallucination",
      "Delusion of persecution",
      "Thought insertion"
    ],
    correctAnswer: 1,
    rationale: "Command hallucinations are voices that tell the person to perform specific acts, which can be dangerous if they involve self-harm or violence."
  },
  {
    id: 64,
    moduleId: 7,
    type: "multiple-choice",
    question: "Which response is most therapeutic when a patient describes their delusions?",
    options: [
      "That's not real, you're imagining it",
      "I don't share that belief, but I can see it's distressing to you",
      "Tell me more about these thoughts",
      "Everyone has strange thoughts sometimes"
    ],
    correctAnswer: 1,
    rationale: "The nurse should neither agree with nor challenge delusions directly, but acknowledge the patient's experience while stating their own reality."
  },
  {
    id: 65,
    moduleId: 7,
    type: "multiple-choice",
    question: "Tardive dyskinesia is characterized by:",
    options: [
      "Muscle rigidity and tremor",
      "Involuntary movements of face and extremities",
      "Restlessness and need to move",
      "Sudden muscle contractions"
    ],
    correctAnswer: 1,
    rationale: "Tardive dyskinesia involves involuntary, repetitive movements particularly of the face, tongue, and extremities, and may be irreversible."
  },
  {
    id: 66,
    moduleId: 7,
    type: "multiple-choice",
    question: "Which medication is used to treat extrapyramidal side effects?",
    options: [
      "Haloperidol",
      "Benztropine",
      "Lithium",
      "Sertraline"
    ],
    correctAnswer: 1,
    rationale: "Benztropine is an anticholinergic medication used to treat extrapyramidal side effects caused by antipsychotic medications."
  },
  {
    id: 67,
    moduleId: 7,
    type: "multiple-choice",
    question: "Negative symptoms of schizophrenia include:",
    options: [
      "Hallucinations and delusions",
      "Avolition and alogia",
      "Agitation and hostility",
      "Disorganized speech"
    ],
    correctAnswer: 1,
    rationale: "Negative symptoms represent a loss or reduction of normal functions, including avolition (lack of motivation) and alogia (reduced speech)."
  },
  {
    id: 68,
    moduleId: 7,
    type: "multiple-choice",
    question: "The primary advantage of atypical antipsychotics is:",
    options: [
      "Lower cost",
      "Fewer extrapyramidal side effects",
      "Immediate onset of action",
      "No side effects"
    ],
    correctAnswer: 1,
    rationale: "Atypical antipsychotics have fewer extrapyramidal side effects compared to typical antipsychotics, though they have other side effect risks."
  },
  {
    id: 69,
    moduleId: 7,
    type: "multiple-choice",
    question: "What is the typical age of onset for schizophrenia?",
    options: [
      "Childhood (5-12 years)",
      "Adolescence to early adulthood (16-25 years)",
      "Middle age (40-50 years)",
      "Elderly (over 65 years)"
    ],
    correctAnswer: 1,
    rationale: "Schizophrenia typically has its onset in late adolescence to early adulthood, with men often developing symptoms earlier than women."
  },
  {
    id: 70,
    moduleId: 7,
    type: "multiple-choice",
    question: "When communicating with a patient experiencing delusions, the nurse should:",
    options: [
      "Argue with the patient's false beliefs",
      "Agree with the delusions to build rapport",
      "Focus on the patient's feelings rather than the content",
      "Ignore the patient when they discuss delusions"
    ],
    correctAnswer: 2,
    rationale: "The nurse should focus on the underlying feelings rather than the delusional content, providing support without reinforcing the delusion."
  },

  // Module 8: Stressors Affecting Mood (Questions 71-80)
  {
    id: 71,
    moduleId: 8,
    type: "multiple-choice",
    question: "Major depressive disorder requires symptoms to be present for at least:",
    options: [
      "1 week",
      "2 weeks",
      "1 month",
      "3 months"
    ],
    correctAnswer: 1,
    rationale: "DSM-5 criteria for major depressive disorder require symptoms to be present for at least 2 weeks."
  },
  {
    id: 72,
    moduleId: 8,
    type: "multiple-choice",
    question: "Which symptom is required for a diagnosis of major depression?",
    options: [
      "Insomnia",
      "Weight loss",
      "Depressed mood or anhedonia",
      "Psychomotor agitation"
    ],
    correctAnswer: 2,
    rationale: "Either depressed mood or anhedonia (loss of interest/pleasure) must be present for a diagnosis of major depression."
  },
  {
    id: 73,
    moduleId: 8,
    type: "multiple-choice",
    question: "A manic episode in bipolar disorder must last at least:",
    options: [
      "2 days",
      "4 days",
      "1 week",
      "2 weeks"
    ],
    correctAnswer: 2,
    rationale: "A manic episode must last at least 1 week (or any duration if hospitalization is required) for bipolar I disorder diagnosis."
  },
  {
    id: 74,
    moduleId: 8,
    type: "multiple-choice",
    question: "Which assessment finding is most concerning in a depressed patient?",
    options: [
      "Appetite changes",
      "Sleep disturbances",
      "Suicidal ideation",
      "Social withdrawal"
    ],
    correctAnswer: 2,
    rationale: "Suicidal ideation is the most concerning finding as it indicates immediate risk for self-harm and requires immediate intervention."
  },
  {
    id: 75,
    moduleId: 8,
    type: "multiple-choice",
    question: "Hypomania differs from mania in that it:",
    options: [
      "Lasts longer",
      "Is less severe and doesn't impair functioning",
      "Only occurs in children",
      "Requires hospitalization"
    ],
    correctAnswer: 1,
    rationale: "Hypomania is a milder form of mania that doesn't cause marked impairment in functioning or require hospitalization."
  },
  {
    id: 76,
    moduleId: 8,
    type: "multiple-choice",
    question: "The therapeutic range for lithium is:",
    options: [
      "0.1-0.5 mEq/L",
      "0.8-1.4 mEq/L",
      "2.0-3.0 mEq/L",
      "5.0-10.0 mEq/L"
    ],
    correctAnswer: 1,
    rationale: "The therapeutic range for lithium is 0.8-1.4 mEq/L for acute treatment and 0.6-1.2 mEq/L for maintenance."
  },
  {
    id: 77,
    moduleId: 8,
    type: "multiple-choice",
    question: "Which intervention is priority for a manic patient?",
    options: [
      "Encouraging group activities",
      "Providing stimulating environment",
      "Ensuring adequate nutrition and rest",
      "Challenging grandiose thinking"
    ],
    correctAnswer: 2,
    rationale: "Manic patients often neglect basic needs like nutrition and sleep, so ensuring these basic needs are met is priority."
  },
  {
    id: 78,
    moduleId: 8,
    type: "multiple-choice",
    question: "Electroconvulsive therapy (ECT) is most appropriate for:",
    options: [
      "Mild depression",
      "Treatment-resistant depression with high suicide risk",
      "Bipolar disorder in remission",
      "Anxiety disorders"
    ],
    correctAnswer: 1,
    rationale: "ECT is most appropriate for severe, treatment-resistant depression, especially when there is high suicide risk requiring rapid response."
  },
  {
    id: 79,
    moduleId: 8,
    type: "multiple-choice",
    question: "Which statement indicates understanding of antidepressant therapy?",
    options: [
      "I should feel better within a few days",
      "I can stop taking it when I feel better",
      "It may take several weeks to feel the full effect",
      "I should only take it when I'm feeling sad"
    ],
    correctAnswer: 2,
    rationale: "Antidepressants typically take 2-4 weeks to reach full therapeutic effect, and patients need to understand this to maintain adherence."
  },
  {
    id: 80,
    moduleId: 8,
    type: "multiple-choice",
    question: "The most concerning side effect of tricyclic antidepressants is:",
    options: [
      "Dry mouth",
      "Constipation",
      "Cardiac arrhythmias",
      "Weight gain"
    ],
    correctAnswer: 2,
    rationale: "Cardiac arrhythmias are the most serious side effect of tricyclic antidepressants and can be life-threatening, especially in overdose."
  },

  // Module 9: Stressors Affecting Alterations Across the Lifespan (Questions 81-90)
  {
    id: 81,
    moduleId: 9,
    type: "multiple-choice",
    question: "Which characteristic is typical of autism spectrum disorder?",
    options: [
      "Excessive social interaction",
      "Deficits in social communication and repetitive behaviors",
      "Hyperactivity only",
      "Above-average intelligence only"
    ],
    correctAnswer: 1,
    rationale: "Autism spectrum disorder is characterized by deficits in social communication and interaction, along with restricted, repetitive patterns of behavior."
  },
  {
    id: 82,
    moduleId: 9,
    type: "multiple-choice",
    question: "The primary difference between anorexia nervosa and bulimia nervosa is:",
    options: [
      "Anorexia involves binge eating",
      "Bulimia patients maintain normal weight",
      "Anorexia only affects females",
      "Bulimia is more serious"
    ],
    correctAnswer: 1,
    rationale: "Bulimia nervosa patients typically maintain normal or above-normal weight, while anorexia nervosa patients have significantly low body weight."
  },
  {
    id: 83,
    moduleId: 9,
    type: "multiple-choice",
    question: "Which assessment finding is most concerning in a patient with anorexia?",
    options: [
      "Amenorrhea",
      "Lanugo hair",
      "Bradycardia",
      "Preoccupation with food"
    ],
    correctAnswer: 2,
    rationale: "Bradycardia can indicate serious cardiac complications from malnutrition and requires immediate medical attention."
  },
  {
    id: 84,
    moduleId: 9,
    type: "multiple-choice",
    question: "Delirium differs from dementia in that delirium:",
    options: [
      "Is irreversible",
      "Has acute onset",
      "Only affects memory",
      "Occurs only in elderly"
    ],
    correctAnswer: 1,
    rationale: "Delirium has acute onset (hours to days) and fluctuating course, while dementia has gradual onset and progressive decline."
  },
  {
    id: 85,
    moduleId: 9,
    type: "multiple-choice",
    question: "Which intervention is most appropriate for a child with ADHD?",
    options: [
      "Unstructured environment",
      "Long, complex instructions",
      "Consistent routine and clear expectations",
      "Elimination of all stimuli"
    ],
    correctAnswer: 2,
    rationale: "Children with ADHD benefit from consistent routines, clear expectations, and structured environments to help manage symptoms."
  },
  {
    id: 86,
    moduleId: 9,
    type: "multiple-choice",
    question: "The most common cause of dementia is:",
    options: [
      "Vascular disease",
      "Alzheimer's disease",
      "Parkinson's disease",
      "Head trauma"
    ],
    correctAnswer: 1,
    rationale: "Alzheimer's disease is the most common cause of dementia, accounting for 60-80% of cases."
  },
  {
    id: 87,
    moduleId: 9,
    type: "multiple-choice",
    question: "Which medication is used to treat Alzheimer's disease?",
    options: [
      "Haloperidol",
      "Donepezil",
      "Lorazepam",
      "Sertraline"
    ],
    correctAnswer: 1,
    rationale: "Donepezil is a cholinesterase inhibitor used to treat mild to moderate Alzheimer's disease by increasing acetylcholine levels."
  },
  {
    id: 88,
    moduleId: 9,
    type: "multiple-choice",
    question: "When communicating with a patient with dementia, the nurse should:",
    options: [
      "Speak loudly and quickly",
      "Use complex sentences",
      "Speak slowly and use simple words",
      "Avoid eye contact"
    ],
    correctAnswer: 2,
    rationale: "Communication with dementia patients should involve speaking slowly, using simple words and short sentences, and maintaining eye contact."
  },
  {
    id: 89,
    moduleId: 9,
    type: "multiple-choice",
    question: "Russell's sign is associated with:",
    options: [
      "Anorexia nervosa",
      "Bulimia nervosa",
      "Binge eating disorder",
      "ADHD"
    ],
    correctAnswer: 1,
    rationale: "Russell's sign (calluses on knuckles from induced vomiting) is commonly seen in bulimia nervosa patients who use self-induced vomiting."
  },
  {
    id: 90,
    moduleId: 9,
    type: "multiple-choice",
    question: "Sundowning in dementia patients refers to:",
    options: [
      "Improved cognition in the evening",
      "Worsening confusion and agitation in late afternoon/evening",
      "Sleeping during the day",
      "Increased appetite at night"
    ],
    correctAnswer: 1,
    rationale: "Sundowning refers to increased confusion, anxiety, and agitation that typically occurs in late afternoon and evening in dementia patients."
  },

  // Module 10: Stressors Affecting Levels of Anxiety (Questions 91-100)
  {
    id: 91,
    moduleId: 10,
    type: "multiple-choice",
    question: "According to Peplau, mild anxiety:",
    options: [
      "Impairs learning completely",
      "Enhances learning and perception",
      "Causes panic symptoms",
      "Requires immediate medication"
    ],
    correctAnswer: 1,
    rationale: "Mild anxiety actually enhances learning and perception by increasing alertness and motivation."
  },
  {
    id: 92,
    moduleId: 10,
    type: "multiple-choice",
    question: "Panic disorder is characterized by:",
    options: [
      "Constant high anxiety",
      "Fear of specific objects",
      "Recurrent panic attacks with persistent worry about attacks",
      "Intrusive thoughts only"
    ],
    correctAnswer: 2,
    rationale: "Panic disorder involves recurrent panic attacks plus persistent worry about having additional attacks or their consequences."
  },
  {
    id: 93,
    moduleId: 10,
    type: "multiple-choice",
    question: "Which symptom is characteristic of a panic attack?",
    options: [
      "Gradual onset of worry",
      "Palpitations and shortness of breath",
      "Chronic fatigue",
      "Memory loss"
    ],
    correctAnswer: 1,
    rationale: "Panic attacks involve sudden onset of intense physical symptoms including palpitations, shortness of breath, chest pain, and sweating."
  },
  {
    id: 94,
    moduleId: 10,
    type: "multiple-choice",
    question: "The defense mechanism of displacement involves:",
    options: [
      "Denying reality",
      "Redirecting emotions to a safer target",
      "Returning to earlier behaviors",
      "Creating logical explanations"
    ],
    correctAnswer: 1,
    rationale: "Displacement involves redirecting emotions from the original source to a safer or more acceptable target."
  },
  {
    id: 95,
    moduleId: 10,
    type: "multiple-choice",
    question: "Obsessive-compulsive disorder involves:",
    options: [
      "Only obsessions",
      "Only compulsions",
      "Both obsessions and compulsions",
      "Neither obsessions nor compulsions"
    ],
    correctAnswer: 2,
    rationale: "OCD involves both obsessions (intrusive thoughts) and compulsions (repetitive behaviors) that are performed to reduce anxiety."
  },
  {
    id: 96,
    moduleId: 10,
    type: "multiple-choice",
    question: "The most effective treatment for specific phobias is:",
    options: [
      "Medication only",
      "Exposure therapy",
      "Psychoanalysis",
      "Hospitalization"
    ],
    correctAnswer: 1,
    rationale: "Exposure therapy, particularly systematic desensitization, is the most effective treatment for specific phobias."
  },
  {
    id: 97,
    moduleId: 10,
    type: "multiple-choice",
    question: "Generalized anxiety disorder is characterized by:",
    options: [
      "Specific fears",
      "Panic attacks",
      "Excessive worry about multiple areas for 6+ months",
      "Compulsive behaviors"
    ],
    correctAnswer: 2,
    rationale: "GAD involves excessive, difficult-to-control worry about multiple life areas for at least 6 months."
  },
  {
    id: 98,
    moduleId: 10,
    type: "multiple-choice",
    question: "Which grounding technique helps with anxiety?",
    options: [
      "5-4-3-2-1 sensory technique",
      "Rapid breathing",
      "Avoiding all triggers",
      "Complete isolation"
    ],
    correctAnswer: 0,
    rationale: "The 5-4-3-2-1 technique (5 things you see, 4 you hear, 3 you touch, 2 you smell, 1 you taste) helps ground anxious patients in the present moment."
  },
  {
    id: 99,
    moduleId: 10,
    type: "multiple-choice",
    question: "Social anxiety disorder involves fear of:",
    options: [
      "Being alone",
      "Social situations and scrutiny by others",
      "Contamination",
      "Having a serious illness"
    ],
    correctAnswer: 1,
    rationale: "Social anxiety disorder involves persistent fear of social situations where the person may be scrutinized or judged by others."
  },
  {
    id: 100,
    moduleId: 10,
    type: "multiple-choice",
    question: "At which anxiety level does learning become impossible?",
    options: [
      "Mild",
      "Moderate",
      "Severe",
      "Panic"
    ],
    correctAnswer: 3,
    rationale: "At panic level anxiety, the perceptual field is severely restricted and learning becomes impossible due to inability to focus or process information."
  },

  // Module 11: Stressors Affecting Personality Development (Questions 101-110)
  {
    id: 101,
    moduleId: 11,
    type: "multiple-choice",
    question: "Borderline personality disorder is characterized by:",
    options: [
      "Grandiosity and lack of empathy",
      "Instability in relationships and self-image",
      "Pervasive distrust of others",
      "Excessive need to be cared for"
    ],
    correctAnswer: 1,
    rationale: "Borderline personality disorder is characterized by pervasive instability in interpersonal relationships, self-image, and emotions."
  },
  {
    id: 102,
    moduleId: 11,
    type: "multiple-choice",
    question: "Splitting in borderline personality disorder refers to:",
    options: [
      "Multiple personalities",
      "Memory gaps",
      "Viewing people as all good or all bad",
      "Physical self-harm"
    ],
    correctAnswer: 2,
    rationale: "Splitting is a defense mechanism where people are viewed in extremes as either all good or all bad, with no middle ground."
  },
  {
    id: 103,
    moduleId: 11,
    type: "multiple-choice",
    question: "Which personality disorder cluster is characterized as 'dramatic, emotional, erratic'?",
    options: [
      "Cluster A",
      "Cluster B",
      "Cluster C",
      "Cluster D"
    ],
    correctAnswer: 1,
    rationale: "Cluster B includes borderline, narcissistic, histrionic, and antisocial personality disorders, characterized as dramatic, emotional, and erratic."
  },
  {
    id: 104,
    moduleId: 11,
    type: "multiple-choice",
    question: "The most appropriate nursing intervention for a patient with narcissistic personality disorder is:",
    options: [
      "Challenge their grandiose thoughts directly",
      "Provide excessive praise",
      "Set clear, consistent limits",
      "Ignore their attention-seeking behavior"
    ],
    correctAnswer: 2,
    rationale: "Setting clear, consistent limits while maintaining respect is most therapeutic for patients with narcissistic personality disorder."
  },
  {
    id: 105,
    moduleId: 11,
    type: "multiple-choice",
    question: "Dialectical Behavior Therapy (DBT) was specifically developed for:",
    options: [
      "Schizophrenia",
      "Borderline personality disorder",
      "Depression",
      "Anxiety disorders"
    ],
    correctAnswer: 1,
    rationale: "DBT was specifically developed by Marsha Linehan for treating borderline personality disorder and focuses on emotion regulation and distress tolerance."
  },
  {
    id: 106,
    moduleId: 11,
    type: "multiple-choice",
    question: "Which DBT skill helps with distress tolerance?",
    options: [
      "DEAR MAN",
      "TIPP",
      "GIVE",
      "FAST"
    ],
    correctAnswer: 1,
    rationale: "TIPP (Temperature, Intense exercise, Paced breathing, Paired muscle relaxation) is a distress tolerance skill used to manage crisis situations."
  },
  {
    id: 107,
    moduleId: 11,
    type: "multiple-choice",
    question: "Antisocial personality disorder is characterized by:",
    options: [
      "Extreme shyness",
      "Disregard for rights of others",
      "Excessive emotionality",
      "Fear of abandonment"
    ],
    correctAnswer: 1,
    rationale: "Antisocial personality disorder involves a pervasive pattern of disregard for and violation of the rights of others."
  },
  {
    id: 108,
    moduleId: 11,
    type: "multiple-choice",
    question: "When working with personality disorder patients, maintaining _____ is most important:",
    options: [
      "Flexibility in rules",
      "Personal relationships",
      "Consistent boundaries",
      "Emotional involvement"
    ],
    correctAnswer: 2,
    rationale: "Maintaining consistent boundaries is crucial when working with personality disorder patients to prevent manipulation and maintain therapeutic relationships."
  },
  {
    id: 109,
    moduleId: 11,
    type: "multiple-choice",
    question: "Avoidant personality disorder is characterized by:",
    options: [
      "Need for control",
      "Social inhibition and feelings of inadequacy",
      "Dramatic behavior",
      "Lack of empathy"
    ],
    correctAnswer: 1,
    rationale: "Avoidant personality disorder involves social inhibition, feelings of inadequacy, and hypersensitivity to negative evaluation."
  },
  {
    id: 110,
    moduleId: 11,
    type: "multiple-choice",
    question: "Which approach is least effective with personality disorder patients?",
    options: [
      "Setting clear limits",
      "Consistent consequences",
      "Arguing about their perceptions",
      "Team communication"
    ],
    correctAnswer: 2,
    rationale: "Arguing about perceptions is counterproductive and can escalate conflict; validation while setting limits is more effective."
  },

  // Module 12: Stressors Affecting Self-Concept and Body Image (Questions 111-120)
  {
    id: 111,
    moduleId: 12,
    type: "multiple-choice",
    question: "Self-concept includes all of the following except:",
    options: [
      "Personal identity",
      "Body image",
      "Role performance",
      "Medication compliance"
    ],
    correctAnswer: 3,
    rationale: "Self-concept includes personal identity, body image, role performance, and self-esteem, but not medication compliance."
  },
  {
    id: 112,
    moduleId: 12,
    type: "multiple-choice",
    question: "Body dysmorphic disorder is characterized by:",
    options: [
      "Accurate perception of body appearance",
      "Preoccupation with perceived flaws in appearance",
      "Desire to gain weight",
      "Lack of concern about appearance"
    ],
    correctAnswer: 1,
    rationale: "Body dysmorphic disorder involves preoccupation with perceived defects or flaws in appearance that are not observable to others."
  },
  {
    id: 113,
    moduleId: 12,
    type: "multiple-choice",
    question: "Gender dysphoria refers to:",
    options: [
      "Sexual orientation",
      "Distress from incongruence between gender identity and assigned sex",
      "Hormonal imbalances",
      "Chromosomal abnormalities"
    ],
    correctAnswer: 1,
    rationale: "Gender dysphoria is distress that may accompany the incongruence between one's experienced gender identity and assigned sex at birth."
  },
  {
    id: 114,
    moduleId: 12,
    type: "multiple-choice",
    question: "When caring for a transgender patient, the nurse should:",
    options: [
      "Use their birth name",
      "Ask about their surgery status",
      "Use their preferred name and pronouns",
      "Assume their sexual orientation"
    ],
    correctAnswer: 2,
    rationale: "Respectful care includes using the patient's preferred name and pronouns, regardless of legal name or gender marker changes."
  },
  {
    id: 115,
    moduleId: 12,
    type: "multiple-choice",
    question: "Low self-esteem is characterized by:",
    options: [
      "Realistic self-assessment",
      "Confidence in abilities",
      "Negative self-evaluation and self-criticism",
      "High motivation"
    ],
    correctAnswer: 2,
    rationale: "Low self-esteem involves negative self-evaluation, self-criticism, and feelings of inadequacy or worthlessness."
  },
  {
    id: 116,
    moduleId: 12,
    type: "multiple-choice",
    question: "Which intervention best supports positive self-concept?",
    options: [
      "Pointing out patient's flaws",
      "Identifying and reinforcing patient's strengths",
      "Comparing patient to others",
      "Minimizing patient's concerns"
    ],
    correctAnswer: 1,
    rationale: "Identifying and reinforcing patient strengths helps build positive self-concept and self-esteem."
  },
  {
    id: 117,
    moduleId: 12,
    type: "multiple-choice",
    question: "Role performance refers to:",
    options: [
      "Physical appearance",
      "How well one fulfills expected roles",
      "Personality traits",
      "Cognitive abilities"
    ],
    correctAnswer: 1,
    rationale: "Role performance is how well an individual fulfills the expectations associated with their various roles (parent, employee, student, etc.)."
  },
  {
    id: 118,
    moduleId: 12,
    type: "multiple-choice",
    question: "Which factor most influences body image development?",
    options: [
      "Genetics only",
      "Media and cultural standards",
      "Age only",
      "Education level"
    ],
    correctAnswer: 1,
    rationale: "Media representations and cultural beauty standards significantly influence how individuals perceive and evaluate their physical appearance."
  },
  {
    id: 119,
    moduleId: 12,
    type: "multiple-choice",
    question: "Adolescents are particularly vulnerable to self-concept issues because:",
    options: [
      "They have fully developed brains",
      "Identity formation is a primary developmental task",
      "They don't care about peer opinions",
      "Physical changes are minimal"
    ],
    correctAnswer: 1,
    rationale: "During adolescence, identity formation is the primary developmental task, making teens particularly vulnerable to self-concept and identity issues."
  },
  {
    id: 120,
    moduleId: 12,
    type: "multiple-choice",
    question: "Which therapeutic communication promotes positive self-concept?",
    options: [
      "Telling the patient what they should think",
      "Validating the patient's feelings and experiences",
      "Minimizing the patient's concerns",
      "Comparing the patient to others"
    ],
    correctAnswer: 1,
    rationale: "Validation of feelings and experiences helps patients feel heard and understood, which supports positive self-concept development."
  },

  // Module 13: Stressors Affecting Abuse and Neglect (Questions 121-130)
  {
    id: 121,
    moduleId: 13,
    type: "multiple-choice",
    question: "Mandatory reporting of suspected child abuse is required:",
    options: [
      "Only by physicians",
      "Only by social workers",
      "By all healthcare professionals",
      "Only when there is proof"
    ],
    correctAnswer: 2,
    rationale: "All healthcare professionals are mandated reporters and must report suspected child abuse, even without definitive proof."
  },
  {
    id: 122,
    moduleId: 13,
    type: "multiple-choice",
    question: "Which finding is most suspicious for physical abuse in a child?",
    options: [
      "Bruises on shins and knees",
      "Bruises in various stages of healing on the torso",
      "A single bruise on the forehead",
      "Scrapes on hands and arms"
    ],
    correctAnswer: 1,
    rationale: "Bruises in various stages of healing, especially on protected areas like the torso, are highly suspicious for abuse rather than accidental injury."
  },
  {
    id: 123,
    moduleId: 13,
    type: "multiple-choice",
    question: "The cycle of violence in intimate partner violence includes:",
    options: [
      "Only the violent episode",
      "Tension building, acute violence, and honeymoon phases",
      "Constant high-level violence",
      "Random unpredictable events"
    ],
    correctAnswer: 1,
    rationale: "The cycle of violence includes tension building, acute violence episode, and honeymoon/reconciliation phases that repeat over time."
  },
  {
    id: 124,
    moduleId: 13,
    type: "multiple-choice",
    question: "When screening for intimate partner violence, the nurse should:",
    options: [
      "Ask in front of the partner",
      "Screen in a private setting",
      "Only ask if injuries are visible",
      "Avoid the topic completely"
    ],
    correctAnswer: 1,
    rationale: "IPV screening must be done in private to ensure patient safety and encourage honest disclosure."
  },
  {
    id: 125,
    moduleId: 13,
    type: "multiple-choice",
    question: "Elder abuse is most commonly perpetrated by:",
    options: [
      "Strangers",
      "Healthcare workers",
      "Family members or caregivers",
      "Neighbors"
    ],
    correctAnswer: 2,
    rationale: "Elder abuse is most commonly perpetrated by family members or caregivers who have access and opportunity."
  },
  {
    id: 126,
    moduleId: 13,
    type: "multiple-choice",
    question: "Financial abuse of elders includes:",
    options: [
      "Providing financial support",
      "Helping with bill paying",
      "Stealing money or forging signatures",
      "Setting up automatic payments"
    ],
    correctAnswer: 2,
    rationale: "Financial abuse includes stealing money, forging signatures, identity theft, and other illegal or improper use of an elder's funds or property."
  },
  {
    id: 127,
    moduleId: 13,
    type: "multiple-choice",
    question: "Which response is most therapeutic for an abuse survivor?",
    options: [
      "Why didn't you leave sooner?",
      "I believe you and it's not your fault",
      "You must have done something to provoke it",
      "Just forget about it and move on"
    ],
    correctAnswer: 1,
    rationale: "Validating the survivor's experience by believing them and emphasizing that the abuse is not their fault is most therapeutic."
  },
  {
    id: 128,
    moduleId: 13,
    type: "multiple-choice",
    question: "Safety planning for domestic violence survivors should include:",
    options: [
      "Confronting the abuser",
      "Identifying safe places to go and important documents to gather",
      "Staying in the relationship",
      "Ignoring warning signs"
    ],
    correctAnswer: 1,
    rationale: "Safety planning includes identifying safe places, gathering important documents, having emergency funds, and planning escape routes."
  },
  {
    id: 129,
    moduleId: 13,
    type: "multiple-choice",
    question: "Emotional abuse is characterized by:",
    options: [
      "Physical hitting only",
      "Pattern of behaviors that damage emotional development",
      "Accidental harsh words",
      "Appropriate discipline"
    ],
    correctAnswer: 1,
    rationale: "Emotional abuse involves a pattern of behaviors that damage emotional development or self-worth through threats, humiliation, or isolation."
  },
  {
    id: 130,
    moduleId: 13,
    type: "multiple-choice",
    question: "The primary goal of abuse intervention is:",
    options: [
      "Punishing the abuser",
      "Keeping families together at all costs",
      "Ensuring victim safety",
      "Gathering evidence for court"
    ],
    correctAnswer: 2,
    rationale: "The primary goal of abuse intervention is ensuring the safety and protection of the victim, with all other considerations secondary."
  },

  // Module 14: Stressors Affecting Families (Questions 131-140)
  {
    id: 131,
    moduleId: 14,
    type: "multiple-choice",
    question: "According to Family Systems Theory, families are:",
    options: [
      "Simply a collection of individuals",
      "More than the sum of their individual members",
      "Only important during childhood",
      "Easily replaceable systems"
    ],
    correctAnswer: 1,
    rationale: "Family Systems Theory views families as whole systems that are more than the sum of their individual members, with complex interactions and relationships."
  },
  {
    id: 132,
    moduleId: 14,
    type: "multiple-choice",
    question: "A genogram is used to:",
    options: [
      "Test genetic markers",
      "Assess medication compliance",
      "Map family structure and relationships across generations",
      "Measure intelligence"
    ],
    correctAnswer: 2,
    rationale: "A genogram is a visual tool that maps family structure, relationships, and patterns across at least three generations."
  },
  {
    id: 133,
    moduleId: 14,
    type: "multiple-choice",
    question: "Family triangulation occurs when:",
    options: [
      "Three family members live together",
      "Tension between two people draws in a third person",
      "Family members form geometric shapes",
      "Three generations interact"
    ],
    correctAnswer: 1,
    rationale: "Triangulation occurs when tension or conflict between two family members draws in a third person, preventing direct resolution."
  },
  {
    id: 134,
    moduleId: 14,
    type: "multiple-choice",
    question: "The Family APGAR assesses:",
    options: [
      "Newborn health only",
      "Family functionality in five domains",
      "Genetic disorders",
      "Financial status"
    ],
    correctAnswer: 1,
    rationale: "The Family APGAR assesses family functionality in five domains: Adaptation, Partnership, Growth, Affection, and Resolve."
  },
  {
    id: 135,
    moduleId: 14,
    type: "multiple-choice",
    question: "Healthy family communication is characterized by:",
    options: [
      "Avoiding all conflict",
      "One person making all decisions",
      "Open, honest, and direct expression",
      "Keeping secrets from each other"
    ],
    correctAnswer: 2,
    rationale: "Healthy family communication involves open, honest, and direct expression of thoughts and feelings among family members."
  },
  {
    id: 136,
    moduleId: 14,
    type: "multiple-choice",
    question: "Family psychoeducation is most effective for:",
    options: [
      "Families without mental illness",
      "Individual therapy only",
      "Families dealing with serious mental illness",
      "Short-term problems only"
    ],
    correctAnswer: 2,
    rationale: "Family psychoeducation has strong evidence for effectiveness with families dealing with serious mental illnesses like schizophrenia and bipolar disorder."
  },
  {
    id: 137,
    moduleId: 14,
    type: "multiple-choice",
    question: "An ecomap shows:",
    options: [
      "Environmental pollution",
      "Family connections to external resources",
      "Economic status only",
      "Educational achievements"
    ],
    correctAnswer: 1,
    rationale: "An ecomap visually displays the family's connections and relationships with external resources and support systems in the community."
  },
  {
    id: 138,
    moduleId: 14,
    type: "multiple-choice",
    question: "Dysfunctional family boundaries are characterized by:",
    options: [
      "Appropriate privacy and closeness",
      "Clear role definitions",
      "Enmeshment or disengagement",
      "Healthy independence"
    ],
    correctAnswer: 2,
    rationale: "Dysfunctional boundaries involve either enmeshment (overly close, no privacy) or disengagement (overly distant, no emotional connection)."
  },
  {
    id: 139,
    moduleId: 14,
    type: "multiple-choice",
    question: "The Double ABCX model of family stress includes:",
    options: [
      "Only the initial stressor",
      "Stressor, resources, perception, and outcome",
      "Individual responses only",
      "Financial factors only"
    ],
    correctAnswer: 1,
    rationale: "The Double ABCX model includes the stressor event (A), family resources (B), family's perception (C), and the crisis or adaptation outcome (X)."
  },
  {
    id: 140,
    moduleId: 14,
    type: "multiple-choice",
    question: "When working with families in crisis, the nurse's priority is:",
    options: [
      "Assigning blame",
      "Ensuring immediate safety and stabilization",
      "Gathering detailed family history",
      "Making long-term treatment plans"
    ],
    correctAnswer: 1,
    rationale: "During family crisis intervention, the priority is ensuring immediate safety and stabilization before addressing underlying issues or long-term planning."
  }
];

