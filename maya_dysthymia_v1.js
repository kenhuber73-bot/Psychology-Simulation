// CASE DATA FILE — Maya S., Persistent Depressive Disorder (Dysthymia) vs. MDD vs. Bipolar Disorder vs. Adjustment Disorder
window.CASE_DATA = {

  id: 'maya_dysthymia_v1',

  referral: {
    clientLine: 'Maya S., age 17, 11th grade.',
    referredBy: 'School counselor, after Maya\'s mother reached out with concerns.',
    reason: '"Maya\'s mother contacted the school counselor because Maya has seemed persistently \'down\' and low-energy — not a dramatic change, more of an ongoing pattern the mother says she\'s noticed on and off for a while. A recent breakup about two weeks ago seems to have made things noticeably worse. The mother wants to understand whether this is something serious."',
    background: [
      {
        label: 'Family & Home',
        text: 'Maya lives with her mother and an older sibling. Her mother has an open history of being treated for depression in her twenties and mentions noticing similar patterns in Maya over the past couple of years. There is no reported family history of manic episodes or bipolar disorder.'
      },
      {
        label: 'Academic History',
        text: 'Maya\'s grades have been described as "consistently okay, never great" for the past couple of years — not a sharp recent drop, more of a steady, unremarkable baseline that hasn\'t changed dramatically in either direction.'
      },
      {
        label: 'Social Life',
        text: 'Maya has a small group of close friends and describes herself as "the low-key one" in the group, often opting out of higher-energy plans. Friends say this has been true of her for a couple of years, though she has pulled back further since the breakup two weeks ago.'
      },
      {
        label: 'Temperament',
        text: 'Family members describe Maya as "even-keeled" — she has never had noticeably high or excitable periods, and has had more of a steady, mildly low mood since around age fourteen or fifteen, well before any recent events.'
      },
      {
        label: 'Extracurriculars',
        text: 'Maya quit choir a few months ago, saying she was "just not feeling into it anymore." She had been a member for over a year before that.'
      },
      {
        label: 'Medical History',
        text: 'Per Maya\'s medical chart: a physical exam and bloodwork were completed several weeks ago, including thyroid screening. All results came back within normal limits.'
      }
    ]
  },

  questions: [
    {
      id:'baseline_mood', tag:'Day-to-day mood',
      text:'Ask Maya to describe her mood on a typical day',
      note:'"Kind of down, most days, if I\'m being honest. It\'s hard to say exactly when it started — it\'s just kind of always been there in the background. I don\'t feel hopeless or anything, just... flat, I guess."'
    },
    {
      id:'duration', tag:'Timeline',
      text:'Ask how long this has been going on',
      note:'"Probably close to two years now, maybe a little longer. It\'s not like there was one bad stretch that started it — it\'s just sort of been the norm for a while."'
    },
    {
      id:'functioning', tag:'Daily functioning',
      text:'Ask how this affects her daily life',
      note:'"I still go to school, still see my friends sometimes. It\'s not like I can\'t get out of bed or anything. It\'s more like nothing feels that exciting — everything\'s kind of meh, even stuff I used to like."'
    },
    {
      id:'trigger', tag:'Possible trigger',
      text:'Ask about the recent breakup',
      note:'"Yeah, that happened about two weeks ago, and it definitely made things feel worse for a bit. But honestly, I felt like this before we even started dating, so I don\'t really think that\'s \'why\' — it just kind of piled on top of something that was already there."'
    },
    {
      id:'manic_screen', tag:'Mood elevation screen',
      text:'Ask if she\'s ever had periods of unusually high energy or elevated mood',
      note:'"No, I don\'t think so. I mean, I have days where I feel more like myself, but I\'ve never had like a period where I barely needed sleep or felt like I could take on the world or anything like that. Nothing really extreme in either direction."'
    },
    {
      id:'personality_baseline', tag:'Personality baseline',
      text:'Ask if she\'s always been more low-key, even before this',
      note:'"Yeah, honestly, I\'ve never been a super high-energy person, even before any of this. My more outgoing friends have always said I\'m just naturally more chill than them, even back in middle school."'
    },
    {
      id:'somatic', tag:'Sleep & appetite',
      text:'Ask about sleep and appetite',
      note:'"I sleep okay, maybe a little more than I used to. Appetite\'s pretty similar, though some days I eat a bit less. Nothing drastic either way."'
    },
    {
      id:'safety', tag:'Safety check',
      text:'Ask directly about safety — any thoughts of self-harm',
      note:'"No, nothing like that. I\'m not, like, in crisis or anything — I just feel kind of low a lot of the time." (Good practice: this is a screening question worth asking in every real interview, regardless of the answer.)'
    }
  ],

  safetyLabel: 'Denies current thoughts of self-harm',

  collateral: {
    teacher: '"Honestly, I think this is probably mostly about the breakup — teenagers go through breakups and it hits them hard for a couple weeks, then they bounce back. I wouldn\'t read too much into it beyond that, in my experience."',
    parent: '"I\'ve noticed this in Maya for a couple of years now, if I\'m being honest — just a low-grade kind of moodiness, not dramatic, just sort of present. I had something similar myself in my twenties before I got treated for it. I don\'t think this is really about the breakup — she\'s kind of always run a little low, and the breakup just made a hard couple of weeks harder."'
  },

  disorderReference: [
    {
      name: 'Persistent Depressive Disorder (Dysthymia)',
      summary: 'A chronic, lower-grade depressed mood present most days for at least one year in adolescents (two years in adults), without necessarily reaching the intensity of a full major depressive episode at any single point. Common features include low self-esteem, poor concentration, low energy, and a general sense of flatness or lack of enjoyment — but functioning is usually maintained, even if things feel persistently harder or less enjoyable than they used to. Because the mood has often been present for so long, people experiencing it sometimes describe it as "just how I am" rather than recognizing it as a shift, which can make it easy to miss.'
    },
    {
      name: 'Major Depressive Disorder (MDD)',
      summary: 'A discrete period — at least two weeks — of significantly depressed mood and/or loss of interest in most activities, present most of the day, nearly every day, along with several other symptoms such as sleep or appetite changes, fatigue, feelings of worthlessness, poor concentration, or thoughts of death. The key features that separate MDD from a more chronic pattern are the presence of a clearer onset and typically more severe impact on day-to-day functioning during the episode.'
    },
    {
      name: 'Bipolar Disorder',
      summary: 'A mood disorder defined by the presence of at least one manic or hypomanic episode — a distinct period of abnormally elevated or irritable mood, increased energy, decreased need for sleep, rapid speech, grandiosity, or impulsive/risky behavior — usually alongside depressive episodes as well. The defining diagnostic requirement is that manic or hypomanic episode itself; without evidence of one, a mood disorder should not be classified as bipolar, regardless of how the depressive symptoms present.'
    },
    {
      name: 'Adjustment Disorder',
      summary: 'Emotional or behavioral symptoms that develop in direct response to a specific, identifiable stressor, typically within about three months of that stressor occurring, and that are out of proportion to what would normally be expected. The defining feature is a clear, traceable link between the stressor and the onset of symptoms — if the symptoms were already present well before the stressor, adjustment disorder becomes a weak fit, since the stressor is supposed to be what\'s driving the reaction in the first place.'
    }
  ],

  symptomTruth: {
    chronic_low_mood:true,
    mild_moderate_severity:true,
    partial_anhedonia:true,
    low_energy:true,
    onset_adolescence:true,
    discrete_episode:false,
    severe_impairment:false,
    marked_somatic_change:false,
    suicidal_ideation:false,
    manic_history:false,
    decreased_sleep_need:false,
    grandiosity:false,
    risky_behavior:false,
    specific_stressor:false
  },

  checklistCategories: [
    {
      title: 'Persistent Depressive Disorder — Symptom Checklist',
      labels: {
        chronic_low_mood:'Low mood present most days for 1-2+ years',
        mild_moderate_severity:'Symptoms mild-to-moderate — daily functioning is maintained',
        partial_anhedonia:'Reduced interest/pleasure, but not total loss',
        low_energy:'Low energy or fatigue',
        onset_adolescence:'Onset traceable to mid-adolescence, not a discrete recent event'
      }
    },
    {
      title: 'Major Depressive Disorder — Symptom Checklist',
      labels: {
        discrete_episode:'A discrete 2+ week episode with a clear, identifiable onset',
        severe_impairment:'Severe impairment — unable to maintain daily functioning',
        marked_somatic_change:'Marked change in sleep, appetite, or weight',
        suicidal_ideation:'Active suicidal thoughts'
      }
    },
    {
      title: 'Bipolar Disorder — Symptom Checklist',
      labels: {
        manic_history:'History of a manic or hypomanic episode',
        decreased_sleep_need:'Decreased need for sleep during a mood episode',
        grandiosity:'Grandiosity or inflated self-esteem during a mood episode',
        risky_behavior:'Increased impulsive or risky behavior during a mood episode'
      }
    },
    {
      title: 'Adjustment Disorder — Symptom Checklist',
      labels: {
        specific_stressor:'Symptoms triggered by, and closely timed with, one identifiable stressor (the breakup)'
      }
    }
  ],

  dxOptions: [
    {
      id:'pdd', name:'Persistent Depressive Disorder (Dysthymia)',
      blurb:'A chronic, lower-grade depressive mood present most days for at least one to two years, without necessarily reaching the severity of a major depressive episode',
      correct:true,
      explain:`Maya's pattern fits persistent depressive disorder well: a low, flat mood that's been present most days for roughly two years, predating the recent breakup by a wide margin, without ever forming one clearly demarcated depressive episode with severe functional impairment. She still attends school and sees friends, which points toward the milder, chronic course of dysthymia rather than the more acute, disabling picture of major depression — and she explicitly denies any period of elevated mood, energy, or decreased need for sleep, which rules out a bipolar pattern.`
    },
    {
      id:'mdd', name:'Major Depressive Disorder',
      blurb:'A discrete period of severely depressed mood or loss of interest, lasting at least two weeks, with significant impact on functioning',
      correct:false,
      explain:`MDD was a reasonable first hypothesis given the low mood and reduced interest, but Maya's presentation doesn't show the discrete, severe episode MDD requires — there's no clear onset point, her functioning has been maintained rather than severely disrupted, and the pattern has been present for roughly two years rather than emerging as a distinct recent episode. The breakup two weeks ago intensified things temporarily, but by her own account, the underlying low mood predates it substantially.`
    },
    {
      id:'bipolar', name:'Bipolar Disorder',
      blurb:'Mood episodes that include at least one period of mania or hypomania — elevated or irritable mood, decreased need for sleep, and increased energy — in addition to depressive episodes',
      correct:false,
      explain:`Bipolar disorder requires a history of at least one manic or hypomanic episode, and Maya explicitly denies ever experiencing a period of elevated mood, dramatically reduced need for sleep, or unusually high energy distinct from her baseline. Being naturally low-key and even-keeled is a personality trait, not a mood episode — there's no evidence here of the mood elevation that bipolar disorder requires.`
    },
    {
      id:'adj', name:'Adjustment Disorder (related to the breakup)',
      blurb:'Emotional symptoms that develop in direct response to a specific stressor, typically resolving once the stressor passes or is adapted to',
      correct:false,
      explain:`The breakup is a real and understandably painful event, but the timing doesn't support adjustment disorder as the primary diagnosis: Maya describes the low mood as present for roughly two years, well before the relationship even began, with the breakup only intensifying an already-existing pattern rather than causing it outright.`
    }
  ],

  debriefTrapText: 'One note in this case was designed as a trap: the recent breakup. It\'s tempting to treat the most recent, most emotionally vivid event as the explanation for the whole picture — but the actual test is timing and duration. Maya\'s low mood was present for roughly two years before the breakup ever happened; the breakup made an existing pattern temporarily worse, it didn\'t create it. Watching for that difference between "made it worse" and "caused it" is exactly the skill this case is testing.',

  trapCriterionKey: 'specific_stressor'
};
