// CASE DATA FILE — Alex M., ADHD vs. Generalized Anxiety Disorder
window.CASE_DATA = {

  id: 'alex_adhd_gad_v1',

  referral: {
    clientLine: 'Alex M., age 15, 9th grade.',
    referredBy: 'Math teacher, after a parent-teacher conference where organization and focus were raised as concerns.',
    reason: '"Alex\'s grades have slipped this term. In class, Alex seems unable to stay focused, blurts out answers before being called on, and often loses track of what\'s happening in a lesson. Alex\'s backpack and planner are consistently disorganized, and assignments that were clearly completed sometimes don\'t get turned in. The parent mentioned wondering if this could be some kind of attention problem."',
    background: [
      {
        label: 'Family & Home',
        text: 'Alex\'s parents divorced about two years ago, and Alex now splits time between two households on a week-on, week-off schedule. Both parents are involved and communicate regularly about school matters, though Alex sometimes forgets which house has which school supplies.'
      },
      {
        label: 'Academic History',
        text: 'Teachers across several years — going back to elementary school — have described Alex the same way: clearly bright, quick to understand new material verbally, but inconsistent with turning in work. Report cards often include some version of "not working to potential."'
      },
      {
        label: 'Social Life',
        text: 'Alex is well-liked and has an active friend group. Known as "the funny one" in class, Alex talks a lot in social situations and has a habit of jumping into conversations mid-sentence, which friends mostly find endearing rather than annoying.'
      },
      {
        label: 'Interests & Hobbies',
        text: 'Alex is genuinely skilled at a competitive online video game, regularly playing for hours at a stretch with real focus and has reached a high in-game rank. This stands in sharp contrast to the difficulty staying focused during a 45-minute class period.'
      },
      {
        label: 'Temperament',
        text: 'Even in preschool and early elementary school, teachers described Alex as "into everything" — high energy, curious, and needing frequent redirection to stay on task, well before the family went through the divorce.'
      }
    ]
  },

  questions: [
    {
      id:'attention', tag:'Attention & focus',
      text:'Ask about focus during class',
      note:'"Yeah, I space out a lot, even in classes I actually like. It\'s not really that I\'m thinking about anything specific — my mind just kind of drifts, or I start noticing stuff around the room instead of listening."'
    },
    {
      id:'restlessness_lifelong', tag:'Restlessness',
      text:'Ask about fidgeting or restlessness',
      note:'"I\'ve always been like that, even when I was little. I get antsy sitting still for a long time. My mom said my elementary teachers used to comment on it too."'
    },
    {
      id:'worry', tag:'Worry patterns',
      text:'Ask whether Alex worries a lot',
      note:'"Not really? I mean, I guess everyone worries about tests sometimes, but I don\'t sit around thinking about bad stuff happening. I just get bored or distracted, that\'s different I think."'
    },
    {
      id:'disorganization', tag:'Organization',
      text:'Ask about losing things or forgetting assignments',
      note:'"I lose stuff constantly — my planner, worksheets, my water bottle probably three times a week. I\'ll do an assignment and then just... forget it exists and never turn it in. This has been happening since like third grade."'
    },
    {
      id:'impulsivity', tag:'Impulsivity',
      text:'Ask about blurting out or interrupting',
      note:'"Yeah, teachers get on me about that. I\'ll just say the answer before they finish asking, or cut into a conversation. I don\'t really mean to, it just kind of happens before I think about it."'
    },
    {
      id:'sleep', tag:'Sleep',
      text:'Ask about sleep patterns',
      note:'"I sleep fine, honestly. Sometimes I stay up too late playing games, but once I\'m actually in bed I fall asleep pretty quick. I don\'t lie there thinking about stuff."'
    },
    {
      id:'trigger', tag:'Possible trigger',
      text:'Ask if anything changed recently that could explain this',
      note:'"My parents got divorced about two years ago, and that was a really hard year. But honestly, I was like this way before that too — my old teachers were saying the same things back in elementary school. It hasn\'t really gotten worse since then, it\'s just always kind of been there."'
    },
    {
      id:'safety', tag:'Safety check',
      text:'Ask directly about safety — any thoughts of self-harm',
      note:'"No, nothing like that. I just get distracted and forget things, that\'s pretty much it." (Good practice: this is a screening question worth asking in every real interview, regardless of the answer.)'
    }
  ],

  safetyLabel: 'Denies current thoughts of self-harm',

  symptomTruth: {
    inattention_multiple:true,
    early_onset:true,
    disorganization:true,
    impulsivity:true,
    restlessness_lifelong:true,
    excessive_worry:false,
    worry_multiple_domains:false,
    worry_driven_distraction:false,
    specific_stressor:false
  },

  gadLabels: {
    inattention_multiple:'Inattention/distractibility across multiple settings, not just boring tasks',
    early_onset:'Pattern present since early childhood',
    disorganization:'Chronic disorganization / losing things',
    impulsivity:'Impulsivity (blurting out, interrupting, hasty decisions)',
    restlessness_lifelong:'Restlessness or fidgeting, longstanding'
  },
  gadColumnTitle: 'ADHD — Symptom Checklist',

  mddLabels: {
    excessive_worry:'Excessive, hard-to-control worry',
    worry_multiple_domains:'Worry spans multiple areas of life',
    worry_driven_distraction:'Distraction specifically caused by anxious rumination'
  },
  mddColumnTitle: 'Generalized Anxiety — Symptom Checklist',

  otherLabels: {
    specific_stressor:'Symptoms triggered by a specific recent stressor (e.g. the divorce)'
  },

  dxOptions: [
    {
      id:'adhd', name:'ADHD, Combined Presentation',
      blurb:'Inattention, hyperactivity, and impulsivity present since childhood, across multiple settings',
      correct:true,
      explain:`Alex's pattern fits ADHD well: distractibility that shows up even during preferred activities (not just boring ones), restlessness and disorganization dating back to early elementary school, and impulsive behavior like blurting out answers — all present well before the divorce and unchanged by it. The distraction isn't driven by worry or rumination; Alex describes a mind that drifts rather than one stuck on anxious thoughts, which is the key thing separating this from an anxiety-driven attention problem.`
    },
    {
      id:'gad', name:'Generalized Anxiety Disorder',
      blurb:'Persistent, hard-to-control worry across several areas of life, with physical signs like tension or restlessness',
      correct:false,
      explain:`Anxiety was worth ruling out given the focus problems, but Alex explicitly denies the kind of excessive, wide-ranging worry that defines GAD, and describes falling asleep easily rather than lying awake with racing thoughts. The restlessness here isn't anxious energy — it's longstanding fidgetiness dating back to childhood, present in relaxed situations too, not tied to worry at all.`
    },
    {
      id:'adj', name:'Adjustment Disorder (related to the divorce)',
      blurb:'Emotional or behavioral symptoms that develop in response to a specific identifiable stressor, within three months of it',
      correct:false,
      explain:`The divorce is a real and understandably difficult event, but the timing doesn't fit: Alex's attention and organization problems were already present years before it happened, according to both Alex and prior teachers, and haven't changed since. A stressor-related diagnosis needs the symptoms to actually follow the stressor — here they clearly predate it.`
    },
    {
      id:'normal', name:'Normal teenage disorganization — no diagnosis needed',
      blurb:'Everyday inattention or disorganization that doesn\'t significantly interfere with functioning',
      correct:false,
      explain:`Some distractibility and disorganization is typical for teenagers, but the scope here goes further — a pattern present since early childhood, across multiple settings (not just one class or one subject), now affecting grades and daily functioning. That combination of early onset, breadth, and real-world impact is what separates a clinical pattern from ordinary teenage scatter.`
    }
  ],

  debriefTrapText: 'One note in this case was designed as a trap: the divorce. It\'s tempting to treat any major life event mentioned in an interview as the explanation for whatever brought a student in — but the actual test is timing. Alex\'s attention and organization difficulties were already present years before the divorce, according to both Alex and earlier teachers, and didn\'t change afterward. A stressor that predates the symptoms it\'s supposedly causing can\'t really be the cause. Watching for that mismatch in timing is a habit worth building early.',

  trapCriterionKey: 'specific_stressor'
};
