"use client"

import { useState } from "react"
import { useAppContext } from "../context/AppContext"
import Link from "next/link"
import Image from "next/image"
import Reveal from "../components/Reveal"
import { Search, BookOpen, Sparkles, Clock, Calendar, ArrowLeft } from "lucide-react"

interface Article {
  id: string
  title: { ar: string; en: string }
  excerpt: { ar: string; en: string }
  author: { ar: string; en: string }
  category: { ar: string; en: string }
  categoryColor: string
  readTime: number
  date: string
  image: string
  content: { ar: string; en: string }
  authorImage: string
}

export const articles: Article[] = [
  {
    id: "1",
    title: { ar: "كيف تتعامل مع القلق اليومي", en: "How to Deal with Daily Anxiety" },
    excerpt: { ar: "خطوات عملية تساعدك على تهدئة أفكارك والتعامل مع القلق بشكل يومي دون ان يؤثر على حياتك.", en: "Practical steps to help calm your thoughts and deal with daily anxiety without affecting your life." },
    category: { ar: "طرق وقاية", en: "Prevention Methods" },
    categoryColor: "rgba(74, 152, 130, 0.8)",
    readTime: 5,
    date: "5 مارس 2026",
    image: "https://images.unsplash.com/photo-1764192114257-ae9ecf97eb6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwbWVkaXRhdGlvbiUyMHBlYWNlZnVsJTIwbWluZGZ1bG5lc3N8ZW58MXx8fHwxNzcyOTczMDI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    content: { 
      ar: `القلق اليومي هو شعور بالتوتر والخوف من أمور مستقبلية قد تحدث، وهو أمر طبيعي يشعر به الجميع في مراحل مختلفة من حياتهم. لكن عندما يصبح هذا القلق مفرطاً ويؤثر على حياتك اليومية، فمن المهم التعامل معه بفعالية.

قد تلاحظ بعض العلامات التي تدل على أن قلقك قد أصبح مفرطاً، مثل صعوبة في التركيز، الأرق أو صعوبة في النوم، التوتر المستمر، وتجنب المواقف التي تثير القلق.

هناك عدة طرق فعالة للتعامل مع القلق اليومي:

عندما تشعر بالقلق، جرب تقنية التنفس العميق. خذ نفساً عميقاً من أنفك، احبسه لمدة 4 ثوانٍ، ثم أخرجه ببطء من فمك. كرر هذا التمرين عدة مرات.

النشاط البدني يساعد على تقليل التوتر وتحسين المزاج. حتى المشي لمدة 30 دقيقة يومياً يمكن أن يحدث فرقاً كبيراً.

كتابة مشاعرك وأفكارك في دفتر يومي يمكن أن يساعدك على فهم مصدر قلقك بشكل أفضل.

مشاركة مشاعرك مع صديق أو فرد من العائلة يمكن أن يخفف من العبء النفسي.

إذا كان قلقك يؤثر بشكل كبير على حياتك اليومية ولم تنجح الطرق السابقة في مساعدتك، فمن المهم استشارة مختص نفسي.

القلق اليومي أمر طبيعي، ولكن التعامل معه بفعالية يساعدك على عيش حياة أكثر استقراراً وسعادة. تذكر أن طلب المساعدة هو علامة قوة وليس ضعف.`,
      en: `Daily anxiety is a feeling of tension and fear about future events that may happen, and it's something normal that everyone feels at different stages of their lives. But when this anxiety becomes excessive and affects your daily life, it's important to deal with it effectively.

You might notice some signs that indicate your anxiety has become excessive, such as difficulty concentrating, insomnia or difficulty sleeping, constant tension, and avoiding situations that trigger anxiety.

There are several effective ways to deal with daily anxiety:

When you feel anxious, try the deep breathing technique. Take a deep breath through your nose, hold it for 4 seconds, then exhale slowly through your mouth. Repeat this exercise several times.

Physical activity helps reduce stress and improve mood. Even walking for 30 minutes daily can make a big difference.

Writing your feelings and thoughts in a journal can help you better understand the source of your anxiety.

Sharing your feelings with a friend or family member can help ease the psychological burden.

If your anxiety significantly affects your daily life and the previous methods haven't helped you, it's important to consult a mental health professional.

Daily anxiety is normal, but dealing with it effectively helps you live a more stable and happy life. Remember that seeking help is a sign of strength, not weakness.`
    },
    author: { ar: "د. أحمد محمد", en: "Dr. Ahmed Mohammed" },
    authorImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fDE3NzI5NzM1MDF8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: "2",
    title: { ar: "علامات الارهاق النفسي", en: "Signs of Mental Burnout" },
    excerpt: { ar: "تعرّف على العلامات المبكرة للارهاق النفسي وكيف تميّزها قبل ان تتفاقم الاعراض.", en: "Learn to recognize early signs of mental burnout and how to distinguish them before symptoms worsen." },
    category: { ar: "الاسباب", en: "Causes" },
    categoryColor: "rgba(224, 151, 107, 0.8)",
    readTime: 4,
    date: "2 مارس 2026",
    image: "https://images.unsplash.com/photo-1758874383822-0e63bdadd37a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJub3V0JTIwc3RyZXNzJTIwdGlyZWQlMjBwZXJzb258ZW58MXx8fHwxNzcyOTczMDI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    content: {
      ar: `الارهاق النفسي (Burnout) هو حالة من الاستنزاف الجسدي والعاطفي والعقلي الناتج عن التعرض المستمر للضغوط.

من اهم العلامات: الشعور بالتعب المستمر حتى بعد النوم الكافي، فقدان الحماس للاشياء التي كنت تستمتع بها، والشعور بالانفصال عن الآخرين.

علامات جسدية تشمل: صداع متكرر، مشاكل في النوم، ضعف المناعة، وتغيرات في الشهية.

الحل يبدأ بوضع حدود صحية في العمل والعلاقات. تعلم ان تقول 'لا' عندما تحتاج ذلك.

خصص وقتًا يوميًا لنفسك، حتى لو كان 15 دقيقة فقط. هذا الوقت ليس ترفًا بل ضرورة لصحتك النفسية.`,
      en: `Mental burnout is a state of physical, emotional, and mental exhaustion resulting from continuous exposure to stress.

Important signs include: feeling constantly tired even after enough sleep, losing enthusiasm for things you used to enjoy, and feeling disconnected from others.

Physical signs include: frequent headaches, sleep problems, weakened immunity, and changes in appetite.

The solution starts with setting healthy boundaries at work and in relationships. Learn to say 'no' when you need to.

Set aside daily time for yourself, even if it's just 15 minutes. This time is not a luxury but a necessity for your mental health.`
    },
    author: { ar: "د. سارة أحمد", en: "Dr. Sara Ahmed" },
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsJTIwc21pbGluZ3xlbnwwfHx8fDE3NzI5NzM1MDF8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: "3",
    title: { ar: "كيف تحسّن صحتك النفسية", en: "How to Improve Your Mental Health" },
    excerpt: { ar: "روتين يومي بسيط مبني على اسس علمية يساعدك في تحسين حالتك النفسية خطوة بخطوة.", en: "A simple daily routine based on scientific foundations to help improve your mental state step by step." },
    category: { ar: "خطوات علاج", en: "Treatment Steps" },
    categoryColor: "rgba(124, 142, 198, 0.8)",
    readTime: 6,
    date: "28 فبراير 2026",
    image: "https://images.unsplash.com/photo-1758274526671-ad18176acb01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMG1lbnRhbCUyMGhlYWx0aCUyMG5hdHVyZSUyMHJlbGF4YXRpb258ZW58MXx8fHwxNzcyOTczMDI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    content: {
      ar: `تحسين الصحة النفسية يبدأ بخطوات صغيرة ومستمرة. لا تحتاج إلى تغييرات كبيرة فجأة، بل إلى بناء عادات صحية تدريجياً.

ابدأ يومك بتمارين استرخاء لمدة 5 دقائق. التنفس العميق يساعد على تهدئة العقل وتحسين التركيز طوال اليوم.

حرك جسمك يومياً. المشي لمدة 30 دقيقة يكفي لتحسين المزاج وزيادة الطاقة.

تناول طعاماً صحياً. الأغذية الغنية بالأوميغا والفيتامينات تدعم وظائف الدماغ.

نام جيداً. 7-8 ساعات نوم كافية ضرورية لإعادة شحن طاقتك النفسية.

تواصل مع الآخرين. العلاقات الاجتماعية القوية هي درع واقٍ للصحة النفسية.

خصص وقتاً لهواياتك. الأنشطة التي تستمتع بها تقلل التوتر وتزيد السعادة.`,
      en: `Improving mental health starts with small, consistent steps. You don't need sudden big changes, but gradual building of healthy habits.

Start your day with 5 minutes of relaxation exercises. Deep breathing helps calm the mind and improve focus throughout the day.

Move your body daily. Walking for 30 minutes is enough to improve mood and increase energy.

Eat healthy food. Foods rich in omega and vitamins support brain functions.

Sleep well. 7-8 hours of adequate sleep are essential to recharge your mental energy.

Connect with others. Strong social relationships are a protective shield for mental health.

Make time for your hobbies. Activities you enjoy reduce stress and increase happiness.`
    },
    author: { ar: "د. خالد العتيبي", en: "Dr. Khaled Al-Otaibi" },
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBzbWlsaW5nJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzcyOTczNTAxfDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: "4",
    title: { ar: "الكتابة العلاجية: كيف تساعدك على فهم مشاعرك", en: "Therapeutic Writing: How It Helps You Understand Your Emotions" },
    excerpt: { ar: "اكتشف كيف يمكن للكتابة اليومية ان تكون اداة فعالة للتعبير عن مشاعرك وفهم نفسك بشكل اعمق.", en: "Discover how daily journaling can be an effective tool for expressing emotions and understanding yourself more deeply." },
    category: { ar: "طرق وقاية", en: "Prevention Methods" },
    categoryColor: "rgba(155, 127, 184, 0.8)",
    readTime: 4,
    date: "25 فبراير 2026",
    image: "https://images.unsplash.com/photo-1726377240070-19b747fc9f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsaW5nJTIwd3JpdGluZyUyMHRoZXJhcHklMjBzZWxmJTIwY2FyZXxlbnwxfHx8fDE3NzI5NzM0OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    content: {
      ar: `الكتابة العلاجية هي أداة قوية لفهم مشاعرك وأفكارك. عندما تكتب، تعطي لنفسك مساحة آمنة للتعبير دون حكم.

ابدأ بـ 10 دقائق يومياً. اكتب كل ما يأتي إلى ذهنك دون ترتيب أو تصحيح.

ركز على مشاعرك الحالية. كيف تشعر الآن؟ ما الذي يسبب هذا الشعور؟

اكتب عن تجاربك الماضية. فهم الماضي يساعدك على فهم الحاضر.

استخدم أسئلة موجهة. "ما الذي يجعلني قلقاً اليوم؟" "ما الذي أقدره في حياتي؟"

لا تقلق عن القواعد النحوية. الكتابة الحرة تساعد على إطلاق المشاعر المكبوتة.

راجع ما كتبته بعد أسبوع. ستجد أنماطاً وفهماً جديداً لنفسك.`,
      en: `Therapeutic writing is a powerful tool for understanding your emotions and thoughts. When you write, you give yourself a safe space to express without judgment.

Start with 10 minutes daily. Write whatever comes to mind without order or correction.

Focus on your current feelings. How do you feel now? What's causing this feeling?

Write about your past experiences. Understanding the past helps you understand the present.

Use guiding questions. "What makes me anxious today?" "What do I appreciate in my life?"

Don't worry about grammar. Free writing helps release suppressed emotions.

Review what you wrote after a week. You'll find new patterns and understanding of yourself.`
    },
    author: { ar: "د. منى السعيد", en: "Dr. Mona Al-Saeed" },
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHBvcnRyYWl0JTIwc21pbGluZyUyMGdyYWNlZnVsfGVufDB8fHx8MTc3Mjk3MzUwMXww&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: "5",
    title: { ar: "روتين صباحي لصحة نفسية افضل", en: "Morning Routine for Better Mental Health" },
    excerpt: { ar: "كيف تبدأ يومك بطريقة تدعم صحتك النفسية وتزيد من طاقتك وانتاجيتك.", en: "How to start your day in a way that supports your mental health and increases your energy and productivity." },
    category: { ar: "خطوات علاج", en: "Treatment Steps" },
    categoryColor: "rgba(196, 145, 94, 0.8)",
    readTime: 5,
    date: "20 فبراير 2026",
    image: "https://images.unsplash.com/photo-1734192365828-8d51fe629997?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JuaW5nJTIwcm91dGluZSUyMGhlYWx0aHklMjBoYWJpdHMlMjBzdW5yaXNlfGVufDF8fHx8MTc3Mjk3MzUwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    content: {
      ar: `الصباح يحدد نبرة يومك بالكامل. روتين صباحي جيد يمكن أن يغير حالتك النفسية بشكل ملحوظ.

استيقظ قبل موعدك بـ 30 دقيقة. هذا الوقت لنفسك يحدث فرقاً كبيراً.

تجنب الهاتف فوراً. بدلاً من ذلك، خذ نفساً عميقاً وافكر في شيء إيجابي.

اشرب كوباً من الماء. الترطيب يبدأ عملية الأيض ويزيد النشاط.

تمدد لمدة 5 دقائق. تمارين الإطالة تخفف التوتر وتحسن الدورة الدموية.

اكتب ثلاثة أشياء تشعر بالامتنان لها. الامتنان يغير تركيزك إلى الإيجابيات.

خطط ليومك. تحديد أهداف صغيرة يجعلك تشعر بالإنجاز.`,
      en: `The morning sets the tone for your entire day. A good morning routine can noticeably change your mental state.

Wake up 30 minutes before your alarm. This time for yourself makes a big difference.

Avoid your phone immediately. Instead, take a deep breath and think of something positive.

Drink a glass of water. Hydration starts metabolism and increases energy.

Stretch for 5 minutes. Stretching exercises relieve tension and improve circulation.

Write three things you're grateful for. Gratitude shifts your focus to positives.

Plan your day. Setting small goals makes you feel accomplished.`
    },
    author: { ar: "د. فهد الدوسري", en: "Dr. Fahad Al-Dossari" },
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfG1hbiUyMHNtaWxpbmclMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NzI5NzM1MDF8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: "6",
    title: { ar: "تقنيات التنفس للتخلص من التوتر", en: "Breathing Techniques to Relieve Stress" },
    excerpt: { ar: "تمارين تنفس بسيطة يمكنك ممارستها في اي مكان للتخفيف الفوري من التوتر والقلق.", en: "Simple breathing exercises you can practice anywhere for immediate relief from stress and anxiety." },
    category: { ar: "طرق وقاية", en: "Prevention Methods" },
    categoryColor: "rgba(74, 152, 130, 0.8)",
    readTime: 3,
    date: "15 فبراير 2026",
    image: "https://images.unsplash.com/photo-1758599879513-9124e9718f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMGJyZWF0aGluZyUyMGV4ZXJjaXNlfGVufDF8fHx8MTc3Mjk3MzUwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    content: {
      ar: `التنفس هو أسرع طريقة لتهدئة جهازك العصبي. يمكنك ممارسة هذه التقنيات في أي وقت ومكان.

التنفس 4-7-8: استنشق لمدة 4، احبس لمدة 7، زفير لمدة 8. كرر 4 مرات.

التنفس الصندوقي: استنشق 4، احبس 4، زفير 4، احبس 4. يساعد على التركيز.

التنفس البطني: ضع يدك على بطنك. شعر بحركته مع كل نفس.

التنفس بالأنف فقط: استنشق بالأنف، زفير بالأنف. يهدئ الجهاز العصبي.

التنفس مع العد: عد حتى 10 مع كل زفير. يصرف الانتباه عن التوتر.

مارس هذه التقنيات لمدة 5 دقائق يومياً للحصول على أفضل النتائج.`,
      en: `Breathing is the fastest way to calm your nervous system. You can practice these techniques anytime, anywhere.

4-7-8 breathing: Inhale for 4, hold for 7, exhale for 8. Repeat 4 times.

Box breathing: Inhale 4, hold 4, exhale 4, hold 4. Helps with focus.

Belly breathing: Place your hand on your stomach. Feel its movement with each breath.

Nose-only breathing: Inhale through nose, exhale through nose. Calms the nervous system.

Counting breath: Count to 10 with each exhale. Distracts attention from stress.

Practice these techniques for 5 minutes daily for best results.`
    },
    author: { ar: "د. نورة الشمري", en: "Dr. Nora Al-Shammari" },
    authorImage: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHJlYWRpbmclMjBib29rJTIwY2FsbXxlbnwwfHx8fDE3NzI5NzM1MDF8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: "7",
    title: { ar: "متى تحتاج لمساعدة مختص؟", en: "When Do You Need Professional Help?" },
    excerpt: { ar: "علامات تخبرك ان الوقت حان لاستشارة مختص نفسي وكيف تتخذ هذه الخطوة.", en: "Signs that tell you it's time to consult a mental health professional and how to take this step." },
    category: { ar: "الاسباب", en: "Causes" },
    categoryColor: "rgba(224, 112, 112, 0.8)",
    readTime: 5,
    date: "10 فبراير 2026",
    image: "https://images.unsplash.com/photo-1620148222862-b95cf7405a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXB5JTIwY291bnNlbGluZyUyMHBlYWNlZnVsJTIwY29udmVyc2F0aW9ufGVufDF8fHx8MTc3Mjk3MzUwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    content: {
      ar: `طلب المساعدة النفسية ليس علامة ضعف، بل شجاعة وقوة. معرفة متى تحتاج للمساعدة هي أول خطوة نحو الشفاء.

إذا استمرت مشاعرك الحزينة لأكثر من أسبوعين، فقد حان الوقت للتحدث مع مختص.

إذا أثرت مشاكلك على عملك أو علاقاتك بشكل كبير، فالمساعدة المهنية يمكن أن تساعد.

إذا كنت تستخدم مواد إدمانية للتعامل مع التوتر، فالدعم المتخصص ضروري.

إذا شعرت بأفكار إيذاء النفس، اطلب المساعدة فوراً.

البحث عن مختص سهل اليوم. يمكنك البحث عبر الإنترنت أو سؤال طبيبك.

لا تخف من تجربة عدة مختصين حتى تجد المناسب لك.`,
      en: `Seeking mental help is not a sign of weakness, but courage and strength. Knowing when you need help is the first step toward healing.

If your sad feelings persist for more than two weeks, it might be time to talk to a professional.

If your problems significantly affect your work or relationships, professional help can make a difference.

If you're using addictive substances to cope with stress, specialized support is essential.

If you have thoughts of self-harm, seek help immediately.

Finding a professional is easy today. You can search online or ask your doctor.

Don't be afraid to try several professionals until you find the right one for you.`
    },
    author: { ar: "د. عبدالله الحربي", en: "Dr. Abdullah Al-Harbi" },
    authorImage: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjB0aGlua2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fDE3NzI5NzM1MDF8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: "8",
    title: { ar: "العلاقة بين النوم والصحة النفسية", en: "The Relationship Between Sleep and Mental Health" },
    excerpt: { ar: "كيف يؤثر نومك على حالتك النفسية ونصائح عملية لتحسين جودة النوم.", en: "How your sleep affects your mental state and practical tips to improve sleep quality." },
    category: { ar: "طرق وقاية", en: "Prevention Methods" },
    categoryColor: "rgba(123, 142, 181, 0.8)",
    readTime: 4,
    date: "5 فبراير 2026",
    image: "https://images.unsplash.com/photo-1721073956820-644a71ba075e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlcCUyMHBlYWNlZnVsJTIwcmVzdCUyMGJlZHJvb20lMjBjYWxtfGVufDF8fHx8MTc3Mjk3MzUwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    content: {
      ar: `النوم والصحة النفسية مرتبطان بشكل وثيق. نقص النوم يؤثر على مزاجك وقدرتك على التعامل مع التوتر.

البالغون يحتاجون 7-9 ساعات نوم كل ليلة. النوم القليل يزيد من خطر الاكتئاب والقلق.

النوم الجيد يساعد الدماغ على معالجة المشاعر والذكريات. بدون نوم كافٍ، تصبح أكثر تهيجاً.

تجنب الشاشات قبل النوم بساعة على الأقل. الضوء الأزرق ي disrupt هرمون النوم.

حافظ على روتين نوم منتظم. اذهب للفراش واستيقظ في نفس الوقت حتى في عطلة نهاية الأسبوع.

مارس الرياضة بانتظام ولكن ليس قبل النوم مباشرة.

إذا كنت تعاني من الأرق، جرب تقنيات الاسترخاء قبل النوم.`,
      en: `Sleep and mental health are closely linked. Lack of sleep affects your mood and ability to handle stress.

Adults need 7-9 hours of sleep each night. Too little sleep increases the risk of depression and anxiety.

Good sleep helps the brain process emotions and memories. Without enough sleep, you become more irritable.

Avoid screens for at least an hour before bed. Blue light disrupts sleep hormones.

Maintain a regular sleep routine. Go to bed and wake up at the same time even on weekends.

Exercise regularly but not right before bed.

If you suffer from insomnia, try relaxation techniques before sleep.`
    },
    author: { ar: "د. سمية القحطاني", en: "Dr. Sumaya Al-Qahtani" },
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsJTIwc21pbGluZ3xlbnwwfHx8fDE3NzI5NzM1MDF8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: "9",
    title: { ar: "دور الدعم الاجتماعي في التعافي النفسي", en: "The Role of Social Support in Mental Recovery" },
    excerpt: { ar: "لماذا العلاقات الاجتماعية مهمة لصحتك النفسية وكيف تبني شبكة دعم صحية.", en: "Why social relationships are important for your mental health and how to build a healthy support network." },
    category: { ar: "خطوات علاج", en: "Treatment Steps" },
    categoryColor: "rgba(196, 145, 94, 0.8)",
    readTime: 5,
    date: "1 فبراير 2026",
    image: "https://images.unsplash.com/photo-1771924368620-cd14ac575d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBjb25uZWN0aW9uJTIwZnJpZW5kcyUyMHN1cHBvcnQlMjBncm91cHxlbnwxfHx8fDE3NzI5NzM1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    content: {
      ar: `الدعم الاجتماعي هو درع واقٍ قوي للصحة النفسية. العلاقات القوية تساعدك على مواجهة تحديات الحياة.

الأشخاص الذين لديهم علاقات اجتماعية قوية يميلون إلى أن يكونوا أكثر سعادة وصحة.

التحدث مع صديق موثوق يمكن أن يقلل من التوتر ويزيد الشعور بالانتماء.

لا تخف من طلب المساعدة. الناس غالباً ما يرغبون في المساعدة لكن لا يعرفون كيف.

انضم إلى مجموعات ذات اهتمامات مشتركة. هذا يوفر فرصة للتواصل مع أشخاص يفهمونك.

كن داعماً للآخرين أيضاً. مساعدة الآخرين تعطي شعوراً بالهدف والرضا.

العلاقات الصحية تتطلب وقتاً وجهداً، لكنها تستحق الاستثمار.`,
      en: `Social support is a strong protective shield for mental health. Strong relationships help you face life's challenges.

People with strong social relationships tend to be happier and healthier.

Talking with a trusted friend can reduce stress and increase sense of belonging.

Don't be afraid to ask for help. People often want to help but don't know how.

Join groups with shared interests. This provides opportunities to connect with people who understand you.

Be supportive of others too. Helping others gives a sense of purpose and satisfaction.

Healthy relationships require time and effort, but they're worth the investment.`
    },
    author: { ar: "د. محمد العمر", en: "Dr. Mohammed Al-Omar" },
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBzbWlsaW5nJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzcyOTczNTAxfDA&ixlib=rb-4.1.0&q=80&w=400"
  }
]

const categories = ["الكل", "طرق وقاية", "الاسباب", "خطوات علاج"]

export default function Blog() {
  const context = useAppContext()
  if (!context) return null
  const { lang, t } = context

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("الكل")

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "الكل" || article.category[lang as 'ar' | 'en'] === selectedCategory
    const matchesSearch = article.title[lang as 'ar' | 'en'].toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt[lang as 'ar' | 'en'].toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <Reveal>
    <section dir="rtl" className="min-h-screen bg-[#F4EDE4] pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[#4A9882] hover:text-[#3d8570] transition-colors"
            style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.85rem", fontWeight: 600 }}
          >
            <ArrowLeft size={16} />
            {t("العودة للرئيسية", "Back to Home")}
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#4A9882]/8 rounded-full mb-4">
            <BookOpen size={14} className="text-[#4A9882]" />
            <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.85rem", color: "#4A9882" }}>
              {t("مقالات ومعرفة", "Articles & Knowledge")}
            </span>
          </div>
          <h1 
            className="mb-3"
            style={{ 
              fontFamily: "\"Noto Kufi Arabic\", sans-serif", 
              fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", 
              fontWeight: 700, 
              lineHeight: 1.6, 
              color: "rgb(26, 26, 26)" 
            }}
          >
            {t("مقالات تساعدك على فهم نفسك اكثر", "Articles to help you understand yourself better")}
          </h1>
          <p 
            className="max-w-xl mx-auto"
            style={{ 
              fontFamily: "Cairo, sans-serif", 
              fontSize: "1rem", 
              lineHeight: 1.9, 
              color: "rgb(138, 138, 138)" 
            }}
          >
            {t("محتوى متخصص في الصحة النفسية، مكتوب بلغة بسيطة وقريبة منك.", "Specialized mental health content, written in simple and relatable language.")}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search 
              size={16} 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#bbb]" 
            />
            <input
              type="text"
              placeholder={t("ابحث عن مقال...", "Search for an article...")}
              className="w-full pr-10 pl-4 py-2.5 bg-white/90 backdrop-blur-sm rounded-xl border border-[#e8e0d4]/60 outline-none focus:border-[#4A9882]/40 transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ 
                fontFamily: "Cairo, sans-serif", 
                fontSize: "0.85rem", 
                color: "rgb(26, 26, 26)" 
              }}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-4 py-2 rounded-xl transition-all"
                style={{
                  backgroundColor: selectedCategory === category ? "#4A9882" : "bg-white/90",
                  color: selectedCategory === category ? "white" : "#888",
                  border: selectedCategory === category ? "none" : "1px solid rgb(232, 224, 212)/60",
                  fontFamily: "Cairo, sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 600
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* AI Suggestions */}
        <div className="mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-[#e8e0d4]/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-[3px] bg-gradient-to-l from-[#4A9882] via-[#4A9882]/40 to-transparent"></div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#4A9882]/10 flex items-center justify-center shrink-0">
                  <Sparkles size={18} className="text-[#4A9882]" />
                </div>
                <div>
                  <p style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "0.88rem", fontWeight: 600, color: "rgb(26, 26, 26)", marginBottom: "2px" }}>
                    {t("الذكاء الاصطناعي يختار لك", "AI chooses for you")}
                  </p>
                  <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.8rem", color: "rgb(153, 153, 153)" }}>
                    {t("حدد اهتماماتك وخليه يقترح لك المقالات الانسب", "Specify your interests and let it suggest the most suitable articles")}
                  </p>
                </div>
              </div>
              <button 
                className="px-5 py-2.5 bg-[#4A9882] text-white rounded-xl hover:bg-[#3d8570] transition-colors shrink-0 flex items-center gap-2"
                style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.85rem", fontWeight: 600 }}
              >
                {t("اقترح لي مقالات", "Suggest articles for me")}
                <ArrowLeft size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <p className="mb-5" style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.82rem", color: "rgb(170, 170, 170)" }}>
          {filteredArticles.length} {t("مقال", "article")}
        </p>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredArticles.map((article) => (
            <Link 
              key={article.id}
              href={`/blog/${article.id}`}
              className="block bg-white/90 backdrop-blur-sm rounded-2xl border border-[#e8e0d4]/60 overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-lg group"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title[lang as 'ar' | 'en']}
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div 
                  className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-white backdrop-blur-sm"
                  style={{ backgroundColor: article.categoryColor, fontFamily: "Cairo, sans-serif", fontSize: "0.7rem", fontWeight: 600 }}
                >
                  {article.category[lang as 'ar' | 'en']}
                </div>
              </div>
              <div className="p-5">
                <h3 
                  className="mb-2"
                  style={{ 
                    fontFamily: "\"Noto Kufi Arabic\", sans-serif", 
                    fontSize: "0.92rem", 
                    fontWeight: 600, 
                    color: "rgb(26, 26, 26)", 
                    lineHeight: 1.8 
                  }}
                >
                  {article.title[lang as 'ar' | 'en']}
                </h3>
                <p 
                  className="mb-4"
                  style={{ 
                    fontFamily: "Cairo, sans-serif", 
                    fontSize: "0.8rem", 
                    lineHeight: 1.8, 
                    color: "rgb(153, 153, 153)" 
                  }}
                >
                  {article.excerpt[lang as 'ar' | 'en']}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-[#f0ebe3]">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-[#aaa]">
                      <Clock size={11} />
                      <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.7rem" }}>
                        {article.readTime} {t("دقائق", "minutes")}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#aaa]">
                      <Calendar size={11} />
                      <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.7rem" }}>
                        {article.date}
                      </span>
                    </div>
                  </div>
                  <span 
                    className="flex items-center gap-1 text-[#4A9882] group-hover:gap-2 transition-all"
                    style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.75rem", fontWeight: 600 }}
                  >
                    {t("اقرأ", "Read")}
                    <ArrowLeft size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    </Reveal>
  )
}