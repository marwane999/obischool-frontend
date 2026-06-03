import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, MessageCircle, Target, Heart, Shield, Users } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import CTASection from '@/components/sections/CTASection';
import { getWhatsAppMorocco } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'من نحن',
  description: 'تعرف على OBISCHOOL - مدرستكم الرائدة في تعليم اللغة الألمانية والتكوين المهني في سطات، المغرب. أكثر من 14 عاماً من الخبرة.',
};

const values = [
  { icon: <Target className="h-8 w-8" />, title: 'الاحترافية', text: 'نعتمد أحدث المناهج التعليمية وأساليب التدريس المعتمدة دولياً.' },
  { icon: <Heart className="h-8 w-8" />, title: 'المتابعة الفردية', text: 'نؤمن بأن كل طالب فريد،所以我们 نقدم متابعة شخصية لكل متدرب.' },
  { icon: <Shield className="h-8 w-8" />, title: 'المصداقية', text: 'نلتزم بالشفافية والمصداقية في كل تعاملاتنا مع الطلاب.' },
  { icon: <Users className="h-8 w-8" />, title: 'المجتمع', text: 'نبني مجتمعاً من المتعلمين الطموحين الذين يدعمون بعضهم البعض.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="gradient-primary relative min-h-[50vh] flex items-center pt-20">
        <div className="container-main relative z-10 text-center">
          <Badge variant="gold" className="mb-4">منذ 2012</Badge>
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">من نحن</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">تعرف على قصتنا ورؤيتنا ورسالتنا في OBISCHOOL</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-[#D4A843]/10 blur-2xl" />
              <Image
                src="https://obischool.com/wp-content/uploads/2025/12/Logo-19.-Dez.-2025-300x300.png"
                alt="OBISCHOOL Logo"
                width={400}
                height={400}
                className="relative mx-auto rounded-2xl object-cover shadow-2xl"
              />
            </div>
            <div>
              <Badge variant="gold" className="mb-3">قصتنا</Badge>
              <h2 className="mb-6 text-3xl font-bold text-[#1B3A5C] md:text-4xl">OBISCHOOL: حلم بدأ في سطات</h2>
              <div className="space-y-4 text-base leading-relaxed text-[#6B7280]">
                <p>
                  تأسست OBISCHOOL سنة 2012 في مدينة سطات، المغرب، بهدف تقديم تعليم عالي الجودة 
                  في اللغة الألمانية والتكوين المهني. منذ البداية، كان شعارنا "مشروعك نحو ألمانيا… يبدأ بقرار صحيح".
                </p>
                <p>
                  على مدى أكثر من 14 عاماً، ساعدنا مئات الطلاب على تحقيق حلمهم في تعلم اللغة الألمانية 
                  والدراسة أو العمل في ألمانيا. ما يميزنا هو نهجنا الشخصي في التدريس، حيث نضمن 
                  متابعة فردية لكل متدرب.
                </p>
                <p>
                  لدينا فريق من المدرسين المتخصصين والمعتمدين، مع خبرة واسعة في تدريس اللغة الألمانية 
                  للناطقين بالعربية. نقدم دروساً حضورية في مركزنا الحديث المجهز بأفضل الوسائل التعليمية، 
                  بالإضافة إلى دروس عن بُعد للطلاب من جميع المدن المغربية.
                </p>
                <p className="font-semibold text-[#1B3A5C]">
                  مدرسونا: نخبة من المدرسين المتخصصين في تدريس اللغة الألمانية، حاصلون على شهادات 
                  معتمدة ولديهم خبرة سنوات في المجال.
                </p>
              </div>
              <a
                href={getWhatsAppMorocco('مرحباً! أود معرفة المزيد عن OBISCHOOL.')}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn mt-6 inline-flex"
              >
                <MessageCircle className="h-5 w-5" />
                <span>تحدث معنا</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-bg-light">
        <div className="container-main">
          <SectionHeading title="قيمنا" subtitle="المبادئ التي توجه عملنا في OBISCHOOL" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4A843]/10 text-[#D4A843]">{value.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-[#1B3A5C]">{value.title}</h3>
                <p className="text-sm text-[#6B7280]">{value.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
