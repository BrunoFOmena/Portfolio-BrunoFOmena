import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const thoughts: Record<string, {
  category: string;
  title: string;
  date: string;
  authors: string[];
  content: string;
  keywords: string[];
  references: string[];
}> = {
  'alzheimer-cnn-neuroimaging': {
    category: 'Conference',
    title: 'Integration of Convolutional Neural Networks and Neuroimaging in Early Diagnosis of Alzheimer\'s Disease',
    date: '2024',
    authors: [
      'Bruno Feliciano de Omena, UFPE (bruno.omena@ufpe.br)',
      'Joelson Germano Crispim, UFPE (joelson.crispim@ufpe.br)',
      'Michelle Melgarejo da Rosa, UFPE (michelle.rosa@ufpe.br)'
    ],
    keywords: ['CNN', 'neuroimaging', 'alzheimer', 'diagnosis'],
    content: `Alzheimer's disease (AD) is a progressive neurodegenerative condition, characterized primarily by memory loss and cognitive deterioration, being more prevalent in elderly individuals [1]. Early diagnosis of AD is crucial for therapeutic intervention before irreversible damage occurs. Advances in the use of convolutional neural networks (CNNs) have shown significant progress in neuroimaging analysis for AD diagnosis [2]. CNNs are machine learning architectures that analyze images and extract relevant features in a short time, enabling accurate classification of medical conditions [3]. In the context of AD, these networks are applied to magnetic resonance imaging (MRI) and positron emission tomography (PET) data, providing a non-invasive and accurate approach for disease detection [4]. This work aims to outline the main applications of CNNs in AD diagnosis.

Article selection followed PRISMA guidelines [5]. The article search was conducted in electronic databases: PubMed, Google Scholar, and ScienceDirect, using the descriptors "CNN", "Alzheimer", and "MRI". Only original articles or systematic reviews published between 2017 and 2024 were selected. Other types of publications were excluded, and articles that did not address early AD diagnosis through neuroimaging performed by CNNs were disregarded. Twenty articles were identified, however, only eight met the inclusion criteria.

The use of CNNs in AD diagnosis has shown significant advances in early disease detection, especially when applied to neuroimaging data. According to the selected articles, the use of CNNs in brain images can enable the prediction of progression and early detection of AD [6]. Furthermore, the efficacy of MRI and PET image analysis by CNNs has been demonstrated [7]. More modern approaches have enhanced the ability of CNNs to identify subtle patterns linked to AD. Thus, it is observed that these methodologies not only improve diagnostic accuracy but also the potential to detect AD in early stages, which is crucial for early therapeutic interventions [8]. New perspectives for developing more effective and precise diagnostic methods are being developed from the use of CNNs, combined with advanced preprocessing techniques, and image segmentation has shown promise [9]. In this way, CNNs become a tool for AD detection and monitoring, with the potential to transform clinical investigation and improve the prognosis of patients diagnosed with Alzheimer's Disease.`,
    references: [
      'LIN, Weiming, et al. "Convolutional neural networks-based MRI image analysis for the Alzheimer\'s disease prediction from mild cognitive impairment." Frontiers in Neuroscience, vol. 12, 2018, art. 777.',
      'CHOI, Boo-Kyeong, et al. "Convolutional neural network-based MR image analysis for Alzheimer\'s disease classification." Current Medical Imaging, vol. 16, no. 1, 2020, pp. 27-35.',
      'EBRAHIMI, Amir, Suhuai Luo, and for the Alzheimer\'S Disease Neuroimaging Initiative. "Convolutional neural networks for Alzheimer\'s disease detection on MRI images." Journal of Medical Imaging, vol. 8, no. 2, 2021, pp. 024503-024503.',
      'LOGAN, Robert, et al. "Deep convolutional neural networks with ensemble learning and generative adversarial networks for Alzheimer\'s disease image data classification." Frontiers in Aging Neuroscience, vol. 13, 2021, art. 720226.',
      'PAGE, Matthew J., et al. "A declaração PRISMA 2020: diretriz atualizada para relatar revisões sistemáticas." Revista Panamericana de Salud Pública, vol. 46, 2023, art. e112.',
      'JAIN, Rachna, et al. "Convolutional neural network based Alzheimer\'s disease classification from magnetic resonance brain images." Cognitive Systems Research, vol. 57, 2019, pp. 147-159.',
      'JANGHEL, R. R., and Y. K. Rathore. "Deep convolution neural network based system for early diagnosis of Alzheimer\'s disease." IRBM, vol. 42, no. 4, 2021, pp. 258-267.',
      'GUNAWARDENA, K. A. N. N. P., R. N. Rajapakse, and Nihal D. Kodikara. "Applying convolutional neural networks for pre-detection of Alzheimer\'s disease from structural MRI data." In 2017 24th International Conference on Mechatronics and Machine Vision in Practice (M2VIP), IEEE, 2017.',
      'SATHIYAMOORTHI, V., et al. "A deep convolutional neural network based computer aided diagnosis system for the prediction of Alzheimer\'s disease in MRI images." Measurement, vol. 171, 2021, art. 108838.'
    ]
  }
};

const ThoughtDetail = () => {
  const { id } = useParams<{ id: string }>();
  const thought = id ? thoughts[id] : null;

  if (!thought) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="section-container py-24">
          <h1 className="text-3xl font-bold mb-4">Thought not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to home
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <article className="section-container py-16">
        <Link 
          to="/" 
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          ← Back to home
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
              {thought.category}
            </span>
            <span className="text-sm text-muted-foreground">{thought.date}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            {thought.title}
          </h1>

          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">Authors</h2>
            <ul className="space-y-2">
              {thought.authors.map((author, index) => (
                <li key={index} className="text-muted-foreground">
                  {author}
                </li>
              ))}
            </ul>
          </div>

          <div className="prose prose-lg max-w-none mb-8">
            <div className="text-foreground leading-relaxed whitespace-pre-line">
              {thought.content}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">Keywords</h2>
            <div className="flex flex-wrap gap-2">
              {thought.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-md"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">References</h2>
            <ol className="space-y-3 list-decimal list-inside">
              {thought.references.map((ref, index) => (
                <li key={index} className="text-sm text-muted-foreground leading-relaxed">
                  {ref}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
};

export default ThoughtDetail;

