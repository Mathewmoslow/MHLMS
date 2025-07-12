// src/data/modules.js - Mental Health Learning Modules
export const modules = [
  {
        id: 1,
    title: "The Therapeutic Relationship and Communication",
    description: "Foundational concepts for building therapeutic nurse-client relationships and effective communication techniques.",
    objectives: [
      "Differentiate clearly between therapeutic and social relationships",
      "Identify and apply the phases of the nurse-client relationship",
      "Recognize and manage transference and countertransference effectively",
      "Utilize therapeutic communication techniques to support client outcomes",
      "Identify nontherapeutic communication techniques and their impact"
    ],
    content: `
      <h3>Therapeutic vs Social Relationships</h3>
      <p>A therapeutic nurse-client relationship is a professional, one-sided relationship focused on the client's needs, well-being, and goals. Unlike social relationships, therapeutic relationships are:</p>
      <ul>
        <li><strong>Goal-oriented:</strong> Focused on improving client health or coping</li>
        <li><strong>Professional boundaries:</strong> Nurse maintains boundaries and doesn't seek personal needs fulfillment</li>
        <li><strong>Patient-centered:</strong> Only the patient's needs are prioritized</li>
        <li><strong>Time-limited:</strong> Has clear beginning and planned termination</li>
        <li><strong>Structured phases:</strong> Progresses through defined phases</li>
      </ul>

      <h3>Peplau's Phases of Nurse-Client Relationship</h3>
      <ol>
        <li><strong>Orientation Phase:</strong> Build rapport, define roles, set goals, establish trust</li>
        <li><strong>Working Phase:</strong> Patient uses resources, develops new skills, works toward goals</li>
        <li><strong>Termination Phase:</strong> Goals achieved, relationship terminated in healthy manner</li>
      </ol>

      <h3>Transference and Countertransference</h3>
      <p><strong>Transference:</strong> Patient projects feelings about others onto the nurse based on past relationships.</p>
      <p><strong>Countertransference:</strong> Nurse's emotional reaction to the patient, often triggered by the nurse's own past experiences.</p>
      
      <h4>Management Strategies:</h4>
      <ul>
        <li>Self-awareness and reflection</li>
        <li>Clinical supervision and consultation</li>
        <li>Maintaining professional boundaries</li>
        <li>Focus on patient's care plan rather than personal emotions</li>
      </ul>

      <h3>Therapeutic Communication Techniques</h3>
      <ul>
        <li><strong>Active listening:</strong> Full attention to verbal and nonverbal cues</li>
        <li><strong>Empathy:</strong> Understanding patient's perspective</li>
        <li><strong>Open-ended questions:</strong> Encourage elaboration</li>
        <li><strong>Reflection:</strong> Repeating back patient's feelings</li>
        <li><strong>Clarification:</strong> Ensuring understanding</li>
        <li><strong>Silence:</strong> Allowing processing time</li>
      </ul>

      <h3>Nontherapeutic Communication</h3>
      <ul>
        <li>Giving advice or personal opinions</li>
        <li>False reassurance ("Everything will be fine")</li>
        <li>Changing the subject</li>
        <li>Asking "why" questions</li>
        <li>Agreeing or disagreeing with patient's emotions</li>
        <li>Minimizing concerns</li>
      </ul>
    `
  },
  {
    id: 2,
    title: "Psychotropic Medications and Neurotransmitters",
    description: "Understanding psychopharmacology, neurotransmitter functions, and safe medication administration in mental health.",
    objectives: [
      "Identify major neurotransmitters and their functions",
      "Understand mechanisms of action for major psychotropic drug classes",
      "Recognize side effects and monitoring requirements",
      "Apply principles of safe medication administration"
    ],
    content: `
      <h3>Major Neurotransmitters in Mental Health</h3>
      <table border="1" style="width:100%; border-collapse:collapse; margin: 20px 0;">
        <tr style="background-color:#f2f2f2;">
          <th style="padding:10px;">Neurotransmitter</th>
          <th style="padding:10px;">Function</th>
          <th style="padding:10px;">Associated Disorders</th>
        </tr>
        <tr>
          <td style="padding:10px;"><strong>Serotonin</strong></td>
          <td style="padding:10px;">Mood regulation, sleep, appetite</td>
          <td style="padding:10px;">Depression, anxiety, OCD</td>
        </tr>
        <tr>
          <td style="padding:10px;"><strong>Dopamine</strong></td>
          <td style="padding:10px;">Movement, reward, motivation</td>
          <td style="padding:10px;">Schizophrenia, Parkinson's</td>
        </tr>
        <tr>
          <td style="padding:10px;"><strong>Norepinephrine</strong></td>
          <td style="padding:10px;">Alertness, arousal, attention</td>
          <td style="padding:10px;">Depression, ADHD</td>
        </tr>
        <tr>
          <td style="padding:10px;"><strong>GABA</strong></td>
          <td style="padding:10px;">Inhibitory, calming</td>
          <td style="padding:10px;">Anxiety, seizures</td>
        </tr>
        <tr>
          <td style="padding:10px;"><strong>Acetylcholine</strong></td>
          <td style="padding:10px;">Memory, learning</td>
          <td style="padding:10px;">Alzheimer's disease</td>
        </tr>
      </table>

      <h3>Major Psychotropic Drug Classes</h3>
      
      <h4>1. Antidepressants</h4>
      <ul>
        <li><strong>SSRIs:</strong> Increase serotonin availability (fluoxetine, sertraline)</li>
        <li><strong>SNRIs:</strong> Increase serotonin and norepinephrine (venlafaxine)</li>
        <li><strong>MAOIs:</strong> Prevent breakdown of neurotransmitters</li>
        <li><strong>Side effects:</strong> GI upset, sexual dysfunction, weight changes</li>
      </ul>

      <h4>2. Anxiolytics</h4>
      <ul>
        <li><strong>Benzodiazepines:</strong> Enhance GABA (lorazepam, diazepam)</li>
        <li><strong>Side effects:</strong> Sedation, dependence risk, cognitive impairment</li>
        <li><strong>Monitoring:</strong> Risk of tolerance and withdrawal</li>
      </ul>

      <h4>3. Antipsychotics</h4>
      <ul>
        <li><strong>Typical (First-generation):</strong> Block D2 receptors (haloperidol)</li>
        <li><strong>Atypical (Second-generation):</strong> Block dopamine and serotonin (risperidone, olanzapine)</li>
        <li><strong>Side effects:</strong> EPS (typical), metabolic syndrome (atypical)</li>
      </ul>

      <h4>4. Mood Stabilizers</h4>
      <ul>
        <li><strong>Lithium:</strong> Reduces glutamate, affects sodium/potassium</li>
        <li><strong>Anticonvulsants:</strong> Valproic acid, carbamazepine, lamotrigine</li>
        <li><strong>Monitoring:</strong> Blood levels, kidney/liver function</li>
      </ul>

      <h3>Nursing Responsibilities</h3>
      <ul>
        <li>Obtain informed consent before administration</li>
        <li>Monitor for side effects and therapeutic response</li>
        <li>Educate patients about medications</li>
        <li>Document patient responses and adverse effects</li>
        <li>Collaborate with prescribers for dosage adjustments</li>
      </ul>
    `
  },
  {
    id: 3,
    title: "Therapeutic Groups and Interventions",
    description: "Understanding group dynamics, therapeutic factors, and nursing roles in group interventions.",
    objectives: [
      "Describe types and therapeutic functions of group interventions",
      "Recognize stages of group development and associated nursing roles",
      "Implement interventions for challenging group behaviors",
      "Conduct effective medication education within groups"
    ],
    content: `
      <h3>Types of Therapeutic Groups</h3>
      
      <h4>Psychoeducational Groups</h4>
      <ul>
        <li>Focus on teaching specific topics (illness management, coping strategies)</li>
        <li>Structured content with discussion</li>
        <li>Examples: Diabetes education, medication compliance groups</li>
      </ul>

      <h4>Support Groups</h4>
      <ul>
        <li>Provide emotional support and shared experiences</li>
        <li>Led by peers or professionals</li>
        <li>Examples: Grief support, addiction recovery groups</li>
      </ul>

      <h4>Process Groups</h4>
      <ul>
        <li>Focus on interpersonal relationships and communication</li>
        <li>Members learn from interactions within group</li>
        <li>Therapeutic community approach</li>
      </ul>

      <h3>Yalom's Therapeutic Factors</h3>
      <ol>
        <li><strong>Instillation of Hope:</strong> Seeing others improve</li>
        <li><strong>Universality:</strong> "I'm not alone in this"</li>
        <li><strong>Imparting Information:</strong> Learning from others</li>
        <li><strong>Altruism:</strong> Helping others helps self</li>
        <li><strong>Corrective Family Experience:</strong> Healing family dynamics</li>
        <li><strong>Socializing Techniques:</strong> Learning social skills</li>
        <li><strong>Imitative Behavior:</strong> Modeling healthy behaviors</li>
        <li><strong>Interpersonal Learning:</strong> Insight into relationships</li>
        <li><strong>Group Cohesion:</strong> Sense of belonging</li>
        <li><strong>Catharsis:</strong> Emotional release</li>
        <li><strong>Existential Factors:</strong> Finding meaning and purpose</li>
      </ol>

      <h3>Group Development Stages (Tuckman's Model)</h3>
      <ol>
        <li><strong>Forming:</strong> Members get acquainted, establish ground rules</li>
        <li><strong>Storming:</strong> Conflict emerges, testing boundaries</li>
        <li><strong>Norming:</strong> Cohesion develops, roles clarified</li>
        <li><strong>Performing:</strong> Productive work toward goals</li>
        <li><strong>Adjourning:</strong> Termination and evaluation</li>
      </ol>

      <h3>Managing Challenging Group Behaviors</h3>
      
      <h4>Silent Members</h4>
      <ul>
        <li>Acknowledge their presence</li>
        <li>Use nonverbal encouragement</li>
        <li>Don't force participation</li>
        <li>Check in privately if appropriate</li>
      </ul>

      <h4>Monopolizers</h4>
      <ul>
        <li>Set time limits for sharing</li>
        <li>Redirect to group: "What do others think?"</li>
        <li>Use structured activities</li>
        <li>Address privately if needed</li>
      </ul>

      <h4>Hostile Members</h4>
      <ul>
        <li>Stay calm and professional</li>
        <li>Set clear boundaries</li>
        <li>Explore underlying feelings</li>
        <li>Protect other group members</li>
      </ul>

      <h3>Nurse's Role in Group Leadership</h3>
      <ul>
        <li><strong>Facilitator:</strong> Guide discussion and process</li>
        <li><strong>Educator:</strong> Provide information and resources</li>
        <li><strong>Model:</strong> Demonstrate healthy communication</li>
        <li><strong>Observer:</strong> Monitor group dynamics</li>
        <li><strong>Protector:</strong> Ensure safety for all members</li>
      </ul>
    `
  },
  {
    id: 4,
    title: "Introduction to Mental Health and Crisis Intervention",
    description: "Understanding the mental health-illness continuum, crisis types, and intervention strategies.",
    objectives: [
      "Describe the mental health-mental illness continuum",
      "Identify types and characteristics of crises",
      "Apply crisis intervention strategies effectively",
      "Understand ethical and legal responsibilities in mental health practice"
    ],
    content: `
      <h3>Mental Health-Mental Illness Continuum</h3>
      <p>Mental health exists on a continuum from optimal wellness to severe mental illness. Factors influencing position on continuum:</p>
      <ul>
        <li><strong>Biological factors:</strong> Genetics, brain chemistry, medical conditions</li>
        <li><strong>Psychological factors:</strong> Coping skills, personality, trauma history</li>
        <li><strong>Social factors:</strong> Support systems, cultural influences, socioeconomic status</li>
        <li><strong>Environmental factors:</strong> Stressors, life events, substance use</li>
      </ul>

      <h3>Types of Crises</h3>
      
      <h4>Situational Crises</h4>
      <ul>
        <li>Unexpected external events</li>
        <li>Examples: Natural disasters, job loss, death of loved one, divorce</li>
        <li>Usually time-limited</li>
        <li>Can affect anyone regardless of mental health status</li>
      </ul>

      <h4>Developmental Crises</h4>
      <ul>
        <li>Normal life transitions that may overwhelm coping</li>
        <li>Examples: Adolescence, marriage, parenthood, retirement</li>
        <li>Predictable but individual responses vary</li>
        <li>May trigger underlying vulnerabilities</li>
      </ul>

      <h4>Psychiatric Emergencies</h4>
      <ul>
        <li>Acute mental health symptoms requiring immediate intervention</li>
        <li>Examples: Suicidal ideation, psychotic episodes, severe depression</li>
        <li>Risk of harm to self or others</li>
        <li>May require involuntary treatment</li>
      </ul>

      <h3>Crisis Phases</h3>
      <ol>
        <li><strong>Pre-crisis:</strong> Baseline functioning with usual coping mechanisms</li>
        <li><strong>Impact:</strong> Stressor occurs, anxiety increases</li>
        <li><strong>Crisis:</strong> Coping mechanisms fail, disorganization occurs</li>
        <li><strong>Resolution:</strong> New equilibrium reached (adaptive or maladaptive)</li>
      </ol>

      <h3>Crisis Intervention Strategies</h3>
      
      <h4>Immediate Goals</h4>
      <ul>
        <li>Ensure safety</li>
        <li>Reduce anxiety and distress</li>
        <li>Restore functioning</li>
        <li>Connect with support systems</li>
      </ul>

      <h4>Intervention Techniques</h4>
      <ul>
        <li><strong>Active listening:</strong> Validate feelings and concerns</li>
        <li><strong>Problem identification:</strong> Help clarify issues</li>
        <li><strong>Resource mobilization:</strong> Connect with supports</li>
        <li><strong>Skill building:</strong> Teach coping strategies</li>
        <li><strong>Follow-up:</strong> Ensure continued support</li>
      </ul>

      <h3>Legal and Ethical Considerations</h3>
      
      <h4>Voluntary vs. Involuntary Treatment</h4>
      <ul>
        <li><strong>Voluntary:</strong> Patient consents to treatment</li>
        <li><strong>Involuntary:</strong> Treatment without consent when patient poses danger</li>
        <li><strong>Baker Act (Florida):</strong> 72-hour involuntary hold for evaluation</li>
      </ul>

      <h4>Patient Rights</h4>
      <ul>
        <li>Right to informed consent</li>
        <li>Right to confidentiality</li>
        <li>Right to least restrictive treatment</li>
        <li>Right to refuse treatment (with exceptions)</li>
      </ul>

      <h4>Duty to Warn</h4>
      <ul>
        <li>Obligation to protect identifiable third parties</li>
        <li>Applies when patient makes specific threats</li>
        <li>May require breaking confidentiality</li>
        <li>Legal requirements vary by state</li>
      </ul>

      <h3>Documentation and Reporting</h3>
      <ul>
        <li>Accurate assessment of mental status</li>
        <li>Suicide and violence risk assessments</li>
        <li>Interventions provided and patient responses</li>
        <li>Mandatory reporting requirements (abuse, neglect)</li>
      </ul>
    `
  },
  {
    id: 5,
    title: "Conceptual Models and Therapeutic Approaches",
    description: "Major theoretical frameworks guiding mental health nursing practice and therapeutic interventions.",
    objectives: [
      "Apply psychoanalytic, behavioral, cognitive-behavioral, and humanistic theories",
      "Utilize Peplau's Interpersonal Theory effectively",
      "Incorporate milieu therapy principles into practice"
    ],
    content: `
      <h3>Peplau's Interpersonal Theory</h3>
      <p>Hildegard Peplau, known as the "mother of psychiatric nursing," emphasized the nurse-patient relationship as fundamental to psychiatric care.</p>
      
      <h4>Core Components</h4>
      <ul>
        <li><strong>Person:</strong> The patient receiving care</li>
        <li><strong>Environment:</strong> Internal and external contexts</li>
        <li><strong>Health:</strong> As defined by the individual</li>
        <li><strong>Nursing:</strong> The therapeutic process</li>
      </ul>

      <h4>Seven Nursing Roles</h4>
      <ol>
        <li><strong>Stranger:</strong> Initial contact, respect and courtesy</li>
        <li><strong>Resource:</strong> Provide information and answers</li>
        <li><strong>Teacher:</strong> Educate about health and illness</li>
        <li><strong>Counselor:</strong> Help understand and cope with experiences</li>
        <li><strong>Surrogate:</strong> Substitute for significant others when appropriate</li>
        <li><strong>Leader:</strong> Guide therapeutic activities</li>
        <li><strong>Technical Expert:</strong> Provide skilled nursing care</li>
      </ol>

      <h3>Behavioral Therapy</h3>
      <p>Based on learning theory - maladaptive behaviors can be unlearned and replaced with healthier behaviors.</p>
      
      <h4>Classical Conditioning (Pavlov)</h4>
      <ul>
        <li>Behaviors learned through association</li>
        <li>Example: Fear response to specific stimuli</li>
        <li>Treatment: Systematic desensitization</li>
      </ul>

      <h4>Operant Conditioning (Skinner)</h4>
      <ul>
        <li>Behaviors influenced by consequences</li>
        <li>Reinforcement increases behavior</li>
        <li>Punishment decreases behavior</li>
        <li>Application: Token economies, behavior modification</li>
      </ul>

      <h3>Cognitive-Behavioral Therapy (CBT)</h3>
      <p>Core principle: Thoughts affect feelings and behaviors.</p>
      
      <h4>Cognitive Distortions</h4>
      <ul>
        <li><strong>All-or-nothing thinking:</strong> Seeing situations in extremes</li>
        <li><strong>Catastrophizing:</strong> Expecting worst-case scenarios</li>
        <li><strong>Mind reading:</strong> Assuming others' thoughts</li>
        <li><strong>Personalization:</strong> Blaming self for external events</li>
      </ul>

      <h4>CBT Techniques</h4>
      <ul>
        <li>Thought records and challenging negative thoughts</li>
        <li>Behavioral experiments</li>
        <li>Relaxation training</li>
        <li>Problem-solving skills</li>
      </ul>

      <h3>Humanistic Therapy (Rogers)</h3>
      <p>Person-centered approach emphasizing individual's capacity for growth.</p>
      
      <h4>Core Conditions</h4>
      <ul>
        <li><strong>Unconditional positive regard:</strong> Acceptance without judgment</li>
        <li><strong>Empathy:</strong> Understanding client's perspective</li>
        <li><strong>Genuineness:</strong> Authentic therapeutic relationship</li>
      </ul>

      <h3>Milieu Therapy</h3>
      <p>Therapeutic use of the environment to promote healing and growth.</p>
      
      <h4>Key Principles</h4>
      <ul>
        <li><strong>Community meetings:</strong> Democratic participation in decisions</li>
        <li><strong>Norm setting:</strong> Clear expectations and consequences</li>
        <li><strong>Peer support:</strong> Mutual help among patients</li>
        <li><strong>Reality orientation:</strong> Focus on here-and-now</li>
      </ul>

      <h4>Therapeutic Environment Elements</h4>
      <ul>
        <li>Physical safety and security</li>
        <li>Structured daily schedule</li>
        <li>Opportunities for social interaction</li>
        <li>Learning and skill-building activities</li>
        <li>Respect for individual dignity</li>
      </ul>

      <h3>Psychoanalytic Theory (Freud)</h3>
      
      <h4>Defense Mechanisms</h4>
      <ul>
        <li><strong>Denial:</strong> Refusing to acknowledge reality</li>
        <li><strong>Projection:</strong> Attributing own feelings to others</li>
        <li><strong>Displacement:</strong> Redirecting emotions to safer target</li>
        <li><strong>Sublimation:</strong> Channeling impulses into socially acceptable activities</li>
        <li><strong>Rationalization:</strong> Creating logical explanations for behavior</li>
      </ul>

      <h3>Integration in Nursing Practice</h3>
      <ul>
        <li>Use multiple theoretical perspectives for comprehensive care</li>
        <li>Match interventions to patient needs and preferences</li>
        <li>Maintain therapeutic relationship as foundation</li>
        <li>Create healing environment through milieu principles</li>
        <li>Help patients develop insight and coping skills</li>
      </ul>
    `
  },
  {
    id: 6,
    title: "Substance Use and Abuse",
    description: "Understanding substance use disorders, withdrawal management, and nursing interventions.",
    objectives: [
      "Differentiate substance abuse, dependence, intoxication, and withdrawal",
      "Identify and manage alcohol withdrawal using the CIWA scale",
      "Implement appropriate nursing interventions for substance use disorders",
      "Recognize enabling behaviors and appropriate family interventions"
    ],
    content: `
      <h3>Substance Use Disorder (DSM-5)</h3>
      <p>A pathological pattern of substance use leading to significant impairment or distress, with 11 criteria grouped into four categories:</p>
      
      <h4>Impaired Control</h4>
      <ul>
        <li>Using larger amounts or for longer than intended</li>
        <li>Persistent desire or unsuccessful efforts to cut down</li>
        <li>Great deal of time obtaining, using, or recovering</li>
        <li>Craving or strong urge to use</li>
      </ul>

      <h4>Social Impairment</h4>
      <ul>
        <li>Failure to fulfill role obligations</li>
        <li>Continued use despite social/interpersonal problems</li>
        <li>Giving up important activities because of use</li>
      </ul>

      <h4>Risky Use</h4>
      <ul>
        <li>Use in physically hazardous situations</li>
        <li>Continued use despite physical/psychological problems</li>
      </ul>

      <h4>Pharmacological Criteria</h4>
      <ul>
        <li><strong>Tolerance:</strong> Need for increased amounts for same effect</li>
        <li><strong>Withdrawal:</strong> Characteristic syndrome when stopping use</li>
      </ul>

      <h3>Alcohol Withdrawal and CIWA Scale</h3>
      
      <h4>Alcohol Withdrawal Timeline</h4>
      <ul>
        <li><strong>6-12 hours:</strong> Tremors, anxiety, headache, nausea</li>
        <li><strong>12-24 hours:</strong> Hallucinations (usually visual)</li>
        <li><strong>48-96 hours:</strong> Seizures possible</li>
        <li><strong>3-5 days:</strong> Delirium tremens (medical emergency)</li>
      </ul>

      <h4>CIWA-Ar Scale Components</h4>
      <ol>
        <li><strong>Nausea/Vomiting:</strong> 0-7 points</li>
        <li><strong>Tremor:</strong> 0-7 points</li>
        <li><strong>Paroxysmal Sweats:</strong> 0-7 points</li>
        <li><strong>Anxiety:</strong> 0-7 points</li>
        <li><strong>Agitation:</strong> 0-7 points</li>
        <li><strong>Tactile Disturbances:</strong> 0-7 points</li>
        <li><strong>Auditory Disturbances:</strong> 0-7 points</li>
        <li><strong>Visual Disturbances:</strong> 0-7 points</li>
        <li><strong>Headache/Fullness in Head:</strong> 0-7 points</li>
        <li><strong>Orientation:</strong> 0-4 points</li>
      </ol>

      <h4>CIWA Scoring and Interventions</h4>
      <ul>
        <li><strong>0-9:</strong> Minimal symptoms, supportive care</li>
        <li><strong>10-15:</strong> Mild to moderate symptoms, consider medication</li>
        <li><strong>16+:</strong> Severe symptoms, medication indicated</li>
      </ul>

      <h3>Common Substances and Effects</h3>
      
      <h4>Depressants</h4>
      <ul>
        <li><strong>Alcohol:</strong> CNS depression, disinhibition</li>
        <li><strong>Benzodiazepines:</strong> Anxiety relief, sedation</li>
        <li><strong>Opioids:</strong> Pain relief, euphoria, respiratory depression</li>
      </ul>

      <h4>Stimulants</h4>
      <ul>
        <li><strong>Cocaine:</strong> Euphoria, increased energy, cardiac risks</li>
        <li><strong>Amphetamines:</strong> Alertness, appetite suppression</li>
        <li><strong>Caffeine:</strong> Increased alertness, potential anxiety</li>
      </ul>

      <h4>Hallucinogens</h4>
      <ul>
        <li><strong>LSD:</strong> Perceptual distortions, "flashbacks"</li>
        <li><strong>Cannabis:</strong> Relaxation, altered perception, memory impairment</li>
      </ul>

      <h3>Nursing Interventions</h3>
      
      <h4>Acute Care</h4>
      <ul>
        <li>Monitor vital signs and withdrawal symptoms</li>
        <li>Administer medications as ordered (benzodiazepines, vitamins)</li>
        <li>Maintain safe environment</li>
        <li>Provide emotional support and reassurance</li>
        <li>Monitor for complications (seizures, delirium)</li>
      </ul>

      <h4>Long-term Recovery</h4>
      <ul>
        <li>Education about disease process</li>
        <li>Coping skills training</li>
        <li>Relapse prevention planning</li>
        <li>Support group referrals (AA, NA)</li>
        <li>Family therapy and education</li>
      </ul>

      <h3>Family Dynamics and Codependency</h3>
      
      <h4>Enabling Behaviors</h4>
      <ul>
        <li>Making excuses for substance user</li>
        <li>Covering consequences of use</li>
        <li>Providing money or resources</li>
        <li>Denying problem exists</li>
      </ul>

      <h4>Codependency Characteristics</h4>
      <ul>
        <li>Excessive focus on controlling others</li>
        <li>Low self-esteem and self-worth</li>
        <li>Difficulty setting boundaries</li>
        <li>Taking responsibility for others' problems</li>
      </ul>

      <h3>Special Populations</h3>
      
      <h4>Healthcare Professionals</h4>
      <ul>
        <li>Higher risk due to access and stress</li>
        <li>Professional reporting obligations</li>
        <li>Alternative-to-discipline programs</li>
        <li>Importance of early intervention</li>
      </ul>

      <h4>Adolescents</h4>
      <ul>
        <li>Developmental considerations</li>
        <li>Family involvement in treatment</li>
        <li>School-based interventions</li>
        <li>Peer influence factors</li>
      </ul>
    `
  },
  {
    id: 7,
    title: "Stressors Affecting Thought Processes and Perceptions",
    description: "Understanding psychotic disorders, schizophrenia, and interventions for altered thought processes.",
    objectives: [
      "Differentiate between schizophrenia and other psychotic disorders",
      "Identify and manage positive, negative, and cognitive symptoms",
      "Understand psychopharmacology of antipsychotic medications",
      "Implement effective interventions for acute psychotic episodes"
    ],
    content: `
      <h3>Psychotic Disorders Overview</h3>
      <p>Psychotic disorders involve disturbances in thought processes and perceptions, including delusions, hallucinations, and disorganized thinking. Key disorders include:</p>
      
      <ul>
        <li><strong>Schizophrenia:</strong> Chronic disorder with multiple symptoms</li>
        <li><strong>Brief Psychotic Disorder:</strong> Sudden onset, 1 day to 1 month duration</li>
        <li><strong>Delusional Disorder:</strong> Fixed delusions without other major symptoms</li>
        <li><strong>Schizoaffective Disorder:</strong> Combination of psychotic and mood symptoms</li>
      </ul>

      <h3>Schizophrenia Spectrum</h3>
      
      <h4>Diagnostic Criteria (DSM-5)</h4>
      <p>Two or more symptoms present for significant portion of one month (with some symptoms present for 6 months):</p>
      <ol>
        <li>Delusions</li>
        <li>Hallucinations</li>
        <li>Disorganized speech</li>
        <li>Grossly disorganized or catatonic behavior</li>
        <li>Negative symptoms</li>
      </ol>

      <h3>Positive Symptoms</h3>
      <p>Presence of abnormal experiences:</p>
      
      <h4>Delusions</h4>
      <ul>
        <li><strong>Persecutory:</strong> Belief of being harmed or harassed</li>
        <li><strong>Grandiose:</strong> Inflated self-worth or special abilities</li>
        <li><strong>Referential:</strong> Belief that environmental cues are directed at self</li>
        <li><strong>Somatic:</strong> False beliefs about body/health</li>
        <li><strong>Religious:</strong> Excessive religious preoccupation</li>
      </ul>

      <h4>Hallucinations</h4>
      <ul>
        <li><strong>Auditory:</strong> Most common, often voices (command hallucinations most dangerous)</li>
        <li><strong>Visual:</strong> Seeing things that aren't present</li>
        <li><strong>Tactile:</strong> Feeling sensations on skin</li>
        <li><strong>Olfactory:</strong> Smelling odors that aren't present</li>
        <li><strong>Gustatory:</strong> Tasting things that aren't there</li>
      </ul>

      <h4>Disorganized Thinking/Speech</h4>
      <ul>
        <li><strong>Loose associations:</strong> Ideas lack logical connection</li>
        <li><strong>Tangentiality:</strong> Veering off topic</li>
        <li><strong>Circumstantiality:</strong> Overly detailed, roundabout speech</li>
        <li><strong>Word salad:</strong> Incoherent speech</li>
        <li><strong>Neologisms:</strong> Made-up words</li>
      </ul>

      <h3>Negative Symptoms</h3>
      <p>Absence or reduction of normal functions:</p>
      <ul>
        <li><strong>Avolition:</strong> Lack of motivation or drive</li>
        <li><strong>Alogia:</strong> Reduced speech output</li>
        <li><strong>Anhedonia:</strong> Inability to experience pleasure</li>
        <li><strong>Affective flattening:</strong> Reduced emotional expression</li>
        <li><strong>Social withdrawal:</strong> Isolation from others</li>
      </ul>

      <h3>Cognitive Symptoms</h3>
      <ul>
        <li>Attention deficits</li>
        <li>Memory problems</li>
        <li>Executive functioning impairment</li>
        <li>Processing speed reduction</li>
      </ul>

      <h3>Antipsychotic Medications</h3>
      
      <h4>First-Generation (Typical) Antipsychotics</h4>
      <ul>
        <li><strong>Examples:</strong> Haloperidol, chlorpromazine, fluphenazine</li>
        <li><strong>Mechanism:</strong> Block dopamine D2 receptors</li>
        <li><strong>Effective for:</strong> Positive symptoms</li>
        <li><strong>Side effects:</strong> Extrapyramidal symptoms (EPS), tardive dyskinesia</li>
      </ul>

      <h4>Second-Generation (Atypical) Antipsychotics</h4>
      <ul>
        <li><strong>Examples:</strong> Risperidone, olanzapine, quetiapine, aripiprazole</li>
        <li><strong>Mechanism:</strong> Block dopamine and serotonin receptors</li>
        <li><strong>Effective for:</strong> Positive and negative symptoms</li>
        <li><strong>Side effects:</strong> Metabolic syndrome, weight gain, diabetes</li>
      </ul>

      <h3>Extrapyramidal Symptoms (EPS)</h3>
      
      <h4>Types of EPS</h4>
      <ul>
        <li><strong>Dystonia:</strong> Involuntary muscle contractions (acute)</li>
        <li><strong>Akathisia:</strong> Restlessness, need to move</li>
        <li><strong>Parkinsonism:</strong> Tremor, rigidity, bradykinesia</li>
        <li><strong>Tardive dyskinesia:</strong> Late-onset involuntary movements</li>
      </ul>

      <h4>Treatment of EPS</h4>
      <ul>
        <li><strong>Anticholinergics:</strong> Benztropine, trihexyphenidyl</li>
        <li><strong>Dopamine agonists:</strong> Amantadine</li>
        <li><strong>Prevention:</strong> Use lowest effective dose, consider atypicals</li>
      </ul>

      <h3>Nursing Interventions</h3>
      
      <h4>Acute Phase</h4>
      <ul>
        <li><strong>Safety:</strong> Assess for violence risk, suicide risk</li>
        <li><strong>Communication:</strong> Use clear, simple language</li>
        <li><strong>Reality orientation:</strong> Don't argue with delusions, but don't reinforce</li>
        <li><strong>Medication compliance:</strong> Monitor for side effects and effectiveness</li>
        <li><strong>Environment:</strong> Reduce stimulation, maintain structure</li>
      </ul>

      <h4>Responding to Hallucinations</h4>
      <ul>
        <li>Acknowledge patient's experience without agreeing</li>
        <li>"I don't hear the voices, but I can see they're distressing to you"</li>
        <li>Focus on patient's feelings rather than content</li>
        <li>Redirect to reality-based activities</li>
        <li>Assess for command hallucinations</li>
      </ul>

      <h4>Managing Delusions</h4>
      <ul>
        <li>Don't challenge or reinforce delusions</li>
        <li>Focus on underlying feelings</li>
        <li>Present reality without arguing</li>
        <li>Avoid asking for proof or details</li>
        <li>Set limits on delusional talk</li>
      </ul>

      <h3>Long-term Management</h3>
      <ul>
        <li><strong>Medication adherence:</strong> Education about importance and side effects</li>
        <li><strong>Psychosocial rehabilitation:</strong> Social skills training, vocational training</li>
        <li><strong>Family education:</strong> Support and understanding of illness</li>
        <li><strong>Community resources:</strong> Case management, support groups</li>
        <li><strong>Relapse prevention:</strong> Recognize early warning signs</li>
      </ul>
    `
  },
  {
    id: 8,
    title: "Stressors Affecting Mood",
    description: "Understanding mood disorders, including depression and bipolar disorder, and their management.",
    objectives: [
      "Identify and differentiate between major depression and bipolar disorders",
      "Utilize appropriate psychopharmacological interventions",
      "Perform comprehensive suicide risk assessment",
      "Implement effective strategies for managing manic behaviors"
    ],
    content: `
      <h3>Major Depressive Disorder (MDD)</h3>
      
      <h4>Diagnostic Criteria (DSM-5)</h4>
      <p>Five or more symptoms present for at least 2 weeks (must include depressed mood or anhedonia):</p>
      <ol>
        <li>Depressed mood most of the day</li>
        <li>Anhedonia (loss of interest/pleasure)</li>
        <li>Significant weight loss or gain</li>
        <li>Insomnia or hypersomnia</li>
        <li>Psychomotor agitation or retardation</li>
        <li>Fatigue or loss of energy</li>
        <li>Feelings of worthlessness or guilt</li>
        <li>Diminished concentration</li>
        <li>Recurrent thoughts of death or suicide</li>
      </ol>

      <h4>Risk Factors</h4>
      <ul>
        <li><strong>Biological:</strong> Family history, neurotransmitter imbalances, medical conditions</li>
        <li><strong>Psychological:</strong> Negative thinking patterns, trauma history, low self-esteem</li>
        <li><strong>Social:</strong> Stressful life events, isolation, relationship problems</li>
        <li><strong>Environmental:</strong> Seasonal changes, substance use, medication side effects</li>
      </ul>

      <h3>Bipolar Disorder</h3>
      
      <h4>Bipolar I Disorder</h4>
      <ul>
        <li>At least one manic episode</li>
        <li>May include major depressive episodes</li>
        <li>Manic episode: 1 week (or hospitalization required)</li>
      </ul>

      <h4>Bipolar II Disorder</h4>
      <ul>
        <li>At least one hypomanic episode</li>
        <li>At least one major depressive episode</li>
        <li>No full manic episodes</li>
      </ul>

      <h4>Manic Episode Criteria</h4>
      <p>Elevated, expansive, or irritable mood plus 3+ symptoms (4+ if mood only irritable):</p>
      <ol>
        <li>Inflated self-esteem or grandiosity</li>
        <li>Decreased need for sleep</li>
        <li>More talkative than usual</li>
        <li>Flight of ideas or racing thoughts</li>
        <li>Distractibility</li>
        <li>Increased goal-directed activity</li>
        <li>Excessive involvement in risky activities</li>
      </ol>

      <h3>Suicide Risk Assessment</h3>
      
      <h4>Risk Factors</h4>
      <ul>
        <li><strong>Demographics:</strong> Male gender, age >45, white race</li>
        <li><strong>Clinical:</strong> Depression, psychosis, substance use, chronic illness</li>
        <li><strong>Historical:</strong> Previous attempts, family history of suicide</li>
        <li><strong>Social:</strong> Social isolation, recent losses, unemployment</li>
        <li><strong>Psychological:</strong> Hopelessness, impulsivity, cognitive rigidity</li>
      </ul>

      <h4>Protective Factors</h4>
      <ul>
        <li>Strong support system</li>
        <li>Religious or spiritual beliefs</li>
        <li>Responsibilities (children, pets)</li>
        <li>Hope for future</li>
        <li>Access to mental health care</li>
      </ul>

      <h4>Assessment Questions</h4>
      <ol>
        <li>Are you having thoughts of hurting yourself?</li>
        <li>Do you have a plan for how you would do it?</li>
        <li>Do you have access to means?</li>
        <li>When would you carry out this plan?</li>
        <li>What has kept you safe so far?</li>
      </ol>

      <h3>Antidepressant Medications</h3>
      
      <h4>Selective Serotonin Reuptake Inhibitors (SSRIs)</h4>
      <ul>
        <li><strong>Examples:</strong> Fluoxetine, sertraline, citalopram, escitalopram</li>
        <li><strong>Mechanism:</strong> Block serotonin reuptake</li>
        <li><strong>Side effects:</strong> GI upset, sexual dysfunction, weight changes</li>
        <li><strong>Onset:</strong> 2-4 weeks for full effect</li>
      </ul>

      <h4>Serotonin-Norepinephrine Reuptake Inhibitors (SNRIs)</h4>
      <ul>
        <li><strong>Examples:</strong> Venlafaxine, duloxetine</li>
        <li><strong>Mechanism:</strong> Block serotonin and norepinephrine reuptake</li>
        <li><strong>Uses:</strong> Depression with anxiety, neuropathic pain</li>
      </ul>

      <h4>Important Considerations</h4>
      <ul>
        <li><strong>Black box warning:</strong> Increased suicide risk in youth <25</li>
        <li><strong>Discontinuation syndrome:</strong> Gradual tapering needed</li>
        <li><strong>Drug interactions:</strong> Serotonin syndrome risk</li>
      </ul>

      <h3>Mood Stabilizers</h3>
      
      <h4>Lithium</h4>
      <ul>
        <li><strong>Therapeutic level:</strong> 0.8-1.4 mEq/L (acute), 0.6-1.2 mEq/L (maintenance)</li>
        <li><strong>Monitoring:</strong> Blood levels, kidney function, thyroid function</li>
        <li><strong>Side effects:</strong> Tremor, polyuria, weight gain, GI upset</li>
        <li><strong>Toxicity signs:</strong> Confusion, ataxia, seizures</li>
      </ul>

      <h4>Anticonvulsants</h4>
      <ul>
        <li><strong>Valproic acid:</strong> Monitor liver function, CBC</li>
        <li><strong>Carbamazepine:</strong> Risk of bone marrow suppression</li>
        <li><strong>Lamotrigine:</strong> Watch for skin rash (Stevens-Johnson syndrome)</li>
      </ul>

      <h3>Electroconvulsive Therapy (ECT)</h3>
      
      <h4>Indications</h4>
      <ul>
        <li>Treatment-resistant depression</li>
        <li>Severe depression with psychotic features</li>
        <li>High suicide risk requiring rapid response</li>
        <li>Catatonia</li>
      </ul>

      <h4>Nursing Care</h4>
      <ul>
        <li><strong>Pre-procedure:</strong> NPO 8-12 hours, baseline vitals</li>
        <li><strong>During:</strong> Monitor airway, vital signs</li>
        <li><strong>Post-procedure:</strong> Assess orientation, provide reorientation</li>
        <li><strong>Teaching:</strong> Memory effects, number of treatments</li>
      </ul>

      <h3>Managing Manic Behaviors</h3>
      
      <h4>Environmental Interventions</h4>
      <ul>
        <li>Reduce stimulation (dim lights, minimize noise)</li>
        <li>Provide structured environment</li>
        <li>Set consistent limits</li>
        <li>Ensure adequate nutrition and hydration</li>
      </ul>

      <h4>Communication Strategies</h4>
      <ul>
        <li>Use calm, consistent approach</li>
        <li>Set clear boundaries</li>
        <li>Avoid arguing or challenging grandiose ideas</li>
        <li>Redirect excessive energy into appropriate activities</li>
        <li>Use brief, simple statements</li>
      </ul>

      <h3>Nursing Interventions for Depression</h3>
      
      <h4>Therapeutic Communication</h4>
      <ul>
        <li>Acknowledge feelings without minimizing</li>
        <li>Encourage expression of emotions</li>
        <li>Identify strengths and accomplishments</li>
        <li>Challenge negative thought patterns</li>
        <li>Provide hope while being realistic</li>
      </ul>

      <h4>Activity and Self-Care</h4>
      <ul>
        <li>Start with simple, achievable goals</li>
        <li>Encourage physical activity</li>
        <li>Assist with ADLs as needed</li>
        <li>Promote sleep hygiene</li>
        <li>Monitor nutrition and fluid intake</li>
      </ul>
    `
  },
  {
    id: 9,
    title: "Stressors Affecting Alterations Across the Lifespan",
    description: "Mental health considerations for children, adolescents, adults, and elderly populations.",
    objectives: [
      "Identify mental health disorders in children and adolescents",
      "Recognize signs of eating disorders and appropriate interventions",
      "Differentiate delirium from dementia in older adults",
      "Implement nursing strategies tailored to developmental stages"
    ],
    content: `
      <h3>Child and Adolescent Mental Health</h3>
      
      <h4>Neurodevelopmental Disorders</h4>
      
      <h5>Autism Spectrum Disorder (ASD)</h5>
      <ul>
        <li><strong>Characteristics:</strong> Deficits in social communication and restricted, repetitive behaviors</li>
        <li><strong>Early signs:</strong> Limited eye contact, delayed speech, repetitive movements</li>
        <li><strong>Nursing interventions:</strong> Reduce environmental stimuli, maintain routines, use visual cues</li>
      </ul>

      <h5>Attention Deficit Hyperactivity Disorder (ADHD)</h5>
      <ul>
        <li><strong>Symptoms:</strong> Inattention, hyperactivity, impulsivity</li>
        <li><strong>Types:</strong> Predominantly inattentive, predominantly hyperactive-impulsive, combined</li>
        <li><strong>Treatment:</strong> Stimulant medications (methylphenidate), behavioral interventions</li>
      </ul>

      <h4>Behavioral Interventions for Children</h4>
      <ul>
        <li>Positive reinforcement systems</li>
        <li>Clear, consistent expectations</li>
        <li>Time-out procedures</li>
        <li>Token economy systems</li>
        <li>Social skills training</li>
      </ul>

      <h3>Eating Disorders</h3>
      
      <h4>Anorexia Nervosa</h4>
      <ul>
        <li><strong>Characteristics:</strong> Restriction of food intake, fear of weight gain, distorted body image</li>
        <li><strong>Types:</strong> Restricting type, binge-eating/purging type</li>
        <li><strong>Physical signs:</strong> Severe weight loss, amenorrhea, lanugo, bradycardia</li>
        <li><strong>Complications:</strong> Electrolyte imbalances, cardiac arrhythmias, bone loss</li>
      </ul>

      <h4>Bulimia Nervosa</h4>
      <ul>
        <li><strong>Characteristics:</strong> Binge eating followed by compensatory behaviors</li>
        <li><strong>Physical signs:</strong> Normal weight, Russell's sign, swollen parotid glands</li>
        <li><strong>Complications:</strong> Dental problems, electrolyte imbalances, GI issues</li>
      </ul>

      <h4>Binge Eating Disorder</h4>
      <ul>
        <li><strong>Characteristics:</strong> Recurrent binge eating without compensatory behaviors</li>
        <li><strong>Associated features:</strong> Eating rapidly, eating until uncomfortably full, guilt</li>
        <li><strong>Complications:</strong> Obesity, diabetes, cardiovascular disease</li>
      </ul>

      <h4>Nursing Interventions for Eating Disorders</h4>
      <ul>
        <li><strong>Medical stabilization:</strong> Monitor vital signs, electrolytes, cardiac status</li>
        <li><strong>Nutritional rehabilitation:</strong> Structured meal plans, supervised eating</li>
        <li><strong>Behavioral interventions:</strong> Monitor for purging behaviors, bathroom supervision</li>
        <li><strong>Psychological support:</strong> Address underlying issues, body image work</li>
        <li><strong>Family therapy:</strong> Involve family in treatment planning</li>
      </ul>

      <h3>Elderly Mental Health</h3>
      
      <h4>Delirium vs. Dementia</h4>
      
      <table border="1" style="width:100%; border-collapse:collapse; margin: 20px 0;">
        <tr style="background-color:#f2f2f2;">
          <th style="padding:10px;">Feature</th>
          <th style="padding:10px;">Delirium</th>
          <th style="padding:10px;">Dementia</th>
        </tr>
        <tr>
          <td style="padding:10px;"><strong>Onset</strong></td>
          <td style="padding:10px;">Acute (hours to days)</td>
          <td style="padding:10px;">Gradual (months to years)</td>
        </tr>
        <tr>
          <td style="padding:10px;"><strong>Course</strong></td>
          <td style="padding:10px;">Fluctuating</td>
          <td style="padding:10px;">Progressive decline</td>
        </tr>
        <tr>
          <td style="padding:10px;"><strong>Consciousness</strong></td>
          <td style="padding:10px;">Altered level</td>
          <td style="padding:10px;">Usually clear</td>
        </tr>
        <tr>
          <td style="padding:10px;"><strong>Attention</strong></td>
          <td style="padding:10px;">Impaired</td>
          <td style="padding:10px;">Initially intact</td>
        </tr>
        <tr>
          <td style="padding:10px;"><strong>Reversibility</strong></td>
          <td style="padding:10px;">Often reversible</td>
          <td style="padding:10px;">Usually irreversible</td>
        </tr>
      </table>

      <h4>Alzheimer's Disease</h4>
      <ul>
        <li><strong>Early stage:</strong> Mild memory loss, word-finding difficulties</li>
        <li><strong>Middle stage:</strong> Confusion, behavioral changes, assistance with ADLs needed</li>
        <li><strong>Late stage:</strong> Severe cognitive impairment, loss of motor function</li>
        <li><strong>Medications:</strong> Cholinesterase inhibitors (donepezil), NMDA antagonists (memantine)</li>
      </ul>

      <h4>Nursing Interventions for Dementia</h4>
      <ul>
        <li><strong>Safety:</strong> Fall prevention, wandering precautions, medication management</li>
        <li><strong>Communication:</strong> Simple language, one instruction at a time, validation therapy</li>
        <li><strong>Environment:</strong> Reduce confusion, maintain familiar routines, adequate lighting</li>
        <li><strong>Behavioral management:</strong> Identify triggers, redirect behaviors, maintain dignity</li>
        <li><strong>Family support:</strong> Education, resources, respite care</li>
      </ul>

      <h3>Developmental Considerations</h3>
      
      <h4>Children (Ages 2-12)</h4>
      <ul>
        <li>Use age-appropriate communication</li>
        <li>Involve parents/caregivers in treatment</li>
        <li>Use play therapy techniques</li>
        <li>Consider developmental delays</li>
        <li>School-based interventions</li>
      </ul>

      <h4>Adolescents (Ages 13-18)</h4>
      <ul>
        <li>Respect growing independence</li>
        <li>Address identity and peer issues</li>
        <li>Consider confidentiality rules</li>
        <li>Involve in treatment planning</li>
        <li>Screen for risk behaviors</li>
      </ul>

      <h4>Adults (Ages 19-64)</h4>
      <ul>
        <li>Consider work and family stressors</li>
        <li>Address relationship issues</li>
        <li>Focus on functional outcomes</li>
        <li>Consider caregiver roles</li>
        <li>Preventive mental health</li>
      </ul>

      <h4>Elderly (Ages 65+)</h4>
      <ul>
        <li>Consider multiple comorbidities</li>
        <li>Address social isolation</li>
        <li>Monitor for depression</li>
        <li>Medication interactions</li>
        <li>End-of-life considerations</li>
      </ul>
    `
  },
  {
    id: 10,
    title: "Stressors Affecting Levels of Anxiety",
    description: "Understanding anxiety disorders, defense mechanisms, and therapeutic interventions.",
    objectives: [
      "Identify and differentiate anxiety disorders and associated symptoms",
      "Recognize adaptive and maladaptive defense mechanisms",
      "Apply therapeutic interventions effectively for anxiety management"
    ],
    content: `
      <h3>Levels of Anxiety (Peplau)</h3>
      
      <h4>Mild Anxiety</h4>
      <ul>
        <li><strong>Characteristics:</strong> Heightened perception, increased alertness</li>
        <li><strong>Physical signs:</strong> Slight muscle tension, restlessness</li>
        <li><strong>Cognitive effects:</strong> Enhanced learning and problem-solving</li>
        <li><strong>Nursing interventions:</strong> Encourage verbalization, use teaching opportunities</li>
      </ul>

      <h4>Moderate Anxiety</h4>
      <ul>
        <li><strong>Characteristics:</strong> Decreased perceptual field, selective attention</li>
        <li><strong>Physical signs:</strong> Increased heart rate, muscle tension, GI symptoms</li>
        <li><strong>Cognitive effects:</strong> Difficulty concentrating, learning impaired</li>
        <li><strong>Nursing interventions:</strong> Help focus attention, provide structure</li>
      </ul>

      <h4>Severe Anxiety</h4>
      <ul>
        <li><strong>Characteristics:</strong> Greatly reduced perceptual field, focus on details</li>
        <li><strong>Physical signs:</strong> Headache, dizziness, nausea, trembling</li>
        <li><strong>Cognitive effects:</strong> Learning and problem-solving not possible</li>
        <li><strong>Nursing interventions:</strong> Stay with patient, provide safety, reduce stimuli</li>
      </ul>

      <h4>Panic Level</h4>
      <ul>
        <li><strong>Characteristics:</strong> Unable to focus, disorganized behavior</li>
        <li><strong>Physical signs:</strong> Dilated pupils, increased motor activity, sleeplessness</li>
        <li><strong>Cognitive effects:</strong> Inability to function, possible hallucinations</li>
        <li><strong>Nursing interventions:</strong> Stay with patient, use firm voice, medication may be needed</li>
      </ul>

      <h3>Anxiety Disorders</h3>
      
      <h4>Generalized Anxiety Disorder (GAD)</h4>
      <ul>
        <li><strong>Characteristics:</strong> Excessive worry about multiple areas for 6+ months</li>
        <li><strong>Symptoms:</strong> Restlessness, fatigue, difficulty concentrating, muscle tension</li>
        <li><strong>Treatment:</strong> SSRIs, SNRIs, buspirone, CBT</li>
      </ul>

      <h4>Panic Disorder</h4>
      <ul>
        <li><strong>Characteristics:</strong> Recurrent panic attacks with persistent worry about attacks</li>
        <li><strong>Panic attack symptoms:</strong> Palpitations, sweating, trembling, shortness of breath, chest pain</li>
        <li><strong>Treatment:</strong> SSRIs, benzodiazepines (short-term), CBT, exposure therapy</li>
      </ul>

      <h4>Specific Phobias</h4>
      <ul>
        <li><strong>Characteristics:</strong> Irrational fear of specific objects or situations</li>
        <li><strong>Common types:</strong> Animals, heights, flying, medical procedures</li>
        <li><strong>Treatment:</strong> Systematic desensitization, exposure therapy</li>
      </ul>

      <h4>Social Anxiety Disorder</h4>
      <ul>
        <li><strong>Characteristics:</strong> Fear of social situations and scrutiny by others</li>
        <li><strong>Symptoms:</strong> Blushing, trembling, nausea in social situations</li>
        <li><strong>Treatment:</strong> SSRIs, beta-blockers, CBT, social skills training</li>
      </ul>

      <h4>Obsessive-Compulsive Disorder (OCD)</h4>
      <ul>
        <li><strong>Obsessions:</strong> Intrusive, unwanted thoughts causing anxiety</li>
        <li><strong>Compulsions:</strong> Repetitive behaviors to reduce anxiety</li>
        <li><strong>Common themes:</strong> Contamination, checking, symmetry, forbidden thoughts</li>
        <li><strong>Treatment:</strong> SSRIs (higher doses), exposure and response prevention</li>
      </ul>

      <h3>Defense Mechanisms</h3>
      
      <h4>Adaptive Defense Mechanisms</h4>
      <ul>
        <li><strong>Sublimation:</strong> Channeling impulses into socially acceptable activities</li>
        <li><strong>Humor:</strong> Using comedy to cope with stress</li>
        <li><strong>Suppression:</strong> Consciously putting aside disturbing thoughts</li>
        <li><strong>Compensation:</strong> Making up for deficiency in one area by excelling in another</li>
      </ul>

      <h4>Maladaptive Defense Mechanisms</h4>
      <ul>
        <li><strong>Denial:</strong> Refusing to acknowledge painful reality</li>
        <li><strong>Projection:</strong> Attributing own feelings/thoughts to others</li>
        <li><strong>Displacement:</strong> Redirecting emotions to safer target</li>
        <li><strong>Regression:</strong> Reverting to earlier developmental stage</li>
        <li><strong>Rationalization:</strong> Creating logical explanations for unacceptable behavior</li>
        <li><strong>Reaction formation:</strong> Expressing opposite of true feelings</li>
      </ul>

      <h3>Dissociative Disorders</h3>
      
      <h4>Dissociative Identity Disorder</h4>
      <ul>
        <li><strong>Characteristics:</strong> Two or more distinct personality states</li>
        <li><strong>Associated with:</strong> Severe childhood trauma</li>
        <li><strong>Treatment:</strong> Psychotherapy, trauma processing, integration</li>
      </ul>

      <h4>Depersonalization/Derealization Disorder</h4>
      <ul>
        <li><strong>Depersonalization:</strong> Feeling detached from self</li>
        <li><strong>Derealization:</strong> Feeling that surroundings are unreal</li>
        <li><strong>Treatment:</strong> Psychotherapy, grounding techniques</li>
      </ul>

      <h3>Somatic Symptom Disorders</h3>
      
      <h4>Somatic Symptom Disorder</h4>
      <ul>
        <li><strong>Characteristics:</strong> Physical symptoms with excessive thoughts/behaviors</li>
        <li><strong>Symptoms:</strong> Pain, fatigue, neurological symptoms</li>
        <li><strong>Treatment:</strong> Regular medical care, CBT, antidepressants</li>
      </ul>

      <h4>Conversion Disorder</h4>
      <ul>
        <li><strong>Characteristics:</strong> Neurological symptoms without medical cause</li>
        <li><strong>Examples:</strong> Paralysis, blindness, seizures</li>
        <li><strong>Treatment:</strong> Stress reduction, physical therapy, psychotherapy</li>
      </ul>

      <h3>Therapeutic Interventions</h3>
      
      <h4>Cognitive-Behavioral Techniques</h4>
      <ul>
        <li><strong>Thought challenging:</strong> Identify and modify negative thoughts</li>
        <li><strong>Behavioral experiments:</strong> Test validity of anxious predictions</li>
        <li><strong>Exposure therapy:</strong> Gradual exposure to feared situations</li>
        <li><strong>Relaxation training:</strong> Progressive muscle relaxation, deep breathing</li>
      </ul>

      <h4>Nursing Interventions</h4>
      <ul>
        <li><strong>Immediate:</strong> Stay with patient, provide reassurance, reduce stimuli</li>
        <li><strong>Teaching:</strong> Relaxation techniques, breathing exercises, grounding</li>
        <li><strong>Medication:</strong> Monitor effects, educate about side effects</li>
        <li><strong>Long-term:</strong> Help identify triggers, develop coping strategies</li>
      </ul>

      <h4>Grounding Techniques</h4>
      <ul>
        <li><strong>5-4-3-2-1 technique:</strong> Name 5 things you see, 4 you hear, 3 you touch, 2 you smell, 1 you taste</li>
        <li><strong>Deep breathing:</strong> Slow, diaphragmatic breathing</li>
        <li><strong>Progressive muscle relaxation:</strong> Tense and release muscle groups</li>
        <li><strong>Mindfulness:</strong> Focus on present moment without judgment</li>
      </ul>
    `
  },
  {
    id: 11,
    title: "Stressors Affecting Personality Development",
    description: "Understanding personality disorders and their impact on therapeutic relationships.",
    objectives: [
      "Identify characteristics of major personality disorder clusters",
      "Implement appropriate nursing interventions for personality disorders",
      "Maintain therapeutic boundaries with challenging patients"
    ],
    content: `
      <h3>Personality Disorders Overview</h3>
      <p>Personality disorders are enduring patterns of inner experience and behavior that deviate from cultural expectations, are pervasive and inflexible, and lead to distress or impairment.</p>
      
      <h4>General Characteristics</h4>
      <ul>
        <li>Onset in adolescence or early adulthood</li>
        <li>Stable over time</li>
        <li>Cause significant distress or impairment</li>
        <li>Not due to substance use or medical condition</li>
      </ul>

      <h3>Cluster A: Odd or Eccentric</h3>
      
      <h4>Paranoid Personality Disorder</h4>
      <ul>
        <li><strong>Characteristics:</strong> Pervasive distrust and suspiciousness</li>
        <li><strong>Behaviors:</strong> Reluctant to confide, reads hidden meanings, holds grudges</li>
        <li><strong>Nursing approach:</strong> Be consistent, honest, avoid being overly friendly</li>
      </ul>

      <h4>Schizoid Personality Disorder</h4>
      <ul>
        <li><strong>Characteristics:</strong> Detachment from social relationships</li>
        <li><strong>Behaviors:</strong> Prefers solitary activities, appears indifferent to praise/criticism</li>
        <li><strong>Nursing approach:</strong> Respect need for distance, don't push for closeness</li>
      </ul>

      <h4>Schizotypal Personality Disorder</h4>
      <ul>
        <li><strong>Characteristics:</strong> Eccentricities and cognitive/perceptual distortions</li>
        <li><strong>Behaviors:</strong> Odd beliefs, unusual speech, inappropriate affect</li>
        <li><strong>Nursing approach:</strong> Be matter-of-fact, avoid reinforcing odd beliefs</li>
      </ul>

      <h3>Cluster B: Dramatic, Emotional, Erratic</h3>
      
      <h4>Borderline Personality Disorder (BPD)</h4>
      <ul>
        <li><strong>Characteristics:</strong> Instability in relationships, self-image, and emotions</li>
        <li><strong>Behaviors:</strong> Fear of abandonment, splitting, impulsivity, self-harm</li>
        <li><strong>Treatment:</strong> Dialectical Behavior Therapy (DBT), medication for symptoms</li>
      </ul>

      <h4>BPD Nursing Interventions</h4>
      <ul>
        <li><strong>Maintain boundaries:</strong> Be consistent with limits and expectations</li>
        <li><strong>Avoid splitting:</strong> Communicate with team, don't be "special" nurse</li>
        <li><strong>Safety first:</strong> Assess for self-harm, remove dangerous items</li>
        <li><strong>Validate emotions:</strong> Acknowledge feelings while setting limits on behavior</li>
        <li><strong>Teach coping skills:</strong> Distress tolerance, emotion regulation</li>
      </ul>

      <h4>Narcissistic Personality Disorder</h4>
      <ul>
        <li><strong>Characteristics:</strong> Grandiosity, need for admiration, lack of empathy</li>
        <li><strong>Behaviors:</strong> Believes special/unique, exploits others, arrogant</li>
        <li><strong>Nursing approach:</strong> Don't challenge grandiosity directly, set clear limits</li>
      </ul>

      <h4>Histrionic Personality Disorder</h4>
      <ul>
        <li><strong>Characteristics:</strong> Excessive emotionality and attention-seeking</li>
        <li><strong>Behaviors:</strong> Dramatic, theatrical, sexually provocative</li>
        <li><strong>Nursing approach:</strong> Provide attention for appropriate behaviors</li>
      </ul>

      <h4>Antisocial Personality Disorder</h4>
      <ul>
        <li><strong>Characteristics:</strong> Disregard for rights of others</li>
        <li><strong>Behaviors:</strong> Deceitfulness, impulsivity, lack of remorse</li>
        <li><strong>Nursing approach:</strong> Set firm limits, don't be manipulated</li>
      </ul>

      <h3>Cluster C: Anxious or Fearful</h3>
      
      <h4>Avoidant Personality Disorder</h4>
      <ul>
        <li><strong>Characteristics:</strong> Social inhibition, inadequacy feelings</li>
        <li><strong>Behaviors:</strong> Avoids interpersonal contact, fears criticism</li>
        <li><strong>Nursing approach:</strong> Be patient, encouraging, build trust gradually</li>
      </ul>

      <h4>Dependent Personality Disorder</h4>
      <ul>
        <li><strong>Characteristics:</strong> Excessive need to be taken care of</li>
        <li><strong>Behaviors:</strong> Difficulty making decisions, fears being alone</li>
        <li><strong>Nursing approach:</strong> Encourage independence, avoid fostering dependence</li>
      </ul>

      <h4>Obsessive-Compulsive Personality Disorder</h4>
      <ul>
        <li><strong>Characteristics:</strong> Preoccupation with orderliness and control</li>
        <li><strong>Behaviors:</strong> Perfectionism, inflexibility, workaholism</li>
        <li><strong>Nursing approach:</strong> Allow control when possible, provide structure</li>
      </ul>

      <h3>Therapeutic Communication Strategies</h3>
      
      <h4>General Principles</h4>
      <ul>
        <li><strong>Consistency:</strong> Same rules and expectations for all staff</li>
        <li><strong>Clear boundaries:</strong> Professional vs. personal relationship</li>
        <li><strong>Limit setting:</strong> Clear consequences for inappropriate behavior</li>
        <li><strong>Team communication:</strong> Prevent splitting and manipulation</li>
      </ul>

      <h4>Challenging Situations</h4>
      <ul>
        <li><strong>Manipulation:</strong> Don't take personally, stick to rules</li>
        <li><strong>Splitting:</strong> "Good" vs. "bad" staff - maintain team unity</li>
        <li><strong>Boundary violations:</strong> Address immediately, document</li>
        <li><strong>Aggressive behavior:</strong> Stay calm, ensure safety, set limits</li>
      </ul>

      <h3>Dialectical Behavior Therapy (DBT) Skills</h3>
      
      <h4>Distress Tolerance</h4>
      <ul>
        <li><strong>TIPP:</strong> Temperature, Intense exercise, Paced breathing, Paired muscle relaxation</li>
        <li><strong>Distraction:</strong> Activities, contributing, comparisons, emotions</li>
        <li><strong>Self-soothing:</strong> Use five senses to calm self</li>
      </ul>

      <h4>Emotion Regulation</h4>
      <ul>
        <li><strong>PLEASE:</strong> Treat PhysicaL illness, balance Eating, avoid mood-Altering substances, balance Sleep, get Exercise</li>
        <li><strong>Opposite action:</strong> Act opposite to emotion urges</li>
        <li><strong>Check the facts:</strong> Determine if emotion fits the situation</li>
      </ul>

      <h4>Interpersonal Effectiveness</h4>
      <ul>
        <li><strong>DEAR MAN:</strong> Describe, Express, Assert, Reinforce, Mindful, Appear confident, Negotiate</li>
        <li><strong>GIVE:</strong> Gentle, Interested, Validate, Easy manner</li>
        <li><strong>FAST:</strong> Fair, no Apologies, Stick to values, Truthful</li>
      </ul>

      <h3>Nursing Considerations</h3>
      
      <h4>Self-Care for Nurses</h4>
      <ul>
        <li>Recognize countertransference reactions</li>
        <li>Use clinical supervision</li>
        <li>Practice stress management</li>
        <li>Maintain work-life balance</li>
        <li>Seek support from colleagues</li>
      </ul>

      <h4>Documentation</h4>
      <ul>
        <li>Focus on observable behaviors</li>
        <li>Avoid judgmental language</li>
        <li>Document interventions and responses</li>
        <li>Include patient's strengths</li>
        <li>Note safety concerns</li>
      </ul>
    `
  },
  {
    id: 12,
    title: "Stressors Affecting Self-Concept and Body Image",
    description: "Understanding disorders related to self-concept, body image, and identity.",
    objectives: [
      "Assess factors affecting self-concept and body image",
      "Identify interventions for improving self-esteem",
      "Understand gender dysphoria and appropriate care"
    ],
    content: `
      <h3>Self-Concept Components</h3>
      
      <h4>Personal Identity</h4>
      <ul>
        <li><strong>Definition:</strong> Individual's sense of who they are</li>
        <li><strong>Includes:</strong> Values, beliefs, personality traits</li>
        <li><strong>Development:</strong> Influenced by relationships, experiences, culture</li>
      </ul>

      <h4>Body Image</h4>
      <ul>
        <li><strong>Definition:</strong> Mental picture of one's physical self</li>
        <li><strong>Components:</strong> Body reality, body ideal, body presentation</li>
        <li><strong>Influences:</strong> Media, peer comparison, physical changes</li>
      </ul>

      <h4>Role Performance</h4>
      <ul>
        <li><strong>Definition:</strong> How well one fulfills expected roles</li>
        <li><strong>Examples:</strong> Parent, student, employee, spouse</li>
        <li><strong>Stressors:</strong> Role conflict, role ambiguity, role overload</li>
      </ul>

      <h4>Self-Esteem</h4>
      <ul>
        <li><strong>Definition:</strong> Overall evaluation of one's worth</li>
        <li><strong>High self-esteem:</strong> Confident, resilient, optimistic</li>
        <li><strong>Low self-esteem:</strong> Self-critical, pessimistic, anxious</li>
      </ul>

      <h3>Factors Affecting Self-Concept</h3>
      
      <h4>Developmental Factors</h4>
      <ul>
        <li><strong>Infancy:</strong> Basic trust vs. mistrust</li>
        <li><strong>Childhood:</strong> Autonomy, initiative, industry</li>
        <li><strong>Adolescence:</strong> Identity vs. role confusion</li>
        <li><strong>Adulthood:</strong> Intimacy, generativity, integrity</li>
      </ul>

      <h4>Cultural and Social Factors</h4>
      <ul>
        <li>Family expectations and values</li>
        <li>Peer group influences</li>
        <li>Societal standards and norms</li>
        <li>Media representations</li>
        <li>Socioeconomic status</li>
      </ul>

      <h4>Life Experiences</h4>
      <ul>
        <li><strong>Positive:</strong> Achievements, supportive relationships, success</li>
        <li><strong>Negative:</strong> Trauma, abuse, failure, rejection</li>
        <li><strong>Transitions:</strong> Marriage, parenthood, career changes, loss</li>
      </ul>

      <h3>Body Image Disturbances</h3>
      
      <h4>Body Dysmorphic Disorder</h4>
      <ul>
        <li><strong>Characteristics:</strong> Preoccupation with perceived flaws in appearance</li>
        <li><strong>Behaviors:</strong> Mirror checking, excessive grooming, seeking cosmetic procedures</li>
        <li><strong>Treatment:</strong> CBT, SSRIs, exposure and response prevention</li>
      </ul>

      <h4>Factors Contributing to Body Image Issues</h4>
      <ul>
        <li>Eating disorders</li>
        <li>Physical illness or disability</li>
        <li>Surgical procedures</li>
        <li>Aging process</li>
        <li>Cultural beauty standards</li>
        <li>Social media influence</li>
      </ul>

      <h3>Gender Dysphoria</h3>
      
      <h4>Definition and Characteristics</h4>
      <ul>
        <li><strong>Gender dysphoria:</strong> Distress from incongruence between gender identity and assigned sex</li>
        <li><strong>Gender identity:</strong> Internal sense of being male, female, or other</li>
        <li><strong>Gender expression:</strong> External manifestation of gender identity</li>
      </ul>

      <h4>Assessment Considerations</h4>
      <ul>
        <li>Onset and duration of gender incongruence</li>
        <li>Level of distress experienced</li>
        <li>Support systems available</li>
        <li>Previous attempts at gender affirmation</li>
        <li>Mental health comorbidities</li>
      </ul>

      <h4>Nursing Care for Gender Dysphoria</h4>
      <ul>
        <li><strong>Respectful communication:</strong> Use preferred name and pronouns</li>
        <li><strong>Confidentiality:</strong> Protect patient privacy</li>
        <li><strong>Non-judgmental care:</strong> Avoid assumptions or personal biases</li>
        <li><strong>Support referrals:</strong> Mental health specialists, medical providers</li>
        <li><strong>Safety assessment:</strong> Risk for self-harm, discrimination</li>
      </ul>

      <h3>Self-Esteem Disturbances</h3>
      
      <h4>Signs of Low Self-Esteem</h4>
      <ul>
        <li>Negative self-talk and self-criticism</li>
        <li>Difficulty accepting compliments</li>
        <li>Perfectionism and fear of failure</li>
        <li>Comparing self negatively to others</li>
        <li>Avoiding challenges or new experiences</li>
        <li>Seeking excessive approval from others</li>
      </ul>

      <h4>Contributing Factors</h4>
      <ul>
        <li>History of abuse or trauma</li>
        <li>Critical or unsupportive relationships</li>
        <li>Academic or professional failures</li>
        <li>Mental health disorders</li>
        <li>Physical appearance concerns</li>
        <li>Social isolation</li>
      </ul>

      <h3>Nursing Interventions</h3>
      
      <h4>Assessment</h4>
      <ul>
        <li><strong>Self-concept assessment:</strong> Use standardized tools when appropriate</li>
        <li><strong>Body image evaluation:</strong> Ask about satisfaction with appearance</li>
        <li><strong>Role function analysis:</strong> Explore how well roles are being fulfilled</li>
        <li><strong>Support system review:</strong> Identify available resources</li>
      </ul>

      <h4>Therapeutic Communication</h4>
      <ul>
        <li><strong>Active listening:</strong> Allow expression of feelings without judgment</li>
        <li><strong>Validation:</strong> Acknowledge patient's experiences and emotions</li>
        <li><strong>Strengths focus:</strong> Identify and reinforce positive qualities</li>
        <li><strong>Reality testing:</strong> Gently challenge negative self-perceptions</li>
      </ul>

      <h4>Cognitive-Behavioral Interventions</h4>
      <ul>
        <li><strong>Thought monitoring:</strong> Identify negative self-talk patterns</li>
        <li><strong>Cognitive restructuring:</strong> Challenge and modify negative thoughts</li>
        <li><strong>Behavioral experiments:</strong> Test beliefs through action</li>
        <li><strong>Goal setting:</strong> Establish achievable, meaningful objectives</li>
      </ul>

      <h4>Self-Esteem Building Activities</h4>
      <ul>
        <li><strong>Journaling:</strong> Record daily accomplishments and positive qualities</li>
        <li><strong>Affirmations:</strong> Practice positive self-statements</li>
        <li><strong>Skill development:</strong> Learn new abilities to build confidence</li>
        <li><strong>Social activities:</strong> Engage in meaningful relationships</li>
        <li><strong>Volunteer work:</strong> Help others to gain sense of purpose</li>
      </ul>

      <h3>Special Considerations</h3>
      
      <h4>Adolescents</h4>
      <ul>
        <li>Identity formation is primary developmental task</li>
        <li>Peer acceptance strongly influences self-concept</li>
        <li>Body image concerns common due to physical changes</li>
        <li>Social media impact on self-perception</li>
      </ul>

      <h4>Adults with Chronic Illness</h4>
      <ul>
        <li>May experience altered body image</li>
        <li>Role changes due to functional limitations</li>
        <li>Grief over losses (physical, social, occupational)</li>
        <li>Need for adaptation and acceptance</li>
      </ul>

      <h4>Elderly Adults</h4>
      <ul>
        <li>Physical changes affecting body image</li>
        <li>Role transitions (retirement, caregiving)</li>
        <li>Loss of independence concerns</li>
        <li>Wisdom and life experience as strengths</li>
      </ul>

      <h3>Family and Support System Interventions</h3>
      
      <h4>Family Education</h4>
      <ul>
        <li>Teach about self-concept development</li>
        <li>Encourage supportive communication</li>
        <li>Address family dynamics affecting self-esteem</li>
        <li>Provide resources for ongoing support</li>
      </ul>

      <h4>Group Interventions</h4>
      <ul>
        <li><strong>Support groups:</strong> Connect with others facing similar challenges</li>
        <li><strong>Therapy groups:</strong> Process experiences with professional guidance</li>
        <li><strong>Skills groups:</strong> Learn coping strategies and self-care</li>
        <li><strong>Peer mentoring:</strong> Learning from others' recovery experiences</li>
      </ul>
    `
  },
  {
    id: 13,
    title: "Stressors Affecting Abuse and Neglect Across the Lifespan",
    description: "Recognizing, responding to, and preventing abuse and neglect from childhood through elderly years.",
    objectives: [
      "Identify clinical indicators of abuse across lifespan",
      "Implement mandatory reporting responsibilities effectively",
      "Develop immediate and long-term safety plans for abuse survivors"
    ],
    content: `
      <h3>Types of Abuse and Neglect</h3>
      
      <h4>Physical Abuse</h4>
      <ul>
        <li><strong>Definition:</strong> Intentional use of force causing injury, pain, or impairment</li>
        <li><strong>Signs:</strong> Unexplained injuries, bruises in various stages of healing, burns, fractures</li>
        <li><strong>Behavioral indicators:</strong> Fear of caregiver, withdrawal, aggression</li>
      </ul>

      <h4>Sexual Abuse</h4>
      <ul>
        <li><strong>Definition:</strong> Any sexual activity imposed on an individual without consent</li>
        <li><strong>Signs:</strong> Genital trauma, STIs, pregnancy, difficulty walking/sitting</li>
        <li><strong>Behavioral indicators:</strong> Sexual knowledge inappropriate for age, regression, PTSD symptoms</li>
      </ul>

      <h4>Emotional/Psychological Abuse</h4>
      <ul>
        <li><strong>Definition:</strong> Pattern of behaviors that damage emotional development or self-worth</li>
        <li><strong>Examples:</strong> Threats, humiliation, isolation, excessive criticism</li>
        <li><strong>Effects:</strong> Low self-esteem, depression, anxiety, attachment issues</li>
      </ul>

      <h4>Neglect</h4>
      <ul>
        <li><strong>Definition:</strong> Failure to provide basic needs or adequate care</li>
        <li><strong>Types:</strong> Medical, educational, emotional, physical, supervisory</li>
        <li><strong>Signs:</strong> Poor hygiene, malnutrition, inadequate clothing, untreated medical conditions</li>
      </ul>

      <h3>Child Abuse and Neglect</h3>
      
      <h4>Risk Factors</h4>
      <ul>
        <li><strong>Child factors:</strong> Disability, premature birth, difficult temperament</li>
        <li><strong>Parent factors:</strong> History of abuse, substance use, mental illness, young age</li>
        <li><strong>Family factors:</strong> Social isolation, domestic violence, poverty, stress</li>
        <li><strong>Community factors:</strong> Lack of resources, violence, social disorganization</li>
      </ul>

      <h4>Physical Indicators</h4>
      <ul>
        <li>Bruises in unusual patterns or locations</li>
        <li>Burns (cigarette, immersion, contact)</li>
        <li>Fractures inconsistent with developmental stage</li>
        <li>Head injuries (especially in infants)</li>
        <li>Bite marks</li>
        <li>Poor growth or failure to thrive</li>
      </ul>

      <h4>Behavioral Indicators</h4>
      <ul>
        <li>Fear of going home or being with caregiver</li>
        <li>Regressive behaviors (bedwetting, thumb sucking)</li>
        <li>Aggressive or withdrawn behavior</li>
        <li>Difficulty forming relationships</li>
        <li>Academic problems</li>
        <li>Self-harm or suicidal ideation</li>
      </ul>

      <h3>Intimate Partner Violence (IPV)</h3>
      
      <h4>Cycle of Violence</h4>
      <ol>
        <li><strong>Tension building:</strong> Stress increases, minor incidents</li>
        <li><strong>Acute violence:</strong> Explosive episode of abuse</li>
        <li><strong>Honeymoon phase:</strong> Apologies, promises to change, calm period</li>
        <li><strong>Reconciliation:</strong> Return to "normal" relationship</li>
      </ol>

      <h4>Types of IPV</h4>
      <ul>
        <li><strong>Physical violence:</strong> Hitting, slapping, choking, restraining</li>
        <li><strong>Sexual violence:</strong> Forced sexual activity, reproductive coercion</li>
        <li><strong>Emotional abuse:</strong> Threats, humiliation, isolation, control</li>
        <li><strong>Economic abuse:</strong> Controlling finances, preventing employment</li>
        <li><strong>Stalking:</strong> Following, monitoring, harassment</li>
      </ul>

      <h4>Screening and Assessment</h4>
      <ul>
        <li><strong>Universal screening:</strong> Ask all patients about IPV</li>
        <li><strong>Private setting:</strong> Screen without partner present</li>
        <li><strong>Direct questions:</strong> "Has anyone hurt you? Do you feel safe at home?"</li>
        <li><strong>Validated tools:</strong> HITS, HARK, WAST screening instruments</li>
      </ul>

      <h3>Elder Abuse</h3>
      
      <h4>Risk Factors</h4>
      <ul>
        <li><strong>Victim factors:</strong> Cognitive impairment, physical dependency, isolation</li>
        <li><strong>Perpetrator factors:</strong> Substance abuse, mental illness, financial stress</li>
        <li><strong>Relationship factors:</strong> Previous history of violence, caregiver stress</li>
        <li><strong>Environmental factors:</strong> Lack of oversight, institutional settings</li>
      </ul>

      <h4>Financial Abuse</h4>
      <ul>
        <li><strong>Definition:</strong> Illegal or improper use of elder's funds or property</li>
        <li><strong>Examples:</strong> Stealing money, forging signatures, identity theft</li>
        <li><strong>Signs:</strong> Unexplained financial transactions, missing belongings, unpaid bills</li>
      </ul>

      <h4>Institutional Abuse</h4>
      <ul>
        <li>Occurs in nursing homes, assisted living, hospitals</li>
        <li>May involve staff, other residents, or visitors</li>
        <li>Includes inadequate care, medication errors, restraint misuse</li>
      </ul>

      <h3>Nursing Assessment</h3>
      
      <h4>Creating Safe Environment</h4>
      <ul>
        <li>Ensure privacy during assessment</li>
        <li>Use non-judgmental approach</li>
        <li>Validate patient's experiences</li>
        <li>Assure confidentiality within legal limits</li>
        <li>Avoid asking "why" questions</li>
      </ul>

      <h4>Documentation</h4>
      <ul>
        <li><strong>Objective description:</strong> Use patient's exact words in quotes</li>
        <li><strong>Body maps:</strong> Draw and photograph injuries (with consent)</li>
        <li><strong>Detailed history:</strong> Include who, what, when, where</li>
        <li><strong>Avoid speculation:</strong> Don't interpret or make assumptions</li>
        <li><strong>Legal considerations:</strong> May be used in court proceedings</li>
      </ul>

      <h3>Mandatory Reporting</h3>
      
      <h4>Legal Requirements</h4>
      <ul>
        <li><strong>Child abuse:</strong> All 50 states require reporting of suspected child abuse</li>
        <li><strong>Elder abuse:</strong> Most states require reporting of elder abuse</li>
        <li><strong>IPV reporting:</strong> Limited states require IPV reporting</li>
        <li><strong>Time limits:</strong> Usually 24-48 hours for initial report</li>
      </ul>

      <h4>Reporting Process</h4>
      <ol>
        <li>Make initial oral report to appropriate agency</li>
        <li>Follow up with written report within specified timeframe</li>
        <li>Document in medical record that report was made</li>
        <li>Cooperate with investigation as needed</li>
        <li>Continue providing care and support</li>
      </ol>

      <h3>Safety Planning</h3>
      
      <h4>Immediate Safety</h4>
      <ul>
        <li>Assess immediate danger to patient</li>
        <li>Consider need for emergency shelter</li>
        <li>Connect with domestic violence advocates</li>
        <li>Provide crisis hotline numbers</li>
        <li>Help develop code words for emergencies</li>
      </ul>

      <h4>Long-term Safety Planning</h4>
      <ul>
        <li><strong>Safe place to go:</strong> Identify friends, family, shelters</li>
        <li><strong>Important documents:</strong> Keep copies in safe location</li>
        <li><strong>Money and transportation:</strong> Plan for leaving quickly</li>
        <li><strong>Legal protection:</strong> Restraining orders, legal advocacy</li>
        <li><strong>Support services:</strong> Counseling, support groups, case management</li>
      </ul>

      <h3>Interventions and Support</h3>
      
      <h4>Immediate Care</h4>
      <ul>
        <li>Treat physical injuries</li>
        <li>Provide emotional support and validation</li>
        <li>Ensure safety and security</li>
        <li>Connect with appropriate resources</li>
        <li>Document thoroughly</li>
      </ul>

      <h4>Therapeutic Communication</h4>
      <ul>
        <li>"I believe you"</li>
        <li>"It's not your fault"</li>
        <li>"You don't deserve this"</li>
        <li>"I'm glad you told me"</li>
        <li>"What can I do to help you feel safer?"</li>
      </ul>

      <h4>Resources and Referrals</h4>
      <ul>
        <li><strong>National hotlines:</strong> Domestic violence, child abuse, elder abuse</li>
        <li><strong>Local resources:</strong> Shelters, advocacy programs, legal aid</li>
        <li><strong>Mental health services:</strong> Trauma counseling, PTSD treatment</li>
        <li><strong>Medical care:</strong> Primary care, specialized services</li>
        <li><strong>Social services:</strong> Housing assistance, financial support</li>
      </ul>

      <h3>Prevention Strategies</h3>
      
      <h4>Primary Prevention</h4>
      <ul>
        <li>Public education about abuse and violence</li>
        <li>Parenting education and support programs</li>
        <li>Community awareness campaigns</li>
        <li>Policy advocacy for protective legislation</li>
      </ul>

      <h4>Secondary Prevention</h4>
      <ul>
        <li>Early identification through screening</li>
        <li>Support for at-risk families</li>
        <li>Crisis intervention services</li>
        <li>Training for healthcare providers</li>
      </ul>

      <h4>Tertiary Prevention</h4>
      <ul>
        <li>Treatment for survivors and perpetrators</li>
        <li>Long-term support services</li>
        <li>Preventing re-victimization</li>
        <li>Breaking cycle of violence</li>
      </ul>
    `
  },
  {
    id: 14,
    title: "Stressors Affecting Families and Family Interventions",
    description: "Understanding family dynamics, systems theory, and evidence-based family interventions.",
    objectives: [
      "Differentiate between functional and dysfunctional family dynamics",
      "Implement effective family-centered nursing interventions",
      "Facilitate psychoeducational interventions to support families"
    ],
    content: `
      <h3>Family Systems Theory</h3>
      
      <h4>Core Concepts</h4>
      <ul>
        <li><strong>Wholeness:</strong> Family is more than sum of individual members</li>
        <li><strong>Circular causality:</strong> Events are interconnected, not linear</li>
        <li><strong>Boundaries:</strong> Rules defining who participates and how</li>
        <li><strong>Homeostasis:</strong> Tendency to maintain stability and balance</li>
        <li><strong>Hierarchy:</strong> Power structure and decision-making patterns</li>
      </ul>

      <h4>Family Subsystems</h4>
      <ul>
        <li><strong>Spousal subsystem:</strong> Adult partner relationship</li>
        <li><strong>Parental subsystem:</strong> Parent-child interactions and roles</li>
        <li><strong>Sibling subsystem:</strong> Relationships between children</li>
        <li><strong>Individual subsystem:</strong> Each person's unique characteristics</li>
      </ul>

      <h3>Healthy vs. Dysfunctional Family Dynamics</h3>
      
      <h4>Characteristics of Healthy Families</h4>
      <ul>
        <li><strong>Clear communication:</strong> Open, honest, direct expression</li>
        <li><strong>Flexible boundaries:</strong> Appropriate privacy and closeness</li>
        <li><strong>Role clarity:</strong> Well-defined, age-appropriate responsibilities</li>
        <li><strong>Conflict resolution:</strong> Effective problem-solving skills</li>
        <li><strong>Emotional support:</strong> Validation and encouragement</li>
        <li><strong>Adaptability:</strong> Ability to change when needed</li>
        <li><strong>Shared values:</strong> Common beliefs and goals</li>
      </ul>

      <h4>Characteristics of Dysfunctional Families</h4>
      <ul>
        <li><strong>Poor communication:</strong> Criticism, blame, silence, or chaos</li>
        <li><strong>Boundary problems:</strong> Enmeshment or disengagement</li>
        <li><strong>Role confusion:</strong> Inappropriate responsibilities, parentification</li>
        <li><strong>Unresolved conflict:</strong> Avoidance or destructive patterns</li>
        <li><strong>Emotional neglect:</strong> Lack of support, validation, or warmth</li>
        <li><strong>Rigidity:</strong> Inability to adapt to changes</li>
        <li><strong>Substance abuse:</strong> Addiction affecting family functioning</li>
      </ul>

      <h3>Family Assessment Tools</h3>
      
      <h4>Genogram</h4>
      <ul>
        <li><strong>Purpose:</strong> Visual representation of family structure and relationships</li>
        <li><strong>Information included:</strong> Three generations, medical history, relationships</li>
        <li><strong>Symbols:</strong> Squares (males), circles (females), lines (relationships)</li>
        <li><strong>Benefits:</strong> Identifies patterns, strengths, and areas of concern</li>
      </ul>

      <h4>Ecomap</h4>
      <ul>
        <li><strong>Purpose:</strong> Shows family's connections to external resources</li>
        <li><strong>Elements:</strong> Family in center, connected to community resources</li>
        <li><strong>Line types:</strong> Strong connections (thick), weak (thin), stressful (jagged)</li>
        <li><strong>Uses:</strong> Discharge planning, resource identification</li>
      </ul>

      <h4>Family APGAR</h4>
      <ul>
        <li><strong>A</strong>daptation: How family adjusts to problems</li>
        <li><strong>P</strong>artnership: How family shares decisions</li>
        <li><strong>G</strong>rowth: How family supports individual development</li>
        <li><strong>A</strong>ffection: How family shows emotional support</li>
        <li><strong>R</strong>esolve: How family spends time together</li>
      </ul>

      <h3>Family Stress and Coping</h3>
      
      <h4>Double ABCX Model of Family Stress</h4>
      <ul>
        <li><strong>A:</strong> Stressor event plus pile-up of stressors</li>
        <li><strong>B:</strong> Family resources (strengths, supports, coping strategies)</li>
        <li><strong>C:</strong> Family's perception of the stressor</li>
        <li><strong>X:</strong> Crisis or adaptation outcome</li>
      </ul>

      <h4>Types of Family Stressors</h4>
      <ul>
        <li><strong>Normative:</strong> Expected life transitions (marriage, birth, death)</li>
        <li><strong>Non-normative:</strong> Unexpected events (illness, job loss, accident)</li>
        <li><strong>Internal:</strong> Arising from within family (conflict, illness)</li>
        <li><strong>External:</strong> Environmental factors (economy, natural disasters)</li>
      </ul>

      <h3>Family Triangles and Communication Patterns</h3>
      
      <h4>Triangulation</h4>
      <ul>
        <li><strong>Definition:</strong> Three-person system where tension between two draws in third</li>
        <li><strong>Examples:</strong> Child caught between divorcing parents</li>
        <li><strong>Problems:</strong> Prevents direct communication, increases stress</li>
        <li><strong>Intervention:</strong> Help family members communicate directly</li>
      </ul>

      <h4>Communication Patterns</h4>
      <ul>
        <li><strong>Placater:</strong> Always agrees, avoids conflict</li>
        <li><strong>Blamer:</strong> Critical, finds fault with others</li>
        <li><strong>Computer:</strong> Overly rational, avoids emotions</li>
        <li><strong>Distracter:</strong> Changes subject, uses humor inappropriately</li>
        <li><strong>Leveler:</strong> Honest, direct, congruent communication</li>
      </ul>

      <h3>Family Therapy Approaches</h3>
      
      <h4>Structural Family Therapy</h4>
      <ul>
        <li><strong>Focus:</strong> Family organization and hierarchy</li>
        <li><strong>Techniques:</strong> Boundary setting, role clarification</li>
        <li><strong>Goal:</strong> Restructure family to improve functioning</li>
      </ul>

      <h4>Strategic Family Therapy</h4>
      <ul>
        <li><strong>Focus:</strong> Problem-solving and behavior change</li>
        <li><strong>Techniques:</strong> Directives, paradoxical interventions</li>
        <li><strong>Goal:</strong> Interrupt dysfunctional patterns</li>
      </ul>

      <h4>Psychoeducational Family Therapy</h4>
      <ul>
        <li><strong>Focus:</strong> Education about mental illness and coping</li>
        <li><strong>Components:</strong> Information sharing, skill building, support</li>
        <li><strong>Evidence base:</strong> Particularly effective for schizophrenia, bipolar disorder</li>
      </ul>

      <h3>Family Psychoeducation</h3>
      
      <h4>Core Components</h4>
      <ol>
        <li><strong>Education:</strong> Information about mental illness, treatment, prognosis</li>
        <li><strong>Skills training:</strong> Communication, problem-solving, stress management</li>
        <li><strong>Support:</strong> Emotional support and resource connections</li>
        <li><strong>Crisis planning:</strong> Early warning signs and intervention strategies</li>
      </ol>

      <h4>Topics Covered</h4>
      <ul>
        <li>Nature and course of mental illness</li>
        <li>Treatment options and side effects</li>
        <li>Stress management and self-care</li>
        <li>Communication strategies</li>
        <li>Setting realistic expectations</li>
        <li>Community resources and support</li>
      </ul>

      <h3>Nursing Interventions</h3>
      
      <h4>Family Assessment</h4>
      <ul>
        <li>Use structured assessment tools</li>
        <li>Observe family interactions</li>
        <li>Identify family strengths and resources</li>
        <li>Assess coping strategies and stress levels</li>
        <li>Evaluate support systems</li>
      </ul>

      <h4>Therapeutic Communication with Families</h4>
      <ul>
        <li><strong>Include all members:</strong> Ensure everyone has voice</li>
        <li><strong>Remain neutral:</strong> Avoid taking sides or making judgments</li>
        <li><strong>Validate experiences:</strong> Acknowledge each person's perspective</li>
        <li><strong>Facilitate communication:</strong> Help members talk to each other</li>
        <li><strong>Focus on strengths:</strong> Highlight positive aspects and resources</li>
      </ul>

      <h4>Crisis Intervention with Families</h4>
      <ul>
        <li>Assess immediate safety needs</li>
        <li>Provide emotional support and validation</li>
        <li>Help family mobilize resources</li>
        <li>Develop short-term coping strategies</li>
        <li>Connect with appropriate services</li>
        <li>Follow up to ensure stability</li>
      </ul>

      <h3>Special Family Situations</h3>
      
      <h4>Families with Mental Illness</h4>
      <ul>
        <li><strong>Challenges:</strong> Stigma, caregiver burden, financial strain</li>
        <li><strong>Needs:</strong> Education, support, respite care</li>
        <li><strong>Interventions:</strong> Psychoeducation, support groups, resource connection</li>
      </ul>

      <h4>Families Experiencing Trauma</h4>
      <ul>
        <li><strong>Impact:</strong> Disrupts normal functioning, affects all members</li>
        <li><strong>Responses:</strong> Anxiety, depression, behavioral problems</li>
        <li><strong>Treatment:</strong> Trauma-informed care, family therapy</li>
      </ul>

      <h4>Divorced/Blended Families</h4>
      <ul>
        <li><strong>Challenges:</strong> Role confusion, loyalty conflicts, adjustment issues</li>
        <li><strong>Strengths:</strong> Expanded support network, resilience</li>
        <li><strong>Interventions:</strong> Co-parenting support, boundary clarification</li>
      </ul>

      <h3>Cultural Considerations</h3>
      
      <h4>Cultural Factors Affecting Families</h4>
      <ul>
        <li>Family structure and roles</li>
        <li>Communication styles and patterns</li>
        <li>Values and belief systems</li>
        <li>Attitudes toward mental health and treatment</li>
        <li>Help-seeking behaviors</li>
      </ul>

      <h4>Culturally Competent Family Care</h4>
      <ul>
        <li>Assess cultural background and beliefs</li>
        <li>Respect family values and traditions</li>
        <li>Use appropriate communication styles</li>
        <li>Include relevant cultural and spiritual leaders</li>
        <li>Adapt interventions to cultural context</li>
      </ul>

      <h3>Evaluation and Outcomes</h3>
      
      <h4>Indicators of Family Improvement</h4>
      <ul>
        <li>Improved communication patterns</li>
        <li>Better conflict resolution skills</li>
        <li>Increased support and cohesion</li>
        <li>Enhanced coping strategies</li>
        <li>Reduced family stress and burden</li>
        <li>Better treatment adherence by patient</li>
      </ul>

      <h4>Long-term Goals</h4>
      <ul>
        <li>Maintain family stability and functioning</li>
        <li>Prevent relapse and hospitalization</li>
        <li>Enhance quality of life for all members</li>
        <li>Build resilience for future challenges</li>
        <li>Connect with ongoing community supports</li>
      </ul>
    `
  }
];

export default modules;