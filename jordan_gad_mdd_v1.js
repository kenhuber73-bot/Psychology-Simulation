// CASE DATA FILE — contains only the specific content for this one case.
// The generic player (case.html) reads this object to run the simulation.
window.CASE_DATA = {

  id: 'jordan_gad_mdd_v1',

  referral: {
    clientLine: 'Jordan R., age 16, 10th grade.',
    referredBy: 'Homeroom teacher, following a conversation with the school counselor.',
    reason: '"Jordan\'s grades have dropped over the last two terms. Teachers report Jordan seems distracted and asks to leave class to go to the nurse\'s office fairly often, usually mentioning a stomachache or headache. A friend mentioned Jordan has been more withdrawn lately. Teacher would like this looked into."',
    background: [
      {
        label: 'Family & Home',
        text: 'Jordan lives with both parents and a younger sibling. The household is generally described as stable and supportive, though Jordan\'s parents mention they\'ve been more stressed than usual lately about household finances — nothing severe, but noticeable dinner-table conversation over the past several months.'
      },
      {
        label: 'Academic History',
        text: 'Prior to this year, Jordan was a consistent, well-organized student — mostly A\'s and B\'s, rarely missing an assignment. The drop in grades over the last two terms represents a real change from that baseline, not a longstanding pattern.'
      },
      {
        label: 'Social Life',
        text: 'Jordan has a small, close-knit group of friends going back to middle school. Recently, Jordan stopped attending a weekly school club that used to be a regular part of the week, and a couple of friends have mentioned Jordan seeming "somewhere else" during hangouts, even while still showing up and talking.'
      },
      {
        label: 'Temperament',
        text: 'Parents describe Jordan as having always been "a bit of a worrier," even as a younger kid — the type to double-check homework was in the backpack three times before leaving for school, or ask a lot of "what if" questions before school trips.'
      },
      {
        label: 'Extracurriculars',
        text: 'Jordan was a member of the competitive swim team and recently stepped back from it, shortly after a big regional meet this past October.'
      },
      {
        label: 'Medical History',
        text: 'Per Jordan\'s medical chart: a physical exam and bloodwork were completed several weeks ago at the family\'s request, including thyroid screening. All results came back within normal limits. No medical cause was identified for the reported stomachaches.'
      }
    ]
  },

  questions: [
    {
      id:'sleep', tag:'Sleep & rest',
      text:'Ask about sleep patterns',
      note:'"I have a hard time falling asleep most nights — my mind just keeps going over stuff. I\'m tired a lot during the day."'
    },
    {
      id:'mood', tag:'Mood & interest',
      text:'Ask whether Jordan still enjoys things',
      note:'"I still like hanging out with my friends and playing guitar when I get the chance. I don\'t feel sad, exactly — more like keyed up. It\'s hard to just relax."'
    },
    {
      id:'depression_screen', tag:'Depression screen',
      text:'Ask about hopelessness, self-worth, and appetite',
      note:'"No, I don\'t feel hopeless, or like something\'s wrong with me. I just can\'t relax. My appetite\'s the same as always — I still eat lunch with my friends every day."'
    },
    {
      id:'worry', tag:'Nature of the worry',
      text:'Ask what Jordan worries about',
      note:'"Kind of everything, honestly. Grades, whether my friends are mad at me, if I locked the door, if my parents are okay when they\'re driving. It jumps around. I know some of it doesn\'t make sense but I can\'t turn it off."'
    },
    {
      id:'duration', tag:'Timeline',
      text:'Ask how long this has been going on',
      note:'"Since around the start of the school year — so about seven months now. It\'s not really tied to one specific thing that happened."'
    },
    {
      id:'physical', tag:'Physical symptoms',
      text:'Ask about the stomachaches and headaches',
      note:'"Yeah, my stomach gets tight and my shoulders hurt by the end of the day. The nurse checked me out and said there\'s nothing physically wrong. I also have a hard time focusing in class because my mind keeps drifting back to whatever I\'m worried about."'
    },
    {
      id:'trigger', tag:'Possible trigger',
      text:'Ask if anything specific happened around when this started',
      note:'"There was a big regional swim meet back in October — I was really stressed about that. But thinking about it more... I was already worried about a bunch of unrelated stuff before that, and it hasn\'t let up since the meet ended months ago."'
    },
    {
      id:'safety', tag:'Safety check',
      text:'Ask directly about safety — any thoughts of self-harm',
      note:'"No, nothing like that. I just feel wound up all the time, not hopeless." (Good practice: this is a screening question worth asking in every real interview, regardless of the answer.)'
    }
  ],

  safetyLabel: 'Denies current thoughts of self-harm',

  collateral: {
    teacher: '"Honestly, my first thought was that something might be going on at home — kids who suddenly seem distracted and withdrawn like this usually have something happening there. I mentioned it to the school counselor, and she said as far as she knew, things at home seemed fine. So I\'m not sure what to make of that."',
    parent: '"Jordan has always been a bit of a worrier, even as a little kid, but this year it feels more constant — a lot more \'what if\' questions before things, even small stuff. Jordan still wants to eat dinner with us, still wants to see friends, so it doesn\'t feel like sadness to us. More like Jordan just can\'t settle down."'
  },

  disorderReference: [
    {
      name: 'Generalized Anxiety Disorder (GAD)',
      summary: '<strong>Core Diagnostic Requirements</strong><ul><li><strong>A. Excessive Worry:</strong> Worry that occurs more days than not for at least 6 months, about a number of events or activities (school, relationships, safety of loved ones, etc.) rather than one specific thing.</li><li><strong>B. Uncontrolled Worry:</strong> The person finds it very hard to stop or control the worry.</li><li><strong>C. Associated Symptoms:</strong> Must include 3 or more of the following 6 physical/mental signs (only 1 is needed in children), present more days than not for 6 months:<ul><li>Restlessness or feeling on edge</li><li>Tiring easily or feeling fatigued</li><li>Trouble concentrating or mind going blank</li><li>Irritability</li><li>Muscle tension</li><li>Sleep problems (trouble falling or staying asleep, or restless sleep)</li></ul></li><li><strong>D. Impact:</strong> The worry, or the physical symptoms, cause real distress or get in the way of school, work, relationships, or other important areas of life.</li><li><strong>E. Not Medical:</strong> The symptoms aren\'t caused by a substance (like a drug or medication) or a medical condition (like a thyroid problem).</li><li><strong>F. Not Another Disorder:</strong> The picture isn\'t better explained by a different mental health condition — for example, worry that\'s really about having panic attacks (panic disorder) or being judged in social situations (social anxiety disorder), rather than general worry across many areas of life.</li></ul>'
    },
    {
      name: 'Major Depressive Disorder (MDD)',
      summary: 'Five or more of nine possible symptoms, present during the same two-week period and representing a change from previous functioning — with at least one of the five being either depressed mood (in children and teens, this can show up as irritability instead) or a loss of interest or pleasure in almost all activities. The remaining possible symptoms are: significant appetite or weight change, sleep disturbance (too little or too much), psychomotor agitation or slowing down noticeable to others, fatigue or low energy, feelings of worthlessness or excessive/inappropriate guilt, trouble concentrating or making decisions, and recurrent thoughts of death or suicide. The symptoms also need to cause real distress or interfere with daily functioning, can\'t be better explained by a substance or a medical condition (like hypothyroidism), and there must never have been a manic or hypomanic episode.'
    },
    {
      name: 'Adjustment Disorder',
      summary: 'Emotional or behavioral symptoms that develop within three months of an identifiable stressor (a move, a breakup, a family change), where the reaction is either out of proportion to how severe the stressor actually is, or noticeably interferes with school, relationships, or other important areas of functioning. To qualify, the reaction can\'t be better explained by another mental disorder and can\'t simply be a flare-up of a pre-existing one, and it can\'t represent normal grief after a loss. Once the stressor (or its effects) has ended, symptoms shouldn\'t continue for more than another six months. The core identifying feature is still the clear, traceable link to one triggering event — if symptoms were already present before the stressor, or persist unchanged long after it\'s resolved, adjustment disorder becomes a much weaker fit.'
    },
    {
      name: 'Normal Adolescent Stress (No Diagnosis)',
      summary: 'Not a clinical diagnosis — this is the baseline everything else gets compared against. Teenagers commonly experience stress, worry, or low mood at points without it representing a disorder, especially around exams, social conflict, or big life changes. What separates ordinary stress from a diagnosable condition is typically severity, duration, and functional impact: does it significantly interfere with school, relationships, or daily life, and does it persist well beyond what the situation would normally call for?'
    }
  ],

  symptomTruth: {
    excessive_worry:true,
    multiple_domains:true,
    uncontrolled_worry:true,
    restlessness:true,
    fatigue:true,
    muscle_tension:true,
    concentration:true,
    irritability:false,
    sleep:true,
    duration:true,
    impairment:true,
    gad_not_medical:true,
    gad_not_other_disorder:true,
    depressed_mood:false,
    anhedonia:false,
    appetite_change:false,
    worthlessness_hopelessness:false,
    psychomotor:false,
    suicidal_ideation:false,
    mdd_duration:false,
    specific_stressor:false,
    adj_disproportionate_or_impairing:true,
    adj_not_other_disorder:false,
    minimal_impact:false,
    brief_duration:false
  },

  checklistCategories: [
    {
      title: 'Generalized Anxiety Disorder — Symptom Checklist',
      labels: {
        excessive_worry:'A. Excessive worry',
        multiple_domains:'A. Spans a number of events or activities',
        duration:'A. Present more days than not for at least 6 months',
        uncontrolled_worry:'B. Worry is hard to stop or control',
        restlessness:'C1. Restlessness or feeling "keyed up" / on edge',
        fatigue:'C2. Becoming easily fatigued',
        concentration:'C3. Trouble concentrating or mind going blank',
        irritability:'C4. Irritability',
        muscle_tension:'C5. Muscle tension',
        sleep:'C6. Sleep disturbance',
        impairment:'D. Causes real distress or gets in the way of daily functioning',
        gad_not_medical:'E. Not caused by a substance or medical condition',
        gad_not_other_disorder:'F. Not better explained by another mental disorder'
      },
      cutoff: {
        count: 3,
        keys: ['restlessness','fatigue','concentration','irritability','muscle_tension','sleep'],
        note: 'Criterion C requires 3+ of these six (C1–C6), with at least some present most days for 6+ months. A, B, and D are separate, additional criteria.'
      }
    },
    {
      title: 'Major Depression — Symptom Checklist',
      labels: {
        depressed_mood:'Depressed (or, in teens, irritable) mood, most of the day nearly every day',
        anhedonia:'Loss of interest or pleasure in almost all activities',
        appetite_change:'Significant appetite or weight change',
        sleep:'Sleep disturbance — insomnia or hypersomnia',
        psychomotor:'Psychomotor agitation or slowing, observable by others',
        fatigue:'Fatigue or low energy',
        worthlessness_hopelessness:'Worthlessness or excessive, inappropriate guilt',
        concentration:'Impaired concentration or indecisiveness',
        suicidal_ideation:'Recurrent thoughts of death, suicidal ideation, or attempts',
        mdd_duration:'Five or more of these present nearly every day for 2+ weeks, marking a change from baseline'
      },
      cutoff: {
        count: 5,
        keys: ['depressed_mood','anhedonia','appetite_change','sleep','psychomotor','fatigue','worthlessness_hopelessness','concentration','suicidal_ideation'],
        note: 'Requires 5+ of these nine, in the same 2-week period — and at least one must be depressed mood or anhedonia.'
      }
    },
    {
      title: 'Adjustment Disorder — Symptom Checklist',
      labels: {
        specific_stressor:'Symptoms began within 3 months of an identifiable stressor',
        adj_disproportionate_or_impairing:'Distress out of proportion to the stressor, or significant impairment in functioning',
        adj_not_other_disorder:'Not better explained by another mental disorder, and not just a flare-up of a pre-existing one'
      }
    },
    {
      title: 'Normal Adolescent Stress — Checklist',
      labels: {
        minimal_impact:'Minimal impact on grades, sleep, or relationships',
        brief_duration:'Present only briefly, resolving within days to weeks'
      }
    }
  ],

  dxOptions: [
    {
      id:'gad', name:'Generalized Anxiety Disorder',
      blurb:'Persistent, hard-to-control worry across several areas of life, with physical signs like tension or restlessness',
      correct:true,
      explain:`Jordan's pattern fits generalized anxiety well: worry that jumps between several unrelated topics (school, relationships, family safety), lasting well over six months, paired with muscle tension, restlessness, daytime fatigue, poor sleep, and trouble concentrating. That's five of the six associated DSM-5 symptoms — well past the three needed — and Jordan doesn't need to show irritability too for the criteria to be met. All of this comes without the flat, joyless mood or loss of interest that would point toward depression instead. The stomachaches, headaches, and grade drop are common physical and functional companions to chronic worry in teens, which is often why anxiety gets mistaken for a physical illness at first.`
    },
    {
      id:'mdd', name:'Major Depressive Disorder',
      blurb:'Persistent low mood or loss of interest in most activities, most of the day, most days',
      correct:false,
      explain:`Depression was a reasonable hypothesis to test given the grade drop and withdrawal, and Jordan does share a few surface-level symptoms with depression — daytime fatigue, poor sleep, trouble concentrating. But MDD requires five of nine symptoms and at least one of them has to be depressed/irritable mood or loss of interest — and Jordan has neither. Jordan explicitly still enjoys friends and guitar (no anhedonia), and describes feeling "keyed up" rather than sad, low, or numb (no depressed mood). Without one of those two anchor symptoms present, the diagnosis can't be made no matter how many of the other, less specific symptoms overlap — which is exactly why it's worth asking about mood and interest directly rather than assuming from the referral note alone.`
    },
    {
      id:'adj', name:'Adjustment Disorder',
      blurb:'Emotional or behavioral symptoms that develop in response to a specific identifiable stressor, within three months of it',
      correct:false,
      explain:`Adjustment disorder requires symptoms tied to a specific, identifiable stressor within three months of its onset. Jordan's worry isn't tied to one triggering event — it's spread across many unconnected areas of life and has been building gradually for about seven months, which points toward a more generalized pattern rather than a reaction to one specific change. There's also a second reason it doesn't fit here: adjustment disorder can only be diagnosed if the symptoms aren't better explained by another mental disorder — and since Jordan's presentation meets full criteria for generalized anxiety disorder, that on its own rules adjustment disorder out, even setting the stressor-timing question aside.`
    },
    {
      id:'normal', name:'Normal Adolescent Stress — no diagnosis needed',
      blurb:'Everyday stress that comes and goes without significantly interfering with daily functioning',
      correct:false,
      explain:`Some stress is a normal part of being 16 — the difference here is impact and control. Jordan describes worry that's hard to turn off, has lasted months, and is now affecting grades, sleep, and physical health. That combination of duration, uncontrollability, and functional impact is what separates an everyday stressful patch from a pattern worth a clinical picture.`
    }
  ],

  debriefTrapText: 'One note in this case was designed as a trap: the swim meet. It\'s easy to grab onto a specific event mentioned near where symptoms started and assume it\'s the cause — but a real trigger should explain the timing (starts after, often resolves once the stressor passes). Jordan\'s worry did neither. Watching for that gap between "mentioned nearby" and "actually explains it" is a habit worth building early.',

  trapCriterionKey: 'specific_stressor'
};
